<template>
  <template v-if="details">
    <section>
      <h1>通常攻撃</h1>
      <table>
        <thead>
          <tr>
            <th colspan="2">天賦レベル</th>
            <th v-for="index of liutianArchery.expectedValues.normal1.length">
              {{ index }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th rowspan="6">ダメージ期待値</th>
            <th>1段</th>
            <td v-for="value in liutianArchery.expectedValues.normal1">
              {{ value }}
            </td>
          </tr>
          <tr>
            <th>2段</th>
            <td v-for="value in liutianArchery.expectedValues.normal2">
              {{ value }}
            </td>
          </tr>
          <tr>
            <th>3段</th>
            <td v-for="value in liutianArchery.expectedValues.normal3">
              {{ value }}
            </td>
          </tr>
          <tr>
            <th>4段</th>
            <td v-for="value in liutianArchery.expectedValues.normal4">
              {{ value }}
            </td>
          </tr>
          <tr>
            <th>5段</th>
            <td v-for="value in liutianArchery.expectedValues.normal5">
              {{ value }}
            </td>
          </tr>
          <tr>
            <th>6段</th>
            <td v-for="value in liutianArchery.expectedValues.normal6">
              {{ value }}
            </td>
          </tr>
          <tr>
            <th rowspan="6">ダメージ最大値</th>
            <th>1段</th>
            <td v-for="value in liutianArchery.maxValues.normal1">
              {{ value }}
            </td>
          </tr>
          <tr>
            <th>2段</th>
            <td v-for="value in liutianArchery.maxValues.normal2">
              {{ value }}
            </td>
          </tr>
          <tr>
            <th>3段</th>
            <td v-for="value in liutianArchery.maxValues.normal3">
              {{ value }}
            </td>
          </tr>
          <tr>
            <th>4段</th>
            <td v-for="value in liutianArchery.maxValues.normal4">
              {{ value }}
            </td>
          </tr>
          <tr>
            <th>5段</th>
            <td v-for="value in liutianArchery.maxValues.normal5">
              {{ value }}
            </td>
          </tr>
          <tr>
            <th>6段</th>
            <td v-for="value in liutianArchery.maxValues.normal6">
              {{ value }}
            </td>
          </tr>
        </tbody>
      </table>
    </section>
    <section>
      <h1>重撃</h1>
      <table>
        <thead>
          <tr>
            <th colspan="2">天賦レベル</th>
            <th v-for="index of liutianArchery.expectedValues.aimedShot.length">
              {{ index }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th rowspan="4">ダメージ期待値</th>
            <th>狙い撃ち</th>
            <td v-for="value in liutianArchery.expectedValues.aimedShot">
              {{ value }}
            </td>
          </tr>
          <tr>
            <th>チャージ</th>
            <td v-for="value in liutianArchery.expectedValues.aimedShotCharge">
              {{ value }}
            </td>
          </tr>
          <tr>
            <th>霜華の矢</th>
            <td v-for="value in liutianArchery.expectedValues.frostFlakeArrow">
              {{ value }}
            </td>
          </tr>
          <tr>
            <th>霜華満開</th>
            <td v-for="value in liutianArchery.expectedValues.frostFlakeArrowBloom">
              {{ value }}
            </td>
          </tr>
          <tr>
            <th rowspan="4">ダメージ最大値</th>
            <th>狙い撃ち</th>
            <td v-for="value in liutianArchery.maxValues.aimedShot">
              {{ value }}
            </td>
          </tr>
          <tr>
            <th>チャージ</th>
            <td v-for="value in liutianArchery.maxValues.aimedShotCharge">
              {{ value }}
            </td>
          </tr>
          <tr>
            <th>霜華の矢</th>
            <td v-for="value in liutianArchery.maxValues.frostFlakeArrow">
              {{ value }}
            </td>
          </tr>
          <tr>
            <th>霜華満開</th>
            <td v-for="value in liutianArchery.maxValues.frostFlakeArrowBloom">
              {{ value }}
            </td>
          </tr>
        </tbody>
      </table>
    </section>
    <section>
      <h1>元素スキル</h1>
      <table>
        <thead>
          <tr>
            <th>天賦レベル</th>
            <th v-for="index of trailOfTheQilin.expectedValues.length">
              {{ index }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>ダメージ期待値</th>
            <td v-for="value in trailOfTheQilin.expectedValues">
              {{ value }}
            </td>
          </tr>
          <tr>
            <th>ダメージ最大値</th>
            <td v-for="value in trailOfTheQilin.maxValues">
              {{ value }}
            </td>
          </tr>
        </tbody>
      </table>
    </section>
    <section>
      <h1>元素爆発</h1>
      <table>
        <thead>
          <tr>
            <th>天賦レベル</th>
            <th v-for="index of celestialShower.expectedValues.length">
              {{ index }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>ダメージ期待値</th>
            <td v-for="value in celestialShower.expectedValues">
              {{ value }}
            </td>
          </tr>
          <tr>
            <th>ダメージ最大値</th>
            <td v-for="value in celestialShower.maxValues">
              {{ value }}
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </template>
  <template v-else>
    <section>
      <table>
        <thead>
          <tr>
            <th colspan="2">天賦レベル</th>
            <th v-for="index of liutianArchery.expectedValues.frostFlakeArrow.length">
              {{ index }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th rowspan="3">ダメージ期待値</th>
            <th>霜華の矢</th>
            <td v-for="value in liutianArchery.expectedValues.frostFlakeArrow">
              {{ value }}
            </td>
          </tr>
          <tr>
            <th>霜華満開</th>
            <td v-for="value in liutianArchery.expectedValues.frostFlakeArrowBloom">
              {{ value }}
            </td>
          </tr>
          <tr>
            <th>合計</th>
            <td v-for="(value, index) in liutianArchery.expectedValues.frostFlakeArrow">
              {{ value + liutianArchery.expectedValues.frostFlakeArrowBloom[index] }}
            </td>
          </tr>
          <tr>
            <th rowspan="3">ダメージ最大値</th>
            <th>霜華の矢</th>
            <td v-for="value in liutianArchery.maxValues.frostFlakeArrow">
              {{ value }}
            </td>
          </tr>
          <tr>
            <th>霜華満開</th>
            <td v-for="value in liutianArchery.maxValues.frostFlakeArrowBloom">
              {{ value }}
            </td>
          </tr>
          <tr>
            <th>合計</th>
            <td v-for="(value, index) in liutianArchery.maxValues.frostFlakeArrow">
              {{ value + liutianArchery.maxValues.frostFlakeArrowBloom[index] }}
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </template>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useLiutianArchery, useTrailOfTheQilin, useCelestialShower } from '~/composables/charts/ganyu'

export default defineComponent({
  props: {
    details: {
      type: Boolean,
      required: true,
    },
  },
  setup: () => {
    const liutianArchery = useLiutianArchery()
    const trailOfTheQilin = useTrailOfTheQilin()
    const celestialShower = useCelestialShower()
    return {
      liutianArchery,
      trailOfTheQilin,
      celestialShower,
    }
  },
})
</script>

<style scoped>
section table {
  display: block;
  overflow-x: scroll;
  white-space: nowrap;
}
</style>
