<script setup lang="ts">
import { ref } from "vue";
import iconUndoRight from "@/components/icon/icon-undo-right.vue";
import iconOwner from "@/components/icon/icon-owner.vue";

interface Props {
  showHeadquarter?: boolean;
  headquarterTitle?: string;
  superAdminTitle: string;
  country: string;
  state: string;
  city: string;
  isCountryDefault?: boolean;
  isStateDefault?: boolean;
  isCityDefault?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  showHeadquarter: false,
  headquarterTitle: "Headquarter",
  isCountryDefault: false,
  isStateDefault: false,
  isCityDefault: false,
});

// Track popup visibility
const isPopupVisible = ref(false);

const handleUndoClick = (type: string) => {
  console.log(`${type} undo action clicked`);
};
</script>

<template>
  <div
    class="bg-gray-100 border border-gray-300 rounded-lg shadow-md flex flex-col items-center relative"
    @mouseenter="isPopupVisible = true"
    @mouseleave="isPopupVisible = false"
  >
    <!-- Headquarter -->
    <div v-if="props.showHeadquarter" class="w-full flex justify-center p-3 rounded-t-lg" style="background-color: #2097F3;">
      <span class="text-white font-bold px-4 py-2 text-center text-2xl">{{ props.headquarterTitle }}</span>
    </div>

    <div v-if="props.showHeadquarter" class="w-full h-1 bg-white"></div>

    <!-- Super Admin -->
    <div v-if="props.superAdminTitle" class="w-full flex justify-center p-2" style="background-color: #98A2B3;">
      <span class="text-white font-bold px-4 py-2 text-center text-xl">{{ props.superAdminTitle }}</span>
    </div>

    <div class="w-full h-1 bg-white"></div>

    <!-- Country -->
    <div class="w-full flex justify-between items-center bg-gray-700 text-white p-4" style="background-color: #17B26A;">
      <span class="bg-white text-gray-700 font-bold px-3 py-1 rounded-md border border-gray-300">Country: {{ props.country }}</span>
      <span class="bg-white text-gray-700 font-bold px-3 py-1 rounded-md border flex items-center border-gray-300">
        Default
        <button v-if="props.isCountryDefault" @click="handleUndoClick('Country')" class="ml-2 p-1 rounded hover:bg-gray-200 transition">
          <icon-undo-right class="w-5 h-5 text-gray-600" />
        </button>
      </span>
    </div>

    <!-- State -->
    <div class="p-4 bg-white w-full">
      <div class="flex justify-between items-center">
        <span class="bg-white text-gray-700 font-bold px-3 py-1 rounded-md border border-gray-300">State: {{ props.state }}</span>
        <span class="bg-white text-gray-700 font-bold px-3 py-1 rounded-md border flex items-center border-gray-300">
          Default
          <button v-if="props.isStateDefault" @click="handleUndoClick('State')" class="ml-2 p-1 rounded hover:bg-gray-200 transition">
            <icon-undo-right class="w-5 h-5 text-gray-600" />
          </button>
        </span>
      </div>
    </div>

    <div class="w-full h-1 bg-gray-200"></div>

    <!-- City -->
    <div class="p-4 bg-white w-full">
      <div class="flex justify-between items-center">
        <span class="bg-white text-gray-700 font-bold px-3 py-1 rounded-md border border-gray-300">City: {{ props.city }}</span>
        <span class="bg-white text-gray-700 font-bold px-3 py-1 rounded-md border flex items-center border-gray-300">
          Default
          <button v-if="props.isCityDefault" @click="handleUndoClick('City')" class="ml-2 p-1 rounded hover:bg-gray-200 transition">
            <icon-undo-right class="w-5 h-5 text-gray-600" />
          </button>
        </span>
      </div>
    </div>

    <!-- Footer -->
    <div class="w-full bg-gray-100 text-gray-700 text-start flex items-center gap-2 p-4 rounded-b-lg">
      <icon-owner />
      <span class="px-2">Owner</span>
    </div>

    <!-- Hover Popup (Now inside OrgChartCard) -->
    <div
      v-if="isPopupVisible"
     class="absolute bg-transparent rounded-md px-4 py-2 text-sm flex"
      style="top: -30px; right: -100px;"
    >
    <button
      
      class="w-8 h-8 flex items-center justify-center rounded-full border border-white bg-[#2097F3] text-white hover:bg-blue-600"
      title="Edit Details"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
      </svg>
    </button>

    <!-- Activate / Deactivate Button -->
    <button
 
   
      class="w-8 h-8 flex items-center justify-center rounded-full border border-white bg-[#FF9800] text-white hover:bg-orange-600 ml-2"
      title="Activate"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polygon points="5 3 19 12 5 21 5 3" />
      </svg>
    </button>


    <!-- Delete Button -->
    <button 
      class="w-8 h-8 flex items-center justify-center rounded-full border border-white bg-[#F44436] text-white hover:bg-red-600 ml-2"
      title="Delete" >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M3 6h18" />
        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
        <path d="M10 11v6" />
        <path d="M14 11v6" />
      </svg>
    </button>
    </div>
  </div>
</template>
