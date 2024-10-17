<template>
  <div class="w-full">
    <div class="w-full">
      <form class="mx-auto w-full mb-5">
        <div class="relative">
          <input
            type="text"
            placeholder="Search Assets ..."
            class="form-input shadow-[0_0_4px_2px_rgb(31_45_61_/_10%)] bg-white rounded-full h-11 placeholder:tracking-wider w-full"
            v-model="search"
          />
          <button
            type="button"
            class="btn btn-primary absolute right-2 inset-y-0 m-auto rounded-full w-9 h-9 p-0 flex items-center justify-center"
          >
            <icon-search class="mx-auto" />
          </button>
        </div>
      </form>

      <div class="w-full space-y-2">
        <!-- Iterate over the assets and pass each to VehicleRow -->
        <template v-for="(asset, i) in filteredAssets" :key="i">
          <div
            class="bg-white dark:bg-[#1b2e4b] rounded-xl shadow-[0_0_4px_2px_rgb(31_45_61_/_10%)] p-4 flex flex-col md:flex-row justify-between items-center text-gray-500 font-semibold w-full hover:text-primary transition-all duration-300 hover:scale-[1.01]"
            :style="{ borderLeft: '10px solid ' + getBorderColor(asset) }"
          >
            <!-- Pass asset to the VehicleRow component -->
            <VehicleRow v-if="asset" :asset="asset" />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, defineProps } from "vue";
import IconSearch from "@/components/icon/icon-search.vue";
import VehicleRow from "../vehicles/VehicleRow.vue";

// Define props for the assets
const props = defineProps({
  assets: Array, // Array of assets passed from the parent
});

// Search state
const search = ref("");

// Method to compute the border color based on ignition and driving_status
const getBorderColor = (asset: any) => {
  if (asset.driving_status === 1) {
    return "green"; // Driving status is 1, set green border
  } else if (asset.ignition === 1) {
    return "orange"; // Ignition is 1, set orange border
  } else {
    return "grey"; // Default to grey if neither condition is met
  }
};

// Filter assets based on the search query
const filteredAssets = computed(() => {
  return props?.assets?.filter((asset: any) => {
    return (
      asset.name.toLowerCase().includes(search.value.toLowerCase()) ||
      asset.plate.toLowerCase().includes(search.value.toLowerCase()) ||
      asset.vtype_name.toLowerCase().includes(search.value.toLowerCase())
    );
  });
});
</script>

<style scoped>
/* Ensure the flex layout is responsive */
@media (max-width: 640px) {
  .form-input {
    width: 100%;
  }
}
</style>
