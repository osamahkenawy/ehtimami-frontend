<template>
    <div
      class="relative flex items-center justify-center w-28 h-28 border border-gray-300 rounded-full overflow-hidden"
      :class="computedClass"
    >
      <!-- Loading Spinner -->
      <div v-if="uploaderStore.isUploading" class="absolute inset-0 flex items-center justify-center bg-white/50">
        <svg class="w-6 h-6 animate-spin text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="10" stroke-width="4" stroke-dasharray="31.4" />
        </svg>
      </div>
  
      <!-- File Input (Hidden) -->
      <input type="file" ref="fileInput" class="hidden" @change="handleFileChange" :accept="accept" />
  
      <!-- Uploaded Image Preview -->
      <div
        v-if="previewImage" 
        class="w-full h-full bg-cover bg-center object-cover cursor-pointer"
        :style="`background-image: url(${previewImage})`"
        @click="triggerFileInput"
      ></div>
  
      <!-- Placeholder Label -->
      <div v-else class="text-center cursor-pointer" @click="triggerFileInput">
        {{ label || "Upload Image" }}
      </div>
      <!-- Image Cropper Modal -->
      <div v-if="newImage" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
        <div class="bg-white rounded-lg shadow-lg p-4 max-w-lg w-full">
          <VueCropper ref="cropper" :src="newImage.image" :alt="newImage.name" @ready="cropperReady" />
          <div class="flex justify-between mt-4">
            <button class="px-4 py-2 bg-gray-500 text-white rounded" @click="cancelPick">Cancel</button>
            <button
              class="px-4 py-2 bg-blue-600 text-white rounded flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              :disabled="isUploading"
              @click="croppingConfirmed"
            >
              <svg v-if="isUploading" class="w-5 h-5 animate-spin mr-2 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="10" stroke-width="4" stroke-dasharray="31.4" />
              </svg>
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>


<script setup lang="ts">
import { ref, computed, defineProps, defineEmits, watch } from "vue";
import { useUploaderStore } from "@/stores/uploader";
import VueCropper from "vue-cropperjs";
import "cropperjs/dist/cropper.css";

// Define Props
const props = defineProps({
  modelValue: { type: String, default: "" },
  label: { type: String, default: "" },
  accept: { type: String, default: "image/jpeg, image/png" },
  name: { type: String, default: "profile_image" },
  platform: { type: String, default: "" },
  gender: { type: String, default: "" },
});

// Define Emits
const emit = defineEmits(["update:modelValue"]);

// Pinia Store
const uploaderStore = useUploaderStore();

// State
const fileInput = ref<HTMLInputElement | null>(null);
const newImage = ref<{ name: string; image: string } | null>(null);
const cropper = ref<VueCropper | null>(null);
const previewImage = ref<string>(props.modelValue);
const isUploading = ref<boolean>(false); // ✅ Track Uploading State

// Watch for changes in modelValue to update previewImage
watch(() => props.modelValue, (newVal) => {
  previewImage.value = newVal;
});

// Computed Class for Gender
const computedClass = computed(() => {
  return props.gender.toLowerCase() === "m"
    ? "border-blue-500"
    : props.gender.toLowerCase() === "f"
    ? "border-pink-500"
    : "";
});

// Open File Dialog
const triggerFileInput = () => fileInput.value?.click();

// Handle File Selection
const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (!target.files || !target.files.length) return;

  const file = target.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    newImage.value = { name: file.name, image: reader.result as string };
  };
  reader.readAsDataURL(file);
};

// Cropper Ready
const cropperReady = () => {
  cropper.value?.setDragMode("move");
};

// Cancel Image Selection
const cancelPick = () => {
  newImage.value = null;
};

// Confirm Image Cropping & Upload via Pinia Store
const croppingConfirmed = async () => {
  if (!cropper.value) return;
  const croppedData = cropper.value.getCroppedCanvas().toDataURL("image/png");

  try {
    isUploading.value = true; // ✅ Show Loader on Button
    const uploadedUrl = await uploaderStore.uploadFile(croppedData);
    previewImage.value = uploadedUrl; // ✅ Update preview
    emit("update:modelValue", uploadedUrl); // ✅ Sync with parent component
  } catch (error) {
    console.error(error);
  } finally {
    isUploading.value = false; // ✅ Hide Loader on Success/Error
    cancelPick();
  }
};
</script>

<style scoped>
/* Additional Tailwind Styles (if needed) */
</style>
