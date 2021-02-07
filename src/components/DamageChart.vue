<template>
  <section>
    <h1>ダメージ</h1>
    <div>
      <label for="details">詳細表示</label>
      <input id="details" type="checkbox" v-model="showDetails" />
    </div>
    <Ganyu v-if="character.name === 'Ganyu'" :details="showDetails" />
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useCharacter } from '~/composables/character'
import Ganyu from '~/components/charts/Ganyu.vue'

export default defineComponent({
  components: {
    Ganyu,
  },
  setup: () => {
    const { character } = useCharacter()
    const showDetails = ref<boolean>(false)
    return {
      character,
      showDetails,
    }
  },
})
</script>
