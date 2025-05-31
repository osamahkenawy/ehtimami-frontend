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
            {{ $t("common.cancel") }}
          </button>
          <button
            v-else
            @click="currentStep--"
            class="btn btn-outline-secondary"
          >
            {{ $t("common.previous") }}
          </button>

          <div class="ml-auto">
            <button
              v-if="currentStep < steps.length - 1"
              @click="nextStep"
              class="btn btn-primary"
            >
              {{ $t("common.next") }}
            </button>
            <button
              v-else
              @click="confirmMethod"
              class="btn btn-success ltr:ml-2 rtl:mr-2"
            >
              {{ $t("common.done") }}
            </button>
          </div>
        </div>

      </div>
    </div>
    <div class="panel">
      <div class="flex">
        <div v-for="(step, index) in steps" :key="index" class="w-1/3">
          <div class="relative mb-2">
            <div
              v-if="index !== 0"
              class="absolute flex items-center"
              :style="{
                width: 'calc(100% - 2.5rem - 1rem)',
                top: '50%',
                [i18n.locale === 'sa' ? 'right' : 'left']: '0',
                transform:
                  i18n.locale === 'sa' ? 'translateX(50%)' : 'translateX(-50%)',
              }"
            >
              <div class="w-full bg-gray-200 rounded flex-1">
                <!-- 🔵 Updated: bg-primary instead of bg-green-300 -->
                <div
                  class="bg-primary py-1 rounded transition-all duration-300"
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

            <div
              :class="[
                'w-10 h-10 mx-auto rounded-full flex items-center justify-center',
                currentStep > index
                  ? 'bg-primary text-white'
                  : currentStep === index
                  ? 'bg-primary text-white'
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
      ? 'text-primary'
      : currentStep > index
      ? 'text-primary'
      : 'text-gray-500',
  ]"
>
  {{ step.label }}
</div>
        </div>
      </div>
      <div class="mt-10 flex justify-center">
        <div
          class="w-full max-w-7xl bg-white rounded-lg shadow p-6 border border-gray-200"
        >
          <div v-if="currentStep === 0">
            <StepProfileInfo v-model="formPayload" :ref="(el) => (stepRefs[0] = el)" />
          </div>
          <div v-else-if="currentStep === 1">
            <StepAcademicDetails v-model="formPayload" />
          </div>
          <div v-else-if="currentStep === 2">
            <StepParents v-model="formPayload" />
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import IconHome from "@/components/icon/icon-home.vue";
import { useToast } from "@/composables/user-toast";

import StepAcademicDetails from "./StepCreation/StepAcademicDetails.vue";
import StepProfileInfo from "./StepCreation/StepProfileInfo.vue";
import StepParents from "./StepCreation/StepParents.vue";
import { useStudentStore } from "@/stores/students";

// import StepContactInfo from "./StepCreation/StepContactInfo.vue";
// import StepDocuments from "./StepCreation/StepDocuments.vue";
// import StepOnlinePresence from "./StepCreation/StepOnlinePresence.vue";

const i18n = reactive(useI18n());
const { t } = useI18n();
const route = useRoute();
const router = useRouter();
const isEditMode = computed(() => !!route.params.id);
const stepRefs = ref<any[]>([]);
  const toast = useToast();

const formPayload = ref({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
  student_no: "STD-00001",
  grade: "",
  section: "",
  schoolId: null,
  classIds: [],
  parentUserIds: [],
  student_category: "Regular",  // ✅ Added
  learning_style: "Visual",     // ✅ Added
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
    gender: 1,
    address: "",
    latitude: null,
    longitude: null,
    emergency_contacts: [{ name: "", phone: "" }],
    profile_visibility: "school-only",
    user_language: "en",
  },
  parentInfo: [
    {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      relationship: "",
    },
  ],
});
const studentStore = useStudentStore();


const breadcrumbItems = computed(() => [
  { label: t("breadcrumb.home"), link: "/", icon: IconHome },
  { label: t("students"), link: "/ehtimami/students/add" },
  {
    label: isEditMode.value ? t("edit-student") : t("add-student"),
  },
]);

onMounted(() => {
  stepRefs.value = new Array(steps.value.length).fill(null);
});

const currentStep = ref(0);

const steps = computed(() => [
  { label: t("student.steps.profileInfo"), icon: "fas fa-user" },
  { label: t("student.steps.academicDetails"), icon: "fas fa-graduation-cap" },
  { label: t("student.steps.parents"), icon: "fas fa-users" },
]);

const cancelForm = () => {
  window.location.href = "/ehtimami/students";
};

const postStudentData = async () => {
  // Copy the payload
  const payloadToSend = JSON.parse(JSON.stringify(formPayload.value));

  // Transform `classIds` to just an array of IDs
  if (payloadToSend.classIds && payloadToSend.classIds.length) {
    payloadToSend.classIds = payloadToSend.classIds.map((cls: any) => cls.id);
  }

  try {
    const res = await studentStore.createNewStudent(payloadToSend);
    toast("✅ " + t("profileUpdated"), "success");
    // Redirect to student listing page
    router.push("/ehtimami/students");
  } catch (error) {
    console.error("Error creating student:", error);
    toast("❌ " + t("profileUpdateFailed"), "error");
  }
};

const confirmMethod = () => {
  const stepComponent = stepRefs.value[currentStep.value];
  if (stepComponent?.validate && !stepComponent.validate()) {
    return;
  }

  // 🔵 Submit the data once all validations pass
  postStudentData();
};


const nextStep = () => {
  const stepComponent = stepRefs.value[currentStep.value];
  if (stepComponent?.validate && !stepComponent.validate()) {
    return;
  }
  currentStep.value++;
};
</script>
