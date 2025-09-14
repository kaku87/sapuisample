import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

import HomeView from './components/HomeView.vue';
import ErrorView from './components/ErrorView.vue';

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: HomeView },
  // Pass status via path param only
  { path: '/error/:status(\\d+)?', name: 'error', component: ErrorView },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
