<template>
    <div class="w-full h-full">
      <!-- Address Input -->
      <div class="flex">
        <div
          class="bg-[#eee] whitespace-nowrap flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-[#e0e6ed] dark:border-[#17263c] dark:bg-[#1b2e4b]"
        >
          Address
        </div>
        <input
          id="location_search"
          v-model="searchQuery"
          @input="editMode && debounceFetchLocations()"
          type="text"
          :disabled="!editMode"
          class="form-input ltr:rounded-l-none rtl:rounded-r-none py-2.5 text-base w-full"
          :placeholder="$t('location.enterUserLocation')"
        />
      </div>
  
      <!-- Loading -->
      <div v-if="isLoading" class="text-sm text-gray-500 mt-2">
        {{ $t("loading") }}
      </div>
  
      <!-- Suggestions -->
      <ul v-if="locations.length" class="location-list">
        <li
          v-for="location in locations"
          :key="location.place_id"
          @click="() => selectLocation(location)"
          class="hover:bg-gray-100 cursor-pointer px-3 py-2 border-b"
        >
          <AnimatedIcon name="onmwuuox" class="inline-block mr-2" />
          {{ location.display_name }}
        </li>
      </ul>
  
      <!-- Map -->
      <div id="map" class="w-full h-[500px] rounded-md border mt-4" />
    </div>
  </template>
  
  <script setup lang="ts">
  import {
    ref,
    watch,
    onMounted,
    nextTick,
    defineProps,
    defineEmits,
    onBeforeUnmount,
  } from "vue";
  import { useI18n } from "vue-i18n";
  import "leaflet/dist/leaflet.css";
  import * as L from "leaflet";
  import { AnimatedIcon } from "@/components/icon/animatedIcon";
  import mapConfig from "@/config/map";
  
  // Props
  const props = defineProps<{
    initialLat?: number;
    initialLng?: number;
    editMode?: boolean;
  }>();
  
  const emit = defineEmits<{
    (
      e: "locationSelected",
      value: {
        lat: number;
        lon: number;
        address: string;
        user_region: string;
        user_city: string;
        user_country: string;
      }
    ): void;
  }>();
  
  const { t, locale } = useI18n();
  
  const searchQuery = ref("");
  const locations = ref<any[]>([]);
  const isLoading = ref(false);
  
  const map = ref<L.Map | null>(null);
  const marker = ref<L.Marker | null>(null);
  const markerReady = ref(false);
  const markerInitialized = ref(false);
  
  // Icon
  const userIcon = L.icon({
    iconUrl: new URL(
      "@/assets/images/map/markers/marker.png",
      import.meta.url
    ).href,
    iconSize: [45, 45],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
  
  // Fetch Locations
  let debounceTimeout: ReturnType<typeof setTimeout>;
  const debounceFetchLocations = () => {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      fetchLocations();
    }, 500);
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
  
    const res = await fetch(url);
    locations.value = await res.json();
    isLoading.value = false;
  };
  
  // Reverse Geocode
  const reverseGeocode = async (lat: number, lon: number) => {
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&accept-language=${locale.value}`;
    const res = await fetch(url);
    const data = await res.json();
  
    return {
      address: data.display_name || t("location.unknownLocation"),
      user_region: data.address?.state || "",
      user_city:
        data.address?.city || data.address?.town || data.address?.village || "",
      user_country: data.address?.country || "",
    };
  };
  
  // Select location from list
  const selectLocation = async (location: {
    lat: string;
    lon: string;
    display_name: string;
  }) => {
    if (!map.value) return;
  
    const lat = parseFloat(location.lat);
    const lon = parseFloat(location.lon);
    const geo = await reverseGeocode(lat, lon);
    searchQuery.value = geo.address;
  
    setMarker(lat, lon, geo.address);
    emit("locationSelected", { lat, lon, ...geo });
    locations.value = [];
  };
  
  // Marker logic
  const setMarker = (lat: number, lng: number, popupText: string) => {
    if (!map.value) return;
  
    if (marker.value) {
      marker.value.remove();
    }
  
    marker.value = L.marker([lat, lng], {
      icon: userIcon,
      draggable: true,
    })
      .addTo(map.value)
      .bindPopup(`<b>${t("location.user")}:</b> ${popupText}`)
      .openPopup();
  
    map.value.setView([lat, lng], 15);
    markerReady.value = true;
  
    bindDragHandler();
  
    nextTick(() => {
      if (props.editMode) {
        marker.value?.dragging?.enable();
      } else {
        marker.value?.dragging?.disable();
      }
    });
  };
  
  const bindDragHandler = () => {
    if (!marker.value) return;
  
    marker.value.off("dragend");
  
    marker.value.on("dragend", async () => {
      const newPos = marker.value?.getLatLng();
      if (!newPos || !props.editMode) return;
  
      const geo = await reverseGeocode(newPos.lat, newPos.lng);
      searchQuery.value = geo.address;
  
      marker.value
        ?.setPopupContent(`<b>${t("location.user")}:</b> ${geo.address}`)
        .openPopup();
  
      emit("locationSelected", {
        lat: newPos.lat,
        lon: newPos.lng,
        ...geo,
      });
    });
  };
  
  // Sync props with map
  watch(
    [() => props.initialLat, () => props.initialLng, map],
    async ([lat, lng, leafletMap]) => {
      if (lat && lng && leafletMap && !markerInitialized.value) {
        const geo = await reverseGeocode(lat, lng);
        searchQuery.value = geo.address;
        setMarker(lat, lng, geo.address);
        markerInitialized.value = true;
      }
    },
    { immediate: true }
  );
  
  // Reset marker if editMode changes
  watch(
    () => props.editMode,
    async () => {
      if (!map.value || props.initialLat == null || props.initialLng == null)
        return;
  
      const geo = await reverseGeocode(props.initialLat, props.initialLng);
      searchQuery.value = geo.address;
      setMarker(props.initialLat, props.initialLng, geo.address);
    },
    { immediate: true }
  );
  
  // Mount map
  onMounted(async () => {
    await nextTick();
    map.value = L.map("map", {
      center:
        props.initialLat && props.initialLng
          ? [props.initialLat, props.initialLng]
          : [mapConfig.center.lat, mapConfig.center.lng],
      zoom: mapConfig.zoom,
      zoomControl: true,
      attributionControl: false,
    });
  
    L.tileLayer(mapConfig.tileLayerUrl, mapConfig.tileLayerOptions).addTo(
      map.value
    );
  
    setTimeout(() => map.value?.invalidateSize(), 300);
  });
  
  // Clean up
  onBeforeUnmount(() => {
    map.value?.remove();
    map.value = null;
    marker.value = null;
  });
  </script>
  
  <style scoped>
  .full-map {
  height: 100vh;
  width: 100%;
}
  .location-list {
    background: white;
    border: 1px solid #ddd;
    max-height: 200px;
    overflow-y: auto;
    position: absolute;
    z-index: 1000;
    width: 100%;
  }
  .location-list li {
    padding: 8px;
    cursor: pointer;
    border-bottom: 1px solid #ddd;
  }
  .location-list li:hover {
    background: #f0f0f0;
  }
  .loading {
    font-size: 14px;
    color: #666;
    margin-top: 8px;
  }
  </style>
  