import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import { GM_registerMenuCommand } from '$'
import { characterPanelStore, STORGE_CHARACTER_LIST } from './store/view'
import { isYsCalculator } from './util/pageType'
import { getCookie } from './util/cookie'

const charactorListUrl = 'https://api-takumi.mihoyo.com/event/e20200928calculate/v1/sync/avatar/list'
const gameRoleUrl = 'https://passport-api.mihoyo.com/binding/api/getUserGameRolesByLtoken?game_biz=hk4e_cn'

const getUserGameRolesByToken = async () => {
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
const fetchUserCharactorList = async (game_uid: string, region: string) => {
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
}

const menu = () => {
    const showListPanle = characterPanelStore()
    GM_registerMenuCommand('打开角色列表', () => {
        console.log('open')
        showListPanle.isShow ? showListPanle.hide() : showListPanle.show()
    })
}

const main = async () => {
    if (isYsCalculator()) {
        console.log('ys calculator')
        // overrideXHR()
    }

    const app = createApp(App)

    const pinia = createPinia()
    app.use(pinia)

    app.mount(
        (() => {
            setTimeout(async () => {
                const user = await getUserGameRolesByToken()
                await fetchUserCharactorList(user.game_uid, user.region)
            }, 0)
            const app = document.createElement('div')
            app.id = 'make-miyoushe-great-again'
            document.body.append(app)
            return app
        })(),
    )
}

main()
menu()
