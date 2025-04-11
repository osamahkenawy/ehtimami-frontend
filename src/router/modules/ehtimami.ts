import type { RouteRecordRaw } from 'vue-router';

export default <RouteRecordRaw[]>[
  {
    path: '/ehtimami/chat',
    name: 'chat',
    component: () => import('@/views/ehtimami/chat.vue'),
  },
  {
    path: '/ehtimami/schools',
    name: 'schools',
    component: () => import('@/views/ehtimami/schools/index.vue'),
  },
  {
    path: '/ehtimami/schools/add',
    name: 'add-school',
    component: () => import('@/views/ehtimami/schools/components/add.vue'),
  },
  {
    path: '/ehtimami/classes',
    name: 'classes',
    component: () => import('@/views/ehtimami/classes/index.vue'),
  },
  {
    path: '/ehtimami/classes/add',
    name: 'add-class',
    component: () => import('@/views/ehtimami/classes/components/add.vue'),
  },
  {
    path: '/ehtimami/teachers',
    name: 'teachers',
    component: () => import('@/views/ehtimami/teachers/index.vue'),
  },
  {
    path: '/ehtimami/teachers/add',
    name: 'add-teacher',
    component: () => import('@/views/ehtimami/teachers/components/add.vue'),
  },
  {
    path: '/ehtimami/trip-dispatch',
    name: 'trip-dispatch',
    component: () => import('@/views/ehtimami/trip-dispatch.vue'),
  },
  {
    path: '/ehtimami/livemap',
    name: 'livemap',
    component: () => import('@/views/ehtimami/livemap.vue'),
  },
  {
    path: '/ehtimami/user',
    name: 'user',
    component: () => import('@/views/ehtimami/users/index.vue'),
  },
  {
    path: '/ehtimami/user/profile/:id',
    name: 'user-profile',
    component: () => import('@/views/ehtimami/users/components/Profile/index.vue'),
  },
  {
    path: '/ehtimami/students',
    name: 'students',
    component: () => import('@/views/ehtimami/students/index.vue'),
  },
  {
    path: '/ehtimami/students/profile/:id',
    name: 'student-profile',
    component: () => import('@/views/ehtimami/students/components/Profile/index.vue'),
  },
  {
    path: '/ehtimami/mailbox',
    name: 'mailbox',
    component: () => import('@/views/ehtimami/mailbox.vue'),
  },
  {
    path: '/ehtimami/todolist',
    name: 'todolist',
    component: () => import('@/views/ehtimami/todolist.vue'),
  },
  {
    path: '/ehtimami/notes',
    name: 'notes',
    component: () => import('@/views/ehtimami/notes.vue'),
  },
  {
    path: '/ehtimami/scrumboard',
    name: 'scrumboard',
    component: () => import('@/views/ehtimami/scrumboard.vue'),
  },
  {
    path: '/ehtimami/contacts',
    name: 'contacts',
    component: () => import('@/views/ehtimami/contacts.vue'),
  },
  {
    path: '/ehtimami/invoice/list',
    name: 'invoice-list',
    component: () => import('@/views/ehtimami/invoice/list.vue'),
  },
  {
    path: '/ehtimami/invoice/preview',
    name: 'invoice-preview',
    component: () => import('@/views/ehtimami/invoice/preview.vue'),
  },
  {
    path: '/ehtimami/invoice/add',
    name: 'invoice-add',
    component: () => import('@/views/ehtimami/invoice/add.vue'),
  },
  {
    path: '/ehtimami/invoice/edit',
    name: 'invoice-edit',
    component: () => import('@/views/ehtimami/invoice/edit.vue'),
  },
  {
    path: '/ehtimami/calendar',
    name: 'calendar',
    component: () => import('@/views/ehtimami/calendar.vue'),
  },
];
