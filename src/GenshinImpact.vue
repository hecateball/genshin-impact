<template>
  <div>
    <header>
      <h1>原神計算機</h1>
      <nav>
        <ul>
          <li><RouterLink :to="{ name: 'index' }">Index</RouterLink></li>
          <li><RouterLink :to="{ name: 'characters' }">Characters</RouterLink></li>
          <li><RouterLink :to="{ name: 'weapons' }">Weapons</RouterLink></li>
        </ul>
      </nav>
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>
