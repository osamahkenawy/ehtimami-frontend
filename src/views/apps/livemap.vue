<template>
  <div>
    <!-- Breadcrumb for the Livemap Page -->
    <BreadCrumb :items="breadcrumbItems" />
    <!-- UAEPlate Component -->
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
            <div
              :class="{'ml-2': !isRtl, 'mr-2': isRtl}" 
              class="flex items-center text-l font-bold dark:text-white md:text-l"
            >
              <!-- All Assets Text -->
              <span>All Assets</span>

              <!-- Custom Chip Component -->
              <Chip
                :class="{'ml-2 rtl:mr-2': !isRtl, 'mr-2 rtl:ml-2': isRtl}"
                :content="`390`"
                :textColor="'#175CD3'"
                :borderColor="'#B2DDFF'"
                :headerBackgroundColor="'#EFF8FF'"
              />
            </div>
          </div>
          <!-- Use the SwitchLivemapList component here with v-model -->
          <SwitchLivemapList v-model="isAssetsSelected" :isRtl="isRtl" />
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
import { ref, computed } from 'vue';
import IconHome from "@/components/icon/icon-home.vue";
import { useAppStore } from "@/stores/index";
import IconVehicle from "@/components/icon/icon-vehicle-grey.vue";
import { vehicles } from "@/fakeData/Vehicles"; // Adjust the path as necessary
import SwitchLivemapList from "@/components/SwitchLivemapList.vue"; // Import the new switch component

const store = useAppStore();
const isRtl = computed(() => store.rtlClass === "rtl"); // Detect RTL mode

// Define the breadcrumb items for this page
const breadcrumbItems = [
  { label: "Home", link: "/", icon: IconHome },
  { label: "Live Map" },
];

// Reactive property for tracking switch state
const isAssetsSelected = ref(true); // This will be passed to the switch component
</script>
