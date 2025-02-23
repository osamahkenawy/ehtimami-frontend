<template>
  <div>
    <input
      id="location_search"
      v-model="searchQuery"
      @input="debounceFetchLocations"
      type="text"
      class="form-input px-4 py-2 border rounded-md focus:outline-none focus:ring-2 transition duration-200 ease-in-out"
      :placeholder="$t('location.enterSchoolLocation')" 
    />
    <div v-if="isLoading" class="loading">{{ $t("loading") }}</div> 
    
    <ul v-if="locations.length" class="location-list">
      <li v-for="location in locations" :key="location.place_id" @click="() => selectLocation(location)">
        <AnimatedIcon :name="'onmwuuox'" /> {{ location.display_name }}
      </li>
    </ul>
    
    <div class="full-map mt-4 border rounded-md" id="map"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps, defineEmits, watch, nextTick } from "vue";
import { useI18n } from "vue-i18n"; // ✅ Import Vue I18n
import "leaflet/dist/leaflet.css";
import { AnimatedIcon } from "@/components/icon/animatedIcon";
import * as L from "leaflet";
import mapConfig from "@/config/map";

// ✅ Initialize Vue I18n
const { t, locale } = useI18n(); // Get current locale

// Props
const props = defineProps({
  country: {
    type: String,
    required: false,
    default: ""
  }
});

// Reactive Data
const searchQuery = ref("");
const locations = ref<Array<{ place_id: string; lat: string; lon: string; display_name: string }>>([]);
const map = ref<L.Map | null>(null);
const marker = ref<L.Marker | null>(null);
const isLoading = ref(false);
const emit = defineEmits(["locationSelected"]);

// Debounce for API calls
let debounceTimeout: ReturnType<typeof setTimeout>;

const debounceFetchLocations = () => {
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(() => {
    fetchLocations();
  }, 500);
};

// Fetch Locations
const fetchLocations = () => {
  if (!searchQuery.value) {
    locations.value = [];
    return;
  }
  isLoading.value = true;
  let url = `https://nominatim.openstreetmap.org/search?format=json&q=${searchQuery.value}&accept-language=${locale.value}`; // ✅ Add localization
  if (props.country) {
    url += `&countrycodes=${props.country}`;
  }
  
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      locations.value = data.length ? data : [];
    })
    .finally(() => {
      isLoading.value = false;
    });
};

// Custom Marker Icon
const schoolIcon = L.icon({
  iconUrl: new URL('@/assets/images/map/marker-of-no-marker.png', import.meta.url).href, 
  iconSize: [32, 32], 
  iconAnchor: [16, 32], 
  popupAnchor: [0, -32] 
});

// ✅ Reverse Geocode Function with Localization Support
const reverseGeocode = async (lat: number, lon: number) => {
  const lang = locale.value; // ✅ Get current language
  const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&accept-language=${lang}`; // ✅ Request translated data
  
  try {
    const res = await fetch(url);
    const data = await res.json();
    
    return {
      address: data.display_name || t("location.unknownLocation"), // ✅ Localized "Unknown Location"
      school_region: data.address?.state || "",
      school_city: data.address?.city || data.address?.town || data.address?.village || "",
      school_country: data.address?.country || ""
    };
  } catch (error) {
    return { 
      address: t("location.unknownLocation"), // ✅ Localized fallback
      school_region: "", 
      school_city: "", 
      school_country: "" 
    };
  }
};

// Select Location & Add Draggable Marker
const selectLocation = async (location: { lat: string; lon: string; display_name: string }) => {
  if (!map.value) return;

  searchQuery.value = location.display_name;

  const geoData = await reverseGeocode(parseFloat(location.lat), parseFloat(location.lon));

  if (marker.value) marker.value.remove();

  marker.value = L.marker([parseFloat(location.lat), parseFloat(location.lon)], {
    icon: schoolIcon,
    draggable: true
  })
    .addTo(map.value)
    .bindPopup(`<b>${t("location.school")}:</b> ${location.display_name}`) // ✅ Localized "School"
    .openPopup();

  map.value.setView([parseFloat(location.lat), parseFloat(location.lon)], 15);

  emit("locationSelected", { 
    lat: parseFloat(location.lat), 
    lon: parseFloat(location.lon), 
    address: geoData.address,
    school_region: geoData.school_region,
    school_city: geoData.school_city,
    school_country: geoData.school_country
  });

  locations.value = [];

  // Handle marker drag event
  marker.value.on("dragend", async () => {
    const newPos = marker.value?.getLatLng();
    if (newPos) {
      const newGeoData = await reverseGeocode(newPos.lat, newPos.lng);
      searchQuery.value = newGeoData.address;
      marker.value?.setPopupContent(`<b>${t("location.movedLocation")}:</b> ${newGeoData.address}`).openPopup(); // ✅ Localized "Moved Location"
      emit("locationSelected", { 
        lat: newPos.lat, 
        lon: newPos.lng, 
        address: newGeoData.address,
        school_region: newGeoData.school_region,
        school_city: newGeoData.school_city,
        school_country: newGeoData.school_country
      });
    }
  });
};

// Watch for Input Clear
watch(searchQuery, (newValue) => {
  if (!newValue) {
    locations.value = [];
  }
});

// Initialize Map
onMounted(async () => {
  await nextTick();

  map.value = L.map("map", {
    center: [mapConfig.center.lat, mapConfig.center.lng],
    zoom: mapConfig.zoom,
    zoomControl: true,
    attributionControl: false
  });

  L.tileLayer(mapConfig.tileLayerUrl, mapConfig.tileLayerOptions).addTo(map.value);

  setTimeout(() => {
    map.value?.invalidateSize();
  }, 500);
});
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
.loading {
  font-size: 14px;
  color: #666;
  margin-top: 8px;
}
</style>
