import type { RouteRecordRaw } from 'vue-router';

export default <RouteRecordRaw[]>[
  { path: '/forms/basic', name: 'basic', component: () => import('@/views/forms/basic.vue') },
  { path: '/forms/input-group', name: 'input-group', component: () => import('@/views/forms/input-group.vue') },
  { path: '/forms/layouts', name: 'layouts', component: () => import('@/views/forms/layouts.vue') },
  { path: '/forms/validation', name: 'validation', component: () => import('@/views/forms/validation.vue') },
  { path: '/forms/input-mask', name: 'input-mask', component: () => import('@/views/forms/input-mask.vue') },
  { path: '/forms/select2', name: 'select2', component: () => import('@/views/forms/select2.vue') },
  { path: '/forms/touchspin', name: 'touchspin', component: () => import('@/views/forms/touchspin.vue') },
  { path: '/forms/checkbox-radio', name: 'checkbox-radio', component: () => import('@/views/forms/checkbox-radio.vue') },
  { path: '/forms/switches', name: 'switches', component: () => import('@/views/forms/switches.vue') },
  { path: '/forms/wizards', name: 'wizards', component: () => import('@/views/forms/wizards.vue') },
  { path: '/forms/file-upload', name: 'file-upload', component: () => import('@/views/forms/file-upload.vue') },
  { path: '/forms/quill-editor', name: 'quill-editor', component: () => import('@/views/forms/quill-editor.vue') },
  { path: '/forms/markdown-editor', name: 'markdown-editor', component: () => import('@/views/forms/markdown-editor.vue') },
  { path: '/forms/date-picker', name: 'date-picker', component: () => import('@/views/forms/date-picker.vue') },
  { path: '/forms/clipboard', name: 'clipboard', component: () => import('@/views/forms/clipboard.vue') },
];
