<template>
    <div class="relative">
      <input
        v-model="searchQuery"
        @input="debounceFetchLocations"
        type="text"
        class="form-input w-full"
        :placeholder="placeholder || $t('location.enterSchoolLocation')" 
      />
      <div v-if="isLoading" class="text-sm text-gray-500 mt-1">{{ $t("loading") }}</div>
      <ul
        v-if="locations.length"
        class="absolute bg-white shadow z-10 w-full max-h-48 overflow-y-auto border mt-1 rounded"
      >
        <li
          v-for="location in locations"
          :key="location.place_id"
          @click="selectLocation(location)"
          class="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
        >
          {{ location.display_name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  import { useI18n } from "vue-i18n";
  
  const props = defineProps<{
    placeholder?: string;
  }>();
  
  const { t, locale } = useI18n();
  const emit = defineEmits(["update:location"]);
  
  const searchQuery = ref("");
  const locations = ref<any[]>([]);
  const isLoading = ref(false);
  
  let debounceTimeout: ReturnType<typeof setTimeout>;
  
  const debounceFetchLocations = () => {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(fetchLocations, 400);
  };
  
  const fetchLocations = async () => {
    if (!searchQuery.value) {
      locations.value = [];
      return;
    }
  
    isLoading.value = true;
  
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
      searchQuery.value
    )}&accept-language=${locale.value}`;
  
    try {
      const res = await fetch(url);
      const data = await res.json();
      locations.value = data;
    } finally {
      isLoading.value = false;
    }
  };
  
  const selectLocation = (location: any) => {
    emit("update:location", {
      address: location.display_name,
      latitude: parseFloat(location.lat),
      longitude: parseFloat(location.lon),
    });
    searchQuery.value = location.display_name;
    locations.value = [];
  };
  </script>
  