<template>
  <form autocomplete="off">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <!-- School Dropdown -->
      <div>
        <label class="form-label">{{ $t("student.school") }}</label>
        <select v-model="modelValue.schoolId" class="form-input">
          <option :value="null" disabled>
            {{ $t("student.chooseSchool") }}
          </option>
          <option v-for="school in schools" :key="school.id" :value="school.id">
            {{ school.school_name }}
          </option>
        </select>
        <p v-if="errors.schoolId" class="text-red-600 text-sm mt-1">
          {{ $t("student.schoolRequired") }}
        </p>
      </div>

      <!-- Class Multi-Select -->
      <div>
        <label class="form-label">{{ $t("student.class") }}</label>
        <Multiselect
          v-model="modelValue.classIds"
          :options="activeClassOptions"
          :multiple="true"
          :close-on-select="false"
          :clear-on-select="false"
          track-by="id"
          label="name"
          placeholder="Select classes"
        />
        <p v-if="errors.classIds" class="text-red-600 text-sm mt-1">
          {{ $t("student.classRequired") }}
        </p>
      </div>

      <!-- Grade Input -->
      <div>
        <label class="form-label">{{ $t("student.grade") }}</label>
        <input v-model="modelValue.grade" type="text" class="form-input" />
        <p v-if="errors.grade" class="text-red-600 text-sm mt-1">
          {{ $t("student.gradeRequired") }}
        </p>
      </div>

      <!-- Section Input -->
      <div>
        <label class="form-label">{{ $t("student.section") }}</label>
        <input v-model="modelValue.section" type="text" class="form-input" />
        <p v-if="errors.section" class="text-red-600 text-sm mt-1">
          {{ $t("student.sectionRequired") }}
        </p>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, defineExpose, onBeforeMount, computed, watch } from "vue";
import { useI18n } from "vue-i18n";
import { useSchoolStore } from "@/stores/school";
import { useClassStore } from "@/stores/class";
import Multiselect from "vue-multiselect";
import "vue-multiselect/dist/vue-multiselect.min.css";

const { t } = useI18n();

const schoolStore = useSchoolStore();
const classStore = useClassStore();

onBeforeMount(() => {
  schoolStore.fetchSchools();
});

const props = defineProps<{
  modelValue: {
    grade: string;
    section: string;
    schoolId: string | number | null;
    classIds: number[];
  };
}>();

const emit = defineEmits(["update:modelValue"]);

interface SchoolOption {
  id: number;
  school_name: string;
}

const schools = computed<SchoolOption[]>(() => schoolStore.schools as SchoolOption[]);

const errors = ref({
  grade: "",
  section: "",
  classIds: "",
  schoolId: "",
});

const activeClassOptions = computed(() =>
  (classStore.classes || []).filter((cls: any) => cls.status === "active")
);

// When schoolId changes, fetch classes and filter out invalid selections
watch(
  () => props.modelValue.schoolId,
  async (schoolId) => {
    if (!schoolId) {
      emit("update:modelValue", {
        ...props.modelValue,
        classIds: [],
      });
      return;
    }

    await classStore.fetchClassesBySchoolId(Number(schoolId));

    const validIds = activeClassOptions.value.map(c => c.id);
    const filtered = (props.modelValue.classIds || []).filter(id =>
      validIds.includes(id)
    );

    emit("update:modelValue", {
      ...props.modelValue,
      classIds: filtered,
    });
  },
  { immediate: true }
);

// Expose validate method to parent
const validate = () => {
  let valid = true;
  errors.value = {
    grade: "",
    section: "",
    schoolId: "",
    classIds: "",
  };

  if (!props.modelValue.grade) {
    errors.value.grade = t("student.gradeRequired");
    valid = false;
  }
  if (!props.modelValue.section) {
    errors.value.section = t("student.sectionRequired");
    valid = false;
  }
  if (!props.modelValue.schoolId) {
    errors.value.schoolId = t("student.schoolRequired");
    valid = false;
  }
  if (!props.modelValue.classIds || !props.modelValue.classIds.length) {
    errors.value.classIds = t("student.classRequired");
    valid = false;
  }

  return valid;
};

defineExpose({ validate });
</script>

<style scoped>
.form-label {
  @apply block text-sm font-medium text-gray-700 mb-1;
}
.form-input {
  @apply w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500;
}
</style>
