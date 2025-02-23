<template>
  <div>
    <div class="flex justify-between items-center mb-4">
      <BreadCrumb :items="breadcrumbItems" />
      <button type="submit" form="schoolForm" class="btn-primary">
        Submit
      </button>
    </div>
    <div class="flex flex-col lg:flex-row gap-6">
      <div class="xl:w-[30rem] w-full">
        <form
          id="schoolForm"
          @submit.prevent="validateForm"
          class="w-full xl:mt-0 mt-6"
        >
          <div class="panel px-0 flex-grow py-6 w-full lg:w-auto">
            <div
              class="text-lg font-medium bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]"
            >
              School Info
            </div>
            <div class="p-5"> 
              <div>
                <label for="school_name">Name</label>
                <input
                  id="school_name"
                  v-model="params.school_name"
                  name="school_name"
                  type="text"
                  class="form-input"
                  placeholder="Enter School Name"
                  required
                />
              </div>
              <div class="mt-4">
                <label for="school_type">Type</label>
                <select
                  id="school_type"
                  v-model="params.school_type"
                  class="form-select"
                  required
                >
                  <option
                    v-for="option in schoolTypeOptions"
                    :key="option.value"
                    :value="option.value"
                  >
                    {{ option.label }}
                  </option>
                </select>
              </div>
              <div class="mt-4">
                <label for="education_level">Education Level</label>
                <select
                  id="education_level"
                  v-model="params.education_level"
                  class="form-select"
                  required
                >
                  <option
                    v-for="option in educationLevelOptions"
                    :key="option.value"
                    :value="option.value"
                  >
                    {{ option.label }}
                  </option>
                </select>
              </div>
              <div class="mt-4">
                <label for="curriculum">Curriculum</label>
                <select
                  id="curriculum"
                  v-model="params.curriculum"
                  class="form-select"
                  required
                >
                  <option
                    v-for="option in curriculumOptions"
                    :key="option.value"
                    :value="option.value"
                  >
                    {{ option.label }}
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div class="panel px-0 flex-grow py-6 w-full lg:w-auto">
            <div
              class="text-lg font-medium bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]"
            >
              Contact Details
            </div>
            <div class="p-5">
              <div>
                <label for="school_phone">Phone</label>
                <div class="flex">
                  <select
                    v-model="params.school_phone_country"
                    class="form-select w-24 text-start"
                    required
                  >
                    <option
                      v-for="country in countryList"
                      :key="country.code"
                      :value="country.dial_code"
                    >
                      {{ country.flag }} {{ country.dial_code }}
                    </option>
                  </select>
                  <input
                    id="school_phone"
                    v-model="params.school_phone"
                    name="school_phone"
                    type="tel"
                    class="form-input flex-grow"
                    placeholder="Enter School Phone"
                    required
                    pattern="^[0-9]{7,15}$"
                  />
                </div>
              </div>
              <div class="mt-4">
                <label for="school_email">Email</label>
                <input
                  id="school_email"
                  v-model="params.school_email"
                  type="email"
                  name="school_email"
                  class="form-input"
                  placeholder="Enter School Email"
                  required
                  pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="panel px-0 flex-grow py-6 w-full lg:w-auto">
        <div
              class="text-lg font-medium bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]"
            >
              School Location
            </div>
            <div class="p-5 ">
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

useMeta({ title: "Add School" });
const { t } = useI18n();
const breadcrumbItems = computed(() => [
  { label: "Home", link: "/", icon: IconHome },
  { label: t("schools"), link: "/schools" },
  { label: t("add-school") },
]);
const params = ref({
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
  school_country: ""
});

const schoolTypeOptions = [
  { value: "PRIVATE", label: "Private" },
  { value: "PUBLIC", label: "Public" },
  { value: "INTERNATIONAL", label: "International" },
  { value: "SPECIAL_NEEDS", label: "Special Needs" },
];

const educationLevelOptions = [
  { value: "ALL", label: "All" },
  { value: "PRIMARY", label: "Primary" },
  { value: "INTERMEDIATE", label: "Intermediate" },
  { value: "SECONDARY", label: "Secondary" },
  { value: "KINDERGARTEN", label: "Kindergarten" },
];

const curriculumOptions = [
  { value: "SAUDI_NATIONAL", label: "National" },
  { value: "IB", label: "IB" },
  { value: "AMERICAN", label: "American" },
  { value: "BRITISH", label: "British" },
  { value: "FRENCH", label: "French" },
  { value: "OTHER", label: "Other" },
];

const validateForm = () => {
  if (
    !params.value.school_name ||
    !params.value.school_email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) ||
    !params.value.school_phone.match(/^[0-9]{7,15}$/)
  ) {
    alert("Please fill all required fields with valid data.");
    return;
  }
  alert("Form submitted successfully!");
};
const selectLocation = (location) => {
  console.log("Location Selected:", location);

  params.value.school_address = location.address || "N/A"; // Default to "N/A" if missing
  params.value.school_lat = location.lat || 0; // Default to 0 if missing
  params.value.school_lng = location.lon || 0; // Default to 0 if missing
  params.value.school_region = location.school_region || "N/A";
  params.value.school_city = location.school_city || "N/A";
  params.value.school_country = location.school_country || "N/A";
};
</script>

<style scoped></style>
