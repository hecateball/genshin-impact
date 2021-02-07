<template>
  <section class="space-y-2">
    <h1 class="section-heading">武器: {{ weapon.name }}</h1>
    <table class="table-fixed border w-full">
      <tr class="text-center border">
        <th>精錬段階</th>
        <th>レベル</th>
        <th>攻撃力</th>
        <th>{{ formatStatType(weapon.secondaryStat.type) }}</th>
      </tr>
      <tr class="text-center border">
        <td>{{ weapon.ascensionPhase }}</td>
        <td>{{ weapon.level }}</td>
        <td>{{ weapon.ATK }}</td>
        <td>{{ weapon.secondaryStat.value }}</td>
      </tr>
    </table>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useWeapon } from '../composables/equipments/weapon'
import { useFormatStatType } from '~/composables/formatter'

export default defineComponent({
  setup: () => {
    const { weapon } = useWeapon()
    const { formatStatType } = useFormatStatType()
    return {
      weapon,
      formatStatType,
    }
  },
})
</script>

<style>
.section-heading {
  @apply text-2xl font-bold;
}
</style>
