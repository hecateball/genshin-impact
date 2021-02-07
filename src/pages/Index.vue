<template>
  <Character class="mt-2" />
  <Weapon class="mt-2" />
  <Artifacts class="mt-2" />
  <h3>敵の状態</h3>
  <DamageChart />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { provideCharacter } from '~/composables/character'
import { provideWeapon } from '~/composables/equipments/weapon'
import Character from '~/components/Character.vue'
import Weapon from '~/components/Weapon.vue'
import Artifacts from '~/components/Artifacts.vue'
import DamageChart from '~/components/DamageChart.vue'

export default defineComponent({
  components: {
    Character,
    Weapon,
    Artifacts,
    DamageChart,
  },
  setup: () => {
    provideCharacter()
    provideWeapon()
    return {}
  },
})
</script>
