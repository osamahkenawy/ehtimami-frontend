import type { RouteRecordRaw } from 'vue-router';

export default <RouteRecordRaw[]>[
  {
    path: '/font-icons',
    name: 'font-icons',
    component: () => import('@/views/font-icons.vue'),
  },
];
