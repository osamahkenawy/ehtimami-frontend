<template>
    <div>
      <input
        id="location_search"
        v-model="searchQuery"
        @input="debounceFetchLocations"
        type="text"
        class="form-input px-4 py-2 border rounded-md focus:outline-none focus:ring-2 transition duration-200 ease-in-out"
        :placeholder="$t('location.enterTeacherLocation')" 
      />
      <div v-if="isLoading" class="loading">{{ $t("loading") }}</div>
  
      <ul v-if="locations.length" class="location-list">
        <li v-for="location in locations" :key="location.place_id" @click="selectLocation(location)">
          <AnimatedIcon :name="'onmwuuox'" /> {{ location.display_name }}
        </li>
      </ul>
  
      <div class="full-map mt-4 border rounded-md" id="map"></div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, defineProps, defineEmits, watch, nextTick } from "vue";
  import { useI18n } from "vue-i18n";
  import "leaflet/dist/leaflet.css";
  import * as L from "leaflet";
  import mapConfig from "@/config/map";
  import { AnimatedIcon } from "@/components/icon/animatedIcon";
  
  const { t, locale } = useI18n();
  
  // Props
  const props = defineProps({
    schoolLat: { type: String, default:  ""},
    schoolLng: { type: String, default: "" },
    schoolAddress: { type: String, default: "" },
    country: { type: String, default: "" }
  });
  
  const searchQuery = ref("");
  const locations = ref<Array<{ place_id: string; lat: string; lon: string; display_name: string }>>([]);
  const map = ref<L.Map | null>(null);
  const schoolMarker = ref<L.Marker | null>(null);
  const searchMarker = ref<L.Marker | null>(null);
  const isLoading = ref(false);
  const emit = defineEmits(["locationSelected"]);
  
  let debounceTimeout: ReturnType<typeof setTimeout>;
  
  // Debounce function
  const debounceFetchLocations = () => {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(fetchLocations, 500);
  };
  
  // Fetch location search results
  const fetchLocations = () => {
    if (!searchQuery.value) {
      locations.value = [];
      return;
    }
  
    isLoading.value = true;
    let url = `https://nominatim.openstreetmap.org/search?format=json&q=${searchQuery.value}&accept-language=${locale.value}`;
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
  
  // Custom icons
  const schoolIcon = L.icon({
  iconUrl: new URL('@/assets/images/map/markers/map-marker.png', import.meta.url).href, 
  iconSize: [45, 45], 
  iconAnchor: [16, 32], 
  popupAnchor: [0, -32] 
});


const locationIcon = L.icon({
  iconUrl: new URL('@/assets/images/map/pngwing.com.png', import.meta.url).href, 
  iconSize: [45, 45], 
  iconAnchor: [16, 32], 
  popupAnchor: [0, -32] 
});
  

  // Reverse geocoding
  const reverseGeocode = async (lat: number, lon: number) => {
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&accept-language=${locale.value}`;
  
    try {
      const res = await fetch(url);
      const data = await res.json();
  
      return {
        address: data.display_name || t("location.unknownLocation"),
        school_region: data.address?.state || "",
        school_city: data.address?.city || data.address?.town || data.address?.village || "",
        school_country: data.address?.country || ""
      };
    } catch (error) {
      return {
        address: t("location.unknownLocation"),
        school_region: "",
        school_city: "",
        school_country: ""
      };
    }
  };
  
  // Select location from search results
  const selectLocation = async (location: { lat: string; lon: string; display_name: string }) => {
    if (!map.value) return;
  
    searchQuery.value = location.display_name;
  
    const geoData = await reverseGeocode(parseFloat(location.lat), parseFloat(location.lon));
  
    if (searchMarker.value) searchMarker.value.remove();
  
    searchMarker.value = L.marker([parseFloat(location.lat), parseFloat(location.lon)], {
      icon: locationIcon,
      draggable: true
    })
      .addTo(map.value)
      .bindPopup(`<b>${t("location.selected")}:</b> ${location.display_name}`)
      .openPopup();
  
    adjustMapBounds();
  
    emit("locationSelected", {
      lat: parseFloat(location.lat),
      lon: parseFloat(location.lon),
      address: geoData.address,
      school_region: geoData.school_region,
      school_city: geoData.school_city,
      school_country: geoData.school_country
    });
  
    locations.value = [];
  
    // Allow dragging for the selected marker
    searchMarker.value.on("dragend", async () => {
      const newPos = searchMarker.value?.getLatLng();
      if (newPos) {
        const newGeoData = await reverseGeocode(newPos.lat, newPos.lng);
        searchQuery.value = newGeoData.address;
        searchMarker.value?.setPopupContent(`<b>${t("location.selected")}:</b> ${newGeoData.address}`).openPopup();
  
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
  
  // Adjust the map to fit both markers
  const adjustMapBounds = () => {
    if (!map.value) return;
  
    const bounds = L.latLngBounds([
      [props.schoolLat, props.schoolLng]
    ]);
  
    if (searchMarker.value) {
      bounds.extend(searchMarker.value.getLatLng());
    }
  
    map.value.fitBounds(bounds, { padding: [50, 50] });
  };
  
  // Initialize map
  onMounted(() => {
    nextTick(() => {
      map.value = L.map("map", {
        center: [props.schoolLat, props.schoolLng],
        zoom: 14,
        zoomControl: true,
        attributionControl: false
      });
  
      L.tileLayer(mapConfig.tileLayerUrl, mapConfig.tileLayerOptions).addTo(map.value);
  
      // Add school marker
      schoolMarker.value = L.marker([props.schoolLat, props.schoolLng], { icon: schoolIcon })
        .addTo(map.value)
        .bindPopup(`<b>${t("location.school")}:</b> ${props.schoolAddress}`)
        .openPopup();
  
      adjustMapBounds();
  
      setTimeout(() => {
        map.value?.invalidateSize();
      }, 500);
    });
  });
  
  // Watch for clearing input
  watch(searchQuery, (newValue) => {
    if (!newValue) {
      locations.value = [];
    }
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
  