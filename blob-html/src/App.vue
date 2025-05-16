<script setup lang="js">
import { ref } from 'vue'
import data from './assets/data.json'
import _ from 'lodash'
if (import.meta.env.MODE === 'development') {
    localStorage.setItem('better-miyoushe-character-list', JSON.stringify(data))
}

const charaterStr = localStorage.getItem('better-miyoushe-character-list')
let charaterData = JSON.parse(charaterStr || '[]')
let vueData = ref([...charaterData])

const skillStyle = (item, index) => {
    index--
    // 神里绫华 莫娜
    if (index == 2 && (item.id == 10000002 || item.id == 10000041)) {
        index++
    }

    const skill = item.skill_list[index]
    let skillLv = skill.level_current
    let consNum = item.constellation_num

    let color = ''
    if (skillLv > 9) {
        color = 'rgba(199, 69, 63, 0.55)'
    } else if (skillLv > 8) {
        color = 'rgba(134, 88, 223, 0.55)'
    } else if (skillLv > 5) {
        color = 'rgba(61, 120, 170, 0.5)'
    } else if (skillLv > 3) {
        color = 'rgba(61, 145, 80, 0.5)'
    } else {
        color = 'rgba(68, 74, 77, 0.3)'
    }

    let skillColor = '#ffffff'
    if (consNum > 4 && (index == 1 || index == 2 || index == 3)) {
        skillLv += 3
        skillColor = '#5af3fd'
    }
    let consSkill0 = [10000096, 10000087, 10000086, 10000085, 10000084]
    let consSkill1 = [10000016, 10000061, 10000074, 10000090]
    if (consNum > 2 && consNum < 5) {
        if (index == 0 && consSkill0.includes(item.id)) {
            skillLv += 3
            skillColor = '#5af3fd'
        }
        if (index == 1 && consSkill1.includes(item.id)) {
            skillLv += 3
            skillColor = '#5af3fd'
        }
        if (index == 2 && !consSkill1.includes(item.id)) {
            skillLv += 3
            skillColor = '#5af3fd'
        }
        if (index == 3 && !consSkill1.includes(item.id)) {
            skillLv += 3
            skillColor = '#5af3fd'
        }
    }

    return {
        backgroundImage: 'url(' + skill.icon + ')',
        backgroundColor: color,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        color: skillColor,
    }
}
const skillLevel = (item, index) => {
    index--
    // 神里绫华 莫娜
    if (index == 2 && (item.id == 10000002 || item.id == 10000041)) {
        index++
    }

    const skill = item.skill_list[index]

    return '+' + skill.level_current
}
const resetData = () => {
    vueData.value = [...charaterData]
}
const sortById = () => {
    vueData.value = _.orderBy(vueData.value, ['id'], ['desc'])
}
const sortByLevel = () => {
    vueData.value = _.orderBy(vueData.value, ['level_current'], ['desc'])
}
const sortByConts = () => {
    vueData.value = _.orderBy(
        vueData.value,
        ['avatar_level', 'constellation_num', 'level_current'],
        ['desc', 'desc', 'desc'],
    )
}
const sortByFetter = () => {
    vueData.value = _.orderBy(
        vueData.value,
        [
            (item) => {
                let skillSum =
                    item.skill_list[0].level_current +
                    item.skill_list[1].level_current +
                    item.skill_list[2].level_current
                if (item.id == 10000002 || item.id == 10000041) {
                    skillSum += item.skill_list[3].level_current
                    skillSum -= item.skill_list[2].level_current
                }
                return skillSum
            },
            'avatar_level',
            'level_current',
            'constellation_num',
        ],
        ['desc', 'desc', 'desc','desc'],
    )
}

const sortByCrown = () => {
    vueData.value = _.orderBy(
        vueData.value,
        [
            (item) => {
                let isCrown = 0;
                item.skill_list.forEach( skill => {
                    if (skill.level_current > 9) {
                        isCrown += 1
                    }
                });
                return isCrown
            },
            'avatar_level',
            'level_current',
            'constellation_num',
        ],
        ['desc', 'desc', 'desc','desc'],
    )
}
</script>

<template>
    <div class="container">
        <div class="container-table-row table-head">
            <div class="index-cell table-row-cell" @click="resetData()">#</div>
            <!-- <div class="id-cell table-row-cell">id</div> -->
            <div class="character-cell table-row-cell" @click="sortById()">
                <p>角色</p>
            </div>
            <div class="char-level table-row-cell" @click="sortByLevel()">等级</div>
            <div class="char-cons table-row-cell" @click="sortByConts()">命座</div>
            <div class="char-fetter table-row-cell">好感</div>
            <div class="skill-cell table-row-cell">A</div>
            <div class="skill-cell table-row-cell">E</div>
            <div class="skill-cell table-row-cell" @click="sortByCrown()">Q</div>
            <div class="char-weapon table-row-cell" @click="sortByFetter()">武器</div>
            <!-- <div class="reliquary-cell table-row-cell">花饰</div>
            <div class="reliquary-cell table-row-cell">羽毛</div>
            <div class="reliquary-cell table-row-cell">沙漏</div>
            <div class="reliquary-cell table-row-cell">杯子</div>
            <div class="reliquary-cell table-row-cell">头冠</div> -->
        </div>
        <div
            class="container-table-row"
            v-for="(item, index) in vueData"
            :key="index"
            :class="index % 2 === 0 ? 'even-row' : 'odd-row'"
        >
            <div class="index-cell table-row-cell" :class="'char-star-' + item.avatar_level">{{ index + 1 }}</div>
            <!-- <div class="id-cell table-row-cell" :class="'char-star-' + item.avatar_level">{{ item.id }}</div> -->
            <div class="character-cell table-row-cell" :class="'char-star-' + item.avatar_level">
                <div class="item-cell">
                    <div class="item-icon char-icon">
                        <span class="item-img" :style="{ backgroundImage: 'url(' + item.icon + ')' }"></span>
                    </div>

                    <span class="char-name">{{ item.name }}</span>
                </div>
            </div>
            <div class="char-level table-row-cell">
                {{ item.level_current }}
            </div>
            <div class="char-cons table-row-cell">
                <span class="cons" :class="'cons-' + item.constellation_num">{{ item.constellation_num }}</span>
            </div>
            <div class="char-fetter table-row-cell">
                <span class="fetter" :class="'fetter-' + item.fetter_level"></span>
            </div>
            <div class="skill-cell table-row-cell" v-for="index in 3" :key="index">
                <div class="skill-div" :style="skillStyle(item, index)">
                    {{ skillLevel(item, index) }}
                </div>
            </div>
            <div class="char-weapon table-row-cell" :class="'char-star-' + item.weapon.weapon_level">
                <div class="item-cell" :class="'star-' + item.weapon.weapon_level">
                    <span class="level">{{ 'Lv' + item.weapon.level_current }}</span>

                    <div class="item-icon weapon-icon">
                        <span class="item-img" :style="{ backgroundImage: 'url(' + item.weapon.icon + ')' }"></span>
                    </div>

                    <span class="weapon-name">{{ item.weapon.name }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@font-face {
    font-family: 'Number';
    src:
        url('https://raw.githubusercontent.com/yoimiya-kokomi/miao-plugin/refs/heads/master/resources/common/font/tttgbnumber.woff')
            format('woff'),
        url('https://raw.githubusercontent.com/yoimiya-kokomi/miao-plugin/refs/heads/master/resources/common/font/tttgbnumber.ttf')
            format('truetype');
}
.container {
    min-width: 1000px;
    box-sizing: border-box;
    font-family: Number, '汉仪文黑-65W', YS, PingFangSC-Medium, 'PingFang SC', sans-serif;
    font-size: 18px;
}
.container-table {
    overflow: hidden;
}
.container-table-row {
    display: flex;
    justify-content: center;
}
.odd-row > div {
    background-color: #f0f0f0;
}
.even-row > div {
    background-color: #ffffff;
}
.table-row-cell {
    display: flex;
    height: 60px;
    text-align: center;
    align-items: center; /* Vertical */
    justify-content: center;
    box-shadow: 0 0 1px 0 rgba(100, 100, 100, 0.4) inset;
}

.item-icon {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    position: relative;
    overflow: hidden;
}
.item-icon .item-img {
    width: 100%;
    height: 100%;
    display: block;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}
/* 图片容器 */
.item-cell {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 36px;
}

.table-head {
    font-weight: bold;
    cursor: pointer;
}

.table-head > div {
    text-align: center;
    box-shadow: 0 0 1px 0 #ccc8ce;
    color: #d3bc8e !important;
    line-height: 36px;
    background-color: #3d3c40;
    font-size: 17px;
}

.odd-row .char-star-5 {
    background-color: #e1d1b4 !important;
}
.even-row .char-star-5 {
    background-color: #e8d8bb !important;
}
.odd-row .char-star-4 {
    background-color: #c4add7 !important;
}
.even-row .char-star-4 {
    background-color: #cbb4de !important;
}
.odd-row .char-star-3 {
    background-color: #afb9d8 !important;
}
.even-row .char-star-3 {
    background-color: #b6c0df !important;
}

.id-cell {
    width: 100px;
    font-size: 16px;
}
.index-cell {
    width: 40px;
    font-size: 18px;
}

.character-cell {
    text-align: left;
    width: 175px;
    padding-left: 3px;
}
.character-cell .char-icon {
    width: 50px;
    height: 50px;
    border-radius: 5px;
    display: inline-block;
    overflow: visible;
    background: nvueData;
}
.char-name {
    width: 100px;
    padding-left: 3px;
}
.char-level {
    width: 60px;
    font-size: 20px;
}
.char-cons {
    width: 60px;
}
.char-fetter {
    width: 60px;
}

.fetter {
    width: 40px;
    height: 40px;
    display: inline-block;
    background: url(https://raw.githubusercontent.com/yoimiya-kokomi/miao-plugin/refs/heads/master/resources/common/item/fetter.png);
    background-size: auto 100%;
}
.fetter.fetter-1 {
    background-position: 0% 0;
}
.fetter.fetter-2 {
    background-position: 11.11111111% 0;
}
.fetter.fetter-3 {
    background-position: 22.22222222% 0;
}
.fetter.fetter-4 {
    background-position: 33.33333333% 0;
}
.fetter.fetter-5 {
    background-position: 44.44444444% 0;
}
.fetter.fetter-6 {
    background-position: 55.55555556% 0;
}
.fetter.fetter-7 {
    background-position: 66.66666667% 0;
}
.fetter.fetter-8 {
    background-position: 77.77777778% 0;
}
.fetter.fetter-9 {
    background-position: 88.88888889% 0;
}
.fetter.fetter-10 {
    background-position: 100% 0;
}

.cons {
    display: inline-block;
    vertical-align: middle;
    padding: 0 5px;
    border-radius: 4px;
    width: 15px;
    font-size: 18px;
    text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
}
.cons-0 {
    background: #666;
    color: #fff;
}
.cons-1 {
    background: #5cbac2;
    color: #fff;
}
.cons-2 {
    background: #339d61;
    color: #fff;
}
.cons-3 {
    background: #3e95b9;
    color: #fff;
}
.cons-4 {
    background: #3955b7;
    color: #fff;
}
.cons-5 {
    background: #531ba9cf;
    color: #fff;
}
.cons-6 {
    background: #ff5722;
    color: #fff;
}

.skill-cell {
    width: 60px;
    text-align: center;
    box-shadow: nvueData !important;
}

.skill-div {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: start;
    justify-content: end;
    color: white;
    text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
    font-size: 16px;
}

.char-weapon {
    text-align: left;
    width: 300px;
    padding-left: 3px;
}
.char-weapon .weapon-icon {
    width: 50px;
    height: 50px;
    border-radius: 5px;
    display: inline-block;
    overflow: visible;
    background: nvueData;
}
.weapon-name {
    width: 175px;
}

.reliquary-cell {
    width: 60px;
    text-align: center;
}

.reliquary-div {
    display: flex;
    width: 56px;
    height: 56px;
    align-items: start;
    justify-content: end;
    color: #f9f2e7;
    text-shadow: 0 0 2px rgba(0, 0, 0, 0.99);
    border-radius: 8px;
    font-size: 16px;
}

/* 滚动槽 */
::-webkit-scrollbar {
    width: 6px;
    height: 6px;
}
::-webkit-scrollbar-track {
    border-radius: 3px;
    background: rgba(0, 0, 0, 0.06);
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.08);
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background: rgba(0, 0, 0, 0.12);
    -webkit-box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
}
</style>
