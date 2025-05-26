import type { RouteRecordRaw } from 'vue-router';

export default <RouteRecordRaw[]>[
  {
    path: '/roles/profile',
    name: 'profile',
    component: () => import('@/views/users/profile.vue'),
  },
  {
    path: '/roles/user-account-settings',
    name: 'user-account-settings',
    component: () => import('@/views/users/user-account-settings.vue'),
  },
];
