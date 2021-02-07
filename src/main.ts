import { createApp } from 'vue'
import { firebaseInit } from '~/plugins/firebase'
import { router } from '~/router'
import GenshinImpact from '~/GenshinImpact.vue'

createApp(GenshinImpact)
  .use(firebaseInit)
  .use(router)
  .mount('#app')
