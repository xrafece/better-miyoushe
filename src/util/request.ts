import { STORGE_CHARACTER_LIST } from '../store/view'

const charactorListUrl = 'https://api-takumi.mihoyo.com/event/e20200928calculate/v1/sync/avatar/list'
const gameRoleUrl = 'https://passport-api.mihoyo.com/binding/api/getUserGameRolesByLtoken?game_biz=hk4e_cn'
const matchUrl = 'https://api-takumi.mihoyo.com/event/e20200928calculate/v1/sync/avatar/list'
const universalNavigatorsPath = '/misc/wapi/getUniversalNavigators'

// Add IDs/names here when you want to hide entries from the "game-tool" module.
const hiddenGameToolNavigatorIds = new Set<string>([
    '3703074403', // 签到福利
    '2073142727', // 支付中心
])
const hiddenGameToolNavigatorNames = new Set<string>([
    // '支付中心',
])

let isXHROverridden = false
let isFetchOverridden = false

export function getCookie(name: string) {
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${name}=`)
    if (parts && parts.length === 2) {
        const part = parts.pop()
        return part ? part.split(';').shift() : null
    }
    return null
}

export const getUserGameRolesByToken = async () => {
    const resp = await fetch(gameRoleUrl, {
        headers: {
            accept: 'application/json, text/plain, */*',
        },
        referrerPolicy: 'strict-origin-when-cross-origin',
        body: null,
        method: 'GET',
        mode: 'cors',
        credentials: 'include',
    })
    if (resp.status !== 200) {
        throw 'resp status is not 2000'
    }
    const respBody = await resp.json()
    if (respBody.retcode !== 0) {
        throw 'resp body retcode is not 0'
    }
    return respBody.data.list[0]
}
export const fetchUserCharactorList = async (game_uid: string, region: string) => {
    const body = {
        uid: game_uid,
        region: region,
        element_attr_ids: [],
        weapon_cat_ids: [],
        page: 1,
        size: 512,
        lang: 'zh-cn',
    }

    const deviceFp = getCookie('DEVICEFP') || ''
    const deviceId = getCookie('_MHYUUID') || ''

    const resp = await fetch(charactorListUrl, {
        headers: {
            'content-type': 'application/json;charset=UTF-8',
            'x-rpc-device_fp': deviceFp,
            'x-rpc-device_id': deviceId,
            'x-rpc-page': '__#',
            'x-rpc-platform': '4',
        },
        body: JSON.stringify(body),
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
    })

    if (resp.status !== 200) {
        throw 'resp status is not 2000'
    }
    const respBody = await resp.json()
    if (respBody.retcode !== 0) {
        throw 'resp body retcode is not 0'
    }
    const charList = respBody.data.list
    localStorage.setItem(STORGE_CHARACTER_LIST, JSON.stringify(charList))
    return charList
}

const shouldHideGameToolNavigator = (navigator: any) => {
    const id = `${navigator?.id || ''}`
    const name = `${navigator?.name || ''}`
    return hiddenGameToolNavigatorIds.has(id) || hiddenGameToolNavigatorNames.has(name)
}

const filterUniversalNavigatorsPayload = (payload: any): { payload: any; changed: boolean } => {
    if (!payload?.data?.list || !Array.isArray(payload.data.list)) {
        return { payload, changed: false }
    }

    let changed = false
    const nextList = payload.data.list.map((section: any) => {
        if (section?.type !== 'WEB_GTOOL_PC' || !Array.isArray(section.navigators)) {
            return section
        }
        const filteredNavigators = section.navigators.filter((navigator: any) => !shouldHideGameToolNavigator(navigator))
        if (filteredNavigators.length === section.navigators.length) {
            return section
        }
        changed = true
        return {
            ...section,
            navigators: filteredNavigators,
        }
    })

    if (!changed) {
        return { payload, changed: false }
    }

    return {
        payload: {
            ...payload,
            data: {
                ...payload.data,
                list: nextList,
            },
        },
        changed: true,
    }
}

const applyNavigatorFilterToXhrResponse = (xhr: XMLHttpRequest, responseText: string) => {
    const parsed = JSON.parse(responseText)
    const { payload, changed } = filterUniversalNavigatorsPayload(parsed)
    if (!changed) {
        return
    }
    const nextResponseText = JSON.stringify(payload)

    Object.defineProperty(xhr, 'responseText', {
        configurable: true,
        value: nextResponseText,
    })

    if (xhr.responseType === '' || xhr.responseType === 'text') {
        Object.defineProperty(xhr, 'response', {
            configurable: true,
            value: nextResponseText,
        })
        return
    }

    if (xhr.responseType === 'json') {
        Object.defineProperty(xhr, 'response', {
            configurable: true,
            value: payload,
        })
        return
    }

    Object.defineProperty(xhr, 'response', {
        configurable: true,
        value: nextResponseText,
    })
}

const getFetchUrl = (input: RequestInfo | URL) => {
    if (typeof input === 'string') {
        return input
    }
    if (input instanceof URL) {
        return input.toString()
    }
    return input.url
}

const overrideFetch = () => {
    if (isFetchOverridden) {
        return
    }
    isFetchOverridden = true

    const originalFetch = window.fetch.bind(window)
    window.fetch = async (...args: Parameters<typeof fetch>) => {
        const response = await originalFetch(...args)
        const requestUrl = getFetchUrl(args[0])

        if (!requestUrl.includes(universalNavigatorsPath) || response.status !== 200) {
            return response
        }

        try {
            const parsed = await response.clone().json()
            const { payload, changed } = filterUniversalNavigatorsPayload(parsed)
            if (!changed) {
                return response
            }

            const headers = new Headers(response.headers)
            headers.delete('content-length')

            return new Response(JSON.stringify(payload), {
                status: response.status,
                statusText: response.statusText,
                headers,
            })
        } catch (e) {
            console.error('Error filtering getUniversalNavigators fetch response:', e)
            return response
        }
    }
}

export const overrideXHR = () => {
    overrideFetch()
    if (isXHROverridden) {
        return
    }
    isXHROverridden = true

    const originalXHROpen = XMLHttpRequest.prototype.open
    XMLHttpRequest.prototype.open = function (
        method: string,
        url: string | URL,
        async: boolean = true,
        user?: string | null,
        pass?: string | null,
    ) {
        const urlStr = url.toString()
        this.addEventListener(
            'readystatechange',
            function () {
                if (this.readyState === 4 && this.status === 200 && urlStr.includes(matchUrl)) {
                    try {
                        let requestRowData = JSON.parse(this.responseText)
                        let charList = requestRowData.data.list
                        localStorage.setItem(STORGE_CHARACTER_LIST, JSON.stringify(charList))
                    } catch (e) {
                        console.error('Error parsing JSON:', e)
                    }
                }
                if (this.readyState === 4 && this.status === 200 && urlStr.includes(universalNavigatorsPath)) {
                    try {
                        applyNavigatorFilterToXhrResponse(this, this.responseText)
                    } catch (e) {
                        console.error('Error filtering getUniversalNavigators XHR response:', e)
                    }
                }
            },
            false,
        )
        originalXHROpen.call(this, method, url, async, user, pass)
    }
}
