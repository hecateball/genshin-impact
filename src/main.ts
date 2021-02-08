import { createApp } from 'vue'
import { i18n } from '~/i18n'
import { router } from '~/router'
import GenshinImpact from '~/GenshinImpact.vue'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/analytics'
import 'firebase/firestore'
import '@exampledev/new.css'

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
  if (currentUser !== null) {
    return
  }
  const credential = await firebase.auth().signInAnonymously()
  await firebase.firestore().collection('users').doc(credential.user!.uid).set({
    displayName: 'Guest',
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  })
})

createApp(GenshinImpact).use(i18n).use(router).mount('#app')
