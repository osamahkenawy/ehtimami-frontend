import type { RouteRecordRaw } from 'vue-router';

export default <RouteRecordRaw[]>[
  {
    path: '/users/profile',
    name: 'profile',
    component: () => import('@/views/users/profile.vue'),
  },
  {
    path: '/users/user-account-settings',
    name: 'user-account-settings',
    component: () => import('@/views/users/user-account-settings.vue'),
  },
];
