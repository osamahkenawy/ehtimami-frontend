<!-- VehiclePopup.vue -->
<template>
    <div>
      <strong>{{ vehicle.name }}</strong><br />
      Plate: {{ vehicle.plate }}<br />
      Speed: {{ vehicle.speed.value }} {{ vehicle.speed.unit }}<br />
      Status: {{ vehicle.driving_status ? 'Driving' : 'Idle' }}
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  
  interface Vehicle {
    name: string;
    plate: string;
    speed: {
      value: number;
      unit: string;
    };
    driving_status: boolean;
  }
  
  const props = defineProps<{ vehicle: Vehicle }>();
  </script>
  