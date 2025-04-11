import type { RouteRecordRaw } from 'vue-router';

export default <RouteRecordRaw[]>[
  {
    path: '/dragndrop',
    name: 'dragndrop',
    component: () => import('@/views/dragndrop.vue'),
  },
];
