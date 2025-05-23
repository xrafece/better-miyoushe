<style scoped>
.wallet {
    --bg-color: #ddd;
    --bg-color-light: #ffffff;
    --text-color-hover: #fff;
    --white-color: #fff;
    --border-color: #d3bc8d;
    --tex-color: #4a5366;
    --ye-color: #f0eae0;
    --box-shadow-color: rgba(172, 171, 166, 0.48);
}

.card {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background: #fff;
    /* border-top-right-radius: 10px; */
    overflow: hidden;
    display: flex;
    bottom: 20px;
    right: 90px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    box-shadow: 0 14px 26px rgba(0, 0, 0, 0.04);
    transition: all 0.5s ease-out;
    text-decoration: none;
}

.card:hover {
    transform: translateY(-2px) scale(1.005) translateZ(0);
    box-shadow:
        0 24px 36px rgba(0, 0, 0, 0.11),
        0 24px 46px var(--box-shadow-color);
}

.card:hover .overlay {
    transform: scale(4) translateZ(0);
}

.card:hover .circle {
    border-color: var(--bg-color-light);
    background: var(--bg-color);
}

.card:hover .circle:after {
    background: var(--bg-color-light);
}

.card:hover p {
    color: var(--text-color-hover);
}

.card p {
    font-size: 17px;
    color: #4c5656;
    margin-top: 30px;
    z-index: 1000;
    transition: color 0.5s ease-out;
}

.circle {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--border-color);
    border: 1px solid var(--bg-color);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
    transition: all 0.5s ease-out;
}

.circle:after {
    content: '';
    width: 36px;
    height: 36px;
    display: block;
    position: absolute;
    background: var(--white-color);
    border-radius: 50%;
    top: 1px;
    left: 1px;
    transition: opacity 0.5s ease-out;
}

.circle .character-btn {
    z-index: 10000;
    transform: translateZ(0);
}

.overlay {
    width: 118px;
    position: absolute;
    height: 118px;
    border-radius: 50%;
    background: var(--border-color);
    top: 50px;
    left: 50px;
    z-index: 0;
    transition: transform 0.9s ease-out;
}
.character-btn {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAA8FBMVEX////////TvI/////////////UvpJHcEz////////byKX////////////////l1bb////UvZDZxJz////////Ywpf////////TvI/p4szfz6v////////////////g0bjYw5nUv5T////////WwJb////////w6NLWwpfXwZXVvpPWwJXTvI7////Tu4/ZxJnVwZXWv5P////XwJPUwJbTvZD////////VvZLl1bvfz6/WvpPXwpr////Zxp3TvpHVv5DZxqDczKnWw5nVvpDUv5PVwJTXxJzbyKHVvpT////Yw5fVvpDTvpDUvZLTvI7JR2iPAAAAT3RSTlMUD+ICJSLEACcWTxkcBR0xFeFsGx6JFyDwI0AmESMKMnunJBKKHxgiiZi1pvAI8XqYpw6mitMaIbYxQLVtDF7T0l5Be8SnmWxPtQ1709O29JWInQAABkFJREFUaN7FWmlX6kgQbZKQRzYCWdiUTRYF8Yk66vjUt6+z5f//m+nqLAbsqgSYc6Y+eDgG6qZuLV1d3exNKVEHE8OfVbUaF61a943JQC33S1ZCeWVerUlkNq84hwOok3qNkHohBg0wyLSftG27ZTQYl4Zh3QX3J+kT/3lfAHWSMNMPLKF5Syy7Hz+vVvYCONZi7bZMeSKG3y+CwAAG4u2PAkJ7gtHWSAg5gOOXVC/EFxBzpzzAtbaDehBbQ42QAKiGiPLy6gVR8BtDLQPgAPuaxXYUSxjhFANcaDu/fiyNGSBcFAFcA/t1tpfYQNM1DXAM9LTYnmKA9ccUgNBvMPYfIrBtfk4O0M8R+tss5QEuQH+DHSQNQLiQA0B8agY7UIAlzZEBqKh+80xXoij6cNkti1BVJQCQvzL9Q50rjzoLs6wNrSOu6DVABdYn2ffh5aPfT3fMh+ttAHDATPbtd6D/Kv78MFovdX39voiqWc4NKYDF/ycNIBMAXP6heyZsETIe0qHE3eBvAgBB8voGFtyC+rdRXmgI/rq1wQYAJ6iNfLkDAJ+VaFvOCkiq5gEqRAZMo2j1JZIIhdA4SksGSw1AK2i3GZHS7Ml+FfBXVjMAMAB/m16H0o8EcGYCSwzwUf2mTqg/R9MvSLwAAM+EAUOd5OeM9MIgAfDxEPrylnYAgcBNqMcADlKEuPwWFQrKUYOrVQUAd3F1b/2RgtaNvnAzB6hjLu5FZSQkal4dAHCGlFIACs0Rwxkyo3LSIziqcAALy+LxSzI93jx+RePpkoijOQdoY3X0hSE6VhdETa2+YSpnCq3TpeSGdAIb8Fal2AWIDU0SgPF93IBNarV76dPRZqzIQxT+6CgAZ/+Y8WYikD4VPz7PavVSVrXfN0kAGxKAF6I7HCBk3vIDjrAwiwB8VseCSFB0012HT0+XYfj4tSNhacV0CmAOVbSP5bEn+P0xeqX1Nl/qTArAgBzWMABXvOJ0PX3FS+6zzk3AARqw0GBpkCTaKFK8TfL1X+nbe8sO/xOt8A4GlOMA4tVDPVpdAkQGM+rkVgLzJ2sSFZsG6IKmFcSJYvZG02Ttb3pZkft7GT6ZJi9Z4/0A4jhafxe8vGcs5t5Lg0n3ihdOUI46mQss+MrPeNl/65mbat04P5rnID3cyX0CwO0sHrLO6wbCqummBoQJ0iO1F4Ew5fVijvdc7Juiny9jSlzQnxrwMa3ml3QPHECpsPGv5JZ9/V3n6hRYA4M+nqZPXALgDkqFQbSlG23Fgp12z7rgZugXh1mmERIA/RO862JePsGWa/72XdjtfOqxoVLCAHYP5RpdcKR9i6lErhkO2VVRz/Ky4Ki1gjjdXGEWV4DaC0sQJNJAZW/6WL2WdS4r0wXdl6MyBvAgalNti9QEXYC6SUvjFW1n51TjFafaNsKYuaNe6uMFCZA0XqQT2Ov1Zjl82RKuqB1ziyt2kuaXGHF9l/TTL8StqWknz2PRXU8ojhj7Fqvq6PlYzcQrYAgAaI7ihafzZ7yExuUnxxtOUsyQ2ELRHHFPX01P4x156udpida3HY8TAIAn81GJQdQ0t764zcLOlC80f+S2sSUmmbkduWKydI3WcRdn21hwc6EJw9DL78jHQ1cnATTh4gRA1YpNGHNV+Y5I8WLObtEsruZmFceFJvD6b37enuh86mBbtFZqQG6cMyswIPyR6VeW5+HTp94D+FrBQmhjnAOBVLNIA8J4dVPOR73c+MNt6thAqrI5UvPpmen46h9w6OjhVY6MkcnmfHsoqFEkDf9Sos5UOrg5RSYtjmysaeOLM6IeHWtWpIPZI6xDGn90y49NoQgZ2GgZOToY7TCWbWGjZeGG/Q8nNvQ7xHj/wPG7cYKP92NHnxxkQ+sk72DkiKV1GD/UEcuhCPPCQ6KYJardJuP/aJsf6UEdHATO9nC1EYD1F///UWN6WNpu7fz6JQ9LwRHCiPKeMOrAvlbZ4cDaEhco/B3U13xnpyN3YURNKyYqUV8d7HxpIIaoVX0Cw7DjL2nHe92rSCBqVVsWU4ZVT59P1H0vbjzb2cWN++DOMkR6GMbcttvZxY1gcNDVE6cSUFdPgknRHZoSl2ecitWWKe9blRI3dEoApNd/7KAfX//pt+3y13/+BbH1NxWKv3iLAAAAAElFTkSuQmCC)
        no-repeat center/contain;
}

.bon {
    --box-shadow-color: rgba(0, 0, 0, 0.25);
    position: fixed;
    z-index: 9999;
    /* bottom: 20px;
    right: 20px; */
    width: 50px;
    height: 50px;
    /* overflow: hidden; */
    /* background-color: aqua; */
    border-radius: 25px;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1);
}
.bon1 {
    position: relative;
    width: 50px;
    height: 50px;
    bottom: 0px;
    background-color: #f0eae0;
    border-radius: 25px;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1);
}
.bon2 {
    position: relative;
    width: 50px;
    height: 50px;
    top: -50px;
    background-color: #d3bc8d;
    border-radius: 25px;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1);
}
.bon:hover {
    height: 110px;
    transform: translateY(-2px) scale(1.005) translateZ(0);
    /* box-shadow:
        0 24px 36px rgba(0, 0, 0, 0.11),
        0 24px 46px var(--box-shadow-color); */
}
.bon:hover .bon1 {
    top: 0;
}
.bon:hover .bon2 {
    top: 10px;
}
.bon1:hover {
    background-color: #d3bc8d;
    transform: translateY(-2px) scale(1.005) translateZ(0);
    box-shadow:
        0 24px 36px rgba(0, 0, 0, 0.11),
        0 24px 46px var(--box-shadow-color);
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAA8FBMVEX////////TvI/////////////UvpJHcEz////////byKX////////////////l1bb////UvZDZxJz////////Ywpf////////TvI/p4szfz6v////////////////g0bjYw5nUv5T////////WwJb////////w6NLWwpfXwZXVvpPWwJXTvI7////Tu4/ZxJnVwZXWv5P////XwJPUwJbTvZD////////VvZLl1bvfz6/WvpPXwpr////Zxp3TvpHVv5DZxqDczKnWw5nVvpDUv5PVwJTXxJzbyKHVvpT////Yw5fVvpDTvpDUvZLTvI7JR2iPAAAAT3RSTlMUD+ICJSLEACcWTxkcBR0xFeFsGx6JFyDwI0AmESMKMnunJBKKHxgiiZi1pvAI8XqYpw6mitMaIbYxQLVtDF7T0l5Be8SnmWxPtQ1709O29JWInQAABkFJREFUaN7FWmlX6kgQbZKQRzYCWdiUTRYF8Yk66vjUt6+z5f//m+nqLAbsqgSYc6Y+eDgG6qZuLV1d3exNKVEHE8OfVbUaF61a943JQC33S1ZCeWVerUlkNq84hwOok3qNkHohBg0wyLSftG27ZTQYl4Zh3QX3J+kT/3lfAHWSMNMPLKF5Syy7Hz+vVvYCONZi7bZMeSKG3y+CwAAG4u2PAkJ7gtHWSAg5gOOXVC/EFxBzpzzAtbaDehBbQ42QAKiGiPLy6gVR8BtDLQPgAPuaxXYUSxjhFANcaDu/fiyNGSBcFAFcA/t1tpfYQNM1DXAM9LTYnmKA9ccUgNBvMPYfIrBtfk4O0M8R+tss5QEuQH+DHSQNQLiQA0B8agY7UIAlzZEBqKh+80xXoij6cNkti1BVJQCQvzL9Q50rjzoLs6wNrSOu6DVABdYn2ffh5aPfT3fMh+ttAHDATPbtd6D/Kv78MFovdX39voiqWc4NKYDF/ycNIBMAXP6heyZsETIe0qHE3eBvAgBB8voGFtyC+rdRXmgI/rq1wQYAJ6iNfLkDAJ+VaFvOCkiq5gEqRAZMo2j1JZIIhdA4SksGSw1AK2i3GZHS7Ml+FfBXVjMAMAB/m16H0o8EcGYCSwzwUf2mTqg/R9MvSLwAAM+EAUOd5OeM9MIgAfDxEPrylnYAgcBNqMcADlKEuPwWFQrKUYOrVQUAd3F1b/2RgtaNvnAzB6hjLu5FZSQkal4dAHCGlFIACs0Rwxkyo3LSIziqcAALy+LxSzI93jx+RePpkoijOQdoY3X0hSE6VhdETa2+YSpnCq3TpeSGdAIb8Fal2AWIDU0SgPF93IBNarV76dPRZqzIQxT+6CgAZ/+Y8WYikD4VPz7PavVSVrXfN0kAGxKAF6I7HCBk3vIDjrAwiwB8VseCSFB0012HT0+XYfj4tSNhacV0CmAOVbSP5bEn+P0xeqX1Nl/qTArAgBzWMABXvOJ0PX3FS+6zzk3AARqw0GBpkCTaKFK8TfL1X+nbe8sO/xOt8A4GlOMA4tVDPVpdAkQGM+rkVgLzJ2sSFZsG6IKmFcSJYvZG02Ttb3pZkft7GT6ZJi9Z4/0A4jhafxe8vGcs5t5Lg0n3ihdOUI46mQss+MrPeNl/65mbat04P5rnID3cyX0CwO0sHrLO6wbCqummBoQJ0iO1F4Ew5fVijvdc7Juiny9jSlzQnxrwMa3ml3QPHECpsPGv5JZ9/V3n6hRYA4M+nqZPXALgDkqFQbSlG23Fgp12z7rgZugXh1mmERIA/RO862JePsGWa/72XdjtfOqxoVLCAHYP5RpdcKR9i6lErhkO2VVRz/Ky4Ki1gjjdXGEWV4DaC0sQJNJAZW/6WL2WdS4r0wXdl6MyBvAgalNti9QEXYC6SUvjFW1n51TjFafaNsKYuaNe6uMFCZA0XqQT2Ov1Zjl82RKuqB1ziyt2kuaXGHF9l/TTL8StqWknz2PRXU8ojhj7Fqvq6PlYzcQrYAgAaI7ihafzZ7yExuUnxxtOUsyQ2ELRHHFPX01P4x156udpida3HY8TAIAn81GJQdQ0t764zcLOlC80f+S2sSUmmbkduWKydI3WcRdn21hwc6EJw9DL78jHQ1cnATTh4gRA1YpNGHNV+Y5I8WLObtEsruZmFceFJvD6b37enuh86mBbtFZqQG6cMyswIPyR6VeW5+HTp94D+FrBQmhjnAOBVLNIA8J4dVPOR73c+MNt6thAqrI5UvPpmen46h9w6OjhVY6MkcnmfHsoqFEkDf9Sos5UOrg5RSYtjmysaeOLM6IeHWtWpIPZI6xDGn90y49NoQgZ2GgZOToY7TCWbWGjZeGG/Q8nNvQ7xHj/wPG7cYKP92NHnxxkQ+sk72DkiKV1GD/UEcuhCPPCQ6KYJardJuP/aJsf6UEdHATO9nC1EYD1F///UWN6WNpu7fz6JQ9LwRHCiPKeMOrAvlbZ4cDaEhco/B3U13xnpyN3YURNKyYqUV8d7HxpIIaoVX0Cw7DjL2nHe92rSCBqVVsWU4ZVT59P1H0vbjzb2cWN++DOMkR6GMbcttvZxY1gcNDVE6cSUFdPgknRHZoSl2ecitWWKe9blRI3dEoApNd/7KAfX//pt+3y13/+BbH1NxWKv3iLAAAAAElFTkSuQmCC)
        no-repeat center/contain;
}
.bon2:hover {
    background-color: #f0eae0;
    transform: translateY(-2px) scale(1.005) translateZ(0);
    box-shadow:
        0 24px 36px rgba(0, 0, 0, 0.11),
        0 24px 46px var(--box-shadow-color);
}
</style>

<template>
    <div class="card wallet">
        <div class="overlay"></div>
        <div class="circle">
            <div class="character-btn h-full w-full"></div>
        </div>
    </div>
    <div class="bon" :style="{ right: btnPos.right + 'px', bottom: btnPos.bottom + 'px' }">
        <div class="bon1" id="bon1" @click="bon1()"></div>
        <div class="bon2" id="bon2" ref="target" @click="bon2()"></div>
    </div>
</template>
<script setup lang="ts">
import { characterDomStore, STORGE_SIDE_BUTTON_POSITION, characterListStore } from '@/store/view'
import { getCookie } from '@/util/cookie'
import { Position, useDraggable, useElementBounding, useStorage, useWindowSize } from '@vueuse/core'
import { computed, ref } from 'vue'

const charaDom = characterDomStore()
const charListStore = characterListStore()

const storgeSideBtnPos = 'foo-side-button-position'

const charactorListUrl = 'https://api-takumi.mihoyo.com/event/e20200928calculate/v1/sync/avatar/list'
const gameRoleUrl = 'https://passport-api.mihoyo.com/binding/api/getUserGameRolesByLtoken?game_biz=hk4e_cn'

const getUserGameRolesByToken = async () => {
    const resp = await fetch(gameRoleUrl, {
        headers: {
            accept: 'application/json, text/plain, */*',
            'x-rpc-device_id': getCookie('_MHYUUID') || '',
            'x-rpc-mi_referrer':
                'https://act.mihoyo.com/ys/event/calculator/index.html?mhy_presentation_style=fullscreen&utm_source=bbs&utm_medium=mys&utm_campaign=arti#/character',
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
    charListStore.setCharacterList(charList)
}

const clickBtn = async () => {
    await getUserGameRolesByToken()
        .then((res) => {
            const { game_uid, region } = res
            fetchUserCharactorList(game_uid, region)
        })
        .catch((err) => {
            console.error(err)
        })
    charaDom.toggle()
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
        }, 2)
    },
})

const bon1 = () => {
    console.log('bon1')
}
const bon2 = () => {
    console.log('bon2')
}
</script>
