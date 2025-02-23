<template>
  <div>
     
    <input id="location_search" v-model="searchQuery" @input="debounceFetchLocations" type="text" class="form-input px-4 py-2 border rounded-md focus:outline-none focus:ring-2  transition duration-200 ease-in-out"  placeholder="Enter Location" />
    <div v-if="isLoading" class="loading">Loading...</div>
    <ul v-if="locations.length" class="location-list">
      <li v-for="location in locations" :key="location.place_id" @click="selectLocation(location)">
        <AnimatedIcon :name="'onmwuuox'" /> {{ location.display_name }}
      </li>
    </ul>
    <div class="full-map mt-4" id="map"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps, defineEmits, watch } from "vue";
import "leaflet/dist/leaflet.css";
import { AnimatedIcon } from "@/components/icon/animatedIcon";
import * as L from "leaflet";
import mapConfig from "@/config/map";

const props = defineProps({
  country: {
    type: String,
    required: false,
    default: ""
  }
});

const searchQuery = ref("");
const locations = ref<Array<{ place_id: string; lat: string; lon: string; display_name: string }>>([]);
const map = ref<L.Map | null>(null);
const marker = ref<L.Marker | null>(null);
const isLoading = ref(false);
const emit = defineEmits(["locationSelected"]);
let debounceTimeout: ReturnType<typeof setTimeout>;

const debounceFetchLocations = () => {
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(() => {
    fetchLocations();
  }, 500);
};

const fetchLocations = () => {
  if (!searchQuery.value) {
    locations.value = [];
    return;
  }
  isLoading.value = true;
  let url = `https://nominatim.openstreetmap.org/search?format=json&q=${searchQuery.value}`;
  if (props.country) {
    url += `&countrycodes=${props.country}`;
  }
  
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.length === 0 && props.country) {
        fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${searchQuery.value}`)
          .then((res) => res.json())
          .then((globalData) => {
            locations.value = globalData;
          });
      } else {
        locations.value = data;
      }
    })
    .finally(() => {
      isLoading.value = false;
    });
};

const selectLocation = (location: { lat: string; lon: string; display_name: string }) => {
  if (!map.value) return;
  if (marker.value) marker.value.remove();
  marker.value = L.marker([parseFloat(location.lat), parseFloat(location.lon)])
    .addTo(map.value)
    .bindPopup(location.display_name)
    .openPopup();
  map.value.setView([parseFloat(location.lat), parseFloat(location.lon)], 15);
  emit("locationSelected", { lat: parseFloat(location.lat), lon: parseFloat(location.lon), address: location.display_name });
  locations.value = [];
};

// Watch for clearing input
watch(searchQuery, (newValue) => {
  if (!newValue) {
    locations.value = [];
  }
});

onMounted(() => {
  map.value = L.map("map").setView([mapConfig.center.lat, mapConfig.center.lng], mapConfig.zoom);
  L.tileLayer(mapConfig.tileLayerUrl, mapConfig.tileLayerOptions).addTo(map.value);
});

</script>

<style scoped>
.full-map {
  height: 300px;
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
