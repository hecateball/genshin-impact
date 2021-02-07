import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'index', component: () => import('~/pages/Index.vue') },
    {
      path: '/characters',
      name: 'characters',
      component: () => import('~/pages/characters/Index.vue'),
    },
    {
      path: '/weapons',
      name: 'weapons',
      component: () => import('~/pages/weapons/Index.vue'),
    },
  ],
})
