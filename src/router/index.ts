import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { useAppStore } from '@/stores';
import appSetting from '@/app-setting';

// Route modules
import dashboardRoutes from '@/router/modules/dashboard';
import settingsRoutes from '@/router/modules/settings';
import ehtimamiRoutes from '@/router/modules/ehtimami';
import componentsRoutes from '@/router/modules/components';
import elementsRoutes from '@/router/modules/elements';
import chartsRoutes from '@/router/modules/charts';
import widgetsRoutes from '@/router/modules/widgets';
import iconsRoutes from '@/router/modules/icons';
import dragndropRoutes from '@/router/modules/dragndrop';
import tablesRoutes from '@/router/modules/tables';
import formsRoutes from '@/router/modules/forms';
import usersRoutes from '@/router/modules/users';
import pagesRoutes from '@/router/modules/pages';
import authRoutes from '@/router/modules/auth';

// Combine all routes
const routes: RouteRecordRaw[] = [
  ...dashboardRoutes,
  ...settingsRoutes,
  ...ehtimamiRoutes,
  ...componentsRoutes,
  ...elementsRoutes,
  ...chartsRoutes,
  ...widgetsRoutes,
  ...iconsRoutes,
  ...dragndropRoutes,
  ...tablesRoutes,
  ...formsRoutes,
  ...usersRoutes,
  ...pagesRoutes,
  ...authRoutes,
];

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: 'active',
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0, left: 0 };
  },
});

router.beforeEach((to, from, next) => {
  const store = useAppStore();
  store.setMainLayout(to.meta?.layout === 'auth' ? 'auth' : 'app');
  next(true);
});

router.afterEach(() => {
  appSetting.changeAnimation();
});

export default router;
