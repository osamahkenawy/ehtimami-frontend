<template>
  <div>
    <div class="full-map" id="map"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import 'leaflet/dist/leaflet.css';
import * as L from 'leaflet';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import 'leaflet.markercluster';
import { addressPoints } from '@/fakeData/fakeSavedPlaces';
import icon from '@/assets/images/map/marker-of-no-marker.png';
import markerShadow from '@/assets/images/map/markers/marker-shadow.png';
import mapConfig from '@/config/map';

const initialMap = ref<L.Map | null>(null);

const myIcon = L.icon({
  iconUrl: icon,
  ...mapConfig.iconSettings,
  shadowUrl: markerShadow
});

onMounted(() => {
  initialMap.value = L.map('map', {
    zoomControl: false,
    zoom: mapConfig.zoom,
    zoomAnimation: false,
    fadeAnimation: true,
    markerZoomAnimation: true
  }).setView([mapConfig.center.lat, mapConfig.center.lng], mapConfig.zoom);

  L.tileLayer(mapConfig.tileLayerUrl, mapConfig.tileLayerOptions).addTo(initialMap.value!);

  const markers = L.markerClusterGroup();

  addressPoints.forEach((element, index) => {
    const each_marker = L.marker([element.latitude, element.longitude], { icon: myIcon })
      .bindPopup(`
        <strong>Location ${index + 1}</strong><br>
        Latitude: ${element.latitude}<br>
        Longitude: ${element.longitude}
      `);
    markers.addLayer(each_marker);
  });

  initialMap.value!.addLayer(markers);

  const bounds = L.latLngBounds(addressPoints.map(point => [point.latitude, point.longitude]));
  initialMap.value!.fitBounds(bounds);

  L.control.zoom({ position: 'topright' }).addTo(initialMap.value!);
});

onUnmounted(() => {
  if (initialMap.value) {
    initialMap.value.remove();
  }
});
</script>

