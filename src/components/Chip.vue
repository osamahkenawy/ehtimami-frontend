<template>
    <div
      class="flex items-center justify-center px-1 py-1 rounded-full font-bold text-white"
      :style="{
        backgroundColor: headerBackgroundColor,
        border: `1px solid ${borderColor}`,
        maxWidth: 'fit-content',
        margin: '3px',
        alignItems: 'center',
        display: 'flex',
      }"
    >
      <!-- Optional small circle if showShip is true -->
      <div
        v-if="showShip"
        :style="{
          width: '7px',
          height: '7px',
          backgroundColor: textColor,
          marginRight: '5px',
          borderRadius: '50%',
          marginTop: '2px'
        }"
      ></div>
      <!-- Chip Content -->
      <span class="font-bold" :style="{ color: textColor }">{{ content }}</span>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { defineProps } from "vue";
  
  // Define props with type safety in TypeScript
  const props = defineProps<{
    content: string;
    textColor: string;
    borderColor: string;
    headerBackgroundColor: string;
    showShip?: boolean; // Optional prop
  }>();
  </script>
  
  <style scoped>
  /* Add custom styles if needed */
  </style>
  