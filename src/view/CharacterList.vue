<template>
    <div id="bm-character-dom" class="fixed inset-0 z-99 flex h-screen w-screen bg-black/40">
        <div class="table-container h-full w-full rounded-lg bg-red-50">
            <div class="table-head table-row">
                <div class="index-cell table-cell">#</div>
                <!-- <div class="id-cell table-cell">id</div> -->
                <div class="character-cell table-cell">角色</div>
                <div class="char-element-cell table-cell">元素</div>
                <div class="char-level-cell table-cell">等级</div>
                <div class="char-cons-cell table-cell">命座</div>
                <div class="char-fetter-cell table-cell">好感</div>
                <div class="skill-cell table-cell">A</div>
                <div class="skill-cell table-cell">E</div>
                <div class="skill-cell table-cell">Q</div>
                <div class="skill-cell table-cell">Q</div>
                <div class="skill-cell table-cell">Q</div>
                <div class="skill-cell table-cell">Q</div>
                <div class="skill-cell table-cell">Q</div>
                <div class="char-weapon-cell table-cell">武器</div>
                <div class="reliquary-cell table-cell">花瓣</div>
                <div class="reliquary-cell table-cell">羽毛</div>
                <div class="reliquary-cell table-cell">沙漏</div>
                <div class="reliquary-cell table-cell">杯子</div>
                <div class="reliquary-cell table-cell">头冠</div>
            </div>
            <div class="table-row" v-for="(item, index) in dataList" :key="index">
                <div class="index-cell table-cell">{{ index + 1 }}</div>
                <!-- <div class="id-cell table-cell">{{ item.id }}</div> -->
                <div class="name-cell table-cell">
                    <div class="item-cell">
                        <div class="item-icon char-icon">
                            <img :src="item.icon" class="w-10" />
                        </div>
                        <div class="char-name">
                            {{ item.name }}
                        </div>
                    </div>
                </div>
                <div class="char-element-cell table-cell">
                    {{ item.element_attr_id }}
                </div>
                <div class="char-level-cell table-cell">
                    {{ item.level_current }}
                </div>
                <div class="char-cons-cell table-cell">
                    {{ item.constellation_num }}
                </div>
                <div class="char-fetter-cell table-cell">
                    {{ item.fetter_level }}
                </div>
                <div class="skill-cell table-cell" v-for="(skill, index) in item.skill_list" :key="index">
                    <div class="item-cell">
                        <div class="item-icon">
                            <img :src="skill.icon" class="w-10" />
                        </div>
                        <div class="skill-level">{{ skill.level_current }}</div>
                    </div>
                </div>
                <div class="char-weapon-cell table-cell">
                    <div class="item-cell">
                        <div class="item-icon">
                            <img :src="item.weapon.icon" class="w-10" />
                        </div>
                        <div class="skill-level">{{ item.weapon.level_current }}</div>
                    </div>
                </div>
                <div class="reliquary-cell table-cell" v-for="(reliquary, index) in item.reliquary_list" :key="index">
                    <div class="item-cell">
                        <div class="item-icon">
                            <img :src="reliquary.icon" class="w-10" />
                        </div>
                        <div class="skill-level">{{ reliquary.level_current }}</div>
                    </div>
                </div>
            </div>
            <button class="h-20 w-20 bg-sky-200" @click="sort()">你好</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { characterListStore } from '@/store/view'
import { ref } from 'vue';

const charListStore = characterListStore()

const charList = charListStore.getCharacterList();
const dataList = ref([...charList]);

const sort = () => {
}
</script>
