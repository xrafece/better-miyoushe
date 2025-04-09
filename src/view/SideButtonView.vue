<template>
    <div
        v-if="sideButton.isShow"
        :style="{ right: btnPos.right + 'px', bottom: btnPos.bottom + 'px' }"
        class="group fixed z-100"
    >
        <div
            ref="target"
            class="h-10 w-10 cursor-pointer rounded-full border border-gray-200/20 transition delay-100 duration-300 ease-in-out hover:scale-100 hover:border hover:border-[#d3bc92] hover:bg-[#423730]"
            @click="clickBtn()"
        >
            <div class="character-btn h-full w-full"></div>
        </div>
    </div>
</template>

<style scoped>
.character-btn {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAA8FBMVEX////////TvI/////////////UvpJHcEz////////byKX////////////////l1bb////UvZDZxJz////////Ywpf////////TvI/p4szfz6v////////////////g0bjYw5nUv5T////////WwJb////////w6NLWwpfXwZXVvpPWwJXTvI7////Tu4/ZxJnVwZXWv5P////XwJPUwJbTvZD////////VvZLl1bvfz6/WvpPXwpr////Zxp3TvpHVv5DZxqDczKnWw5nVvpDUv5PVwJTXxJzbyKHVvpT////Yw5fVvpDTvpDUvZLTvI7JR2iPAAAAT3RSTlMUD+ICJSLEACcWTxkcBR0xFeFsGx6JFyDwI0AmESMKMnunJBKKHxgiiZi1pvAI8XqYpw6mitMaIbYxQLVtDF7T0l5Be8SnmWxPtQ1709O29JWInQAABkFJREFUaN7FWmlX6kgQbZKQRzYCWdiUTRYF8Yk66vjUt6+z5f//m+nqLAbsqgSYc6Y+eDgG6qZuLV1d3exNKVEHE8OfVbUaF61a943JQC33S1ZCeWVerUlkNq84hwOok3qNkHohBg0wyLSftG27ZTQYl4Zh3QX3J+kT/3lfAHWSMNMPLKF5Syy7Hz+vVvYCONZi7bZMeSKG3y+CwAAG4u2PAkJ7gtHWSAg5gOOXVC/EFxBzpzzAtbaDehBbQ42QAKiGiPLy6gVR8BtDLQPgAPuaxXYUSxjhFANcaDu/fiyNGSBcFAFcA/t1tpfYQNM1DXAM9LTYnmKA9ccUgNBvMPYfIrBtfk4O0M8R+tss5QEuQH+DHSQNQLiQA0B8agY7UIAlzZEBqKh+80xXoij6cNkti1BVJQCQvzL9Q50rjzoLs6wNrSOu6DVABdYn2ffh5aPfT3fMh+ttAHDATPbtd6D/Kv78MFovdX39voiqWc4NKYDF/ycNIBMAXP6heyZsETIe0qHE3eBvAgBB8voGFtyC+rdRXmgI/rq1wQYAJ6iNfLkDAJ+VaFvOCkiq5gEqRAZMo2j1JZIIhdA4SksGSw1AK2i3GZHS7Ml+FfBXVjMAMAB/m16H0o8EcGYCSwzwUf2mTqg/R9MvSLwAAM+EAUOd5OeM9MIgAfDxEPrylnYAgcBNqMcADlKEuPwWFQrKUYOrVQUAd3F1b/2RgtaNvnAzB6hjLu5FZSQkal4dAHCGlFIACs0Rwxkyo3LSIziqcAALy+LxSzI93jx+RePpkoijOQdoY3X0hSE6VhdETa2+YSpnCq3TpeSGdAIb8Fal2AWIDU0SgPF93IBNarV76dPRZqzIQxT+6CgAZ/+Y8WYikD4VPz7PavVSVrXfN0kAGxKAF6I7HCBk3vIDjrAwiwB8VseCSFB0012HT0+XYfj4tSNhacV0CmAOVbSP5bEn+P0xeqX1Nl/qTArAgBzWMABXvOJ0PX3FS+6zzk3AARqw0GBpkCTaKFK8TfL1X+nbe8sO/xOt8A4GlOMA4tVDPVpdAkQGM+rkVgLzJ2sSFZsG6IKmFcSJYvZG02Ttb3pZkft7GT6ZJi9Z4/0A4jhafxe8vGcs5t5Lg0n3ihdOUI46mQss+MrPeNl/65mbat04P5rnID3cyX0CwO0sHrLO6wbCqummBoQJ0iO1F4Ew5fVijvdc7Juiny9jSlzQnxrwMa3ml3QPHECpsPGv5JZ9/V3n6hRYA4M+nqZPXALgDkqFQbSlG23Fgp12z7rgZugXh1mmERIA/RO862JePsGWa/72XdjtfOqxoVLCAHYP5RpdcKR9i6lErhkO2VVRz/Ky4Ki1gjjdXGEWV4DaC0sQJNJAZW/6WL2WdS4r0wXdl6MyBvAgalNti9QEXYC6SUvjFW1n51TjFafaNsKYuaNe6uMFCZA0XqQT2Ov1Zjl82RKuqB1ziyt2kuaXGHF9l/TTL8StqWknz2PRXU8ojhj7Fqvq6PlYzcQrYAgAaI7ihafzZ7yExuUnxxtOUsyQ2ELRHHFPX01P4x156udpida3HY8TAIAn81GJQdQ0t764zcLOlC80f+S2sSUmmbkduWKydI3WcRdn21hwc6EJw9DL78jHQ1cnATTh4gRA1YpNGHNV+Y5I8WLObtEsruZmFceFJvD6b37enuh86mBbtFZqQG6cMyswIPyR6VeW5+HTp94D+FrBQmhjnAOBVLNIA8J4dVPOR73c+MNt6thAqrI5UvPpmen46h9w6OjhVY6MkcnmfHsoqFEkDf9Sos5UOrg5RSYtjmysaeOLM6IeHWtWpIPZI6xDGn90y49NoQgZ2GgZOToY7TCWbWGjZeGG/Q8nNvQ7xHj/wPG7cYKP92NHnxxkQ+sk72DkiKV1GD/UEcuhCPPCQ6KYJardJuP/aJsf6UEdHATO9nC1EYD1F///UWN6WNpu7fz6JQ9LwRHCiPKeMOrAvlbZ4cDaEhco/B3U13xnpyN3YURNKyYqUV8d7HxpIIaoVX0Cw7DjL2nHe92rSCBqVVsWU4ZVT59P1H0vbjzb2cWN++DOMkR6GMbcttvZxY1gcNDVE6cSUFdPgknRHZoSl2ecitWWKe9blRI3dEoApNd/7KAfX//pt+3y13/+BbH1NxWKv3iLAAAAAElFTkSuQmCC)
        no-repeat center/contain;
}
</style>

<script setup lang="ts">
import { characterPanelStore, characterDomStore, STORGE_SIDE_BUTTON_POSITION, characterListStore } from '@/store/view'
import { Position, useDraggable, useElementBounding, useStorage, useWindowSize } from '@vueuse/core'
import { computed, ref } from 'vue'

const sideButton = characterPanelStore()
const charaDom = characterDomStore()

const storgeSideBtnPos = STORGE_SIDE_BUTTON_POSITION

const one = ref(false)
const clickBtn = () => {
    charaDom.toggle()
    one.value = !one.value;
}

const target = ref<HTMLElement | null>(null)
const { width, height } = useElementBounding(target, { windowScroll: false })
const btnPos = useStorage(storgeSideBtnPos, { right: 30, bottom: 30 }, localStorage)
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
        }, 500)
    },
})
</script>
