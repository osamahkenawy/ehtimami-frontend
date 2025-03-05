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
          form="classForm"
          class="btn btn-primary ltr:ml-2 rtl:mr-2"
          :disabled="isSubmitting"
        >
          {{ isSubmitting ? $t("loading") : $t("submit") }}
        </button>
      </div>
    </div>

    <div class="flex flex-col lg:flex-row gap-6">
      <div class="xl:w-[30rem] w-full">
        <form id="classForm" @submit.prevent="submitForm" class="w-full xl:mt-0 mt-6">
          <div class="panel px-0 flex-grow py-6 w-full lg:w-auto">
            <div class="text-lg font-medium bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08] p-5">
              {{ $t("class_form.classInfo") }}
            </div>
            <div class="p-5">
              <div>
                <label for="class_unique_id">{{ $t("class_form.classId") }}</label>
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
                <select id="schoolId" v-model="classStore.classData.schoolId" class="form-select">
                  <option v-for="option in classStore.schools" :key="option.id" :value="option.id">
                    {{ option.school_name }}
                  </option>
                </select>
                <p v-if="errors.schoolId" class="text-red-500">{{ errors.schoolId }}</p>
              </div>

              <div class="mt-4">
                <label for="class_name">{{ $t("class_form.class_name") }}</label>
                <input
                  id="class_name"
                  v-model="classStore.classData.name"
                  type="text"
                  class="form-input"
                />
                <p v-if="errors.class_name" class="text-red-500">{{ errors.class_name }}</p>
              </div>

              <div class="mt-4">
                <label for="gradeLevel">{{ $t("class_form.gradeLevel") }}</label>
                <input id="gradeLevel" v-model="classStore.classData.gradeLevel" type="text" class="form-input" />
                <p v-if="errors.gradeLevel" class="text-red-500">{{ errors.gradeLevel }}</p>
              </div>
            </div>
          </div>
          <div class="panel px-0 mt-4 flex-grow py-6 w-full lg:w-auto">
            <div class="text-lg font-medium bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08] p-5">
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

      <!-- Schedule Section in Table -->
      <div class="panel px-0 flex-grow py-6 w-full lg:w-auto">
        <div class="text-lg font-medium bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08] p-5">
          {{ $t("class_form.class_schedule") }}
        </div>
        <div class="p-5">
          <div class="table-responsive">
            <table class="w-full border-collapse border border-gray-300">
              <thead>
                <tr class="bg-gray-100">
                  <th class="border border-gray-300 px-4 py-2">{{ $t("class_form.day") }}</th>
                  <th class="border border-gray-300 px-4 py-2">{{ $t("class_form.active") }}</th>
                  <th class="border border-gray-300 px-4 py-2">{{ $t("class_form.start_time") }}</th>
                  <th class="border border-gray-300 px-4 py-2">{{ $t("class_form.end_time") }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(day, key) in scheduleDays" :key="key">
                  <td class="border border-gray-300 px-4 py-2">{{ day.label }}</td>
                  <td class="border border-gray-300 px-4 py-2">
                    <label class="switch">
                      <input type="checkbox" v-model="schedule[key].enabled" />
                      <span class="slider"></span>
                    </label>
                  </td>
                  <td class="border border-gray-300 px-4 py-2">
                    <TimePickerPopup v-if="schedule[key].enabled" v-model="schedule[key].from" />
                    <p v-if="errors.schedule[key]?.from" class="text-red-500">{{ errors.schedule[key].from }}</p>
                  </td>
                  <td class="border border-gray-300 px-4 py-2">
                    <TimePickerPopup v-if="schedule[key].enabled" v-model="schedule[key].to" />
                    <p v-if="errors.schedule[key]?.to" class="text-red-500">{{ errors.schedule[key].to }}</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMeta } from "@/composables/use-meta";
import Swal from 'sweetalert2';
import { ref, computed, onBeforeMount } from "vue";
import { useI18n } from "vue-i18n";
import IconHome from "@/components/icon/icon-home.vue";
import { useClassStore } from "@/stores/class";
import { useRouter } from "vue-router";

useMeta({ title: "Add Class" });

const { t } = useI18n();
const classStore = useClassStore();
const isSubmitting = ref(false);
const router = useRouter();
const breadcrumbItems = computed(() => [
  { label: t("breadcrumb.home"), link: "/", icon: IconHome },
  { label: t("classes"), link: "/ehtimami/classes" },
  { label: t("add-class") },
]);
const resetForm = () => {
  classStore.classData = {
    class_unique_id: `EHT-CLASS-${Math.floor(1000 + Math.random() * 9000)}`, // Generate new unique ID
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
const errors = ref({
  schoolId: "",
  class_name: "",
  gradeLevel: "",
  schedule: {},
});

// ✅ Initialize schedule structure
const schedule = ref({
  Monday: { enabled: false, from: "", to: "" },
  Tuesday: { enabled: false, from: "", to: "" },
  Wednesday: { enabled: false, from: "", to: "" },
  Thursday: { enabled: false, from: "", to: "" },
  Friday: { enabled: false, from: "", to: "" },
  Saturday: { enabled: false, from: "", to: "" },
  Sunday: { enabled: false, from: "", to: "" },
});

const scheduleDays = computed(() => ({
  Monday: { label: t("days.monday") },
  Tuesday: { label: t("days.tuesday") },
  Wednesday: { label: t("days.wednesday") },
  Thursday: { label: t("days.thursday") },
  Friday: { label: t("days.friday") },
  Saturday: { label: t("days.saturday") },
  Sunday: { label: t("days.sunday") },
}));

const validateForm = () => {
  errors.value.schoolId = classStore.classData.schoolId ? "" : t("errors.required");
  errors.value.class_name = classStore.classData.name ? "" : t("errors.required");
  errors.value.gradeLevel = classStore.classData.gradeLevel ? "" : t("errors.required");

  errors.value.schedule = {};
  Object.keys(schedule.value).forEach((key) => {
    if (schedule.value[key].enabled) {
      errors.value.schedule[key] = {
        from: schedule.value[key].from ? "" : t("errors.required"),
        to: schedule.value[key].to ? "" : t("errors.required"),
      };
    }
  });

  return (
    !errors.value.schoolId &&
    !errors.value.class_name &&
    !errors.value.gradeLevel &&
    Object.keys(errors.value.schedule).every(
      (day) => !errors.value.schedule[day]?.from && !errors.value.schedule[day]?.to
    )
  );
};

const submitForm = async () => {
  if (!validateForm()) return;

  isSubmitting.value = true;
  const toast: any = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
            customClass: { container: 'toast' },
        });
  const scheduleData = Object.keys(schedule.value).reduce((acc, key) => {
    acc[key] = schedule.value[key].enabled ? `${schedule.value[key].from} - ${schedule.value[key].to}` : "";
    return acc;
  }, {});

  classStore.classData.schedule = scheduleData;
  console.log("scheduleData", scheduleData)
  try {
    await classStore.createClass(); 
        toast.fire({
            icon: "success",
            title: t("class_form.successMessage"),
            padding: '10px 20px',
        }); 
         // ✅ Reset form and redirect
    resetForm();
    classStore.fetchClasses();
    router.push("/ehtimami/classes"); // 🚀 Redirect to /ehtimami/schools
  } catch (error) {
        toast.fire({
            icon: "error",
            title: t("class_form.errorMessage"),
            padding: '10px 20px',
        });
  } finally {
    isSubmitting.value = false;
  }
};

const cancelForm = () => {
  resetForm();
  router.push("/ehtimami/classes"); // 🚀 Redirect on cancel
};
</script>


<style scoped>
/* ✅ Ensures Each Row is a Flex Container */
.schedule-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
}

/* ✅ Align Switch Button */
.switch-container {
  position: relative;
  width: 50px;
  height: 24px;
  display: flex;
  align-items: center;
}

/* ✅ Ensure Time Picker is Next to Switch */
.time-picker-container {
  display: flex;
  gap: 10px;
  align-items: center;
}

/* ✅ Custom Switch */
.custom_switch {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 10;
  cursor: pointer;
}

.peer-checked ~ .bg-gray-300 {
  background-color: #3b82f6;
}

.peer-checked ~ .absolute {
  left: 75%;
}

.switch {
  position: relative;
  display: inline-block;
  width: 42px;
  height: 22px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: 22px;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  border-radius: 50%;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #3b82f6;
}

input:checked + .slider:before {
  transform: translateX(20px);
}
</style>

