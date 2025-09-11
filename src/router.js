import { createRouter, createWebHistory } from 'vue-router';

import HomeView from './components/HomeView.vue';
import ErrorView from './components/ErrorView.vue';

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/error', name: 'error', component: ErrorView },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

