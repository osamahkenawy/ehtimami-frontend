<template>
  <div>
    <!-- Breadcrumb for the Livemap Page -->
    <BreadCrumb :items="breadcrumbItems" />
    <!-- UAEPlate Component -->
    <!-- <UAEPlate plateNumber="12-DUB-3456" plateColor="red" :flat="false" /> -->
    <!-- LocationMap Component -->
    <div class="grid xl:grid-cols-3 gap-2 mb-6 mt-5">
      <div class="panel h-full flex-none">
        <div
          class="flex items-center justify-between dark:text-white-light mb-5 border-b border-white-light dark:border-white/10"
        >
        <div class="flex items-center">
            <!-- Vehicle Icon -->
            <IconVehicle />

            <!-- All Assets and Chip Wrapper -->
            <div class="ml-2 flex items-center text-l font-bold dark:text-white md:text-l">
              <!-- All Assets Text -->
              <span>All Assets</span>
              
              <!-- Custom Chip Component -->
              <Chip
                class="ml-2 rtl:mr-2"
                :content="`390`"
                :textColor="'#175CD3'"
                :borderColor="'#B2DDFF'"
                :headerBackgroundColor="'#EFF8FF'"
              />
            </div>
          </div>
          <!-- Add the switch button on the same row, aligned to the end -->
          <div class="ml-auto">
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
          </div>
        </div>
        <div>
          <div class="space-y-1">
           <ListAssetTable :assets="vehicles" />
          </div>
        </div>
      </div>

      <div class="col-span-2">
        <LocationMap />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import IconHome from "@/components/icon/icon-home.vue";
import { useAppStore } from "@/stores/index";
import IconVehicle from "@/components/icon/icon-vehicle-grey.vue";
import { vehicles } from '@/fakeData/Vehicles'; // Adjust the path as necessary

const store = useAppStore();

const isRtl = store.rtlClass === "rtl" ? true : false;
// Define the breadcrumb items for this page
const breadcrumbItems = [
  { label: "Home", link: "/", icon: IconHome },
  { label: "Live Map" },
];
</script>
