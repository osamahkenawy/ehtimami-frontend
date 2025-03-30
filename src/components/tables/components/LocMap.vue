<template>
  <div>
    <div v-if="isLoading" class="loading">{{ $t("loading") }}</div>

   

    <div class="full-map mt-4 border rounded-md" id="map"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps, defineEmits, watch, nextTick } from "vue";
import { useI18n } from "vue-i18n";
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";
import mapConfig from "@/config/map";

const { t, locale } = useI18n();

// Props
const props = defineProps({
  schoolLat: { type: Number, default: 0 },
  schoolLng: { type: Number, default: 0},
  schoolAddress: { type: String, default: "" },
  country: { type: String, default: "" },
});

const searchQuery = ref("");
const locations = ref<
  Array<{ place_id: string; lat: string; lon: string; display_name: string }>
>([]);
const map = ref<L.Map | null>(null);
const schoolMarker = ref<L.Marker | null>(null);
const isLoading = ref(false);



// Custom icons
const schoolIcon = L.icon({
  iconUrl: new URL(
    "@/assets/images/map/markers/map-marker.png",
    import.meta.url
  ).href,
  iconSize: [45, 45],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
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
      school_city:
        data.address?.city || data.address?.town || data.address?.village || "",
      school_country: data.address?.country || "",
    };
  } catch (error) {
    return {
      address: t("location.unknownLocation"),
      school_region: "",
      school_city: "",
      school_country: "",
    };
  }
};



// Adjust the map to fit both markers
const adjustMapBounds = () => {
  if (!map.value) return;

  const bounds = L.latLngBounds([[props.schoolLat, props.schoolLng]]);



  map.value.fitBounds(bounds, { padding: [50, 50] });
};

// Initialize map
onMounted(() => {
  nextTick(() => {
    map.value = L.map("map", {
      center: [props.schoolLat, props.schoolLng],
      zoom: 14,
      zoomControl: true,
      attributionControl: false,
    });

    L.tileLayer(mapConfig.tileLayerUrl, mapConfig.tileLayerOptions).addTo(
      map.value
    );

    // Add school marker
    schoolMarker.value = L.marker([props.schoolLat, props.schoolLng], {
      icon: schoolIcon,
    })
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
