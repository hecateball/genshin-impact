<template>
  <Character />
  <Weapon />
  <h3>聖遺物</h3>
  <h4>花</h4>
  <h4>羽</h4>
  <h4>砂</h4>
  <h4>盃</h4>
  <h4>冠</h4>
  <Damage />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { provideCharacter } from '~/composables/character'
import { provideWeapon } from '~/composables/equipments/weapon'
import Character from '~/components/Character.vue'
import Weapon from '~/components/Weapon.vue'
import Damage from '~/components/Damage.vue'

export default defineComponent({
  components: {
    Character,
    Weapon,
    Damage,
  },
  setup: () => {
    provideCharacter()
    provideWeapon()
    return {}
  },
})
</script>
