<template>
  <section class="space-y-2">
    <h1 class="characterName">{{ $t(`characters.${character.name}`) }}</h1>
    <table class="table-fixed border w-full">
      <tr class="text-center border">
        <th>覚醒段階</th>
        <th>レベル</th>
        <th>攻撃力</th>
        <th>{{ $t(`stats.${character.specializedStats.type}`) }}</th>
      </tr>
      <tr class="text-center border">
        <td>{{ character.ascensionPhase }}</td>
        <td>{{ character.level }}</td>
        <td>{{ character.ATK }}</td>
        <td>{{ character.specializedStats.value }}</td>
      </tr>
    </table>
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

<style>
.characterName {
  @apply text-4xl font-bold;
}
</style>
