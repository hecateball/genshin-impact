<template>
  <template v-if="showDetail">
    <section>
      <h1>通常攻撃</h1>
      <table class="table-fixed border w-full">
        <tr class="text-center border">
          <th colspan="2">天賦レベル</th>
          <td v-for="(value, index) in liutianArchery.expectedValues.normal1">
            {{ index + 1 }}
          </td>
        </tr>
        <tr class="text-center border">
          <th rowspan="6">ダメージ期待値</th>
          <th>1段</th>
          <td v-for="value in liutianArchery.expectedValues.normal1">
            {{ value }}
          </td>
        </tr>
        <tr class="text-center border">
          <th>2段</th>
          <td v-for="value in liutianArchery.expectedValues.normal2">
            {{ value }}
          </td>
        </tr>
        <tr class="text-center border">
          <th>3段</th>
          <td v-for="value in liutianArchery.expectedValues.normal3">
            {{ value }}
          </td>
        </tr>
        <tr class="text-center border">
          <th>4段</th>
          <td v-for="value in liutianArchery.expectedValues.normal4">
            {{ value }}
          </td>
        </tr>
        <tr class="text-center border">
          <th>5段</th>
          <td v-for="value in liutianArchery.expectedValues.normal5">
            {{ value }}
          </td>
        </tr>
        <tr class="text-center border">
          <th>6段</th>
          <td v-for="value in liutianArchery.expectedValues.normal6">
            {{ value }}
          </td>
        </tr>
        <tr class="text-center border">
          <th rowspan="6">ダメージ最大値</th>
          <th>1段</th>
          <td v-for="value in liutianArchery.maxValues.normal1">
            {{ value }}
          </td>
        </tr>
        <tr class="text-center border">
          <th>2段</th>
          <td v-for="value in liutianArchery.maxValues.normal2">
            {{ value }}
          </td>
        </tr>
        <tr class="text-center border">
          <th>3段</th>
          <td v-for="value in liutianArchery.maxValues.normal3">
            {{ value }}
          </td>
        </tr>
        <tr class="text-center border">
          <th>4段</th>
          <td v-for="value in liutianArchery.maxValues.normal4">
            {{ value }}
          </td>
        </tr>
        <tr class="text-center border">
          <th>5段</th>
          <td v-for="value in liutianArchery.maxValues.normal5">
            {{ value }}
          </td>
        </tr>
        <tr class="text-center border">
          <th>6段</th>
          <td v-for="value in liutianArchery.maxValues.normal6">
            {{ value }}
          </td>
        </tr>
      </table>
    </section>
    <section>
      <h1>重撃</h1>
      <table class="table-fixed border w-full">
        <tr class="text-center border">
          <th colspan="2">天賦レベル</th>
          <td v-for="(value, index) in liutianArchery.expectedValues.aimedShot">
            {{ index + 1 }}
          </td>
        </tr>
        <tr class="text-center border">
          <th rowspan="4">ダメージ期待値</th>
          <th>狙い撃ち</th>
          <td v-for="value in liutianArchery.expectedValues.aimedShot">
            {{ value }}
          </td>
        </tr>
        <tr class="text-center border">
          <th>チャージ</th>
          <td v-for="value in liutianArchery.expectedValues.aimedShotCharge">
            {{ value }}
          </td>
        </tr>
        <tr class="text-center border">
          <th>霜華の矢</th>
          <td v-for="value in liutianArchery.expectedValues.frostFlakeArrow">
            {{ value }}
          </td>
        </tr>
        <tr class="text-center border">
          <th>霜華満開</th>
          <td v-for="value in liutianArchery.expectedValues.frostFlakeArrowBloom">
            {{ value }}
          </td>
        </tr>
        <tr class="text-center border">
          <th rowspan="4">ダメージ最大値</th>
          <th>狙い撃ち</th>
          <td v-for="value in liutianArchery.maxValues.aimedShot">
            {{ value }}
          </td>
        </tr>
        <tr class="text-center border">
          <th>チャージ</th>
          <td v-for="value in liutianArchery.maxValues.aimedShotCharge">
            {{ value }}
          </td>
        </tr>
        <tr class="text-center border">
          <th>霜華の矢</th>
          <td v-for="value in liutianArchery.maxValues.frostFlakeArrow">
            {{ value }}
          </td>
        </tr>
        <tr class="text-center border">
          <th>霜華満開</th>
          <td v-for="value in liutianArchery.maxValues.frostFlakeArrowBloom">
            {{ value }}
          </td>
        </tr>
      </table>
    </section>
    <section>
      <h1>狙い撃ち・1段チャージ</h1>
      <table class="table-fixed border w-full">
        <tr class="text-center border">
          <th>天賦レベル</th>
          <td v-for="(value, index) in liutianArchery.expectedValues.aimedShot">
            {{ index + 1 }}
          </td>
        </tr>
        <tr class="text-center border">
          <th>ダメージ期待値</th>
          <td v-for="value in liutianArchery.expectedValues.aimedShot">
            {{ value }}
          </td>
        </tr>
        <tr class="text-center border">
          <th>ダメージ最大値</th>
          <td v-for="value in liutianArchery.maxValues.aimedShot">
            {{ value }}
          </td>
        </tr>
      </table>
    </section>
    <section>
      <h1>元素スキル</h1>
      <table class="table-fixed border w-full">
        <tr class="text-center border">
          <th>天賦レベル</th>
          <td v-for="(value, index) in trailOfTheQilin.expectedValues">
            {{ index + 1 }}
          </td>
        </tr>
        <tr class="text-center border">
          <th>ダメージ期待値</th>
          <td v-for="value in trailOfTheQilin.expectedValues">
            {{ value }}
          </td>
        </tr>
        <tr class="text-center border">
          <th>ダメージ最大値</th>
          <td v-for="value in trailOfTheQilin.maxValues">
            {{ value }}
          </td>
        </tr>
      </table>
    </section>
    <section>
      <h1>元素爆発</h1>
      <table class="table-fixed border w-full">
        <tr class="text-center border">
          <th>天賦レベル</th>
          <td v-for="(value, index) in celestialShower.expectedValues">
            {{ index + 1 }}
          </td>
        </tr>
        <tr class="text-center border">
          <th>ダメージ期待値</th>
          <td v-for="value in celestialShower.expectedValues">
            {{ value }}
          </td>
        </tr>
        <tr class="text-center border">
          <th>ダメージ最大値</th>
          <td v-for="value in celestialShower.maxValues">
            {{ value }}
          </td>
        </tr>
      </table>
    </section>
  </template>
  <template v-else>
    <section>
      <table class="table-fixed border w-full">
        <tr class="text-center border">
          <th colspan="2">天賦レベル</th>
          <td v-for="(value, index) in liutianArchery.expectedValues.frostFlakeArrow">
            {{ index + 1 }}
          </td>
        </tr>
        <tr class="text-center border">
          <th rowspan="3">ダメージ期待値</th>
          <th>霜華の矢</th>
          <td v-for="value in liutianArchery.expectedValues.frostFlakeArrow">
            {{ value }}
          </td>
        </tr>
        <tr class="text-center border">
          <th>霜華満開</th>
          <td v-for="value in liutianArchery.expectedValues.frostFlakeArrowBloom">
            {{ value }}
          </td>
        </tr>
        <tr class="text-center border">
          <th>合計</th>
          <td v-for="(value, index) in liutianArchery.expectedValues.frostFlakeArrow">
            {{ value + liutianArchery.expectedValues.frostFlakeArrowBloom[index] }}
          </td>
        </tr>
        <tr class="text-center border">
          <th rowspan="3">ダメージ最大値</th>
          <th>霜華の矢</th>
          <td v-for="value in liutianArchery.maxValues.frostFlakeArrow">
            {{ value }}
          </td>
        </tr>
        <tr class="text-center border">
          <th>霜華満開</th>
          <td v-for="value in liutianArchery.maxValues.frostFlakeArrowBloom">
            {{ value }}
          </td>
        </tr>
        <tr class="text-center border">
          <th>合計</th>
          <td v-for="(value, index) in liutianArchery.maxValues.frostFlakeArrow">
            {{ value + liutianArchery.maxValues.frostFlakeArrowBloom[index] }}
          </td>
        </tr>
      </table>
    </section>
  </template>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useLiutianArchery, useTrailOfTheQilin, useCelestialShower } from '~/composables/characters/ganyu'

export default defineComponent({
  setup: () => {
    const showDetail = ref<boolean>(false)
    const liutianArchery = useLiutianArchery()
    const trailOfTheQilin = useTrailOfTheQilin()
    const celestialShower = useCelestialShower()
    return {
      showDetail,
      liutianArchery,
      trailOfTheQilin,
      celestialShower,
    }
  },
})
</script>
