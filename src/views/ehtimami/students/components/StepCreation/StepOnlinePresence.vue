<!-- src/views/ehtimami/students/components/StepCreation/StepOnlinePresence.vue -->
<template>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label class="form-label">Instagram</label>
        <input
          v-model="modelValue.profile.social_links.instagram"
          type="text"
          class="form-input"
          placeholder="@handle"
        />
      </div>
  
      <div>
        <label class="form-label">Github</label>
        <input
          v-model="modelValue.profile.social_links.github"
          type="text"
          class="form-input"
          placeholder="github-username"
        />
      </div>
  
      <div>
        <label class="form-label">Website</label>
        <input
          v-model="modelValue.profile.website"
          type="text"
          class="form-input"
          placeholder="https://"
        />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps({
    modelValue: Object
  })
  defineEmits(["update:modelValue"])
  </script>
  
  <style scoped>
  .form-label {
    @apply block text-sm font-medium text-gray-700 mb-1;
  }
  .form-input {
    @apply w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500;
  }
  </style>
  