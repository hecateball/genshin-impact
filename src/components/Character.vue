<template>
  <section>
    <h1>{{ $t(`characters.${character.name}`) }}</h1>
    <table>
      <thead>
        <tr>
          <th>覚醒段階</th>
          <th>レベル</th>
          <th>攻撃力</th>
          <th>{{ $t(`stats.${character.specializedStats.type}`) }}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ character.ascensionPhase }}</td>
          <td>{{ character.level }}</td>
          <td>{{ character.ATK }}</td>
          <td>{{ character.specializedStats.value }}</td>
        </tr>
      </tbody>
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
