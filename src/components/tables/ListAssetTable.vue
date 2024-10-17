<template>
  <div class="w-full">
    <!-- Search and Filter Form -->
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

      <!-- List of Assets -->
      <div class="w-full space-y-2">
        <template v-for="(asset, i) in paginatedAssets" :key="i">
          <div
            class="bg-white dark:bg-[#1b2e4b] rounded-xl shadow-[0_0_4px_2px_rgb(31_45_61_/_10%)] p-4 flex flex-col md:flex-row justify-between items-center text-gray-500 font-semibold w-full hover:text-primary transition-all duration-300 hover:scale-[1.01]"
            :style="{ borderLeft: '10px solid ' + getBorderColor(asset) }"
          >
            <VehicleRow :asset="asset" />
          </div>
        </template>
      </div>

      <!-- Pagination Component -->
      <Pagination
        :currentPage="currentPage"
        :totalPages="totalPages"
        @pageChange="handlePageChange"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, defineProps, watch } from "vue";
import IconSearch from "@/components/icon/icon-search.vue";
import VehicleRow from "../vehicles/VehicleRow.vue";
import Pagination from "@/components/tables/components/Pagination.vue";

// Define props for assets
const props = defineProps({
  assets: Array,
});

// Search state
const search = ref("");
const currentPage = ref(1);
const itemsPerPage = ref(7); // Customize the number of items per page

// Calculate the total number of pages
const totalPages = computed(() => {
  return Math.ceil(filteredAssets.value.length / itemsPerPage.value);
});

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
  return props.assets.filter((asset: any) => {
    return (
      asset.name.toLowerCase().includes(search.value.toLowerCase()) ||
      asset.plate.toLowerCase().includes(search.value.toLowerCase()) ||
      asset.vtype_name.toLowerCase().includes(search.value.toLowerCase())
    );
  });
});

// Paginated assets based on current page and items per page
const paginatedAssets = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return filteredAssets.value.slice(start, end);
});

// Watch the search value and reset currentPage to 1 when search changes
watch(search, () => {
  currentPage.value = 1;
});

// Handle page change event
const handlePageChange = (page: number) => {
  currentPage.value = page;
};
</script>

<style scoped>
/* Ensure the flex layout is responsive */
@media (max-width: 640px) {
  .form-input {
    width: 100%;
  }
}
</style>
