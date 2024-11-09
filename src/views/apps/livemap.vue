<template>
  <div>
    <!-- Breadcrumb for the Livemap Page -->
    <BreadCrumb :items="breadcrumbItems" />

    <!-- Fullscreen Button and HeaderSensor aligned on the right -->
    <div class="flex justify-end items-center mt-4 space-x-4 rtl:space-x-reverse">
      <HeaderSensor />
      <button v-tippy="'Full Screen'" type="button" class="btn btn-light w-10 h-10 p-0 rounded-full">
        <AnimatedIcon :name="fullScreenIcon" />
      </button>
    </div>

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

      <!-- Pass the vehicles prop to LocationMap -->
      <div class="col-span-2">
        <Livemap :vehicles="vehicles" />
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

const store = useAppStore();
const isRtl = computed(() => store.rtlClass === "rtl");

const breadcrumbItems = [
  { label: "Home", link: "/", icon: IconHome },
  { label: "Live Map" },
];

const fullScreenIcon = ref("iufcwnvq");

const isAssetsSelected = ref(true);

// Handle the asset click event from ListAssetTable
const handleAssetClick = (asset: any) => {
  console.log("Asset clicked in main component:", asset);
  // Add further functionalities here, such as setting a selected asset, updating the map, etc.
};
</script>

<style scoped>
.btn {
  @apply shadow-none;
}
</style>
