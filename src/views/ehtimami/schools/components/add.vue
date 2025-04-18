<template>
    <div>
      <div class="flex justify-between items-center mb-4">
        <BreadCrumb :items="breadcrumbItems" />
        <div class="flex">
          <button type="button" @click="cancelForm" class="btn btn-outline-primary">
            {{ $t("cancel") }}
          </button>
          <button 
            type="submit" 
            form="schoolForm" 
            class="btn btn-primary ltr:ml-2 rtl:mr-2" 
            :disabled="isSubmitting"
          >
            {{ isSubmitting ? $t("loading") : $t("submit") }}
          </button>
        </div>
      </div>
  
      <div class="flex flex-col lg:flex-row gap-6">
        <div class="xl:w-[30rem] w-full">
          <form id="schoolForm" @submit.prevent="submitForm" class="w-full xl:mt-0 mt-6">
            <!-- School Info -->
            <div class="panel px-0 flex-grow py-6 w-full lg:w-auto">
              <div class="text-lg font-medium  bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08]  p-5">
                {{ $t("school_form.schoolInfo") }}
              </div>
              <div class="p-5">
                <div  class="text-center">
                <!-- <label for="code">{{ 'Class Picture' }}</label> -->
                <div  v-tippy="$t('school_form.click_to_upload')" class="inline-table text-center"><FileUploader v-model="schoolStore.schoolData.school_logo" :label="$t('school_form.school_image')" platform="user-profile" @change="handleImageUpload" /></div>

              </div>
                <div>
                <label for="school_unique_id">{{ $t("school_form.schoolId") }}</label> 
                <input 
                  id="school_unique_id" 
                  v-model="schoolStore.schoolData.school_unique_id" 
                  type="text" 
                  class="form-input bg-gray-200 cursor-not-allowed"
                  disabled
                />
              </div>
                <div class="mt-4">
                  <label for="school_name">{{ $t("school_form.name") }}</label>
                  <input id="school_name" v-model="schoolStore.schoolData.school_name" type="text" class="form-input"
                    :placeholder="$t('school_form.enterName')" required />
                </div>
  
                <div class="mt-4">
                  <label for="school_type">{{ $t("school_form.type") }}</label>
                  <select id="school_type" v-model="schoolStore.schoolData.school_type" class="form-select" required>
                    <option v-for="option in schoolTypeOptions" :key="option.value" :value="option.value">
                      {{ $t(option.label) }}
                    </option>
                  </select>
                </div>
  
                <div class="mt-4">
                  <label for="education_level">{{ $t("school_form.educationLevel") }}</label>
                  <select id="education_level" v-model="schoolStore.schoolData.education_level" class="form-select"
                    required>
                    <option v-for="option in educationLevelOptions" :key="option.value" :value="option.value">
                      {{ $t(option.label) }}
                    </option>
                  </select>
                </div>
  
                <div class="mt-4">
                  <label for="curriculum">{{ $t("school_form.curriculum") }}</label>
                  <select id="curriculum" v-model="schoolStore.schoolData.curriculum" class="form-select" required>
                    <option v-for="option in curriculumOptions" :key="option.value" :value="option.value">
                      {{ $t(option.label) }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
  
            <!-- Contact Details -->
            <div class="panel px-0 mt-4 flex-grow py-6 w-full lg:w-auto">
              <div class="text-lg font-medium  bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08]  p-5">
                {{ $t("school_form.contactDetails") }}
              </div>
              <div class="p-5">
                <div>
                  <label for="school_phone">{{ $t("school_form.phone") }}</label>
                  <div class="flex">
                    <select v-model="schoolStore.schoolData.school_phone_country" class="form-select w-24 text-start"
                      required>
                      <option v-for="country in countryList" :key="country.code" :value="country.dial_code">
                        {{ country.flag }} {{ country.dial_code }}
                      </option>
                    </select>
                    <input id="school_phone" v-model="schoolStore.schoolData.school_phone" type="tel"
                      class="form-input flex-grow" :placeholder="$t('school_form.enterPhone')" required
                      pattern="^[0-9]{7,15}$" />
                  </div>
                </div>
  
                <div class="mt-4">
                  <label for="school_email">{{ $t("school_form.email") }}</label>
                  <input id="school_email" v-model="schoolStore.schoolData.school_email" type="email" class="form-input"
                    :placeholder="$t('school_form.enterEmail')" required pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$" />
                </div>
              </div>
            </div>
          </form>
        </div>
  
        <!-- School Location -->
        <div class="panel px-0 flex-grow py-6 w-full lg:w-auto">
          <div class="text-lg font-medium  bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08]  p-5">
            {{ $t("school_form.schoolLocation") }}
          </div>
          <div class="p-5">
            <LocationMap @locationSelected="selectLocation" />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useMeta } from "@/composables/use-meta";
  import { computed, ref } from "vue";
  import { useI18n } from "vue-i18n";
  import IconHome from "@/components/icon/icon-home.vue";
  import { countryList } from "@/fakeData/countryList";
  import { useSchoolStore } from "@/stores/school";

  import Swal from 'sweetalert2';
  import { useRouter } from "vue-router";

  useMeta({ title: "Add School" });
  const { t } = useI18n();
  const schoolStore = useSchoolStore();
  const isSubmitting = ref(false);
  const router = useRouter(); // ✅ Initialize Router
  const breadcrumbItems = computed(() => [
    { label: t("breadcrumb.home"), link: "/", icon: IconHome },
    { label: t("schools"), link: "/ehtimami/schools" },
    { label: t("add-school") },
  ]);
  
  const schoolTypeOptions = [
    { value: "PRIVATE", label: "school_form.schoolTypeOptions.PRIVATE" },
    { value: "PUBLIC", label: "school_form.schoolTypeOptions.PUBLIC" },
    { value: "INTERNATIONAL", label: "school_form.schoolTypeOptions.INTERNATIONAL" },
    { value: "SPECIAL_NEEDS", label: "school_form.schoolTypeOptions.SPECIAL_NEEDS" }
  ];
  
  const educationLevelOptions = [
    { value: "ALL", label: "school_form.educationLevelOptions.ALL" },
    { value: "PRIMARY", label: "school_form.educationLevelOptions.PRIMARY" },
    { value: "INTERMEDIATE", label: "school_form.educationLevelOptions.INTERMEDIATE" },
    { value: "SECONDARY", label: "school_form.educationLevelOptions.SECONDARY" },
    { value: "KINDERGARTEN", label: "school_form.educationLevelOptions.KINDERGARTEN" }
  ];
  
  const curriculumOptions = [
    { value: "SAUDI_NATIONAL", label: "school_form.curriculumOptions.SAUDI_NATIONAL" },
    { value: "IB", label: "school_form.curriculumOptions.IB" },
    { value: "AMERICAN", label: "school_form.curriculumOptions.AMERICAN" },
    { value: "BRITISH", label: "school_form.curriculumOptions.BRITISH" },
    { value: "FRENCH", label: "school_form.curriculumOptions.FRENCH" },
    { value: "OTHER", label: "school_form.curriculumOptions.OTHER" }
  ];
  const handleImageUpload = (data: { s3: string; base64: string }) => {
    schoolStore.schoolData.school_logo = data.s3;
};
  const resetForm = () => {
  schoolStore.schoolData = {
    school_unique_id: `EHT-SCH-${Math.floor(1000 + Math.random() * 9000)}`, // Generate new unique ID
    school_name: "",
    school_type: "PRIVATE",
    education_level: "ALL",
    curriculum: "SAUDI_NATIONAL",
    school_phone_country: "+966",
    school_phone: "",
    school_email: "",
    school_address: "",
    school_lat: 0,
    school_lng: 0,
    school_region: "",
    school_city: "",
    school_country: "",
    school_logo: ""
  };
};
 
const submitForm = async () => {
  if (isSubmitting.value) return;
  isSubmitting.value = true;

  // ✅ Ensure country code and phone number are merged correctly
  const countryCode = schoolStore.schoolData.school_phone_country || ""; // Ensure it's not undefined
  const phoneNumber = schoolStore.schoolData.school_phone?.trim() || ""; // Ensure it's not undefined and remove spaces

  schoolStore.schoolData.school_phone = `${countryCode}${phoneNumber}`.replace(/\s+/g, ""); 

  const toast: any = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 3000,
    customClass: { container: 'toast' },
  });

  try {
    await schoolStore.submitSchoolData();
    toast.fire({
      icon: "success",
      title: t("school_form.successMessage"),
      padding: '10px 20px',
    }); 
    // ✅ Reset form and redirect
    resetForm();
    schoolStore.fetchSchools();
    router.push("/ehtimami/schools"); // 🚀 Redirect to /ehtimami/schools
  } catch (error: any) {
    const errorMessage = error?.response?.data?.message || t("school_form.errorMessage");
    toast.fire({
      icon: "error",
      title: errorMessage,
      padding: '10px 20px',
    });
  } finally {
    isSubmitting.value = false;
  }
};

const cancelForm = () => {
  resetForm();
  router.push("/ehtimami/schools"); // 🚀 Redirect on cancel
};
  const selectLocation = (location) => {
    schoolStore.schoolData.school_address = location.address || "N/A";
    schoolStore.schoolData.school_lat = location.lat || 0;
    schoolStore.schoolData.school_lng = location.lon || 0;
    schoolStore.schoolData.school_region = location.school_region || "N/A";
    schoolStore.schoolData.school_city = location.school_city || "N/A";
    schoolStore.schoolData.school_country = location.school_country || "N/A";
  };
  </script>
  