import type { RouteRecordRaw } from 'vue-router';

export default <RouteRecordRaw[]>[
  { path: '/elements/alerts', name: 'alerts', component: () => import('@/views/elements/alerts.vue') },
  { path: '/elements/avatar', name: 'avatar', component: () => import('@/views/elements/avatar.vue') },
  { path: '/elements/badges', name: 'badges', component: () => import('@/views/elements/badges.vue') },
  { path: '/elements/breadcrumbs', name: 'breadcrumbs', component: () => import('@/views/elements/breadcrumbs.vue') },
  { path: '/elements/buttons', name: 'buttons', component: () => import('@/views/elements/buttons.vue') },
  { path: '/elements/buttons-group', name: 'buttons-group', component: () => import('@/views/elements/buttons-group.vue') },
  { path: '/elements/color-library', name: 'color-library', component: () => import('@/views/elements/color-library.vue') },
  { path: '/elements/dropdown', name: 'dropdown', component: () => import('@/views/elements/dropdown.vue') },
  { path: '/elements/infobox', name: 'infobox', component: () => import('@/views/elements/infobox.vue') },
  { path: '/elements/jumbotron', name: 'jumbotron', component: () => import('@/views/elements/jumbotron.vue') },
  { path: '/elements/loader', name: 'loader', component: () => import('@/views/elements/loader.vue') },
  { path: '/elements/pagination', name: 'pagination', component: () => import('@/views/elements/pagination.vue') },
  { path: '/elements/popovers', name: 'popovers', component: () => import('@/views/elements/popovers.vue') },
  { path: '/elements/progress-bar', name: 'progress-bar', component: () => import('@/views/elements/progress-bar.vue') },
  { path: '/elements/search', name: 'search', component: () => import('@/views/elements/search.vue') },
  { path: '/elements/tooltips', name: 'tooltips', component: () => import('@/views/elements/tooltips.vue') },
  { path: '/elements/treeview', name: 'treeview', component: () => import('@/views/elements/treeview.vue') },
  { path: '/elements/typography', name: 'typography', component: () => import('@/views/elements/typography.vue') },
];
