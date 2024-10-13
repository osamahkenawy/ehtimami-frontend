<template>
    <div>
      <!-- LocationMap Component -->
      <UAEPlate plateNumber="12-DUB-3456" plateColor="red" :flat="false" />
      <div class="mt-5">
        <LocationMap />
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
    // Import the LocationMap component
    import LocationMap from '@/components/maps/LocationMap.vue';
    import UAEPlate from '@/components/plates/UAEPlate.vue';
  </script>
  