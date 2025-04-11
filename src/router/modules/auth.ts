import type { RouteRecordRaw } from 'vue-router';

export default <RouteRecordRaw[]>[
  {
    path: '/auth/ehtimami-signin',
    name: 'ehtimami-signin',
    component: () => import('@/views/auth/boxed-signin.vue'),
    meta: { layout: 'auth' },
  },
  { 
    path: '/auth/boxed-signup',
    name: 'boxed-signup',
    component: () => import('@/views/auth/boxed-signup.vue'),
    meta: { layout: 'auth' },
  },
  {
    path: '/auth/boxed-lockscreen',
    name: 'boxed-lockscreen',
    component: () => import('@/views/auth/boxed-lockscreen.vue'),
    meta: { layout: 'auth' },
  },
  {
    path: '/auth/reset-password',
    name: 'reset-password',
    component: () => import('@/views/auth/password-reset.vue'),
    meta: { layout: 'auth' },
    props: route => ({ token: route.query.token }),
  },
  {
    path: '/auth/cover-login',
    name: 'cover-login',
    component: () => import('@/views/auth/cover-login.vue'),
    meta: { layout: 'auth' },
  },
  {
    path: '/auth/cover-register',
    name: 'cover-register',
    component: () => import('@/views/auth/cover-register.vue'),
    meta: { layout: 'auth' },
  },
  {
    path: '/auth/cover-lockscreen',
    name: 'cover-lockscreen',
    component: () => import('@/views/auth/cover-lockscreen.vue'),
    meta: { layout: 'auth' },
  },
  {
    path: '/auth/forgot-password',
    name: 'forgot-password',
    component: () => import('@/views/auth/forgot-password.vue'),
    meta: { layout: 'auth' },
  },
];
