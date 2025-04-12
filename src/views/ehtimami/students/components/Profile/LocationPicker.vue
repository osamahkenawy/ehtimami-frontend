<template>
  <div class="w-full h-full">
    <!-- Address Input -->
    <div class="flex">
      <div class="bg-[#eee] whitespace-nowrap flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-[#e0e6ed] dark:border-[#17263c] dark:bg-[#1b2e4b]">
        {{ $t("location.address") }}
      </div>
      <input
        v-model="searchQuery"
        @input="props.editMode && debounceFetchLocations()"
        type="text"
        :disabled="!props.editMode"
        :class="[
          'form-input ltr:rounded-l-none rtl:rounded-r-none py-2.5 text-base w-full',
          !props.editMode ? 'cursor-not-allowed' : ''
        ]"
        :placeholder="props.placeholder || $t('location.enterUserLocation')"
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
    <div :style="{ height: props.height || '500px' }" class="w-full rounded-md border mt-4 z-[2]" id="map" />
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
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";
import { AnimatedIcon } from "@/components/icon/animatedIcon";
import mapConfig from "@/config/map";

const props = defineProps<{
  modelValue: {
    lat: number;
    lng: number;
    address: string;
  };
  editMode?: boolean;
  placeholder?: string;
  height?: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: {
    lat: number;
    lng: number;
    address: string;
    user_region: string;
    user_city: string;
    user_country: string;
  }): void;
}>();

const { t, locale } = useI18n();
const searchQuery = ref(props.modelValue.address || "");
const locations = ref<any[]>([]);
const isLoading = ref(false);
const map = ref<L.Map | null>(null);
const marker = ref<L.Marker | null>(null);

const userIcon = L.icon({
  iconUrl: new URL("@/assets/images/map/markers/marker.png", import.meta.url).href,
  iconSize: [45, 45],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

let debounceTimeout: ReturnType<typeof setTimeout>;
const debounceFetchLocations = () => {
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(fetchLocations, 500);
};

const fetchLocations = async () => {
  if (!searchQuery.value) return (locations.value = []);
  isLoading.value = true;
  const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchQuery.value)}&accept-language=${locale.value}`);
  locations.value = await res.json();
  isLoading.value = false;
};

const reverseGeocode = async (lat: number, lon: number) => {
  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&accept-language=${locale.value}`
    );
    const data = await res.json();

    if (!data || !data.address) throw new Error("Invalid response");

    return {
      address: data.display_name || t("location.unknownLocation"),
      user_region: data.address.state || "",
      user_city: data.address.city || data.address.town || data.address.village || "",
      user_country: data.address.country || "",
    };
  } catch (error) {
    console.error("Reverse geocoding failed:", error);
    return {
      address: t("location.unknownLocation"),
      user_region: "",
      user_city: "",
      user_country: "",
    };
  }
};

const setMarker = async (lat: number, lng: number, popupText: string) => {
  if (!map.value) return;
  console.log("setMarker")
  if (!marker.value) {
    marker.value = L.marker([lat, lng], {
      icon: userIcon,
      draggable: !!props.editMode,
    }).addTo(map.value);
  }

  marker.value.setLatLng([lat, lng]);
  marker.value.setPopupContent(`<b>${t("location.user")}:</b> ${popupText}`);
  if (map.value.getZoom() < 9) {
    map.value.flyTo([lat, lng], 9, { animate: true, duration: 0.5 });
  } else {
    marker.value.openPopup();
  }

  if (props.editMode) {
    marker.value.dragging?.enable();
  } else {
    marker.value.dragging?.disable();
  }

  // Bind drag only once
  marker.value.off("dragend").on("dragend", async () => {
    const newPos = marker.value?.getLatLng();
    if (!newPos) return;
    const geo = await reverseGeocode(newPos.lat, newPos.lng);
    searchQuery.value = geo.address;
    emit("update:modelValue", {
      lat: newPos.lat,
      lng: newPos.lng,
      ...geo,
    });
  });
};


const selectLocation = async (location: { lat: string; lon: string; display_name: string }) => {
  const lat = parseFloat(location.lat);
  const lng = parseFloat(location.lon);
  const geo = await reverseGeocode(lat, lng);
  searchQuery.value = geo.address;
  await setMarker(lat, lng, geo.address);
  emit("update:modelValue", {
    lat,
    lng,
    ...geo,
  });
  locations.value = [];
};

watch(
  () => props.modelValue,
  async (val) => {
    if (map.value && val.lat && val.lng) {
      const geo = await reverseGeocode(val.lat, val.lng);
      searchQuery.value = geo.address;
      setMarker(val.lat, val.lng, geo.address);
    }
  },
  { immediate: true, deep: true }
);

onMounted(async () => {
  await nextTick();
  map.value = L.map("map", {
    center: props.modelValue.lat && props.modelValue.lng
      ? [props.modelValue.lat, props.modelValue.lng]
      : [mapConfig.center.lat, mapConfig.center.lng],
    zoom: mapConfig.zoom,
    zoomControl: true,
    attributionControl: false,
  });

  L.tileLayer(mapConfig.tileLayerUrl, mapConfig.tileLayerOptions).addTo(map.value);

  // Important: wait to ensure map is rendered
  nextTick(() => {
    setTimeout(() => {
      map.value?.invalidateSize();
    }, 100);
  });
});

onBeforeUnmount(() => {
  if (map.value) {
    map.value.off(); // unbind events
    map.value.remove(); // remove from DOM
  }
  map.value = null;
  marker.value = null;
});
watch(
  () => [map.value, props.modelValue.lat, props.modelValue.lng],
  async ([mapInstance, lat, lng]) => {
    if (mapInstance && lat && lng) {
      const geo = await reverseGeocode(lat, lng);
      searchQuery.value = geo.address;
      await setMarker(lat, lng, geo.address);
    }
  },
  { immediate: true }
);

</script>

<style scoped>
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
</style>
