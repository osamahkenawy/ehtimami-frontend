import { createApp } from "vue";
import App from "@/App.vue";
import {
  LocationMap,
  UAEPlate,
  BreadCrumb,
  Datatable,
  ShadowCard,
  ListAssetTable,
  VehicleRow,
  Chip,
  HeaderSensor,
  PopperActions,
  Livemap,
  DraggableTable,
  SkeletonLoader,
  AddButton,
  ProfilePax,
  TimePickerPopup,
  FileUploader,
  GenderSelection,
  ActionCard,
  EditToggleButtons,
  UserProfileCard,
  BaseButton,
  Footer
} from "@/components"; // Import all components here
import VueTelInput from 'vue3-tel-input'
import 'vue3-tel-input/dist/vue3-tel-input.css'

const app = createApp(App);

// pinia store
import { createPinia } from "pinia";
const pinia = createPinia();
app.use(pinia);

import router from "@/router";
app.use(router);

// main app css
import "@/assets/css/app.css";

// perfect scrollbar
import PerfectScrollbar from "vue3-perfect-scrollbar";
app.use(PerfectScrollbar);

//vue-meta
import { createHead } from "@vueuse/head";
const head = createHead();
app.use(head);

// set default settings
import appSetting from "@/app-setting";
appSetting.init();

//vue-i18n
import i18n from "@/i18n";
app.use(i18n);

// tippy tooltips
import { TippyPlugin } from "tippy.vue";
app.use(TippyPlugin);

//input mask
import Maska from "maska";
app.use(Maska);

//markdown editor
import VueEasymde from "vue3-easymde";
import "easymde/dist/easymde.min.css";
app.use(VueEasymde);

// popper
import Popper from "vue3-popper";
app.component("Popper", Popper);

// json to excel
import vue3JsonExcel from "vue3-json-excel";
app.use(vue3JsonExcel);
app.use(VueTelInput);
// Globally register the components
app.component("LocationMap", LocationMap);
app.component("Livemap", Livemap);
app.component("UAEPlate", UAEPlate);
app.component("BreadCrumb", BreadCrumb);
app.component("Datatable", Datatable)
app.component("ShadowCard", ShadowCard);
app.component("ListAssetTable", ListAssetTable); // ListAssetTable
app.component("VehicleRow", VehicleRow); // VehicleRow
app.component("Chip", Chip); // VehicleRow
app.component("HeaderSensor", HeaderSensor); // HeaderSensor
app.component("PopperActions", PopperActions); // PopperActions
app.component("DraggableTable", DraggableTable); // PopperActions
app.component("SkeletonLoader", SkeletonLoader); // SkeletonLoader
app.component("AddButton", AddButton); // SkeletonLoader
app.component("ProfilePax", ProfilePax); // ProfilePax
app.component("TimePickerPopup", TimePickerPopup); // TimePickerPopup
app.component("FileUploader", FileUploader); // FileUploader
app.component("GenderSelection", GenderSelection);  // GenderSelection
app.component("ActionCard", ActionCard);  // ActionCard
app.component("EditToggleButtons", EditToggleButtons);  // EditToggleButtons
app.component("UserProfileCard", UserProfileCard);  // UserProfileCard
app.component("BaseButton", BaseButton);  // BaseButton
app.component("Footer", Footer);  // Footer


app.mount("#app");
