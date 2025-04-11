import type { RouteRecordRaw } from 'vue-router';

export default <RouteRecordRaw[]>[
  { path: '/components/tabs', name: 'tabs', component: () => import('@/views/components/tabs.vue') },
  { path: '/components/accordions', name: 'accordions', component: () => import('@/views/components/accordions.vue') },
  { path: '/components/modals', name: 'modals', component: () => import('@/views/components/modals.vue') },
  { path: '/components/cards', name: 'cards', component: () => import('@/views/components/cards.vue') },
  { path: '/components/carousel', name: 'carousel', component: () => import('@/views/components/carousel.vue') },
  { path: '/components/countdown', name: 'countdown', component: () => import('@/views/components/countdown.vue') },
  { path: '/components/counter', name: 'counter', component: () => import('@/views/components/counter.vue') },
  { path: '/components/sweetalert', name: 'sweetalert', component: () => import('@/views/components/sweetalert.vue') },
  { path: '/components/timeline', name: 'timeline', component: () => import('@/views/components/timeline.vue') },
  { path: '/components/notifications', name: 'notifications', component: () => import('@/views/components/notifications.vue') },
  { path: '/components/media-object', name: 'media-object', component: () => import('@/views/components/media-object.vue') },
  { path: '/components/list-group', name: 'list-group', component: () => import('@/views/components/list-group.vue') },
  { path: '/components/pricing-table', name: 'pricing-table', component: () => import('@/views/components/pricing-table.vue') },
  { path: '/components/lightbox', name: 'lightbox', component: () => import('@/views/components/lightbox.vue') },
];
