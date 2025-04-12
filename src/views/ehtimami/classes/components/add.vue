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
        <form
          id="classForm"
          @submit.prevent="submitForm"
          class="w-full xl:mt-0 mt-6"
        >
          <div class="panel px-0 flex-grow py-6 w-full lg:w-auto">
            <div
              class="text-lg font-medium bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08] p-5"
            >
              {{ $t("class_form.classInfo") }}
            </div>

            <div class="p-5">
              <div class="text-center">
                <div
                  v-tippy="$t('class_form.click_to_upload')"
                  class="inline-table text-center"
                >
                  <FileUploader
                    v-model="classStore.classData.class_logo"
                    :label="$t('class_form.class_image')"
                    platform="user-profile"
                    @change="handleImageUpload"
                  />
                </div>
              </div>

              <div class="mt-4 flex gap-4">
                <div class="w-1/2">
                  <label for="code">{{ $t("class_form.code") }}</label>
                  <input
                    id="code"
                    v-model="classStore.classData.code"
                    type="text"
                    class="form-input bg-gray-200 cursor-not-allowed"
                    disabled
                  />
                </div>
                <div class="w-1/2">
                  <label for="class_name">{{
                    $t("class_form.class_name")
                  }}</label>
                  <input
                    id="class_name"
                    v-model="classStore.classData.name"
                    type="text"
                    class="form-input"
                  />
                  <p v-if="errors.class_name" class="text-red-500">
                    {{ errors.class_name }}
                  </p>
                </div>
              </div>

              <div class="mt-4">
                <label for="schoolId">{{ $t("class_form.school_name") }}</label>
                <select
                  id="schoolId"
                  v-model="classStore.classData.schoolId"
                  class="form-select"
                >
                  <option
                    v-for="option in classStore.schools"
                    :key="option.id"
                    :value="option.id"
                  >
                    {{ option.school_name }}
                  </option>
                </select>
                <p v-if="errors.schoolId" class="text-red-500">
                  {{ errors.schoolId }}
                </p>
              </div>

              <div class="mt-4 flex gap-4">
                <div class="w-1/2">
                  <label for="gradeLevel">{{
                    $t("class_form.gradeLevel")
                  }}</label>
                  <input
                    id="gradeLevel"
                    v-model="classStore.classData.gradeLevel"
                    type="text"
                    class="form-input"
                  />
                  <p v-if="errors.gradeLevel" class="text-red-500">
                    {{ errors.gradeLevel }}
                  </p>
                </div>
                <div class="w-1/2">
                  <label for="semester">{{ $t("class_form.semester") }}</label>
                  <select
                    id="semester"
                    v-model="classStore.classData.semester"
                    class="form-select"
                  >
                    <option :value="1">1</option>
                    <option :value="2">2</option>
                  </select>
                </div>
              </div>
              <div class="mt-4">
                <label for="subject">{{ $t("class_form.subject") }}</label>
                <input
                  id="subject"
                  v-model="classStore.classData.subject"
                  type="text"
                  class="form-input"
                  :placeholder="$t('class_form.subject')"
                />
              </div>
              <div class="mt-4">
                <label class="block">{{
                  $t("class_form.academic_year")
                }}</label>
                <div class="flex gap-2">
                  <select v-model="academicYearFrom" class="form-select w-1/2">
                    <option
                      v-for="year in yearOptions"
                      :key="year"
                      :value="year"
                    >
                      {{ year }}
                    </option>
                  </select>
                  <span class="self-center">-</span>
                  <select v-model="academicYearTo" class="form-select w-1/2">
                    <option
                      v-for="year in yearOptions.filter(
                        (y) => y > academicYearFrom
                      )"
                      :key="year"
                      :value="year"
                    >
                      {{ year }}
                    </option>
                  </select>
                </div>
              </div>

              <div class="mt-4">
                <label for="teacherId">{{ $t("class_form.teacher") }}</label>
                <select
                  id="teacherId"
                  v-model="classStore.classData.teacherId"
                  class="form-select"
                >
                  <option value="" disabled>
                    {{ $t("class_form.select_teacher") }}
                  </option>
                  <option
                    v-for="teacher in teachers"
                    :key="teacher.id"
                    :value="teacher.id"
                  >
                    {{ teacher.firstName }} {{ teacher.lastName }}
                  </option>
                </select>
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
                <label for="teaching_method">{{
                  $t("class_form.teaching_method")
                }}</label>
                <select
                  id="teaching_method"
                  v-model="classStore.classData.teaching_method"
                  class="form-select"
                >
                  <option value="in-person">
                    {{ $t("class_form.in_person") }}
                  </option>
                  <option value="online">{{ $t("class_form.online") }}</option>
                  <option value="hybrid">{{ $t("class_form.hybrid") }}</option>
                </select>
              </div>

              <div class="mt-4 flex gap-4">
                <div class="w-1/2">
                  <label for="capacity">{{ $t("class_form.capacity") }}</label>
                  <input
                    id="capacity"
                    v-model.number="classStore.classData.capacity"
                    @input="classStore.classData.max_students = classStore.classData.capacity"
                    type="number"
                    min="1"
                    class="form-input"
                    :placeholder="$t('class_form.capacity')"
                  />
                </div>
                <div class="w-1/2">
                  <label for="credits">{{ $t("class_form.credits") }}</label>
                  <input
                    id="credits"
                    v-model="classStore.classData.credits"
                    type="number"
                    class="form-input"
                    :placeholder="$t('class_form.credits')"
                  />
                </div>
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

      <div class="panel px-0 flex-grow py-6 w-full lg:w-auto">
        <div
          class="text-lg font-medium bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08] p-5"
        >
          {{ $t("class_form.class_schedule") }}
        </div>

        <div class="p-5">
          <div class="table-responsive">
            <table class="w-full border-collapse border border-gray-300">
              <thead>
                <tr class="bg-gray-100">
                  <th class="border border-gray-300 px-4 py-2">
                    {{ $t("class_form.day") }}
                  </th>
                  <th class="border border-gray-300 px-4 py-2">
                    {{ $t("class_form.active") }}
                  </th>
                  <th class="border border-gray-300 px-4 py-2">
                    {{ $t("class_form.start_time") }}
                  </th>
                  <th class="border border-gray-300 px-4 py-2">
                    {{ $t("class_form.end_time") }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(day, key) in scheduleDays" :key="key">
                  <td class="border border-gray-300 px-4 py-2">
                    {{ day.label }}
                  </td>
                  <td class="border border-gray-300 px-4 py-2">
                    <label
                      class="relative inline-flex items-center cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        v-model="schedule[key].enabled"
                        class="sr-only peer"
                      />
                      <div
                        class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:bg-blue-600 transition-colors duration-200"
                      ></div>
                      <div
                        class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 transform peer-checked:translate-x-5"
                      ></div>
                    </label>
                  </td>
                  <td class="border border-gray-300 px-4 py-2">
                    <TimePickerPopup
                      v-if="schedule[key].enabled"
                      v-model="schedule[key].from"
                    />
                    <p v-if="errors.schedule[key]?.from" class="text-red-500">
                      {{ errors.schedule[key].from }}
                    </p>
                  </td>
                  <td class="border border-gray-300 px-4 py-2">
                    <TimePickerPopup
                      v-if="schedule[key].enabled"
                      v-model="schedule[key].to"
                    />
                    <p v-if="errors.schedule[key]?.to" class="text-red-500">
                      {{ errors.schedule[key].to }}
                    </p>
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
import {
  ref,
  computed,
  onBeforeMount,
  watch,
  nextTick,
  onBeforeUnmount,
} from "vue";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import Swal from "sweetalert2";
import { useClassStore } from "@/stores/class";
import { useTeacherStore } from "@/stores/teacher";
import IconHome from "@/components/icon/icon-home.vue";
import { useMeta } from "@/composables/use-meta";

useMeta({ title: "Add Class" });

const { t } = useI18n();
const router = useRouter();
const classStore = useClassStore();
const teacherStore = useTeacherStore();

const isSubmitting = ref(false);
const academicYearFrom = ref(new Date().getFullYear());
const academicYearTo = ref(academicYearFrom.value + 1);
const teachers = ref<any[]>([]);

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

const errors = ref({
  schoolId: "",
  class_name: "",
  gradeLevel: "",
  schedule: {},
});

const handleImageUpload = (data: { s3: string }) => {
  classStore.classData.class_logo = data.s3;
};

const breadcrumbItems = computed(() => [
  { label: t("breadcrumb.home"), link: "/", icon: IconHome },
  { label: t("classes"), link: "/ehtimami/classes" },
  { label: t("add-class") },
]);

const yearOptions = computed(() =>
  Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i)
);

const resetForm = () => {
  academicYearFrom.value = new Date().getFullYear();
  academicYearTo.value = academicYearFrom.value + 1;
  classStore.classData = {
    code: `EHT-CLASS-${Math.floor(1000 + Math.random() * 9000)}`,
    name: "",
    gradeLevel: "",
    subject: "",
    semester: 1,
    academic_year: `${academicYearFrom.value} - ${academicYearTo.value}`,
    teaching_method: "in-person",
    capacity: 0,
    max_students: 0,
    roomNumber: "",
    class_logo: "",
    status: "active",
    schedule: {},
    start_time: "",
    end_time: "",
    credits: 0,
    startDate: "",
    endDate: "",
    schoolId: undefined,
    teacherId: undefined,
    studentIds: [],
  };
};

onBeforeMount(() => {
  classStore.fetchSchools();
});
onBeforeUnmount(() => {
  resetForm();
  teachers.value = [];
});

watch(
  () => classStore.classData.schoolId,
  async (schoolId) => {
    teachers.value = [];

    if (!schoolId) return;

    await nextTick(); // 💡 Ensure reactivity flushes

    try {
      const result = await teacherStore.fetchTeachersBySchoolId(schoolId);
      teachers.value = Array.isArray(result) ? result : [];
    } catch (error) {
      console.error("Teacher fetch failed:", error);
    }
  },
  { immediate: true } // 👈 this ensures it runs on initial mount too
);

const validateForm = () => {
  errors.value.schoolId = classStore.classData.schoolId
    ? ""
    : t("errors.required");
  errors.value.class_name = classStore.classData.name
    ? ""
    : t("errors.required");
  errors.value.gradeLevel = classStore.classData.gradeLevel
    ? ""
    : t("errors.required");

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
      (day) =>
        !errors.value.schedule[day]?.from && !errors.value.schedule[day]?.to
    )
  );
};

const submitForm = async () => {
  if (!validateForm()) return;

  isSubmitting.value = true;

  const toast: any = Swal.mixin({
    toast: true,
    position: "top",
    showConfirmButton: false,
    timer: 3000,
    customClass: { container: "toast" },
  });
  classStore.classData.max_students = classStore.classData.capacity;

  classStore.classData.schedule = Object.keys(schedule.value).reduce(
    (acc, key) => {
      acc[key] = schedule.value[key].enabled
        ? `${schedule.value[key].from} - ${schedule.value[key].to}`
        : "";
      return acc;
    },
    {}
  );

  try {
    await classStore.createClass();
    toast.fire({ icon: "success", title: t("class_form.successMessage") });
    resetForm();
    classStore.fetchClasses();
    router.push("/ehtimami/classes");
  } catch (error: any) {
    toast.fire({
      icon: "error",
      title: error?.response?.data?.message || t("class_form.errorMessage"),
    });
  } finally {
    isSubmitting.value = false;
  }
};
watch([academicYearFrom, academicYearTo], ([from, to]) => {
  classStore.classData.academic_year = `${from} - ${to}`;
});
const cancelForm = () => {
  resetForm();
  router.push("/ehtimami/classes");
};
</script>
