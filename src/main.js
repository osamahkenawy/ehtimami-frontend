import { createApp } from 'vue';
import pinia from '@/stores'; // import the pinia instance

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
import RangeSlider from '@/components/ui/RangeSlider.vue'; // Range Slider

import OverflowDialog from '@/components/dialogs/OverflowDialog.vue';
import Skeleton from '@/components/Skeleton.vue'; // Skeleton
import FuelGuage from '@/components/ui/FuelGuage.vue'; // Fuel Guage
import RouteInfo from '@/components/ui/RouteInfo.vue';

// Styles
import "@mdi/font/css/materialdesignicons.css";  // Material Design CSS For (Icons)
import 'leaflet/dist/leaflet.css';  // Leaflet CSS
import 'bootstrap/dist/css/bootstrap.min.css'; // Import only Bootstrap CSS
import "bootstrap-vue/dist/bootstrap-vue.css";



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

// Use Pinia
app.use(pinia)

// Globally register components
app.component('SubSidebar', SubSidebar);
app.component('location-map', LocationMap);
app.component('uae-plate', UaePlate);
app.component('skeleton', Skeleton);  // skeleton

//Dialog
app.component('overflow-dialog', OverflowDialog)
app.component('fuel-guage', FuelGuage); // Fuel Guage

// UI
app.component('chip', Chip);  // chip
app.component('range-slider', RangeSlider); // RangeSlider

app.component('route-info', RouteInfo); // RangeSlider

// Mount the app
app.mount('#app');
