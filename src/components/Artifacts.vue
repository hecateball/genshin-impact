<template>
  <section class="space-y-2">
    <h1 class="section-heading">聖遺物</h1>
    <table class="table-fixed border w-full">
      <tr class="text-center border">
        <th>生の花</th>
        <th>死の羽</th>
        <th>時の砂</th>
        <th>空の杯</th>
        <th>理の冠</th>
      </tr>
      <tr class="text-center border">
        <td>吹雪の中の思い</td>
        <td>氷を砕く執念</td>
        <td>雪覆う故郷の最後</td>
        <td>霜を纏った気骨</td>
        <td>氷雪を踏む音</td>
      </tr>
    </table>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup: () => {},
})
</script>

<style>
.section-heading {
  @apply text-2xl font-bold;
}
</style>
