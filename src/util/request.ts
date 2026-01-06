import { STORGE_CHARACTER_LIST } from '../store/view'

const charactorListUrl = 'https://api-takumi.mihoyo.com/event/e20200928calculate/v1/sync/avatar/list'
const gameRoleUrl = 'https://passport-api.mihoyo.com/binding/api/getUserGameRolesByLtoken?game_biz=hk4e_cn'
const matchUrl = 'https://api-takumi.mihoyo.com/event/e20200928calculate/v1/sync/avatar/list'

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

export const overrideXHR = () => {
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
            },
            false,
        )
        originalXHROpen.call(this, method, url, async, user, pass)
    }
}
