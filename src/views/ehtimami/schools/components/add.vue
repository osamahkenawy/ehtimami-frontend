<template>
  <div>
    <div class="flex justify-between items-center mb-4">
      <BreadCrumb :items="breadcrumbItems" />
    </div>
    <div class="flex gap-6">
      <div class="xl:w-[30rem]">
        <div class="w-full xl:mt-0 mt-6">
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
            <div>
                <label for="school_phone">Phone</label>
            <div class="flex">
              <select
                v-model="params.school_phone_country"
                class="form-select w-24 text-start"
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
      </div>
      <div class="panel px-0 flex-grow py-6">Osama</div>
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
  school_phone_country: "+966",
});
</script>

<style scoped></style>
