import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import { GM_registerMenuCommand } from '$'
import { characterPanelStore, STORGE_CHARACTER_LIST } from './store/view'
import { isMiyoushe, isYsCalculator } from './util/pageType'

const matchUrl = 'https://api-takumi.mihoyo.com/event/e20200928calculate/v1/sync/avatar/list'

const menu = () => {
    const showListPanle = characterPanelStore()
    GM_registerMenuCommand('打开角色列表', () => {
        console.log('open')
        showListPanle.isShow ? showListPanle.hide() : showListPanle.show()
    })
}

const overrideXHR = () => {
    const originalXHROpen = XMLHttpRequest.prototype.open
    XMLHttpRequest.prototype.open = function (method, url, async, user, pass) {
        this.addEventListener(
            'readystatechange',
            function () {
                if (this.readyState === 4 && this.status === 200 && url.includes(matchUrl)) {
                    try {
                        // 把拦截到的数据存入localstroge
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

const main = () => {
    if (isYsCalculator()) {
        console.log('ys calculator')

        overrideXHR()
    }

    const app = createApp(App)

    const pinia = createPinia()
    app.use(pinia)

    app.mount(
        (() => {
            const app = document.createElement('div')
            app.id = 'make-miyoushe-great-again'
            document.body.append(app)
            return app
        })(),
    )
}

main()
menu()
