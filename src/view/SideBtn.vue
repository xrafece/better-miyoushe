<template>
    <div v-if="sideButton.isShow" :style="{ right: btnPos.right + 'px', bottom: btnPos.bottom + 'px' }"
        class="group fixed flex flex-col justify-end will-change-[right,bottom] hover:text-opacity-100" :class="{
            'z-[100]': true,
            'z-[1000]': false,
        }">
        <div v-if="true"
            class="mt-1 hidden h-10 w-10 cursor-pointer items-center justify-center rounded-lg  transition-colors hover:border-none hover:bg-[#00AEEC] hover:text-white group-hover:flex"
            @click="hideButton()">
            <div>
                <svg t="1747971885242" class="w-full h-full" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="3168" width="200" height="200">
                    <path
                        d="M938.666667 512c0 235.648-191.018667 426.666667-426.666667 426.666667S85.333333 747.648 85.333333 512 276.352 85.333333 512 85.333333s426.666667 191.018667 426.666667 426.666667z"
                        fill="#313131" p-id="3169"></path>
                    <path
                        d="M635.562667 680.490667a31.786667 31.786667 0 1 0 44.928-44.928L556.928 512l123.562667-123.562667a31.744 31.744 0 1 0-44.928-44.928L512 467.072 388.437333 343.509333a31.786667 31.786667 0 1 0-44.928 44.928L467.072 512l-123.562667 123.562667a31.786667 31.786667 0 0 0 44.928 44.928L512 556.928l123.562667 123.562667z"
                        fill="#38A2E7" p-id="3170"></path>
                </svg>
            </div>
        </div>
        <div v-if="true"
            class="mt-1 hidden h-10 w-10 cursor-pointer items-center justify-center rounded-lg  transition-colors hover:border-none hover:bg-[#00AEEC] hover:text-white group-hover:flex"
            @click="refresh()">
            <div>
                <svg t="1747969725611" class="w-full h-full" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="44774" width="200" height="200">
                    <path
                        d="M938.666667 512c0-235.648-191.018667-426.666667-426.666667-426.666667S85.333333 276.352 85.333333 512s191.018667 426.666667 426.666667 426.666667 426.666667-191.018667 426.666667-426.666667z"
                        fill="#313131" p-id="44775"></path>
                    <path
                        d="M318.890667 391.253333a10.666667 10.666667 0 0 1 7.808-17.92h102.741333a7.125333 7.125333 0 0 0 7.082667-7.082666V257.621333a10.666667 10.666667 0 0 1 10.666666-10.666666h136.704a10.666667 10.666667 0 0 1 10.666667 10.666666v108.629334c0 3.925333 3.157333 7.125333 7.125333 7.125333h95.872a10.666667 10.666667 0 0 1 7.936 17.792L523.946667 593.92a10.368 10.368 0 0 1-16.512 0l-188.586667-202.666667z"
                        fill="#EBC452" p-id="44776"></path>
                    <path
                        d="M484.224 632.576a42.666667 42.666667 0 0 0 62.976-0.554667l90.112-100.266666h59.989333a10.666667 10.666667 0 0 1 7.936 17.792l-176.938666 196.864a17.749333 17.749333 0 0 1-26.24 0.256l-183.381334-196.992a10.666667 10.666667 0 0 1 7.808-17.92h63.872l93.866667 100.821333z"
                        fill="#EBC452" p-id="44777"></path>
                </svg>
            </div>
        </div>
        <div ref="target"
            class="mt-1 flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg transition-colors hover:border-none hover:bg-[#00AEEC] hover:text-white"
            @click="!isDragging && clickBtn()">
            <div>
                <svg t="1747969706988" class="w-full h-full" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="44611" width="200" height="200">
                    <path
                        d="M938.666667 512c0 235.648-191.018667 426.666667-426.666667 426.666667S85.333333 747.648 85.333333 512 276.352 85.333333 512 85.333333s426.666667 191.018667 426.666667 426.666667z"
                        fill="#313131" p-id="44612"></path>
                    <path
                        d="M512 672a160 160 0 1 1 0-320 160 160 0 0 1 0 320zM512 725.333333a213.333333 213.333333 0 1 0 0-426.666666 213.333333 213.333333 0 0 0 0 426.666666z"
                        fill="#EBC452" p-id="44613"></path>
                </svg>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { characterPanelStore, STORGE_SIDE_BUTTON_POSITION } from '@/store/view'
import { fetchUserCharactorList, getUserGameRolesByToken } from '@/util/request'

import { Position, useDraggable, useElementBounding, useStorage, useWindowSize } from '@vueuse/core'
import { computed, ref } from 'vue'
const clickBtn = () => {
    const pageContent = `
    <h1>hello world</h1>
    <div id="app"></div>
`
    const blob = new Blob([pageContent], { type: 'text/html;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    window.open(url, '_blank')
}

const refresh = async () => {
    let yes = confirm('是否刷新角色列表？ 提示：请勿高频点击，否则可能触发米哈游接口限流')
    if (!yes) {
        return
    }
    const user = await getUserGameRolesByToken()
    await fetchUserCharactorList(user.game_uid, user.region)
}

const hideButton = () => {
    let yes = confirm('是否隐藏侧边按钮？')
    if (!yes) {
        return
    }
    sideButton.hide()
}

const sideButton = characterPanelStore()

const target = ref<HTMLElement | null>(null)
const { width, height } = useElementBounding(target, { windowScroll: false })

const btnPos = useStorage(STORGE_SIDE_BUTTON_POSITION, { right: 10, bottom: 180 }, localStorage)

const isDragging = ref(false)

const windowSize = useWindowSize({ includeScrollbar: false })

const maxPos = computed(() => {
    return {
        x: windowSize.width.value - width.value,
        y: windowSize.height.value - height.value,
    }
})

let rAF = 0
useDraggable(target, {
    initialValue: {
        x: windowSize.width.value - btnPos.value.right,
        y: windowSize.height.value - btnPos.value.bottom,
    },
    preventDefault: true,
    handle: computed(() => target.value),
    onMove: (pos: Position) => {
        isDragging.value = true
        btnPos.value.right = maxPos.value.x - pos.x
        btnPos.value.bottom = maxPos.value.y - pos.y

        // 限制拖拽范围
        cancelAnimationFrame(rAF)
        rAF = requestAnimationFrame(() => {
            if (btnPos.value.right < 0) {
                btnPos.value.right = 0
            }
            if (btnPos.value.bottom < 0) {
                btnPos.value.bottom = 0
            }
            if (btnPos.value.bottom > maxPos.value.y) {
                btnPos.value.bottom = maxPos.value.y
            }
            if (btnPos.value.right > maxPos.value.x) {
                btnPos.value.right = maxPos.value.x
            }
        })
    },
    onEnd: () => {
        setTimeout(() => {
            isDragging.value = false
        }, 50)
    },
})
</script>
