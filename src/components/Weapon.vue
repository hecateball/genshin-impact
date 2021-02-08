<template>
  <section>
    <h1>武器: {{ $t(`weapons.${weapon.name}`) }}</h1>
    <table>
      <thead>
        <tr>
          <th>精錬段階</th>
          <th>レベル</th>
          <th>攻撃力</th>
          <th>{{ $t(`stats.${weapon.secondaryStat.type}`) }}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ weapon.ascensionPhase }}</td>
          <td>{{ weapon.level }}</td>
          <td>{{ weapon.ATK }}</td>
          <td>{{ weapon.secondaryStat.value }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useWeapon } from '../composables/equipments/weapon'

export default defineComponent({
  setup: () => {
    const { weapon } = useWeapon()
    return {
      weapon,
    }
  },
})
</script>
