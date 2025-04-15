<template>
    <div class="w-full max-w-5xl mx-auto p-6">
      <!-- Tabs Navigation -->
      <section>
    <div class="steps-wizard border-b border-gray-200 pb-2">
      <ul class="steps-list flex justify-center gap-6">
        <li
          v-for="(tab, index) in tabs"
          :key="index"
          class="text-center"
          :class="{
            'current': currentStep === index,
            'done': currentStep > index
          }"
        >
          <a
            href="javascript:;"
            @click="goToStep(index)"
            class="no-underline text-gray-500 hover:text-green-600"
          >
            <div class="step w-12 h-12 rounded-full flex items-center justify-center border border-gray-300 bg-gray-100 relative">
              <span v-if="currentStep !== index && currentStep > index" class="text-white">
                <i class="fa fa-check text-white text-lg"></i>
              </span>
              <span v-else class="text-base font-semibold text-gray-700">
                {{ index + 1 }}
              </span>
            </div>
            <p class="mt-2 text-sm font-medium">
              {{ tab.label }}
            </p>
          </a>
        </li>
      </ul>
    </div>
  </section>
  
      <!-- Tabs Content -->
      <div class="bg-white p-6 rounded-lg shadow">
        <component :is="tabs[currentStep].component" @next="nextStep" @prev="prevStep" />
      </div>
  
      <!-- Navigation Buttons -->
      <div class="mt-6 flex justify-between">
        <button
          class="btn"
          :disabled="currentStep === 0"
          @click="prevStep"
        >
          Previous
        </button>
        <button
          class="btn btn-primary"
          v-if="currentStep < tabs.length - 1"
          @click="validateStep"
        >
          Next
        </button>
        <button
          class="btn btn-success"
          v-else
          @click="submitForm"
        >
          Submit
        </button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  // Import step components
  import PersonalInfo from '@/views/ehtimami/students/components/StepCreation/PersonalInfo.vue'
  import AcademicInfo from '@/views/ehtimami/students/components/StepCreation/AcademicInfo.vue'
  import ProfileInfo from '@/views/ehtimami/students/components/StepCreation/ProfileInfo.vue'

  
  
  const currentStep = ref(0)
  
  const tabs = [
    { label: 'Personal Info', component: PersonalInfo },
    { label: 'Academic Info', component: AcademicInfo },
    { label: 'Profile Info', component: ProfileInfo },
    // { label: 'Contact Info', component: StepContactInfo },
    // { label: 'Parents', component: StepParents },
    // { label: 'Avatar', component: StepAvatar }
  ]
  
  const goToStep = (index: number) => {
    if (index < currentStep.value) currentStep.value = index // Only allow backward navigation directly
  }
  
  const nextStep = () => {
    if (currentStep.value < tabs.length - 1) currentStep.value++
  }
  
  const prevStep = () => {
    if (currentStep.value > 0) currentStep.value--
  }
  
  const validateStep = () => {
    const stepComponent = document.querySelector('form') as HTMLFormElement
    if (stepComponent?.checkValidity?.()) {
      nextStep()
    } else {
      stepComponent?.reportValidity?.()
    }
  }
  
  const submitForm = () => {
    alert('Form submitted!')
  }
  </script>
  
  <style scoped>
 .step {
  transition: all 0.2s ease;
}
.current .step {
  @apply bg-green-600 border-green-600 text-white;
}
.current p {
  @apply text-green-600;
}
.done .step {
  @apply bg-green-600 border-green-600;
}
.done p {
  @apply text-green-600;
}
  </style>