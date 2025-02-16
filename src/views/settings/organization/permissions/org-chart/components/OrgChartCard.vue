<script setup lang="ts">
import { computed } from "vue";
import iconUndoRight from "@/components/icon/icon-undo-right.vue";
import iconOwner from "@/components/icon/icon-owner.vue";

interface Props {
  showHeadquarter?: boolean; // Determines whether to show Headquarter
  headquarterTitle?: string; // Headquarter Title (default: "Headquarter")
  superAdminTitle: string; // Super Admin Title (required)
  country: string; // Country Name (required)
  state: string; // State Name (required)
  city: string; // City Name (required)
  isCountryDefault?: boolean; // If country is default
  isStateDefault?: boolean; // If state is default
  isCityDefault?: boolean; // If city is default
}

const props = withDefaults(defineProps<Props>(), {
  showHeadquarter: false,
  headquarterTitle: "Headquarter",
  isCountryDefault: false,
  isStateDefault: false,
  isCityDefault: false,
});

const handleUndoClick = (type: string) => {
  console.log(`${type} undo action clicked`);
};
</script>

<template>
  <div class="bg-gray-100 border border-gray-300 rounded-lg shadow-md flex flex-col items-center">
    <!-- HeadQuarter (Show Only If Prop `showHeadquarter` is True) -->
    <div v-if="props.showHeadquarter" class="w-full flex justify-center p-3 rounded-t-lg" style="background-color: #2097F3;">
      <span class="text-white font-bold px-4 py-2 text-center text-2xl">{{ props.headquarterTitle }}</span>
    </div>

    <!-- Space between Headquarter and Super Admin -->
    <div class="w-full h-1 bg-white"></div>

    <!-- Super Admin -->
    <div v-if="props.superAdminTitle" class="w-full flex justify-center p-2" style="background-color: #98A2B3;">
      <span class="text-white font-bold px-4 py-2 text-center text-xl">{{ props.superAdminTitle }}</span>
    </div>

    <div class="w-full h-1 bg-white"></div>

    <!-- Country And Action -->
    <div class="w-full flex justify-between items-center bg-gray-700 text-white p-4">
      <span class="bg-white text-gray-700 font-bold px-3 py-1 rounded-md border border-gray-300">Country: {{ props.country }}</span>
      <span class="bg-white text-gray-700 font-bold px-3 py-1 rounded-md border flex items-center border-gray-300">
        Default
        <button v-if="props.isCountryDefault" @click="handleUndoClick('Country')" class="ml-2 p-1 rounded hover:bg-gray-200 transition">
          <icon-undo-right class="w-5 h-5 text-gray-600" />
        </button>
      </span>
    </div>

    <!-- State and Action -->
    <div class="p-4 bg-white w-full">
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <span class="bg-white text-gray-700 font-bold px-3 py-1 rounded-md border border-gray-300">State: {{ props.state }}</span>
        </div>
        <div class="flex items-center">
          <span class="bg-white text-gray-700 font-bold px-3 py-1 rounded-md border flex items-center border-gray-300">
            Default
            <button v-if="props.isStateDefault" @click="handleUndoClick('State')" class="ml-2 p-1 rounded hover:bg-gray-200 transition">
              <icon-undo-right class="w-5 h-5 text-gray-600" />
            </button>
          </span>
        </div>
      </div>
    </div>

    <div class="w-full h-1 bg-gray-200"></div>

    <!-- City and Action -->
    <div class="p-4 bg-white w-full">
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <span class="bg-white text-gray-700 font-bold px-3 py-1 rounded-md border border-gray-300">City: {{ props.city }}</span>
        </div>
        <div class="flex items-center">
          <span class="bg-white text-gray-700 font-bold px-3 py-1 rounded-md border flex items-center border-gray-300">
            Default
            <button v-if="props.isCityDefault" @click="handleUndoClick('City')" class="ml-2 p-1 rounded hover:bg-gray-200 transition">
              <icon-undo-right class="w-5 h-5 text-gray-600" />
            </button>
          </span>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="w-full bg-gray-100 text-gray-700 text-start flex items-center gap-2 p-4 rounded-b-lg">
      <icon-owner />
      <span class="px-2">Owner</span>
    </div>
  </div>
</template>
