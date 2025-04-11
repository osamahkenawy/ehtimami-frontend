import type { RouteRecordRaw } from 'vue-router';

export default <RouteRecordRaw[]>[
  {
    path: '/tables',
    name: 'tables',
    component: () => import('@/views/tables.vue'),
  },
  {
    path: '/datatables/basic',
    name: 'datatables-basic',
    component: () => import('@/views/datatables/basic.vue'),
  },
  {
    path: '/datatables/advanced',
    name: 'datatables-advanced',
    component: () => import('@/views/datatables/advanced.vue'),
  },
  {
    path: '/datatables/skin',
    name: 'skin',
    component: () => import('@/views/datatables/skin.vue'),
  },
  {
    path: '/datatables/order-sorting',
    name: 'order-sorting',
    component: () => import('@/views/datatables/order-sorting.vue'),
  },
  {
    path: '/datatables/columns-filter',
    name: 'columns-filter',
    component: () => import('@/views/datatables/columns-filter.vue'),
  },
  {
    path: '/datatables/multi-column',
    name: 'multi-column',
    component: () => import('@/views/datatables/multi-column.vue'),
  },
  {
    path: '/datatables/multiple-tables',
    name: 'multiple-tables',
    component: () => import('@/views/datatables/multiple-tables.vue'),
  },
  {
    path: '/datatables/alt-pagination',
    name: 'alt-pagination',
    component: () => import('@/views/datatables/alt-pagination.vue'),
  },
  {
    path: '/datatables/checkbox',
    name: 'checkbox',
    component: () => import('@/views/datatables/checkbox.vue'),
  },
  {
    path: '/datatables/range-search',
    name: 'range-search',
    component: () => import('@/views/datatables/range-search.vue'),
  },
  {
    path: '/datatables/export',
    name: 'export',
    component: () => import('@/views/datatables/export.vue'),
  },
  {
    path: '/datatables/sticky-header',
    name: 'sticky-header',
    component: () => import('@/views/datatables/sticky-header.vue'),
  },
  {
    path: '/datatables/clone-header',
    name: 'clone-header',
    component: () => import('@/views/datatables/clone-header.vue'),
  },
  {
    path: '/datatables/column-chooser',
    name: 'column-chooser',
    component: () => import('@/views/datatables/column-chooser.vue'),
  },
];
