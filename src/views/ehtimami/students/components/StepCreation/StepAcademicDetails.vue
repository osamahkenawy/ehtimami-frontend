<template>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label class="form-label">First Name</label>
        <input v-model="modelValue.firstName" type="text" class="form-input" />
      </div>
  
      <div>
        <label class="form-label">Last Name</label>
        <input v-model="modelValue.lastName" type="text" class="form-input" />
      </div>
  
      <div>
        <label class="form-label">Email</label>
        <input v-model="modelValue.email" type="email" class="form-input" />
      </div>
  
      <div>
        <label class="form-label">Phone</label>
        <input v-model="modelValue.phone" type="tel" class="form-input" />
      </div>
  
      <div>
        <label class="form-label">Password</label>
        <input v-model="modelValue.password" type="password" class="form-input" />
      </div>
  
      <div>
        <label class="form-label">Student Number</label>
        <input v-model="modelValue.student_no" type="text" class="form-input" />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  const props = defineProps<{
    modelValue: {
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      password: string;
      student_no: string;
      // ...extend as needed
    };
  }>();
  
  const emit = defineEmits(["update:modelValue"]);
  </script>
  
  <style scoped>
  .form-label {
    @apply block text-sm font-medium text-gray-700 mb-1;
  }
  .form-input {
    @apply w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500;
  }
  </style>
  