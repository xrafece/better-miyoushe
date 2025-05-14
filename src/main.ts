import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import { GM_registerMenuCommand } from '$'

import { characterPanelStore, STORGE_CHARACTER_LIST } from './store/view'
import { isYsCalculator, isYsMap } from './util/pageType'
import { fetchUserCharactorList, getUserGameRolesByToken, overrideXHR } from './util/request'

const menu = () => {
    const showListPanle = characterPanelStore()
    if (isYsMap()) {
        showListPanle.isShow = false
        return
    }

    if (showListPanle.isShow) {
        GM_registerMenuCommand('关闭角色列表', () => {
            showListPanle.isShow ? showListPanle.hide() : showListPanle.show()
        })
    }
    if (!showListPanle.isShow) {
        GM_registerMenuCommand('角色列表', () => {
            showListPanle.isShow ? showListPanle.hide() : showListPanle.show()
        })
    }
    if (isYsCalculator()) {
        showListPanle.isShow = true
        GM_registerMenuCommand('刷新角色列表', async () => {
            const user = await getUserGameRolesByToken()
            await fetchUserCharactorList(user.game_uid, user.region)
        })
    }
}

const main = async () => {
    const app = createApp(App)

    const pinia = createPinia()
    app.use(pinia)

    app.mount(
        (() => {
            setTimeout(async () => {
                let listStr = localStorage.getItem(STORGE_CHARACTER_LIST)
                if (listStr != null || listStr != '[]') {
                    // limit the requset to the first load script to prevent mhy official block
                    console.log('<<<<<<------------------better-miyoushe skip request')
                    return
                }
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

// 米游社计算器页面 通过覆写xhr实现自动刷新 localStorage 角色列表数据缓存
overrideXHR()
