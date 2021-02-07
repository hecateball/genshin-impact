<template>
  <section>
    <h1>{{ character.name }}</h1>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useCharacter } from '~/composables/character'

export default defineComponent({
  setup: () => {
    const { character } = useCharacter()
    return {
      character,
    }
  },
})
</script>
