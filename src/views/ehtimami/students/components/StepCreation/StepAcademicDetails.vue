<template>
  <form autocomplete="off">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      
      <!-- School Dropdown -->
      <div>
        <label class="form-label">{{ $t("student.school") }}</label>
        <select v-model="modelValue.schoolId" class="form-input">
          <option :value="null" disabled>
            {{ $t("student.placeholders.chooseSchool") }}
          </option>
          <option
            v-for="school in schools"
            :key="school.id"
            :value="school.id"
          >
            {{ school.school_name }}
          </option>
        </select>
        <p v-if="errors.schoolId" class="text-red-600 text-sm mt-1">
          {{ errors.schoolId }}
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
          :placeholder="$t('student.placeholders.class')"
        />
        <p v-if="errors.classIds" class="text-red-600 text-sm mt-1">
          {{ errors.classIds }}
        </p>
      </div>


      <!-- Grade Input -->
      <div>
        <label class="form-label">{{ $t("student.grade") }}</label>
        <input
          v-model="modelValue.grade"
          type="text"
          class="form-input"
          :placeholder="$t('student.placeholders.grade')"
        />
        <p v-if="errors.grade" class="text-red-600 text-sm mt-1">
          {{ errors.grade }}
        </p>
      </div>

    <!-- Section Input -->
      <div>
        <label class="form-label">{{ $t("student.section") }}</label>
        <input
          v-model="modelValue.section"
          type="text"
          class="form-input"
          :placeholder="$t('student.placeholders.section')"
        />
        <p v-if="errors.section" class="text-red-600 text-sm mt-1">
          {{ errors.section }}
        </p>
      </div>

      <!-- Student Category -->
          <div>
            <label class="form-label">{{ $t("student.student_category") }}</label>
            <select v-model="modelValue.student_category" class="form-input">
              <option value="Regular">{{ $t("student.categories.regular") }}</option>
              <option value="Special">{{ $t("student.categories.special") }}</option>
            </select>
          </div>

          <!-- Learning Style -->
          <div>
            <label class="form-label">{{ $t("student.learning_style") }}</label>
            <select v-model="modelValue.learning_style" class="form-input">
              <option value="Visual">{{ $t("student.learning_styles.visual") }}</option>
              <option value="Auditory">{{ $t("student.learning_styles.auditory") }}</option>
              <option value="Kinesthetic">{{ $t("student.learning_styles.kinesthetic") }}</option>
            </select>
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
    classIds: string[]; // ✅ now string[] if you're using codes
    student_category: string;
    learning_style: string;
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

    const validCodes = activeClassOptions.value.map(c => c.code);
    const filtered = (props.modelValue.classIds || []).filter(code =>
  validCodes.includes(code)
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
