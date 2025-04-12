<template>
    <div class="space-y-6">
      <div class="flex items-center justify-between mb-5">
        <h5 class="text-xl font-semibold dark:text-white-light">
          {{ t("student.academicInformation") }}
        </h5>
        <EditToggleButtons
          v-model="editMode"
          @save="handleSave"
          @close="handleCancel"
        />
      </div>
  
      <!-- 1. School Name (not editable) -->
      <div class="flex">
        <div class="label-chip">{{ t("student.schoolName") }}</div>
        <input
          type="text"
          :value="student?.school?.school_name || '-'"
          class="form-input input-style cursor-not-allowed"
          disabled
        />
      </div>
  
      <!-- 2. Class Info -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="flex">
          <div class="label-chip">{{ t("student.currentClass") }}</div>
          <input
            type="text"
            v-model="form.className"
            class="form-input input-style"
            :disabled="!editMode"
          />
        </div>
        <div class="flex">
          <div class="label-chip">{{ t("student.academicYear") }}</div>
          <input
            type="text"
            v-model="form.academic_year"
            class="form-input input-style"
            :disabled="!editMode"
          />
        </div>
        <div class="flex">
          <div class="label-chip">{{ t("student.subject") }}</div>
          <input
            type="text"
            v-model="form.subject"
            class="form-input input-style"
            :disabled="!editMode"
          />
        </div>
        <div class="flex">
          <div class="label-chip">{{ t("student.roomNumber") }}</div>
          <input
            type="text"
            v-model="form.roomNumber"
            class="form-input input-style"
            :disabled="!editMode"
          />
        </div>
      </div>
  
      <!-- 3. Schedule -->
      <div class="space-y-2">
        <div class="label-chip mb-1">{{ t("student.schedule") }}</div>
        <ul class="border rounded p-4 space-y-1 bg-white dark:bg-[#1b2e4b]">
          <li v-for="(time, day) in scheduleEntries" :key="day" class="text-sm">
            <strong>{{ day }}:</strong> {{ time || "-" }}
          </li>
        </ul>
      </div>
  
      <!-- 4. Enrolled Classes -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="flex flex-col md:col-span-2">
          <div class="flex">
            <div class="label-chip">{{ t("student.enrolledClasses") }}</div>
            <div
              class="flex-1 border border-l-0 rounded-r bg-white dark:bg-[#1b2e4b] p-4"
            >
              <ul class="space-y-1">
                <li
                  v-for="(entry, index) in student?.studentClasses || []"
                  :key="index"
                  class="text-sm"
                >
                  {{ entry.class.name }} - {{ entry.class.subject || t("student.general") }}
                </li>
                <li v-if="!student?.studentClasses?.length">
                  <span class="text-gray-500 text-sm">{{ t("student.noClasses") }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed, ref, watch } from "vue";
  import { useI18n } from "vue-i18n";
  
  const { t } = useI18n();
  
  const props = defineProps<{ student: any }>();
  const emit = defineEmits(["save", "cancel"]);
  
  const editMode = ref(false);
  
  const form = ref({
    className: "",
    academic_year: "",
    subject: "",
    roomNumber: "",
  });
  
  const currentClass = computed(() => props.student?.studentClasses?.[0]?.class || null);
  
  watch(
    () => props.student,
    (student) => {
      const cls = student?.studentClasses?.[0]?.class || {};
      form.value.className = cls.name || "";
      form.value.academic_year = cls.academic_year || "";
      form.value.subject = cls.subject || "";
      form.value.roomNumber = cls.roomNumber || "";
    },
    { immediate: true }
  );
  
  const scheduleEntries = computed(() => {
    try {
      const schedule = currentClass.value?.schedule
        ? JSON.parse(currentClass.value.schedule)
        : {};
      return schedule;
    } catch {
      return {};
    }
  });
  
  const handleSave = () => {
    console.log("Academic Save:", form.value);
    // emit('save', form.value); // You can send to backend if needed
    editMode.value = false;
  };
  
  const handleCancel = () => {
    const cls = props.student?.studentClasses?.[0]?.class || {};
    form.value.className = cls.name || "";
    form.value.academic_year = cls.academic_year || "";
    form.value.subject = cls.subject || "";
    form.value.roomNumber = cls.roomNumber || "";
    editMode.value = false;
    emit("cancel");
  };
  </script>
  
  <style scoped>
  .label-chip {
    background: #eee;
    white-space: nowrap;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 12px;
    font-weight: 600;
    border: 1px solid #e0e6ed;
    border-right: 0;
    border-radius: 0.375rem 0 0 0.375rem;
    min-width: 120px;
  }
  .input-style {
    border-radius: 0 0.375rem 0.375rem 0;
    padding: 0.625rem;
    font-size: 1rem;
    width: 100%;
  }
  </style>
  