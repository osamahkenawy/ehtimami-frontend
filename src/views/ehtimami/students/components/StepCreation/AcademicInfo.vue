<template>
    <form @submit.prevent="submitStep">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block">Student No *</label>
          <input v-model="form.student_no" type="text" class="input" />
        </div>
        <div>
          <label class="block">Grade *</label>
          <select v-model="form.grade" class="input">
            <option value="">Select Grade</option>
            <option>Grade 1</option>
            <option>Grade 2</option>
            <option>Grade 3</option>
          </select>
        </div>
        <div>
          <label class="block">Section *</label>
          <input v-model="form.section" class="input" />
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
    student_no: '',
    grade: '',
    section: ''
  })
  
  function submitStep() {
    if (!form.student_no || !form.grade || !form.section) return
    emit('next', form)
  }
  </script>
  