<template>
  <div class="w-full">
    <div class="flex justify-between items-center mb-4">
      <BreadCrumb :items="breadcrumbItems" />
      <div class="flex" :dir="i18n.locale === 'sa' ? 'rtl' : 'ltr'">
        <div class="flex justify-between gap-3">
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
              @click="nextStep"
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
    </div>
    <div class="panel">
      <div class="flex">
        <div v-for="(step, index) in steps" :key="index" class="w-1/4">
          <div class="relative mb-2">
            <!-- progress line -->
            <div
              v-if="index !== 0"
              class="absolute flex items-center"
              :style="{
  width: 'calc(100% - 2.5rem - 1rem)',
  top: '50%',
  [i18n.locale === 'sa' ? 'right' : 'left']: '0',
  transform: i18n.locale === 'sa' ? 'translateX(50%)' : 'translateX(-50%)'
}"
            >
              <div class="w-full bg-gray-200 rounded flex-1">
                <div
                  class="bg-green-300 py-1 rounded transition-all duration-300"
                  :style="{
                    width:
                      currentStep > index
                        ? '100%'
                        : currentStep === index
                        ? '33%'
                        : '0%',
                  }"
                />
              </div>
            </div>

            <!-- circle -->
            <div
              :class="[
                'w-10 h-10 mx-auto rounded-full flex items-center justify-center',
                currentStep > index
                  ? 'bg-green-700 text-white'
                  : currentStep === index
                  ? 'bg-blue-500 text-white'
                  : 'bg-white border-2 border-gray-200 text-gray-600',
              ]"
            >
              <i :class="[step.icon, 'text-base']" />
            </div>
          </div>

          <div
            :class="[
              'text-xs text-center md:text-base',
              currentStep === index
                ? 'text-blue-600'
                : currentStep > index
                ? 'text-green-700'
                : 'text-gray-500',
            ]"
          >
            {{ step.label }}
          </div>
        </div>
      </div>

      <!-- Step Content -->
      <!-- Step Content in Centered Box -->
      <div class="mt-10 flex justify-center">
        <div
          class="w-full max-w-7xl bg-white rounded-lg shadow p-6 border border-gray-200"
        >
          <div v-if="currentStep === 0">
            <StepBasicInfo v-if="currentStep === 0" v-model="formPayload" :ref="el => stepRefs[0] = el" />
          </div>
          <!-- Uncomment other steps as needed -->
          <!--
    <div v-else-if="currentStep === 1">
      <StepAcademicDetails v-model="formPayload" />
    </div>
    <div v-else-if="currentStep === 2">
      <StepProfileInfo v-model="formPayload" />
    </div>
    <div v-else-if="currentStep === 3">
      <StepContactInfo v-model="formPayload" />
    </div>
    <div v-else-if="currentStep === 4">
      <StepParents v-model="formPayload" />
    </div>
    <div v-else-if="currentStep === 5">
      <StepDocuments v-model="formPayload" />
    </div>
    <div v-else-if="currentStep === 6">
      <StepOnlinePresence v-model="formPayload" />
    </div>
    -->
        </div>
      </div>
      {{ formPayload }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import IconHome from "@/components/icon/icon-home.vue";

import StepBasicInfo from "./StepCreation/StepBasicInfo.vue";
import StepAcademicDetails from "./StepCreation/StepAcademicDetails.vue";
import StepProfileInfo from "./StepCreation/StepProfileInfo.vue";
import StepContactInfo from "./StepCreation/StepContactInfo.vue";
import StepParents from "./StepCreation/StepParents.vue";
import StepDocuments from "./StepCreation/StepDocuments.vue";
import StepOnlinePresence from "./StepCreation/StepOnlinePresence.vue";
const i18n = reactive(useI18n());
const { t } = useI18n();
const route = useRoute();
const router = useRouter();
const isEditMode = computed(() => !!route.params.id);
const stepRefs = ref<any[]>([]);

const formPayload = ref({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
  student_no: "",
  grade: "",
  section: "",
  schoolId: null,
  classIds: [],
  parentUserIds: [],
  profile: {
    bio: "",
    avatar: "",
    middleName: "",
    nickname: "",
    occupation: "",
    website: "",
    social_links: {
      instagram: "",
      github: "",
    },
    preferences: {
      language: "en",
    },
    interests: [],
    marital_status: "SINGLE",
    nationality: "",
    birth_date: "",
    join_date: "",
    gender: null,
    address: "",
    latitude: null,
    longitude: null,
    emergency_contacts: [{ name: "", phone: "" }],
    profile_visibility: "school-only",
  },
});

const breadcrumbItems = computed(() => [
  { label: t("breadcrumb.home"), link: "/", icon: IconHome },
  { label: t("students"), link: "/ehtimami/students/add" },
  {
    label: isEditMode.value ? t("edit-student") : t("add-student"),
  },
]);
onMounted(() => {
  // optional: initialize to match steps length
  stepRefs.value = new Array(steps.value.length).fill(null);
});
const currentStep = ref(0);

const steps = computed(() => [
  { label: "Basic Info", icon: "fas fa-info-circle" },
  { label: "Academic Details", icon: "fas fa-graduation-cap" },
  { label: "Profile Info", icon: "fas fa-user" },
  { label: "Contact Info", icon: "fas fa-address-book" },
  { label: "Parents", icon: "fas fa-users" },
  { label: "Required Documents", icon: "fas fa-file-alt" },
  { label: "Online Presence", icon: "fas fa-globe" },
]);

const cancelForm = () => {
  window.location.href = "/ehtimami/students";
};

const confirmMethod = () => {
  alert("Form submitted!");
};
const nextStep = () => {
  const stepComponent = stepRefs.value[currentStep.value];
  if (stepComponent?.validate && !stepComponent.validate()) {
    return; // don't move forward if invalid
  }
  console.log("next")
  currentStep.value++;
};
</script>
