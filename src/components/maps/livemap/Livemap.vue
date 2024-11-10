<template>
  <div class="full-map" id="map"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import 'leaflet.markercluster';
import mapConfig from '@/config/map';
import defaultVehicleIcon from '@/assets/images/map/vehicles/default/green.svg';

// Define the Vehicle interface if not already done
interface Vehicle {
  id: number;
  name: string;
  plate: string;
  location: {
    lat: number;
    lng: number;
  };
  // Add other properties as needed
}

// Define props with correct types for vehicles and focusedVehicle
const props = defineProps<{
  vehicles: Vehicle[];            // vehicles is an array of Vehicle
  focusedVehicle?: Vehicle | null; // focusedVehicle can be a Vehicle, null, or undefined
}>();

const mapInstance = ref<L.Map | null>(null);
const markersLayer = ref<L.MarkerClusterGroup | null>(null);

const customIcon = L.icon({
  iconUrl: defaultVehicleIcon,
  ...mapConfig.iconSettings,
});

// Function to initialize the map
const initializeMap = () => {
  if (!mapInstance.value) {
    mapInstance.value = L.map('map', {
      center: props.focusedVehicle
        ? [props.focusedVehicle.location.lat, props.focusedVehicle.location.lng]
        : [mapConfig.center.lat, mapConfig.center.lng],
      zoom: props.focusedVehicle ? 15 : mapConfig.zoom,
      zoomControl: true,
    });

    L.tileLayer(mapConfig.tileLayerUrl, {
      attribution: mapConfig.tileLayerOptions.attribution,
      minZoom: mapConfig.tileLayerOptions.minZoom,
      maxZoom: mapConfig.tileLayerOptions.maxZoom,
    }).addTo(mapInstance.value);

    markersLayer.value = L.markerClusterGroup({
      disableClusteringAtZoom: 15,
    });
    mapInstance.value.addLayer(markersLayer.value);
  }
};

// Function to update markers
const updateMarkers = () => {
  if (!markersLayer.value) return;

  markersLayer.value.clearLayers();

  const vehiclesToDisplay = props.focusedVehicle ? [props.focusedVehicle] : props.vehicles;

  vehiclesToDisplay.forEach((vehicle) => {
    const marker = L.marker([vehicle.location.lat, vehicle.location.lng], { icon: customIcon })
      .bindPopup(`
        <strong>${vehicle.name}</strong><br>
        Plate: ${vehicle.plate}<br>
        Location: ${vehicle.location.lat}, ${vehicle.location.lng}
      `);
    markersLayer.value.addLayer(marker);
  });

  if (!props.focusedVehicle && props.vehicles.length > 0) {
    const bounds = L.latLngBounds(props.vehicles.map((v) => [v.location.lat, v.location.lng]));
    mapInstance.value?.fitBounds(bounds);
  }
};

// Initialize map and update markers on mount
onMounted(() => {
  initializeMap();
  updateMarkers();

  watch(
    () => [props.focusedVehicle, props.vehicles],
    () => {
      updateMarkers();
    },
    { immediate: true, deep: true }
  );
});

// Clean up map on unmount
onUnmounted(() => {
  if (mapInstance.value) {
    mapInstance.value.remove();
  }
  markersLayer.value?.clearLayers();
});
</script>

<style scoped>
.full-map {
  height: 100vh;
  width: 100%;
}
</style>
