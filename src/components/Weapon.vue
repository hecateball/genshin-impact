<template>
  <section>
    <h1>武器</h1>
    <h2>{{ weapon.name }}</h2>
    レベル: {{ weapon.level }}
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
