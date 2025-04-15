<template>
    <form @submit.prevent="submitStep">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium">First Name *</label>
          <input v-model="form.firstName" type="text" class="input" />
          <p v-if="!form.firstName" class="text-red-500 text-sm mt-1">Required</p>
        </div>
  
        <div>
          <label class="block text-sm font-medium">Last Name *</label>
          <input v-model="form.lastName" type="text" class="input" />
          <p v-if="!form.lastName" class="text-red-500 text-sm mt-1">Required</p>
        </div>
  
        <div>
          <label class="block text-sm font-medium">Email *</label>
          <input v-model="form.email" type="email" class="input" />
        </div>
  
        <div>
          <label class="block text-sm font-medium">Phone</label>
          <input v-model="form.phone" type="text" class="input" />
        </div>
      </div>
  
      <div class="mt-6 flex justify-end">
        <button type="submit" class="btn-primary">Next</button>
      </div>
    </form>
  </template>
  
  <script setup lang="ts">
  import { reactive } from 'vue'
  
  const emit = defineEmits(['next'])
  
  const form = reactive({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  })
  
  function submitStep() {
    if (!form.firstName || !form.lastName) return
    emit('next', form)
  }
  </script>
  