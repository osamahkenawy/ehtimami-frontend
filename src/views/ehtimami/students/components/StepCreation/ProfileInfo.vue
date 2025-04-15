<template>
    <form @submit.prevent="submitStep">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block">Gender</label>
          <select v-model="form.gender" class="input">
            <option value="1">Male</option>
            <option value="2">Female</option>
          </select>
        </div>
        <div>
          <label class="block">Birth Date</label>
          <input v-model="form.birth_date" type="date" class="input" />
        </div>
        <div>
          <label class="block">Nationality</label>
          <input v-model="form.nationality" class="input" />
        </div>
      </div>
  
      <div class="mt-6 flex justify-between">
        <button type="button" class="btn" @click="$emit('back')">Back</button>
        <button type="submit" class="btn-primary">Next</button>
      </div>
    </form>
  </template>
  
  <script setup lang="ts">
  import { reactive } from 'vue'
  const emit = defineEmits(['next', 'back'])
  
  const form = reactive({
    gender: '',
    birth_date: '',
    nationality: ''
  })
  
  function submitStep() {
    emit('next', form)
  }
  </script>
  