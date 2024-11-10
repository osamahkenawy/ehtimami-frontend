<template>
  <div>
    <!-- Breadcrumb and Fullscreen Button on the same row -->
    <div class="flex justify-between items-center mb-4">
      <BreadCrumb :items="breadcrumbItems" />
      <button v-tippy="'Full Screen'" type="button" class="btn btn-light w-10 h-10 p-0 rounded-full">
        <AnimatedIcon :name="fullScreenIcon" />
      </button>
    </div>

    <!-- Main Grid Layout -->
    <div class="grid md:grid-cols-1 xl:grid-cols-3 gap-4 mb-6 mt-5">
      <div class="panel h-full flex-none">
        <div class="flex items-center justify-between mb-5 border-b border-gray-300 dark:border-gray-700">
          <div class="flex items-center">
            <AnimatedIcon :name="'mzsrkkep'" />
            <div
              :class="{ 'ml-2': !isRtl, 'mr-2': isRtl }"
              class="flex items-center text-l font-bold dark:text-white md:text-l"
            >
              <span>All Assets</span>
              <Chip 
                :class="{ 'ml-2 rtl:mr-2': !isRtl, 'mr-2 rtl:ml-2': isRtl }" 
                :content="vehicles.length" 
                :textColor="'#175CD3'" 
                :borderColor="'#B2DDFF'" 
                :headerBackgroundColor="'#EFF8FF'" 
              />
            </div>
          </div>
          <SwitchLivemapList v-model="isAssetsSelected" :isRtl="isRtl" />
        </div>
        <ListAssetTable :assets="vehicles" @assetClicked="handleAssetClick" />
      </div>
     
      <!-- Render Livemap with HeaderSensor based on selected asset -->
      <div class="col-span-2">
        <SkeletonLoader type="list" />
        <div v-if="selectedAsset">
          <HeaderSensor />
          <Livemap :vehicles="vehicles" :focusedVehicle="selectedAsset" />
        </div>
        <div v-else>
          <Livemap :vehicles="vehicles" />
        </div> 
       

      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import IconHome from "@/components/icon/icon-home.vue";
import { useAppStore } from "@/stores/index";
import { vehicles } from "@/fakeData/Vehicles";
import SwitchLivemapList from "@/components/SwitchLivemapList.vue";
import { AnimatedIcon, ICONS } from "@/components/icon/animatedIcon";
import Livemap from "@/components/maps/livemap/Livemap.vue";

// Define the Vehicle interface with the required properties
interface Vehicle {
  id: number;
  name: string;
  plate: string;
  location: {
    lat: number;
    lng: number;
  };
  // Add other properties here as needed
}

const store = useAppStore();
const isRtl = computed(() => store.rtlClass === "rtl");

const breadcrumbItems = [
  { label: "Home", link: "/", icon: IconHome },
  { label: "Live Map" },
];

const fullScreenIcon = ref("iufcwnvq");
const isAssetsSelected = ref(true);
const selectedAsset = ref<Vehicle | null>(null); // Specify the type of selectedAsset as Vehicle or null

// Handle the asset click event from ListAssetTable
const handleAssetClick = (asset: Vehicle) => {
  // Toggle between selected and unselected states
  selectedAsset.value = asset && selectedAsset.value?.id === asset.id ? null : asset || null;
};
</script>

<style scoped>
.btn {
  @apply shadow-none;
}
</style>
