<template>
    <div class="fixed inset-0 z-99 flex h-screen w-screen bg-black/70">
        <el-button @click="refresh()">你好</el-button>
        <ul class="text-white" v-for="a in list" :key="a.id">
            <li>{{ a.name }}</li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { characterListStore, STORGE_CHARACTER_LIST } from '@/store/view'
import { ref } from 'vue'

let charlist = characterListStore()

let list = charlist.getCharacterList()

const refresh = () => {
    let data = localStorage.getItem(STORGE_CHARACTER_LIST)
    let aList = JSON.parse(data)
    aList.forEach(element => {
        list.push(element)
    });
    console.log(list)
    list.sort((a, b) => {
        return a.fetter_level - b.fetter_level
    })
}
</script>
