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
            @click="handleAssetClick(asset)"
            :class="['asset-item', { 'selected-asset': selectedAsset && selectedAsset.id === asset.id }]"
            class="bg-white dark:bg-[#1b2e4b] rounded-xl shadow-[0_0_4px_2px_rgb(31_45_61_/_10%)] p-4 flex flex-col md:flex-row justify-between items-center text-gray-500 font-semibold w-full hover:text-primary transition-all duration-300 hover:scale-[1.01] cursor-pointer"
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
import { ref, computed, defineProps, watch, defineEmits } from "vue";
import IconSearch from "@/components/icon/icon-search.vue";
import VehicleRow from "../vehicles/VehicleRow.vue";
import Pagination from "@/components/tables/components/Pagination.vue";

const props = defineProps<{
  assets: Array<Record<string, any>>;
}>();

const emit = defineEmits(["assetClicked"]);

const search = ref("");
const currentPage = ref(1);
const itemsPerPage = ref(7);

// Track the selected asset
const selectedAsset = ref<Record<string, any> | null>(null);

const totalPages = computed(() => {
  return Math.ceil(filteredAssets.value.length / itemsPerPage.value);
});

const getBorderColor = (asset: any) => {
  if (asset.driving_status === 1) {
    return "green";
  } else if (asset.ignition === 1) {
    return "orange";
  } else {
    return "grey";
  }
};

const filteredAssets = computed(() => {
  return props.assets.filter((asset: any) => {
    return (
      asset.name.toLowerCase().includes(search.value.toLowerCase()) ||
      asset.plate.toLowerCase().includes(search.value.toLowerCase()) ||
      asset.vtype_name.toLowerCase().includes(search.value.toLowerCase())
    );
  });
});

const paginatedAssets = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return filteredAssets.value.slice(start, end);
});

watch(search, () => {
  currentPage.value = 1;
});

const handlePageChange = (page: number) => {
  currentPage.value = page;
};

// Handle click on an asset
const handleAssetClick = (asset: any) => {
  // Toggle selection on double-click
  if (selectedAsset.value && selectedAsset.value.id === asset.id) {
    selectedAsset.value = null; // Deselect if already selected
  } else {
    selectedAsset.value = asset; // Select the clicked asset
  }
  emit("assetClicked", selectedAsset.value); // Emit the selected or deselected asset
};
</script>

<style scoped>
.btn {
  @apply shadow-none;
}

/* Styling for selected asset */
.selected-asset {
  background-color: #f0f4ff; /* Example background color */
 
}
</style>
