<template>
  <div>
    <div class="panel pb-0 mt-6">
      <div class="datatable">
        <vue3-datatable
          :rows="props.data"
          :columns="props.headers"
          :totalRows="props.data?.length"
          :sortable="true"
          :showPageSize="false"
          :search="search"
          skin="whitespace-nowrap bh-table-hover"
          firstArrow='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4.5 h-4.5 rtl:rotate-180"> <path d="M13 19L7 12L13 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path opacity="0.5" d="M16.9998 19L10.9998 12L16.9998 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </svg>'
          lastArrow='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4.5 h-4.5 rtl:rotate-180"> <path d="M11 19L17 12L11 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path opacity="0.5" d="M6.99976 19L12.9998 12L6.99976 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </svg> '
          previousArrow='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4.5 h-4.5 rtl:rotate-180"> <path d="M15 5L9 12L15 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </svg>'
          nextArrow='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4.5 h-4.5 rtl:rotate-180"> <path d="M9 5L15 12L9 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </svg>'
        >
          <template #id="data">
            <strong class="text-info">#{{ data.value.id }}</strong>
          </template>
          <template #firstName="data">
            <div class="flex items-center gap-2">
              <img
                :src="`/assets/images/profile-${getRandomNumber(1, 34)}.jpeg`"
                class="w-9 h-9 rounded-full max-w-none"
                alt="user-profile"
              />
              <div class="font-semibold">
                {{ data.value.firstName + " " + data.value.lastName }}
              </div>
            </div>
          </template>
          <template #country>
            <div class="flex items-center gap-2">
              <img
                width="24"
                :src="`/assets/images/flags/${getCountry().code}.svg`"
                class="max-w-none"
                alt="user profile"
              />
              <div>{{ getCountry().name }}</div>
            </div>
          </template>
          <template #email="data">
            <a
              :href="`mailto:${data.value.email}`"
              class="text-primary hover:underline"
              >{{ data.value.email }}</a
            >
          </template>
          <template #age>
            <div
              class="w-4/5 min-w-[100px] h-2.5 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex"
            >
              <div
                class="h-2.5 rounded-full rounded-bl-full text-center text-white text-xs"
                :class="`bg-${randomStatusColor()}`"
                :style="`width:${getRandomNumber(15, 100)}%`"
              ></div>
            </div>
          </template>
          <template #rating="data">
            <div class="flex items-center justify-center text-warning">
              <div v-for="i in getRandomNumber(1, 5)" :key="i + data.value.id">
                <icon-star class="fill-warning" />
              </div>
            </div>
          </template>
          <template #series="data">
            <div style="width: 150px" class="overflow-hidden">
              <apexchart
                :key="data.value.id"
                height="30"
                type="line"
                :options="chart_options"
                :series="[{ data: [21, 9, 36, 12, 44, 25, 59] }]"
              ></apexchart>
            </div>
          </template>
          <template #status>
            <span
              class="badge"
              :class="`badge-outline-${randomStatusColor()}`"
              >{{ randomStatus() }}</span
            >
          </template>
        </vue3-datatable>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from "vue";
import Vue3Datatable from "@bhplugin/vue3-datatable";
import apexchart from "vue3-apexcharts";
import { useI18n } from "vue-i18n";
import { useAppStore } from "@/stores/index";
import { useMeta } from "@/composables/use-meta";
import IconStar from "@/components/icon/icon-star.vue";

useMeta({ title: "Advanced Table" });
const store = useAppStore();
// Props
const props = defineProps({
  headers: Array, // Headers for table columns
  data: Array, // Data for table rows
  searchFilter: Boolean,

  modelValue: String, // For v-model (filter text)
  onRefresh: Function, // Method for refreshing data
});
// multi language
const i18n = reactive(useI18n());
const search = ref("");

const countryList = [
  { code: "AE", name: "United Arab Emirates" },
  { code: "AR", name: "Argentina" },
  { code: "AT", name: "Austria" },
  { code: "AU", name: "Australia" },
  { code: "BE", name: "Belgium" },
  { code: "BG", name: "Bulgaria" },
  { code: "BN", name: "Brunei" },
  { code: "BR", name: "Brazil" },
  { code: "BY", name: "Belarus" },
  { code: "CA", name: "Canada" },
  { code: "CH", name: "Switzerland" },
  { code: "CL", name: "Chile" },
  { code: "CN", name: "China" },
  { code: "CO", name: "Colombia" },
  { code: "CZ", name: "Czech Republic" },
  { code: "DE", name: "Germany" },
  { code: "DK", name: "Denmark" },
  { code: "DZ", name: "Algeria" },
  { code: "EC", name: "Ecuador" },
  { code: "EG", name: "Egypt" },
  { code: "ES", name: "Spain" },
  { code: "FI", name: "Finland" },
  { code: "FR", name: "France" },
  { code: "GB", name: "United Kingdom" },
  { code: "GR", name: "Greece" },
  { code: "HK", name: "Hong Kong" },
  { code: "HR", name: "Croatia" },
  { code: "HU", name: "Hungary" },
  { code: "ID", name: "Indonesia" },
  { code: "IE", name: "Ireland" },
  { code: "IL", name: "Israel" },
  { code: "IN", name: "India" },
  { code: "IT", name: "Italy" },
  { code: "JO", name: "Jordan" },
  { code: "JP", name: "Japan" },
  { code: "KE", name: "Kenya" },
  { code: "KH", name: "Cambodia" },
  { code: "KR", name: "South Korea" },
  { code: "KZ", name: "Kazakhstan" },
  { code: "LA", name: "Laos" },
  { code: "LK", name: "Sri Lanka" },
  { code: "MA", name: "Morocco" },
  { code: "MM", name: "Myanmar" },
  { code: "MO", name: "Macau" },
  { code: "MX", name: "Mexico" },
  { code: "MY", name: "Malaysia" },
  { code: "NG", name: "Nigeria" },
  { code: "NL", name: "Netherlands" },
  { code: "NO", name: "Norway" },
  { code: "NZ", name: "New Zealand" },
  { code: "PE", name: "Peru" },
  { code: "PH", name: "Philippines" },
  { code: "PK", name: "Pakistan" },
  { code: "PL", name: "Poland" },
  { code: "PT", name: "Portugal" },
  { code: "QA", name: "Qatar" },
  { code: "RO", name: "Romania" },
  { code: "RS", name: "Serbia" },
  { code: "RU", name: "Russia" },
  { code: "SA", name: "Saudi Arabia" },
  { code: "SE", name: "Sweden" },
  { code: "SG", name: "Singapore" },
  { code: "SK", name: "Slovakia" },
  { code: "TH", name: "Thailand" },
  { code: "TN", name: "Tunisia" },
  { code: "TR", name: "Turkey" },
  { code: "TW", name: "Taiwan" },
  { code: "UK", name: "Ukraine" },
  { code: "UG", name: "Uganda" },
  { code: "US", name: "United States" },
  { code: "VN", name: "Vietnam" },
  { code: "ZA", name: "South Africa" },
  { code: "BA", name: "Bosnia and Herzegovina" },
  { code: "BD", name: "Bangladesh" },
  { code: "EE", name: "Estonia" },
  { code: "IQ", name: "Iraq" },
  { code: "LU", name: "Luxembourg" },
  { code: "LV", name: "Latvia" },
  { code: "MK", name: "North Macedonia" },
  { code: "SI", name: "Slovenia" },
  { code: "PA", name: "Panama" },
];

const chart_options = computed(() => {
  let option = {
    chart: { sparkline: { enabled: true } },
    stroke: { curve: "smooth", width: 2 },
    markers: { size: [4, 7], strokeWidth: 0 },
    colors: [randomColor()],
    grid: { padding: { top: 5, bottom: 5 } },
    tooltip: {
      x: { show: false },
      y: {
        title: {
          formatter: () => {
            return "";
          },
        },
      },
    },
  };
  return option;
});

const randomColor = () => {
  const color = [
    "#4361ee",
    "#805dca",
    "#00ab55",
    "#e7515a",
    "#e2a03f",
    "#2196f3",
  ];
  const random = Math.floor(Math.random() * color.length);
  return color[random];
};

const randomStatusColor = () => {
  const color = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
  ];
  const random = Math.floor(Math.random() * color.length);
  return color[random];
};

const randomStatus = () => {
  const status = [
    "PAID",
    "APPROVED",
    "FAILED",
    "CANCEL",
    "SUCCESS",
    "PENDING",
    "COMPLETE",
  ];
  const random = Math.floor(Math.random() * status.length);
  return status[random];
};
const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getCountry = () => {
  const random = Math.floor(Math.random() * countryList.length);
  return countryList[random];
};
</script>
