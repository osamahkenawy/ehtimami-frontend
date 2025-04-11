<template>
  <div>
    <div class="panel pb-0 mt-6">
      <!-- Container for search filter aligned to the right -->
      <div class="flex justify-between items-center p-4">
        <!-- Left side empty (could contain other controls if needed) -->
        <div></div>

        <!-- Search Filter aligned to the right -->
        <div v-if="searchFilter" class="w-full sm:w-auto">
          <form class="flex items-center">
            <div class="relative">
              <input
                type="text"
                :placeholder="searchPlaceHolder"
                class="form-input shadow-[0_0_4px_2px_rgb(31_45_61_/_10%)] bg-white rounded-full h-11 placeholder:tracking-wider ltr:pr-11 rtl:pl-11"
                v-model="search"
              />
              <button
                type="button"
                class="btn btn-primary hover:aspect-square absolute ltr:right-1 rtl:left-1 inset-y-0 m-auto rounded-full w-9 h-9 p-0 flex items-center justify-center"
              >
                <icon-search class="mx-auto" />
              </button>
            </div>
          </form>
        </div>
      </div>
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
          :noDataContent="noDataContent"
        >
          <template #id="data">
            <strong class="text-info">#{{ data.value.id }}</strong>
          </template>
          <template #userId="data">
            <strong class="text-info">#{{ data.value.userId }}</strong>
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
          <template #name="data">
            <div class="flex items-center gap-2">
              <div
                class="font-semibold"
                v-if="
                  data &&
                  data.value &&
                  data.value.userId &&
                  data.value.firstName
                "
              >
              
                <ProfilePax
                  :image="data.value?.profile?.avatar"
                  :name="data.value?.firstName + ' ' + data.value?.lastName"
                  :email="data.value?.email"
                  :phone="data.value?.phone"
                  :address="data.value?.profile?.address"
                />
              </div>
              <div v-else>-</div>
            </div>
          </template>
          <template #roles="data">
            <div class="flex flex-col gap-1">
              <div
                v-for="role in data.value.roles"
                :key="role"
                class="flex items-center gap-2"
              >
                <Chip :content="formatRoleName(role)" />
                <span
                  v-if="data.value.school"
                  v-tippy="'Show School Info'"
                  class="cursor-pointer text-primary hover:underline"
                  @click="openSchoolDialog(data.value.school)"
                >
                  <icon-arrow-forward class="w-6 h-6" />
                </span>
              </div>
            </div>
          </template>
          <template #responsible_teacher="data">
            <div class="flex items-center gap-2">
              <div
                class="font-semibold"
                v-if="
                  data &&
                  data.value &&
                  data.value.teacher &&
                  data.value.teacher.id
                "
              >
                <ProfilePax
                  :name="
                    data.value.teacher?.firstName +
                    ' ' +
                    data.value.teacher?.lastName
                  "
                  :email="data.value.teacher?.email"
                />
              </div>
              <div v-else>-</div>
            </div>
          </template>

          <template #school_name="data">
            <div class="flex items-center gap-2">
              <div class="font-semibold">
                <div
                  class="font-semibold"
                  v-if="data && data.value && data.value.school_name"
                >
                  <ProfilePax
                    :name="data.value.school_name"
                    :image="data?.value?.school_logo || ''"
                    :compLogo="true"
                  />
                </div>
                <div v-else>-</div>
              </div>
            </div>
          </template>
          <template #class_name="data">
            <div class="flex items-center gap-2">
              <div
                class="font-semibold"
                v-if="data && data.value && data.value.name"
              >
                <ProfilePax
                  :name="data.value.name"
                  :image="data?.value?.class_logo || ''"
                  :compLogo="true"
                />
              </div>
              <div v-else>-</div>
            </div>
          </template>
          <template #is_verified="data">
            <!-- {{ data.value }} -->
            <Chip
              :content="data.value?.is_verified ? 'Verified' : 'Unverified'"
              :textColor="data.value?.is_verified ? '#00ab55' : '#e7515a'"
              :borderColor="data.value?.is_verified ? '#00ab55' : '#e7515a'"
              :headerBackgroundColor="
                data.value?.is_verified ? '#e6f9f0' : '#ffecec'
              "
            />
          </template>
          <template #nationality="data">
            <div class="flex items-center gap-2" v-if="data.value.profile && data.value.profile.nationality">
              <div class="font-semibold">
                <span>{{
                  getFlagForNationality(data.value.profile.nationality)
                }}</span>
                {{ data.value.profile.nationality }}
              </div>
            </div>
          </template>
          <template #class_school_name="data">
            <div class="flex items-center gap-2">
              <div class="font-semibold">
                {{ data.value.school.school_name }}
              </div>
            </div>
          </template>

          <template #school_address="{ value }">
            <div class="flex items-center gap-2">
              <AnimatedIcon :name="'vvyxyrur'" />
              <div
                class="font-semibold truncate max-w-[200px]"
                v-tippy="value.school_address"
              >
                {{ truncateAddress(value.school_address) }}
              </div>
            </div>
          </template>
          <template #school_type="{ value }">
            <div class="flex items-center gap-2">
              <div class="font-semibold">
                {{ formatSchoolType(value.school_type) }}
              </div>
            </div>
          </template>

          <template #school_email="data">
            <div class="flex items-center gap-2">
              <AnimatedIcon :name="'lsdujvto'" />
              <div class="font-semibold">
                <a
                  :href="`mailto:${data.value.school_email}`"
                  class="text-primary hover:underline"
                  >{{ data.value.school_email }}</a
                >
              </div>
            </div>
          </template>
          <template #school_phone="data">
            <div class="flex items-center gap-2">
              <AnimatedIcon :name="'xrdkdttl'" />
              <div class="font-semibold">
                <a
                  :href="`mailto:${data.value.school_phone}`"
                  class="text-primary hover:underline"
                  >{{ data.value.school_phone }}</a
                >
              </div>
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
          <template #school_status="data">
            <span
              class="badge"
              :class="
                data.value.statusId === 1
                  ? 'badge-outline-success'
                  : 'badge-outline-danger'
              "
            >
              {{ data.value.statusId === 1 ? "Active" : "Inactive" }}
            </span>
          </template>
          <template #class_status="data">
            <span
              class="badge"
              :class="
                data.value.status === 'active'
                  ? 'badge-outline-success'
                  : 'badge-outline-danger'
              "
            >
              {{ data.value.status === "active" ? "Active" : "Inactive" }}
            </span>
          </template>

          <template #status>
            <span
              class="badge"
              :class="`badge-outline-${randomStatusColor()}`"
              >{{ randomStatus() }}</span
            >
          </template>
          <template #action="data">
            <slot name="action" :data="toRaw(data.value)"></slot>
          </template>
        </vue3-datatable>
      </div>
    </div>
    <!-- School Info Dialog -->
    <TransitionRoot appear :show="modal1" as="template">
      <Dialog as="div" @close="modal1 = false" class="relative z-[51]">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay class="fixed inset-0 bg-[black]/60" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div class="flex min-h-full items-start justify-center px-4 py-8">
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
            <DialogPanel class="panel border-0 p-0 rounded-lg overflow-hidden w-[900px] text-black dark:text-white-dark">

                <button
                  type="button"
                  class="absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none"
                  @click="modal1 = false"
                >
                  <icon-x />
                </button>
                <div
                  class="text-lg font-bold bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]"
                >
                  School Information
                </div>
                <div class="p-5">
                  <div v-if="selectedSchool">
                    <div>
                      <strong>Name:</strong> {{ selectedSchool.school_name }}
                    </div>

                    <div class="mt-2">
                      <LocMap
                        :schoolLat="selectedSchool?.school_lat || 0"
                        :schoolLng="selectedSchool?.school_lng || 0"
                        :schoolAddress="selectedSchool.school_address"
                      />
                    </div>
                  </div>
                  <div v-else>
                    <p>No school info available.</p>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, toRaw } from "vue";
import Vue3Datatable from "@bhplugin/vue3-datatable";
import apexchart from "vue3-apexcharts";
import LocMap from "./components/LocMap.vue";
import {
  Dialog,
  DialogOverlay,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";

import { useI18n } from "vue-i18n";
import { useAppStore } from "@/stores/index";
import { useMeta } from "@/composables/use-meta";
import IconStar from "@/components/icon/icon-star.vue";
import IconSearch from "@/components/icon/icon-search.vue";
import { AnimatedIcon, ICONS } from "@/components/icon/animatedIcon";
import { nationalities } from "@/fakeData/nationalityList";
import { formatRoleName } from "@/helpers/helper";
import IconArrowForward from "@/components/icon/icon-arrow-forward.vue";
import AddressLoc from "@/views/ehtimami/teachers/components/AddressLoc.vue";
interface School {
  school_name: string;
  school_address: string;
  school_lat: number;
  school_lng: number;
}

const store = useAppStore();
// Props
const props = defineProps({
  headers: {
    type: Array as () => any[],
    required: true,
  },
  data: {
    type: Array as () => any[],
    required: true,
  },
  searchFilter: {
    type: Boolean,
    default: false, // Default is false (no search filter)
  },
  searchPlaceHolder: {
    type: String,
    default: "Search...", // Default search placeholder
  },
  modelValue: {
    type: String,
    default: "", // Default empty string for filter text
  },
  onRefresh: {
    type: Function,
    required: false, // Optional refresh function
  },
  noDataContent: {
    type: String,
    default: "No data available", // Default content for no data state
  },
});

const search = ref("");
const truncateAddress = (address: string): string => {
  return address.length > 30 ? address.substring(0, 30) + "..." : address;
};

const selectedSchool = ref<School | null>(null);
const modal1 = ref(false);
const openSchoolDialog = (school) => {
  selectedSchool.value = school;
  modal1.value = true;
};

const formatSchoolType = (type: string): string => {
  return type
    .toLowerCase() // Convert to lowercase
    .replace(/_/g, " ") // Replace underscores with spaces
    .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize first letter of each word
};

const getFlagForNationality = (nationality: string): string => {
  const match = nationalities.find(
    (n) => n.value.toLowerCase() === nationality?.toLowerCase()
  );
  return match?.flag || "🌐"; // fallback globe emoji
};

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
</script>

<style lang="scss" scoped>
.panel,
.datatable {
  position: relative; /* Required to ensure z-index stacking works properly */
  overflow: visible;  /* ✅ This is crucial */
  z-index: 10;         /* Optional but helpful */
}
.datatable-wrapper {
  position: relative;
  z-index: 1;
  overflow: visible;
}
</style>