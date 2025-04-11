import type { RouteRecordRaw } from 'vue-router';

export default <RouteRecordRaw[]>[
  {
    path: '/charts',
    name: 'charts',
    component: () => import('@/views/charts.vue'),
  },
];
