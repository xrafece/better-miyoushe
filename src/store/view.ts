import { useStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const STORGE_CHARACTER_LIST = 'better-miyoushe-character-list'
export const STORGE_SIDE_BUTTON_POSITION = 'better-miyoushe-side-btn-pos'
export const STORGE_SIDE_BUTTON_SHOW = 'better-miyoushe-side-btn-show'

export const characterPanelStore = defineStore('charPanel', () => {
    const isShow = useStorage(STORGE_SIDE_BUTTON_SHOW, false, localStorage)
    const show = () => {
        isShow.value = true
    }
    const hide = () => {
        isShow.value = false
    }

    return { isShow, show, hide }
})

export const characterDomStore = defineStore('charDom', () => {
    const isShow = ref(false)
    const show = () => {
        isShow.value = true
    }
    const hide = () => {
        isShow.value = false
    }

    const toggle = () => {
        isShow.value = !isShow.value
    }

    return { isShow, show, hide, toggle }
})

export const characterListStore = defineStore('charDataList', () => {
    const charList = useStorage(STORGE_CHARACTER_LIST, [], localStorage)

    const getCharacterList = () => {
        if (charList.value.length === 0) {
            // alert('请先进入角色自定义计算器页面')
            return []
        }
        return charList.value
    }

    const setCharacterList = (data: any) => {
        charList.value = data
    }

    return { charList, getCharacterList, setCharacterList }
})
