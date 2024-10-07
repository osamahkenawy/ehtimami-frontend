import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';

// Router
import router from './router';

// I18n
import { createI18n } from 'vue-i18n';

// Import messages from the locales/index.js file
import messages from './locales';

// Components
import SubSidebar from './components/sidebars/SubSidebar.vue';
import LocationMap from './components/maps/LocationMap.vue';
import UaePlate from '@/components/plates/UaePlate.vue';
import Chip from '@/components/ui/Chip.vue';

import OverflowDialog from '@/components/dialogs/OverflowDialog.vue';
import Skeleton from '@/components/Skeleton.vue'; // Skeleton
// Styles
import "@mdi/font/css/materialdesignicons.css";  // Material Design CSS For (Icons)
import 'leaflet/dist/leaflet.css';  // Leaflet CSS

// Set up Vue I18n
const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages,
});

const app = createApp(App);

// Use Router
app.use(router);

// Use Vuetify
app.use(vuetify);

// Use I18n
app.use(i18n);


// Globally register components
app.component('SubSidebar', SubSidebar);
app.component('location-map', LocationMap);
app.component('uae-plate', UaePlate);
app.component('skeleton', Skeleton);  // skeleton

//Dialog
app.component('overflow-dialog', OverflowDialog)

// UI
app.component('chip', Chip);  // chip



// Mount the app
app.mount('#app');
