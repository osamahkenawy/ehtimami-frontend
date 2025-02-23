<template>
  <div>
    <div class="flex justify-between items-center mb-4">
      <BreadCrumb :items="breadcrumbItems" />
    </div>
    <div class="xl:w-96 w-full xl:mt-0 mt-6">
      <div class="panel mb-5">
        <div
          class="text-lg font-medium bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]"
        >
          School Info
        </div>
        <div class="p-5">
          <div>
            <label for="school_name">Name</label>
            <input
              v-model="params.school_name"
              id="tax"
              type="text"
              name="school_name"
              class="form-input"
              placeholder="Enter School Name"
            />
          </div>
          <div class="mt-4">
            <div class="grid sm:grid-cols-1 grid-cols-1 gap-4">
              <div>
                <label for="school_type">Type </label>
                <select
                  id="school_type"
                  name="school_type"
                  class="form-select"
                  v-model="params.school_type"
                  placeholder="Enter School Type"
                >
                  <option value="PRIVATE">Private</option>
                  <option value="PUBLIC">Public</option>
                  <option value="INTERNATIONAL">International</option>
                  <option value="SPECIAL_NEEDS">Special Needs</option>
                </select>
              </div>
            </div>
          </div>
          <div class="mt-4">
            <div class="grid sm:grid-cols-1 grid-cols-1 gap-4">
              <div>
                <label for="education_level">Education Level </label>
                <select
                  id="education_level"
                  name="education_level"
                  class="form-select"
                  v-model="params.education_level"
                  placeholder="Enter Education Level"
                >
                  <option value="ALL">All</option>
                  <option value="PRIMARY">Primary</option>
                  <option value="INTERMEDIATE">Intermediate</option>
                  <option value="SECONDARY">SECONDARY</option>
                  <option value="KINDERGARTEN">Kindergarten</option>
                </select>
              </div>
            </div>
          </div>
          <div class="mt-4">
            <div class="grid sm:grid-cols-1 grid-cols-1 gap-4">
              <div>
                <label for="curriculum">Curriculum </label>
                <select
                  id="curriculum"
                  name="curriculum"
                  class="form-select"
                  v-model="params.curriculum"
                  placeholder="Enter curriculum"
                >
                  <option value="SAUDI_NATIONAL">National</option>
                  <option value="IB">IB</option>
                  <option value="AMERICAN">American</option>
                  <option value="BRITISH">British</option>
                  <option value="FRENCH">French</option>
                  <option value="OTHER">Other</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="panel">
        <div
          class="grid xl:grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4"
        >
          <div
            class="text-lg font-medium bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]"
          >
            Contact Details
          </div>
          <div class="p-5">
            <label for="school_phone">Phone</label>
            <div class="flex">
              <select
                v-model="params.school_phone_country"
                class="form-select w-24"
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
            />
          </div>
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
import "vue3-tel-input/dist/vue3-tel-input.css";

useMeta({ title: "Add School" });
const { t } = useI18n();
const breadcrumbItems = computed(() => [
  { label: "Home", link: "/", icon: IconHome },
  { label: t("schools"), link: "/schools" },
  { label: t("add-school") },
]);
const params = ref({
  school_unique_id: "",
  school_name: "",
  school_address: "",
  school_lat: 0,
  school_lng: 0,
  school_type: "",
  school_email: "",
  school_phone: "",
  school_region: "",
  school_city: "",
  education_level: "",
  school_logo: "",
  curriculum: "",
  school_phone_country: "",
});
const countryList = ref([
  { name: "United Arab Emirates", code: "AE", dial_code: "+971", flag: "🇦🇪" },
  { name: "Saudi Arabia", code: "SA", dial_code: "+966", flag: "🇸🇦" },
  { name: "Egypt", code: "EG", dial_code: "+20", flag: "🇪🇬" },
  { name: "United States", code: "US", dial_code: "+1", flag: "🇺🇸" },
  { name: "United Kingdom", code: "GB", dial_code: "+44", flag: "🇬🇧" },
  { name: "India", code: "IN", dial_code: "+91", flag: "🇮🇳" },
  { name: "Canada", code: "CA", dial_code: "+1", flag: "🇨🇦" },
  { name: "Germany", code: "DE", dial_code: "+49", flag: "🇩🇪" },
  { name: "France", code: "FR", dial_code: "+33", flag: "🇫🇷" },
  { name: "Australia", code: "AU", dial_code: "+61", flag: "🇦🇺" },
  { name: "Japan", code: "JP", dial_code: "+81", flag: "🇯🇵" },
  { name: "Brazil", code: "BR", dial_code: "+55", flag: "🇧🇷" },
  { name: "South Africa", code: "ZA", dial_code: "+27", flag: "🇿🇦" },
  { name: "Russia", code: "RU", dial_code: "+7", flag: "🇷🇺" },
  { name: "China", code: "CN", dial_code: "+86", flag: "🇨🇳" },
  { name: "Mexico", code: "MX", dial_code: "+52", flag: "🇲🇽" },
  { name: "Italy", code: "IT", dial_code: "+39", flag: "🇮🇹" },
  { name: "South Korea", code: "KR", dial_code: "+82", flag: "🇰🇷" },
  { name: "Spain", code: "ES", dial_code: "+34", flag: "🇪🇸" },
  { name: "Argentina", code: "AR", dial_code: "+54", flag: "🇦🇷" },
  { name: "Turkey", code: "TR", dial_code: "+90", flag: "🇹🇷" },
  { name: "Indonesia", code: "ID", dial_code: "+62", flag: "🇮🇩" },
  { name: "Netherlands", code: "NL", dial_code: "+31", flag: "🇳🇱" },
  { name: "Sweden", code: "SE", dial_code: "+46", flag: "🇸🇪" },
]);
</script>

<style scoped></style>
