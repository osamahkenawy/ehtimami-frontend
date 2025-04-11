import type { RouteRecordRaw } from 'vue-router';
import HomeView from '@/views/index.vue';

export default <RouteRecordRaw[]>[
  { path: '/', name: 'home', component: HomeView },
  {
    path: '/analytics',
    name: 'analytics',
    component: () => import('@/views/analytics.vue'),
  },
  {
    path: '/finance',
    name: 'finance',
    component: () => import('@/views/finance.vue'),
  },
  {
    path: '/crypto',
    name: 'crypto',
    component: () => import('@/views/crypto.vue'),
  },
];
