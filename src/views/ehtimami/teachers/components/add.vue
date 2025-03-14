<template>
  <div>
    <div class="flex justify-between items-center mb-4">
      <BreadCrumb :items="breadcrumbItems" />
      <div class="flex">
        <button
          type="button"
          @click="cancelForm"
          class="btn btn-outline-primary"
        >
          {{ $t("cancel") }}
        </button>
        <button
          type="submit"
          form="teacherForm"
          class="btn btn-primary ltr:ml-2 rtl:mr-2"
          :disabled="isSubmitting"
        >
          {{ isSubmitting ? $t("loading") : $t("submit") }}
        </button>
      </div>
    </div>

    <!-- Layout: Two-Column Form -->
    <form
      id="teacherForm"
      @submit.prevent="submitForm"
      class="flex flex-col lg:flex-row gap-6">
      <!-- Column 1: Teacher Info -->
      <div class="xl:w-[30rem] w-full">
        <ActionCard :title="$t('teacher_form.basicInfo')">
          <div class="p-1">
            <div class="text-center m-2">
              <GenderSelection
                v-model="teacherStore.teacherData.profile.gender"
              />
            </div>

            <div class="text-center">
              <div
                v-tippy="$t('teacher_form.click_to_upload')"
                class="inline-table text-center"
              >
                <FileUploader
                  v-model="teacherStore.teacherData.profile.avatar"
                  :label="$t('teacher_form.profile_image')"
                  platform="user-profile"
                  @change="handleImageUpload"
                />
              </div>
            </div>

            <div class="mt-4 flex gap-4">
              <div class="w-1/2">
                <label for="firstName">{{
                  $t("teacher_form.first_name")
                }}</label>
                <input
                  id="firstName"
                  v-model="teacherStore.teacherData.firstName"
                  type="text"
                  class="form-input w-full"
                />
                <p v-if="errors.firstName" class="text-red-500">
                  {{ errors.firstName }}
                </p>
              </div>

              <div class="w-1/2">
                <label for="lastName">{{ $t("teacher_form.last_name") }}</label>
                <input
                  id="lastName"
                  v-model="teacherStore.teacherData.lastName"
                  type="text"
                  class="form-input w-full"
                />
                <p v-if="errors.lastName" class="text-red-500">
                  {{ errors.lastName }}
                </p>
              </div>
              
            </div>
            <div class="mt-4">
            <label for="email">{{ $t("teacher_form.email") }}</label>
            <input
              id="email"
              v-model="teacherStore.teacherData.email"
              type="email"
              class="form-input w-full"
            />
            <p v-if="errors.email" class="text-red-500">{{ errors.email }}</p>
          </div>
          <div class="mt-4">
            <label for="reciever-number" class="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
              {{ $t("teacher_form.phone") }}
            </label>

            <vue-tel-input
                v-model="phoneNumber"
                class="form-input w-full"
                mode="international"
                :default-country="'AE'"
                :preferred-countries="['AE', 'SA', 'EG']"
                :auto-format="true"
                @input="updatePhone"
                
              />
              <p v-if="errors.phone" class="text-red-500">{{ errors.phone }}</p>
          </div>
          </div>
        </ActionCard>
        <div class="panel px-0 mt-4 flex-grow py-6 w-full lg:w-auto">
          <div
            class="text-lg font-medium bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08] p-5"
          >
            {{ $t("teacher_form.additional_info") }}
          </div>
          <div class="p-5">
            <div class="mt-4 flex gap-4">
              <div class="w-1/2">
                <label for="marital_status">{{
                  $t("teacher_form.marital_status")
                }}</label>
                <select
                  id="marital_status"
                  v-model="teacherStore.teacherData.profile.marital_status"
                  class="form-select w-full"
                >
                  <option value="SINGLE">
                    {{ $t("teacher_form.single") }}
                  </option>
                  <option value="MARRIED">
                    {{ $t("teacher_form.married") }}
                  </option>
                  <option value="DIVORCED">
                    {{ $t("teacher_form.divorced") }}
                  </option>
                </select>
              </div>

              <div class="w-1/2">
                <label for="nationality">{{
                  $t("teacher_form.nationality")
                }}</label>
                <select
                  id="nationality"
                  v-model="teacherStore.teacherData.profile.nationality"
                  class="form-input w-full"
                >
                  <option value="" disabled>Select Nationality</option>
                  <option v-for="nationality in nationalities" :key="nationality.value" :value="nationality.value">
                    {{ nationality.flag }} {{ nationality.text }}
                  </option>
                </select>
                <p v-if="errors.nationality" class="text-red-500">
                  {{ errors.nationality }}
                </p>
              </div>
            </div>

            <div class="mt-4">
              <label for="birth_date">{{
                $t("teacher_form.birth_date")
              }}</label>
              <input
                id="birth_date"
                v-model="formattedBirthDate"
                type="date"
                class="form-input w-full"
                :max="maxBirthDate"
                :min="minBirthDate"
                @input="updateBirthDate"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Column 2: School Info -->
      <ActionCard :title="$t('teacher_form.career_details')">
        <div class="p-5">
          <!-- First Row: Occupation & Select School -->
          <div class="mt-4 flex gap-4">
            <!-- Occupation Input -->
            <div class="w-1/2">
              <label for="career_field">{{
                $t("teacher_form.career_field")
              }}</label>
              <input
                id="career_field"
                v-model="teacherStore.teacherData.profile.occupation"
                type="text"
                class="form-input w-full"
              />
            </div>

            <!-- Select School Dropdown -->
            <div class="w-1/2">
              <label for="school">{{ $t("teacher_form.select_school") }}</label>
              <select
                id="school"
                v-model="teacherStore.teacherData.schoolId"
                class="form-select w-full"
              >
                <option
                  v-for="school in teacherStore.schools"
                  :key="school.id"
                  :value="school.id"
                >
                  {{ school.school_name }}
                </option>
              </select>
            </div>
          </div>
          <!-- {{selectedSchool}} -->
          <!-- Second Row: Address & Map -->
          <div
            class="mt-4"
            v-if="selectedSchool && selectedSchool.school_address"
          >
            <label for="address">{{ $t("teacher_form.address") }}</label>
            <div class="mt-2">
              <AddressLoc
                :key="updateKey"
                :schoolLat="selectedSchool?.school_lat || ''"
                :schoolLng="selectedSchool?.school_lng || ''"
                :schoolAddress="selectedSchool.school_address"
                @locationSelected="updateTeacherLocation"
             
              />
            </div>
          </div>
        </div>
      </ActionCard>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useMeta } from "@/composables/use-meta";
import Swal from "sweetalert2";
import { ref, computed, onBeforeMount, watch } from "vue";
import { useI18n } from "vue-i18n";
import IconHome from "@/components/icon/icon-home.vue";
import { useTeacherStore } from "@/stores/teacher";
import { useRouter } from "vue-router";
import GenderSelection from "@/components/ui/GenderSelection.vue";
import moment from "moment";
import AddressLoc from "@/views/ehtimami/teachers/components/AddressLoc.vue";
import {nationalities} from "@/fakeData/nationalityList"

useMeta({ title: "Add Teacher" });

const { t } = useI18n();
const teacherStore = useTeacherStore();
const isSubmitting = ref(false);
const router = useRouter();

const breadcrumbItems = computed(() => [
  { label: t("breadcrumb.home"), link: "/", icon: IconHome },
  { label: t("teachers"), link: "/ehtimami/teachers" },
  { label: t("add-teacher") },
]);
const updateKey = ref(0);
// Default selectedSchool as an empty object instead of null
const selectedSchool: any = ref({
  id: null,
  school_address: "",
  school_lat: null,
  school_lng: null,
});

const phoneNumber = ref(teacherStore.teacherData.profile.phone || "");

const updatePhone = (value: string | Event) => {
  if (typeof value === "string") {
    phoneNumber.value = value;
    teacherStore.teacherData.profile.phone = value;
  } else {
    console.warn("Unexpected phone input:", value);
  }
};

// Watch for changes in `schoolId` and update `selectedSchool`
watch(
  () => teacherStore.teacherData.schoolId,
  (newSchoolId) => {
    if (newSchoolId) {
      const foundSchool = teacherStore.schools.find(
        (school) => school.id === newSchoolId
      );
      selectedSchool.value = foundSchool || {
        id: null,
        school_address: "",
        school_lat: null,
        school_lng: null,
      };
    } else {
      selectedSchool.value = {
        id: null,
        school_address: "",
        school_lat: null,
        school_lng: null,
      };
    }
    updateKey.value += 1;
  },
  { immediate: true }
);

// Get today's date in "YYYY-MM-DD" format
const maxBirthDate = computed(() => moment().format("YYYY-MM-DD"));

// Get minimum allowed date (18 years ago)
const minBirthDate = computed(() =>
  moment().subtract(18, "years").format("YYYY-MM-DD")
);
// Reactive variable for formatted birth date
const formattedBirthDate = ref(
  teacherStore.teacherData.profile.birth_date || ""
);

const displayBirthDate = computed(() => {
  return formattedBirthDate.value
    ? moment(formattedBirthDate.value).format("DD MMMM YYYY")
    : "";
});
// Function to update the date and format it
const updateBirthDate = (event: Event) => {
  const inputDate = (event.target as HTMLInputElement).value;
  teacherStore.teacherData.profile.birth_date = inputDate;

  if (inputDate) {
    formattedBirthDate.value = moment(inputDate).format("YYYY-MM-DD");
  }
};

const errors = ref({
  schoolId: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  nationality: "",
});

onBeforeMount(() => {
  teacherStore.fetchSchools();
});

const handleImageUpload = (data: { s3: string; base64: string }) => {
  teacherStore.teacherData.profile.avatar = data.s3;
};

const validateForm = () => {
  errors.value.firstName = teacherStore.teacherData.firstName
    ? ""
    : t("errors.required");

  errors.value.lastName = teacherStore.teacherData.lastName
    ? ""
    : t("errors.required");

  errors.value.email = teacherStore.teacherData.email
    ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(teacherStore.teacherData.email)
      ? ""
      : t("errors.invalid_email")
    : t("errors.required");



  errors.value.phone = teacherStore.teacherData.profile.phone
    ? ""
    : t("errors.required");

  errors.value.nationality = teacherStore.teacherData.profile.nationality
    ? ""
    : t("errors.required");
    console.log("validateForm", teacherStore.teacherData.profile.phone , Object.values(errors.value).every((error) => error === ""))
    return Object.values(errors.value).every((error) => error === "");
};

const submitForm = async () => {
  console.log("teacherStore.teacherData", teacherStore.teacherData, validateForm())
  if (!validateForm()) return;

  isSubmitting.value = true;
  const toast: any = Swal.mixin({
    toast: true,
    position: "top",
    showConfirmButton: false,
    timer: 3000,
    customClass: { container: "toast" },
  });

  try { 
    await teacherStore.createNewTeacher();
    toast.fire({ icon: "success", title: t("teacher_form.successMessage") });
    router.push("/ehtimami/teachers");
  } catch (error: any) {
    toast.fire({
      icon: "error",
      title: error?.response?.data?.message || t("teacher_form.errorMessage"),
    });
  } finally {
    isSubmitting.value = false;
  }
};
const updateTeacherLocation = (locationData: { address: string; lat: number; lon: number }) => {
  teacherStore.teacherData.profile.address = locationData.address;
  teacherStore.teacherData.profile.latitude = locationData.lat;
  teacherStore.teacherData.profile.longitude = locationData.lon;
};
const cancelForm = () => {
  router.push("/ehtimami/teachers");
};
</script>
<style lang="scss" scoped>
::v-deep .vti__dropdown {
  z-index: 9999 !important;
}
</style>
