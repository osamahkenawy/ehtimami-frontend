import type { RouteRecordRaw } from 'vue-router';

export default <RouteRecordRaw[]>[
  {
    path: '/widgets',
    name: 'widgets',
    component: () => import('@/views/widgets.vue'),
  },
];
