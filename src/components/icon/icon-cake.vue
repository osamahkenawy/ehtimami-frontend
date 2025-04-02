<template>
    <!-- Outline style -->
    <svg
      v-if="!fill"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.5"
        d="M4 10C4 8.89543 4.89543 8 6 8H18C19.1046 8 20 8.89543 20 10V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V10Z"
        stroke="currentColor"
        stroke-width="1.5"
      />
      <path
        d="M8 8V6C8 4.89543 8.89543 4 10 4C11.1046 4 12 4.89543 12 6V8"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M16 8V6C16 4.89543 16.8954 4 18 4C19.1046 4 20 4.89543 20 6V8"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M12 13H12.01"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  
    <!-- Filled style -->
    <svg
      v-else
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.5"
        d="M6 8H18C19.1046 8 20 8.89543 20 10V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V10C4 8.89543 4.89543 8 6 8Z"
        fill="currentColor"
      />
      <path
        d="M8 8V6C8 4.89543 8.89543 4 10 4C11.1046 4 12 4.89543 12 6V8H8Z"
        fill="currentColor"
      />
      <path
        d="M16 8V6C16 4.89543 16.8954 4 18 4C19.1046 4 20 4.89543 20 6V8H16Z"
        fill="currentColor"
      />
      <circle cx="12" cy="13" r="1" fill="currentColor" />
    </svg>
  </template>
  
  <script lang="ts" setup>
  defineProps({
    fill: {
      type: Boolean,
      default: false,
    },
  });
  </script>
  