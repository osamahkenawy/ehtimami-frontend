import type { RouteRecordRaw } from 'vue-router';

export default <RouteRecordRaw[]>[
  {
    path: '/settings-configuration/org-chart',
    name: 'organization-chart',
    component: () =>
      import('@/views/settings/organization/permissions/org-chart/Index.vue'),
  },
];
