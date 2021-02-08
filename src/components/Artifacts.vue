<template>
  <section>
    <h1>聖遺物</h1>
    <table>
      <thead>
        <tr>
          <th>生の花</th>
          <th>死の羽</th>
          <th>時の砂</th>
          <th>空の杯</th>
          <th>理の冠</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>吹雪の中の思い</td>
          <td>氷を砕く執念</td>
          <td>雪覆う故郷の最後</td>
          <td>霜を纏った気骨</td>
          <td>氷雪を踏む音</td>
        </tr>
      </tbody>
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
