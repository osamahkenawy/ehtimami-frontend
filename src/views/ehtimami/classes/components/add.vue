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
        <form
          id="classForm"
          @submit.prevent="submitForm"
          class="w-full xl:mt-0 mt-6"
        >
          <!-- School Info -->
          <div class="panel px-0 flex-grow py-6 w-full lg:w-auto">
            <div
              class="text-lg font-medium bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08] p-5"
            >
              {{ $t("class_form.classInfo") }}
            </div>
            <div class="p-5">
              <div>
                <label for="class_unique_id">{{
                  $t("class_form.classId")
                }}</label>
                <input
                  id="class_unique_id"
                  v-model="classStore.classData.class_unique_id"
                  type="text"
                  class="form-input bg-gray-200 cursor-not-allowed"
                  disabled
                />
              </div>

              <div class="mt-4">
                <label for="schoolId">{{ $t("class_form.school_name") }}</label>
                <select
                  id="schoolId"
                  v-model="classStore.classData.schoolId"
                  class="form-select"
                  required>
                  <option
                    v-for="option in classStore.schools"
                    :key="option.id"
                    :value="option.id"
                  >
                    {{ $t(option.school_name) }}
                  </option>
                </select>
              </div>
              <div class="mt-4">
                <label for="class_name">{{
                  $t("class_form.class_name")
                }}</label>
                <input
                  id="class_name"
                  v-model="classStore.classData.name"
                  type="text"
                  class="form-input"
                  :placeholder="$t('class_form.class_name')"
                  required
                />
              </div>
              <div class="mt-4">
                <label for="gradeLevel">{{
                  $t("class_form.gradeLevel")
                }}</label>
                <input
                  id="gradeLevel"
                  v-model="classStore.classData.gradeLevel"
                  type="text"
                  class="form-input"
                  :placeholder="$t('class_form.gradeLevel')"
                  required
                />
              </div>
            </div>
          </div>
          <div class="panel px-0 mt-4 flex-grow py-6 w-full lg:w-auto">
            <div
              class="text-lg font-medium bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08] p-5"
            >
              {{ $t("class_form.another_info") }}
            </div>
            <div class="p-5">
              <div class="mt-4">
                <label for="capacity">{{ $t("class_form.capacity") }}</label>
                <input
                  id="capacity"
                  v-model="classStore.classData.capacity"
                  type="number"
                  class="form-input"
                  :placeholder="$t('class_form.capacity')"
                />
              </div>
              <div class="mt-4">
                <label for="roomNumber">{{
                  $t("class_form.roomNumber")
                }}</label>
                <input
                  id="roomNumber"
                  v-model="classStore.classData.roomNumber"
                  type="text"
                  class="form-input"
                  :placeholder="$t('class_form.roomNumber')"
                />
              </div>
            </div>
          </div>
        </form>
      </div>

      <!-- School Location -->
      <div class="panel px-0 flex-grow py-6 w-full lg:w-auto">
        <div
          class="text-lg font-medium bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08] p-5"
        >
          {{ $t("class_form.schedule") }}
        </div>
        <div class="p-5">
          {{ classStore.classData }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMeta } from "@/composables/use-meta";
import { computed, ref, onBeforeMount } from "vue";
import { useI18n } from "vue-i18n";
import IconHome from "@/components/icon/icon-home.vue";
import { countryList } from "@/fakeData/countryList";
import { useClassStore } from "@/stores/class";

import Swal from "sweetalert2";
import { useRouter } from "vue-router";

useMeta({ title: "Add School" });
const { t } = useI18n();
const classStore = useClassStore();
const isSubmitting = ref(false);
const router = useRouter(); // ✅ Initialize Router
const breadcrumbItems = computed(() => [
  { label: t("breadcrumb.home"), link: "/", icon: IconHome },
  { label: t("classes"), link: "/ehtimami/classes" },
  { label: t("add-class") },
]);

const resetForm = () => {
  classStore.classData = {
    class_unique_id: `EHT-SCH-${Math.floor(1000 + Math.random() * 9000)}`, // Generate new unique ID
    name: "",
    gradeLevel: "",
    capacity: 0,
    teacherId: null,
    roomNumber: "",
    status: "active",
    schedule: {},
    startDate: "",
    endDate: "",
    schoolId: null,
  };
};
onBeforeMount(() => {
  classStore.fetchSchools();
});
const submitForm = async () => {
  if (isSubmitting.value) return;
  isSubmitting.value = true;


};

const cancelForm = () => {
  resetForm();
  router.push("/ehtimami/schools"); // 🚀 Redirect on cancel
};

</script>
