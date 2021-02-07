<template>
  <section>
    <h1>ダメージ</h1>
    <Ganyu v-if="character.name === 'Ganyu'" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useCharacter } from '~/composables/character'
import Ganyu from '~/components/characters/Ganyu.vue'

export default defineComponent({
  components: {
    Ganyu,
  },
  setup: () => {
    const { character } = useCharacter()
    return {
      character,
    }
  },
})
</script>
