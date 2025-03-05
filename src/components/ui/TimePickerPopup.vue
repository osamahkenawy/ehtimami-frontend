<template>
    <div>
      <!-- ✅ Clickable Text with Dark Mode Color Fix -->
      <span 
        @click="openPopup" 
        class="time-text font-semibold"
        :class="{ 'dark:text-[#41b0ff]': true }"
      >
        {{ modelValue || 'Select Time' }}
      </span>
  
      <!-- ✅ Time Picker Popup -->
      <div v-if="showPopup" class="popup-overlay" @click.self="closePopup">
        <div class="popup-content">
          <time-picker v-model="tempTime" format="hh:mm a" manual-input color="#181f32" />          
          <div class="flex justify-between mt-4">
            <button class="btn btn-outline-secondary" @click="closePopup">Cancel</button>
            <button class="btn btn-primary" @click="confirmTime">OK</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, defineProps, defineEmits } from "vue";
  import { TimePicker } from "vue-material-time-picker";
  import "vue-material-time-picker/dist/style.css";
  
  // Props
  const props = defineProps({
    modelValue: String, // ✅ Accepts v-model
  });
  
  // Emits
  const emit = defineEmits(["update:modelValue"]);
  
  // ✅ State
  const showPopup = ref(false);
  const tempTime = ref(props.modelValue || "");
  
  // ✅ Open Time Picker Popup
  const openPopup = () => {
    tempTime.value = props.modelValue || "";
    showPopup.value = true;
  };
  
  // ✅ Close Time Picker without saving
  const closePopup = () => {
    showPopup.value = false;
  };
  
  // ✅ Confirm Time Selection
  const confirmTime = () => {
    emit("update:modelValue", tempTime.value);
    showPopup.value = false;
  };
  </script>
  
  <style scoped>
  /* ✅ Clickable Text */
  .time-text {
    color: #181f32; /* Default dark color */
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    transition: color 0.2s ease-in-out;
  }
  
  /* ✅ Ensure `dark:` works properly */
  :deep(.dark .time-text) {
    color: #41b0ff !important;
  }
  
  /* ✅ Popup Styles */
  .popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99999;
  }
  
  .popup-content {
    background: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
  }
  </style>
  