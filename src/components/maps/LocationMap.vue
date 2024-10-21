<template>
  <div>
    <div class="full-map" id="map"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';
import 'leaflet/dist/leaflet.css';
import * as L from 'leaflet';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import 'leaflet.markercluster';
import mapConfig from '@/config/map';
import markerShadow from '@/assets/images/map/markers/marker-shadow.png';

// Import the default vehicle icon directly
import defaultVehicleIcon from '@/assets/images/map/vehicles/motorscyels/motor-cycle-blue.svg';

// Props to accept vehicles array
const props = defineProps({
  vehicles: {
    type: Array,
    required: true
  }
});

const initialMap = ref<L.Map | null>(null);
const markersLayer = ref<L.MarkerClusterGroup | null>(null);

// Custom icon
const myIcon = L.icon({
  iconUrl: defaultVehicleIcon, // Use the imported image
  ...mapConfig.iconSettings,
  shadowUrl: markerShadow
});

// Function to add vehicle markers to the map
const addVehicleMarkers = (vehicles) => {
  if (!markersLayer.value) return;

  // Clear existing markers
  markersLayer.value.clearLayers();

  // Add new markers for each vehicle
  vehicles.forEach(vehicle => {
    const marker = L.marker([vehicle.location.lat, vehicle.location.lng], { icon: myIcon })
      .bindPopup(`
        <strong>${vehicle.name}</strong><br>
        Plate: ${vehicle.plate}<br>
        Speed: ${vehicle.speed.value} ${vehicle.speed.unit}<br>
        Status: ${vehicle.driving_status ? 'Driving' : 'Idle'}
      `);
    markersLayer.value!.addLayer(marker); // Add marker to marker cluster group
  });

  // Fit map to show all markers
  if (vehicles.length > 0) {
    const bounds = L.latLngBounds(vehicles.map(vehicle => [vehicle.location.lat, vehicle.location.lng]));
    initialMap.value!.fitBounds(bounds);
  }
};

onMounted(() => {
  // Initialize the map
  initialMap.value = L.map('map', {
    zoomControl: false,
    zoom: mapConfig.zoom,
    zoomAnimation: false,
    fadeAnimation: true,
    markerZoomAnimation: true
  }).setView([mapConfig.center.lat, mapConfig.center.lng], mapConfig.zoom);

  // Add tile layer
  L.tileLayer(mapConfig.tileLayerUrl, mapConfig.tileLayerOptions).addTo(initialMap.value);

  // Initialize marker cluster group
  markersLayer.value = L.markerClusterGroup();
  initialMap.value.addLayer(markersLayer.value);

  // Add initial vehicle markers
  addVehicleMarkers(props.vehicles);

  // Watch for changes in the vehicles array and update the markers dynamically
  watch(() => props.vehicles, (newVehicles) => {
    addVehicleMarkers(newVehicles);
  }, { immediate: true });

  // Add zoom control
  L.control.zoom({ position: 'topright' }).addTo(initialMap.value);
});

// Clean up on unmount
onUnmounted(() => {
  if (initialMap.value) {
    initialMap.value.remove();
  }
});
</script>

