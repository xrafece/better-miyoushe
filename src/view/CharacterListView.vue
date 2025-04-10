<template>
    <div v-if="charDom.isShow" class="fixed inset-0 z-99 flex h-screen w-screen bg-black/70">
        <el-button @click="clickS()">ssss</el-button>
        <el-table
            :data="dataList"
            ref="table"
            border
            style="width: 1000px; margin: auto; border-radius: 5px"
            height="800"
            :cell-style="{ padding: '0', margin: '0', fontSize: '16px' }"
            stripe
        >
            <el-table-column type="index" label="#" width="50" fixed>
                <template #header>
                    <div class="flex h-full w-full items-center justify-center text-center">
                        <div class="w-full text-center">#</div>
                    </div>
                </template>
                <template #default="scope">
                    <div class="flex h-full w-full items-center justify-center text-center">
                        <div class="w-full text-center">{{ scope.$index + 1 }}</div>
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="name" label="角色" width="180" fixed>
                <template #header>
                    <div class="flex h-full w-full items-center justify-center text-center">
                        <div class="w-full text-center">角色</div>
                    </div>
                </template>
                <template #default="scope">
                    <div
                        class="flex h-full w-full items-center font-sans text-base text-black"
                        :class="'star-' + scope.row.avatar_level"
                    >
                        <div class="flex h-15 w-15 items-center">
                            <img class="h-full w-full" :src="scope.row.icon" />
                        </div>
                        <span>{{ scope.row.name }}</span>
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="level_current" label="等级" width="60">
                <template #header>
                    <div class="flex h-full w-full items-center justify-center text-center">
                        <div class="w-full text-center">等级</div>
                    </div>
                </template>
                <template #default="scope">
                    <div class="flex h-full w-full items-center justify-center text-center">
                        <div class="w-full text-center">{{ scope.row.level_current }}</div>
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="constellation_num" label="命座" width="60" sortable>
                <template #header>
                    <div class="flex h-full w-full items-center justify-center text-center">
                        <div class="w-full text-center">命座</div>
                    </div>
                </template>
                <template #default="scope">
                    <div class="flex h-full w-full items-center justify-center text-center">
                        <div class="w-full text-center">{{ scope.row.constellation_num }}</div>
                    </div>
                </template>
            </el-table-column>
            <!-- <el-table-column prop="avatar_level" label="星级" width="60">
                <template #header>
                    <div class="flex h-full w-full items-center justify-center text-center">
                        <div class="w-full text-center">星级</div>
                    </div>
                </template>
                <template #default="scope">
                    <div class="flex h-full w-full items-center justify-center text-center">
                        <div class="w-full text-center">{{ scope.row.avatar_level }}</div>
                    </div>
                </template>
            </el-table-column> -->
            <el-table-column prop="fetter_level" label="好感" width="60">
                <template #header>
                    <div class="flex h-full w-full items-center justify-center text-center">
                        <div class="w-full text-center">好感</div>
                    </div>
                </template>
                <template #default="scope">
                    <div class="flex h-full w-full items-center justify-center text-center">
                        <div class="w-full text-center">{{ scope.row.fetter_level }}</div>
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="element_attr_id" label="属性" width="50">
                <template #header>
                    <div class="flex h-full w-full items-center justify-center text-center">
                        <div class="w-full text-center">属性</div>
                    </div>
                </template>
                <template #default="scope">
                    <div class="m-20 flex h-full w-full items-center justify-center text-center">
                        <div class="flex h-8 w-8 items-center justify-center">
                            <img :src="fmtCharELe(scope.row)" />
                        </div>
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="skill_list" label="技能" width="240">
                <template #header>
                    <div class="flex h-full w-full items-center justify-center text-center">
                        <div class="w-full text-center">技能</div>
                    </div>
                </template>
                <template #default="scope">
                    <div class="flex h-full w-full bg-blue-200">
                        <div v-for="id in 4" :key="id">
                            <div class="flex h-15 w-15 items-center bg-gray-500">
                                <img :src="scope.row.skill_list[id].icon" />
                            </div>
                        </div>
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="weapon" label="武器" width="200">
                <template #header>
                    <div class="flex h-full w-full items-center justify-center text-center">
                        <div class="w-full text-center">武器</div>
                    </div>
                </template>
                <template #default="scope">
                    <div
                        class="flex h-full w-full font-sans text-base font-bold text-black"
                        :class="'star-' + scope.row.weapon.weapon_level"
                    >
                        <div class="flex h-15 w-15 items-center">
                            <img :src="scope.row.weapon.icon" />
                        </div>
                        <span>{{ scope.row.weapon.name }}</span>
                    </div>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<style scoped></style>

<script setup lang="ts">
import { characterDomStore, characterListStore } from '@/store/view'
import { ref } from 'vue'

const charDom = characterDomStore()
const charData = characterListStore()
let dataList = ref([])
let charList = charData.getCharacterList()
dataList.value = [...charList]

const clickS = () => {
    // console.log(charList)
    if (dataList.value.length !== 0) {
        dataList.value.pop();
        return
    }

    // this.$ref.table.$forceUpdate();
    charList.forEach((element) => {
        dataList.value.push(element)
    })
}

const fmtCharELe = (row: any) => {
    switch (row.element_attr_id) {
        case 1: // 火
            return 'https://act.mihoyo.com/act/gt-ui/assets/icons/6a4f0b7ab73fe4d3.png'
        case 2: // 风
            return 'https://act.mihoyo.com/act/gt-ui/assets/icons/48d1aac6ecc56b33.png'
        case 3: // 岩
            return 'https://act.mihoyo.com/act/gt-ui/assets/icons/829a6b86fb23d8bb.png'
        case 4: // 草
            return 'https://act.mihoyo.com/act/gt-ui/assets/icons/247f14512efc8325.png'
        case 5: // 雷
            return 'https://act.mihoyo.com/act/gt-ui/assets/icons/e18d224ec1047cae.png'
        case 6: // 水
            return 'https://act.mihoyo.com/act/gt-ui/assets/icons/b162f5384487d283.png'
        case 7: // 冰
            return 'https://act.mihoyo.com/act/gt-ui/assets/icons/bf2f65ee0d7f6243.png'
        default:
            return ''
    }
}
</script>
