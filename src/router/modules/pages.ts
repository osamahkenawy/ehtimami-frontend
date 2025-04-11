import type { RouteRecordRaw } from 'vue-router';

export default <RouteRecordRaw[]>[
  {
    path: '/pages/knowledge-base',
    name: 'knowledge-base',
    component: () => import('@/views/pages/knowledge-base.vue'),
  },
  {
    path: '/pages/contact-us-boxed',
    name: 'contact-us-boxed',
    component: () => import('@/views/pages/contact-us-boxed.vue'),
    meta: { layout: 'auth' },
  },
  {
    path: '/pages/contact-us-cover',
    name: 'contact-us-cover',
    component: () => import('@/views/pages/contact-us-cover.vue'),
    meta: { layout: 'auth' },
  },
  {
    path: '/pages/faq',
    name: 'faq',
    component: () => import('@/views/pages/faq.vue'),
  },
  {
    path: '/pages/coming-soon-boxed',
    name: 'coming-soon-boxed',
    component: () => import('@/views/pages/coming-soon-boxed.vue'),
    meta: { layout: 'auth' },
  },
  {
    path: '/pages/coming-soon-cover',
    name: 'coming-soon-cover',
    component: () => import('@/views/pages/coming-soon-cover.vue'),
    meta: { layout: 'auth' },
  },
  {
    path: '/pages/error404',
    name: 'error404',
    component: () => import('@/views/pages/error404.vue'),
    meta: { layout: 'auth' },
  },
  {
    path: '/pages/error500',
    name: 'error500',
    component: () => import('@/views/pages/error500.vue'),
    meta: { layout: 'auth' },
  },
  {
    path: '/pages/error503',
    name: 'error503',
    component: () => import('@/views/pages/error503.vue'),
    meta: { layout: 'auth' },
  },
  {
    path: '/pages/maintenence',
    name: 'maintenence',
    component: () => import('@/views/pages/maintenence.vue'),
    meta: { layout: 'auth' },
  },
];
