<template>
    
      <button 
        type="button" 
        v-tippy="$t('add-new')"
        class="btn btn-dark w-10 h-10 p-0 rounded-full flex items-center justify-center"
        @click="$emit('click')"
      >
        <icon-plus />
      </button>
   
  </template>
  
  <script setup>
import iconPlus from '@/components/icon/icon-plus.vue';
  defineEmits(["click"]); 
  </script>
  
  <style scoped></style>
  