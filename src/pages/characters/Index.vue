<template>
  <section>
    <h1>キャラクター一覧</h1>
    <table>
      <thead>
        <tr>
          <th>名前</th>
          <th>覚醒段階</th>
          <th>レベル</th>
          <th>攻撃力</th>
          <th>固有ステータス</th>
          <th>ステータス値</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="character in characters">
          <td>{{ $t(`characters.${character.name}`) }}</td>
          <td>{{ character.ascensionPhase }}</td>
          <td>{{ character.level }}</td>
          <td>{{ character.ATK }}</td>
          <td>{{ $t(`stats.${character.specializedStats.type}`) }}</td>
          <td>{{ character.specializedStats.value }}</td>
        </tr>
      </tbody>
    </table>
  </section>
  <section>
    <h1>キャラクター編集・追加</h1>
    <form @submit.prevent="createCharacter">
      <label for="name">名前</label>
      <select id="name" v-model="name">
        <option v-for="name in charactersMaster" :value="name">{{ $t(`characters.${name}`) }}</option>
      </select>
      <label for="ascensionPhase">覚醒段階</label>
      <select id="ascensionPhase" v-model.number="ascensionPhase" @change="setLevel">
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
      </select>
      <label for="level">レベル</label>
      <select id="level" v-model.number="level">
        <option v-if="ascensionPhase === 0" value="1">1</option>
        <option v-if="ascensionPhase === 0 || ascensionPhase === 1" value="20">20</option>
        <option v-if="ascensionPhase === 1 || ascensionPhase === 2" value="40">40</option>
        <option v-if="ascensionPhase === 2 || ascensionPhase === 3" value="50">50</option>
        <option v-if="ascensionPhase === 3 || ascensionPhase === 4" value="60">60</option>
        <option v-if="ascensionPhase === 4 || ascensionPhase === 5" value="70">70</option>
        <option v-if="ascensionPhase === 5 || ascensionPhase === 6" value="80">80</option>
        <option v-if="ascensionPhase === 6" value="90">90</option>
      </select>
      <input type="submit" value="追加" />
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue'
import { useCharacters, useCreateCharacter } from '~/composables/character'

export default defineComponent({
  setup: () => {
    const charactersMaster = ['Ganyu']
    const { characters } = useCharacters()
    const { createCharacter, input } = useCreateCharacter()
    const setLevel = () => {
      switch (input.ascensionPhase) {
        case 6:
          input.level = 90
          return
        case 5:
          input.level = 80
          return
        case 4:
          input.level = 70
          return
        case 3:
          input.level = 60
          return
        case 2:
          input.level = 50
          return
        case 1:
          input.level = 40
          return
        case 0:
          input.level = 20
          return
      }
    }
    return {
      charactersMaster,
      characters,
      createCharacter,
      setLevel,
      ...toRefs(input),
    }
  },
})
</script>
