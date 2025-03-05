<template>
  <div>
    <!-- ✅ Clickable Text with 12-hour Display -->
    <span 
      @click="openPopup" 
    
      class="time-text text-input font-bold"

    >
      {{ formattedTime || $t("select_time") }}
    </span>
 
    <!-- ✅ Time Picker Popup -->
    <div v-if="showPopup" class="popup-overlay" @click.self="closePopup">
      <div class="popup-content">
        <time-picker v-model="tempTime" format="hh:mm a" manual-input color="#1e3a8a" />
        <div class="flex justify-between mt-4">
          <button class="btn btn-outline-secondary" @click="closePopup">
            {{ $t("cancel") }}
          </button>
          <button class="btn btn-primary" @click="confirmTime">
            {{ $t("ok") }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits, computed, watch } from "vue";
import moment from "moment"; // ✅ Import moment.js
import { useI18n } from "vue-i18n";
import { TimePicker } from "vue-material-time-picker";
import "vue-material-time-picker/dist/style.css";

const { t } = useI18n();

// ✅ Props with Default Value
const props = defineProps({
  modelValue: {
    type: String,
    default: "", // ✅ Ensures it's always a string
  },
});

// ✅ Emits
const emit = defineEmits(["update:modelValue"]);

// ✅ State
const showPopup = ref(false);
const tempTime = ref("");

// ✅ Computed: Convert stored 24-hour time to 12-hour format
const formattedTime = computed(() => {
  return props.modelValue ? moment(props.modelValue, "HH:mm").format("hh:mm A") : "";
});

// ✅ Watch for changes in modelValue and update tempTime
watch(() => props.modelValue, (newValue) => {
  tempTime.value = newValue ? moment(newValue, "HH:mm").format("hh:mm A") : "";
}, { immediate: true });

// ✅ Open Time Picker Popup
const openPopup = () => {
  tempTime.value = formattedTime.value || moment().format("hh:mm A"); // Default to current time
  showPopup.value = true;
};

// ✅ Close Time Picker without saving
const closePopup = () => {
  showPopup.value = false;
};

// ✅ Confirm Time Selection (convert back to 24-hour before emitting)
const confirmTime = () => {
  emit("update:modelValue", moment(tempTime.value, "hh:mm A").format("HH:mm"));
  showPopup.value = false;
};
</script>

<style scoped>
/* ✅ Clickable Text */
.time-text {
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
