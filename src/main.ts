import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/analytics'
import { createApp } from 'vue'
import { router } from '~/router'
import GenshinImpact from '~/GenshinImpact.vue'
import '~/assets/index.css'

if (firebase.apps.length === 0) {
  firebase.initializeApp({
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
  })
  firebase.analytics()
}

router.beforeEach(async () => {
  const currentUser = await new Promise((resolve) => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      unsubscribe()
      resolve(user)
    })
  })
  if (currentUser === null) {
    const credential = await firebase.auth().signInAnonymously()
    console.log('user: ', credential.user?.uid)
  }
})

createApp(GenshinImpact).use(router).mount('#app')
