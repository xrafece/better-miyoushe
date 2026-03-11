<template>
    <Teleport to="body">
        <div
            v-if="sideButton.isShow"
            class="fixed"
            :style="overlayStyle"
            @mouseenter="showActions"
            @mouseleave="scheduleHideActions"
        >
            <button
                v-show="isExpanded"
                type="button"
                class="absolute right-0 flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-lg border-none bg-transparent p-0 transition-colors hover:bg-[#00AEEC] hover:text-white"
                :style="{ bottom: `${topActionBottom}px` }"
                @click="hideButton()"
            >
                <svg t="1747971885242" class="h-full w-full" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="3168" width="200" height="200">
                    <path
                        d="M938.666667 512c0 235.648-191.018667 426.666667-426.666667 426.666667S85.333333 747.648 85.333333 512 276.352 85.333333 512 85.333333s426.666667 191.018667 426.666667 426.666667z"
                        fill="#313131" p-id="3169"></path>
                    <path
                        d="M635.562667 680.490667a31.786667 31.786667 0 1 0 44.928-44.928L556.928 512l123.562667-123.562667a31.744 31.744 0 1 0-44.928-44.928L512 467.072 388.437333 343.509333a31.786667 31.786667 0 1 0-44.928 44.928L467.072 512l-123.562667 123.562667a31.786667 31.786667 0 0 0 44.928 44.928L512 556.928l123.562667 123.562667z"
                        fill="#38A2E7" p-id="3170"></path>
                </svg>
            </button>

            <button
                v-show="isExpanded"
                type="button"
                class="absolute right-0 flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-lg border-none bg-transparent p-0 transition-colors hover:bg-[#00AEEC] hover:text-white"
                :style="{ bottom: `${middleActionBottom}px` }"
                @click="refresh()"
            >
                <svg t="1747969725611" class="h-full w-full" viewBox="0 0 1024 1024" version="1.1"
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
            </button>

            <div ref="primaryButton" class="absolute bottom-0 right-0 h-[40px] w-[40px]">
                <button
                    type="button"
                    class="flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-lg border-none bg-transparent p-0 transition-colors hover:bg-[#00AEEC] hover:text-white"
                    @click="handlePrimaryClick"
                >
                    <svg t="1747969706988" class="h-full w-full" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="44611" width="200" height="200">
                        <path
                            d="M938.666667 512c0 235.648-191.018667 426.666667-426.666667 426.666667S85.333333 747.648 85.333333 512 276.352 85.333333 512 85.333333s426.666667 191.018667 426.666667 426.666667z"
                            fill="#313131" p-id="44612"></path>
                        <path
                            d="M512 672a160 160 0 1 1 0-320 160 160 0 0 1 0 320zM512 725.333333a213.333333 213.333333 0 1 0 0-426.666666 213.333333 213.333333 0 0 0 0 426.666666z"
                            fill="#EBC452" p-id="44613"></path>
                    </svg>
                </button>
            </div>

            <button
                ref="dragGrip"
                type="button"
                :title="dragGripTitle"
                :aria-label="dragGripTitle"
                class="group/drag absolute cursor-grab border-none bg-transparent p-0 active:cursor-grabbing"
                :style="dragGripStyle"
                @mouseenter="showActions"
                @mouseleave="scheduleHideActions"
                @pointerdown.stop.prevent="startDrag"
                @click.stop
            >
                <span
                    class="pointer-events-none absolute right-0 top-1/2 flex h-[18px] w-[12px] -translate-y-1/2 items-center justify-center rounded-l-md bg-[#00AEEC] text-white opacity-0 transition-opacity group-hover/drag:opacity-100"
                    aria-hidden="true"
                >
                    <svg viewBox="0 0 12 12" class="h-[9px] w-[9px]">
                        <circle cx="3" cy="3" r="1" fill="currentColor" />
                        <circle cx="9" cy="3" r="1" fill="currentColor" />
                        <circle cx="3" cy="9" r="1" fill="currentColor" />
                        <circle cx="9" cy="9" r="1" fill="currentColor" />
                    </svg>
                </span>
            </button>
        </div>
    </Teleport>
</template>
<script setup lang="ts">
import { characterPanelStore, STORGE_SIDE_BUTTON_POSITION } from '@/store/view'
import { fetchUserCharactorList, getUserGameRolesByToken } from '@/util/request'
import { GM_xmlhttpRequest } from '$'

import { useStorage, useWindowSize } from '@vueuse/core'
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import blobHtmlContent, { isDev } from 'virtual:blob-html'

const BUTTON_SIZE = 40
const BUTTON_GAP = 4
const MIDDLE_ACTION_BOTTOM = BUTTON_SIZE + BUTTON_GAP
const TOP_ACTION_BOTTOM = BUTTON_SIZE * 2 + BUTTON_GAP * 2
const DRAG_GRIP_OFFSET = BUTTON_SIZE + BUTTON_GAP
const EXPANDED_HEIGHT = BUTTON_SIZE * 3 + BUTTON_GAP * 2
const DRAG_THRESHOLD = 4
const HIDE_DELAY_MS = 120
const MAX_Z_INDEX = 2147483647

const REFRESH_CONFIRM_TEXT = '\u662f\u5426\u5237\u65b0\u89d2\u8272\u5217\u8868\uff1f \u63d0\u793a\uff1a\u8bf7\u52ff\u9ad8\u9891\u70b9\u51fb\uff0c\u5426\u5219\u53ef\u80fd\u89e6\u53d1\u7c73\u54c8\u6e38\u63a5\u53e3\u9650\u6d41'
const HIDE_CONFIRM_TEXT = '\u662f\u5426\u9690\u85cf\u4fa7\u8fb9\u6309\u94ae\uff1f'
const DRAG_GRIP_TITLE = '\u62d6\u62fd\u79fb\u52a8'
const DATA_WRITTEN_TEXT = '\u2705 \u6570\u636e\u5df2\u5199\u5165 data.json'

const characterListWindowName = 'better-miyoushe-character-list'
let characterListWindow: Window | null = null
let characterListBlobUrl: string | null = null
let characterListWindowWatcher: number | null = null
let hideActionsTimer: number | null = null

const stopCharacterListWindowWatcher = () => {
    if (characterListWindowWatcher !== null) {
        window.clearInterval(characterListWindowWatcher)
        characterListWindowWatcher = null
    }
}

const revokeCharacterListBlobUrl = () => {
    if (characterListBlobUrl) {
        URL.revokeObjectURL(characterListBlobUrl)
        characterListBlobUrl = null
    }
}

const cleanupCharacterListWindow = () => {
    stopCharacterListWindowWatcher()
    revokeCharacterListBlobUrl()
    characterListWindow = null
}

const syncCharacterListWindowState = () => {
    if (characterListWindow && characterListWindow.closed) {
        cleanupCharacterListWindow()
    }
}

const startCharacterListWindowWatcher = () => {
    stopCharacterListWindowWatcher()
    characterListWindowWatcher = window.setInterval(() => {
        if (!characterListWindow || characterListWindow.closed) {
            cleanupCharacterListWindow()
        }
    }, 1000)
}

const openCharacterListWindow = (url: string) => {
    const opened = window.open(url, characterListWindowName)
    if (!opened) {
        return null
    }
    characterListWindow = opened
    opened.focus()
    startCharacterListWindowWatcher()
    return opened
}

const writeDataToFile = (data: unknown) => {
    GM_xmlhttpRequest({
        method: 'POST',
        url: 'http://localhost:5173/api/blob-html/data',
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify(data),
        onload: (response) => {
            if (response.status === 200) {
                console.log(DATA_WRITTEN_TEXT)
            }
        },
    })
}

const clickBtn = () => {
    syncCharacterListWindowState()
    if (characterListWindow && !characterListWindow.closed) {
        characterListWindow.focus()
        return
    }

    if (isDev) {
        openCharacterListWindow(blobHtmlContent)
    } else {
        revokeCharacterListBlobUrl()
        const blob = new Blob([blobHtmlContent], { type: 'text/html;charset=utf-8' })
        const url = URL.createObjectURL(blob)
        const opened = openCharacterListWindow(url)
        if (!opened) {
            URL.revokeObjectURL(url)
            return
        }
        characterListBlobUrl = url
    }
}

const refresh = async () => {
    const yes = confirm(REFRESH_CONFIRM_TEXT)
    if (!yes) {
        return
    }
    const user = await getUserGameRolesByToken()
    const charList = await fetchUserCharactorList(user.game_uid, user.region)

    if (isDev) {
        writeDataToFile(charList)
    }
}

const sideButton = characterPanelStore()
const hideButton = () => {
    const yes = confirm(HIDE_CONFIRM_TEXT)
    if (!yes) {
        return
    }
    sideButton.hide()
}

const btnPos = useStorage(STORGE_SIDE_BUTTON_POSITION, { right: 10, bottom: 180 }, localStorage)
const windowSize = useWindowSize({ includeScrollbar: false })

const primaryButton = ref<HTMLElement | null>(null)
const dragGrip = ref<HTMLElement | null>(null)
const isExpanded = ref(false)
const isDragging = ref(false)

const middleActionBottom = MIDDLE_ACTION_BOTTOM
const topActionBottom = TOP_ACTION_BOTTOM
const dragGripTitle = DRAG_GRIP_TITLE
const dragGripStyle = {
    right: `${DRAG_GRIP_OFFSET}px`,
    bottom: '0px',
    width: `${BUTTON_SIZE}px`,
    height: `${BUTTON_SIZE}px`,
}

const overlayStyle = computed(() => ({
    right: `${btnPos.value.right}px`,
    bottom: `${btnPos.value.bottom}px`,
    width: `${BUTTON_SIZE}px`,
    height: `${isExpanded.value ? EXPANDED_HEIGHT : BUTTON_SIZE}px`,
    zIndex: `${MAX_Z_INDEX}`,
}))

const clearHideActionsTimer = () => {
    if (hideActionsTimer !== null) {
        window.clearTimeout(hideActionsTimer)
        hideActionsTimer = null
    }
}

const showActions = () => {
    clearHideActionsTimer()
    if (!isDragging.value) {
        isExpanded.value = true
    }
}

const scheduleHideActions = () => {
    clearHideActionsTimer()
    if (isDragging.value) {
        return
    }
    hideActionsTimer = window.setTimeout(() => {
        isExpanded.value = false
        hideActionsTimer = null
    }, HIDE_DELAY_MS)
}

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max)

const clampStoredPosition = () => {
    const maxRight = Math.max(0, windowSize.width.value - BUTTON_SIZE - DRAG_GRIP_OFFSET)
    const maxBottom = Math.max(0, windowSize.height.value - BUTTON_SIZE)

    btnPos.value.right = clamp(btnPos.value.right, 0, maxRight)
    btnPos.value.bottom = clamp(btnPos.value.bottom, 0, maxBottom)
}

watch([
    () => windowSize.width.value,
    () => windowSize.height.value,
], clampStoredPosition, { immediate: true })

const setButtonPositionFromPointer = (clientX: number, clientY: number, pointerOffsetX: number, pointerOffsetY: number) => {
    const maxLeft = Math.max(0, windowSize.width.value - BUTTON_SIZE)
    const minLeft = Math.min(DRAG_GRIP_OFFSET, maxLeft)
    const maxTop = Math.max(0, windowSize.height.value - BUTTON_SIZE)
    const nextLeft = clamp(clientX - pointerOffsetX, minLeft, maxLeft)
    const nextTop = clamp(clientY - pointerOffsetY, 0, maxTop)

    btnPos.value.right = maxLeft - nextLeft
    btnPos.value.bottom = maxTop - nextTop
}

type DragSession = {
    pointerId: number
    startX: number
    startY: number
    pointerOffsetX: number
    pointerOffsetY: number
    moved: boolean
}

let dragSession: DragSession | null = null

const stopDrag = () => {
    if (dragGrip.value) {
        dragGrip.value.removeEventListener('pointermove', onDragMove)
        dragGrip.value.removeEventListener('pointerup', onDragEnd)
        dragGrip.value.removeEventListener('pointercancel', onDragEnd)
    }
    dragSession = null
    if (isDragging.value) {
        window.setTimeout(() => {
            isDragging.value = false
        }, 50)
    }
    scheduleHideActions()
}

const onDragMove = (event: PointerEvent) => {
    if (!dragSession || event.pointerId !== dragSession.pointerId) {
        return
    }

    if (!dragSession.moved) {
        const movedX = Math.abs(event.clientX - dragSession.startX)
        const movedY = Math.abs(event.clientY - dragSession.startY)
        if (movedX < DRAG_THRESHOLD && movedY < DRAG_THRESHOLD) {
            return
        }
        dragSession.moved = true
        isDragging.value = true
        isExpanded.value = false
    }

    setButtonPositionFromPointer(
        event.clientX,
        event.clientY,
        dragSession.pointerOffsetX,
        dragSession.pointerOffsetY,
    )
}

const onDragEnd = (event: PointerEvent) => {
    if (dragGrip.value?.hasPointerCapture(event.pointerId)) {
        dragGrip.value.releasePointerCapture(event.pointerId)
    }
    stopDrag()
}

const startDrag = (event: PointerEvent) => {
    if (event.button !== 0 || !dragGrip.value || !primaryButton.value) {
        return
    }

    clearHideActionsTimer()

    const buttonRect = primaryButton.value.getBoundingClientRect()
    dragSession = {
        pointerId: event.pointerId,
        startX: event.clientX,
        startY: event.clientY,
        pointerOffsetX: event.clientX - buttonRect.left,
        pointerOffsetY: event.clientY - buttonRect.top,
        moved: false,
    }

    dragGrip.value.setPointerCapture(event.pointerId)
    dragGrip.value.addEventListener('pointermove', onDragMove)
    dragGrip.value.addEventListener('pointerup', onDragEnd)
    dragGrip.value.addEventListener('pointercancel', onDragEnd)
}

const handlePrimaryClick = () => {
    if (isDragging.value) {
        return
    }
    clickBtn()
}

window.addEventListener('beforeunload', cleanupCharacterListWindow)
onBeforeUnmount(() => {
    clearHideActionsTimer()
    stopDrag()
    window.removeEventListener('beforeunload', cleanupCharacterListWindow)
    cleanupCharacterListWindow()
})
</script>
