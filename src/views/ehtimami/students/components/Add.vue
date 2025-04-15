<template>
  <div class="w-full py-6">
    <div class="flex">
      <div
        v-for="(step, index) in steps"
        :key="index"
        class="w-1/4"
      >
        <div class="relative mb-2">
          <!-- progress line -->
          <div
            v-if="index !== 0"
            class="absolute flex items-center"
            style="width: calc(100% - 2.5rem - 1rem); top: 50%; left: 0; transform: translateX(-50%)"
          >
            <div class="w-full bg-gray-200 rounded flex-1">
              <div
                class="bg-green-300 py-1 rounded transition-all duration-300"
                :style="{ width: currentStep > index ? '100%' : currentStep === index ? '33%' : '0%' }"
              />
            </div>
          </div>

          <!-- circle -->
          <div
            :class="[
              'w-10 h-10 mx-auto rounded-full flex items-center justify-center',
              currentStep > index
                ? 'bg-green-500 text-white'
                : currentStep === index
                ? 'bg-blue-500 text-white'
                : 'bg-white border-2 border-gray-200 text-gray-600'
            ]"
          >
            <span class="text-center w-full">
              <component :is="step.icon" class="w-5 h-5 fill-current" />
            </span>
          </div>
        </div>

        <div
          :class="[
            'text-xs text-center md:text-base',
            currentStep === index ? 'text-blue-600' : currentStep > index ? 'text-green-600' : 'text-gray-500'
          ]"
        >
          {{ step.label }}
        </div>
      </div>
    </div>

    <!-- Step Content -->
    <div class="mt-6">
      <div v-if="currentStep === 0">
        <h2 class="text-lg font-semibold mb-2">Step 1: Select Server</h2>
        <p>This is where the user selects a server.</p>
      </div>
      <div v-else-if="currentStep === 1">
        <h2 class="text-lg font-semibold mb-2">Step 2: Add User</h2>
        <p>This is where the user is added.</p>
      </div>
      <div v-else-if="currentStep === 2">
        <h2 class="text-lg font-semibold mb-2">Step 3: Settings</h2>
        <p>This is the settings step.</p>
      </div>
      <div v-else-if="currentStep === 3">
        <h2 class="text-lg font-semibold mb-2">Step 4: Finished</h2>
        <p>You're all done!</p>
      </div>
    </div>

    <!-- Navigation -->
    <div class="flex justify-between mt-8 border-t pt-4">
      <button
        v-if="currentStep === 0"
        @click="cancelForm"
        class="btn btn-outline-danger"
      >
        Cancel
      </button>
      <button
        v-else
        @click="currentStep--"
        class="btn btn-outline-secondary"
      >
        Previous
      </button>

      <div class="ml-auto">
        <button
          v-if="currentStep < steps.length - 1"
          @click="currentStep++"
          class="btn btn-primary"
        >
          Next
        </button>
        <button
          v-else
          @click="confirmMethod"
          class="btn btn-success ltr:ml-2 rtl:mr-2"
        >
          Done
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// SVG components
const IconServer = {
  template: `<svg class="w-full fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm14 8V5H5v6h14zm0 2H5v6h14v-6zM8 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/></svg>`
};

const IconUser = {
  template: `<svg class="w-full fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 10h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2h-2a1 1 0 0 1 0-2h2V8a1 1 0 0 1 2 0v2zM9 12A5 5 0 1 1 9 2a5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm8 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h5a5 5 0 0 1 5 5v2z"/></svg>`
};

const IconSetting = {
  template: `<svg class="w-full fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 4.58V4c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v.58a8 8 0 0 1 1.92 1.11l.5-.29a2 2 0 0 1 2.74.73l1 1.74a2 2 0 0 1-.73 2.73l-.5.29a8.06 8.06 0 0 1 0 2.22l.5.3a2 2 0 0 1 .73 2.72l-1 1.74a2 2 0 0 1-2.73.73l-.5-.3A8 8 0 0 1 15 19.43V20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-.58a8 8 0 0 1-1.92-1.11l-.5.29a2 2 0 0 1-2.74-.73l-1-1.74a2 2 0 0 1 .73-2.73l.5-.29a8.06 8.06 0 0 1 0-2.22l-.5-.3a2 2 0 0 1-.73-2.72l1-1.74a2 2 0 0 1 2.73-.73l.5.3A8 8 0 0 1 9 4.57zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/></svg>`
};

const IconCheck = {
  template: `<svg class="w-full fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 1 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"/></svg>`
};

const currentStep = ref(0);

const steps = [
  { label: "Select Server", icon: IconServer },
  { label: "Add User", icon: IconUser },
  { label: "Setting", icon: IconSetting },
  { label: "Finished", icon: IconCheck }
];

const cancelForm = () => {
  window.location.href = "/ehtimami/students";
};

const confirmMethod = () => {
  alert("Form submitted!");
};
</script>
