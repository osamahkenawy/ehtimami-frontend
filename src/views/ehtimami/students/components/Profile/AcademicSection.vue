<template>
  <div class="space-y-6">
    <div class="text-xl font-semibold dark:text-white-light">
      {{ t("student.academicInformation") }}
    </div>
    <!-- 1. School Name -->
    <div class="flex">
      <div class="label-chip">{{ t("student.schoolName") }}</div>
      <input
        type="text"
        :value="student?.school?.school_name || '-'"
        class="form-input input-style cursor-not-allowed"
        disabled
      />
    </div>

    <!-- 2. Current Class Info -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="flex">
        <div class="label-chip">{{ t("student.currentClass") }}</div>
        <input
          type="text"
          :value="currentClass?.name || '-'"
          class="form-input input-style cursor-not-allowed"
          disabled
        />
      </div>
      <div class="flex">
        <div class="label-chip">{{ t("student.academicYear") }}</div>
        <input
          type="text"
          :value="currentClass?.academic_year || '-'"
          class="form-input input-style cursor-not-allowed"
          disabled
        />
      </div>
      <div class="flex">
        <div class="label-chip">{{ t("student.subject") }}</div>
        <input
          type="text"
          :value="currentClass?.subject || '-'"
          class="form-input input-style cursor-not-allowed"
          disabled
        />
      </div>
      <div class="flex">
        <div class="label-chip">{{ t("student.roomNumber") }}</div>
        <input
          type="text"
          :value="currentClass?.roomNumber || '-'"
          class="form-input input-style cursor-not-allowed"
          disabled
        />
      </div>
    </div>

    <!-- 3. Schedule (if available) -->
    <div v-if="scheduleEntries.length" class="space-y-2">
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
                {{ entry.class.name }} -
                {{ entry.class.subject || t("student.general") }}
              </li>
              <li v-if="!student?.studentClasses?.length">
                <span class="text-gray-500 text-sm">{{
                  t("student.noClasses")
                }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const props = defineProps<{
  student: any;
}>();

// Take the first class as "current"
const currentClass = computed(
  () => props.student?.studentClasses?.[0]?.class || null
);

// Parse JSON schedule
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
