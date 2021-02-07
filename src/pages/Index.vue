<template>
  <Character />
  <Weapon />
  <h3>聖遺物</h3>
  <h4>花</h4>
  <div>星の数: <input type="number" v-model="stars" /></div>
  <div>レベル: <input type="number" v-model="level" /></div>
  <div>HP: {{ flower.HP }}</div>

  <h4>羽</h4>
  <h4>砂</h4>
  <h4>盃</h4>
  <h4>冠</h4>
  <h2>ダメージ期待値</h2>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { provideCharacter } from '~/composables/character'
import { provideWeapon } from '~/composables/weapon'
import { useFlower } from '~/composables/flower-of-life'
import Character from '~/components/Character.vue'
import Weapon from '~/components/Weapon.vue'

export default defineComponent({
  components: {
    Character,
    Weapon,
  },
  setup: () => {
    provideCharacter()
    provideWeapon()
    const { stars, level, flower } = useFlower()
    return {
      stars,
      level,
      flower,
    }
  },
})
</script>
