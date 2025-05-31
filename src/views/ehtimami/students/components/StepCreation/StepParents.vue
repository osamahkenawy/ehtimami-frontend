<template>
  <form autocomplete="off">
    <div class="grid grid-cols-1 gap-4">
      <div class="col-span-1">
        <label class="form-label">{{ $t("student.parentInfo") }}</label>
        <div
          v-for="(parent, index) in modelValue.parentInfo"
          :key="index"
          class="flex flex-wrap gap-2 items-center mb-2"
        >
          <div class="flex flex-col flex-1">
            <input
              v-model="parent.firstName"
              class="form-input"
              :placeholder="$t('student.placeholders.parentFirstName')"
              :class="{ 'border-red-500': errors[index]?.firstName }"
            />
            <p v-if="errors[index]?.firstName" class="text-red-500 text-xs mt-1">
              {{ errors[index].firstName }}
            </p>
          </div>
          <input
            v-model="parent.lastName"
            class="form-input flex-1"
            :placeholder="$t('student.placeholders.parentLastName')"
          />
          <input
            v-model="parent.email"
            class="form-input flex-1"
            type="email"
            :placeholder="$t('student.placeholders.parentEmail')"
          />
          <div class="flex flex-col flex-1">
            <input
              v-model="parent.phone"
              class="form-input"
              type="tel"
              :placeholder="$t('student.placeholders.parentPhone')"
              :class="{ 'border-red-500': errors[index]?.phone }"
            />
            <p v-if="errors[index]?.phone" class="text-red-500 text-xs mt-1">
              {{ errors[index].phone }}
            </p>
          </div>
          <select v-model="parent.relationship" class="form-select flex-1">
            <option value="" disabled>{{ $t("student.select_relation") }}</option>
            <option value="Father">{{ $t("student.relations.father") }}</option>
            <option value="Mother">{{ $t("student.relations.mother") }}</option>
            <option value="Brother">{{ $t("student.relations.brother") }}</option>
            <option value="Sister">{{ $t("student.relations.sister") }}</option>
            <option value="Friend">{{ $t("student.relations.friend") }}</option>
            <option value="Spouse">{{ $t("student.relations.spouse") }}</option>
            <option value="Other">{{ $t("student.relations.other") }}</option>
          </select>

          <button
            v-if="modelValue.parentInfo.length > 1"
            type="button"
            class="text-red-500 hover:text-red-700"
            @click="removeParent(index)"
          >
            <i class="fas fa-minus-circle text-lg"></i>
          </button>
          <button
            v-if="index === modelValue.parentInfo.length - 1"
            type="button"
            class="text-green-600 hover:text-green-800"
            @click="addParent"
          >
            <i class="fas fa-plus-circle text-lg"></i>
          </button>
        </div>
      </div>
    </div>
  </form>
</template>


<script setup lang="ts">
import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const props = defineProps<{
  modelValue: {
    parentInfo: {
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      relationship: string;
    }[];
  };
}>();

const emit = defineEmits(["update:modelValue"]);

// ✅ Field-level errors (like profile info)
const errors = ref<{ [index: number]: { firstName: string; phone: string } }>({});

// ✅ Clear errors when editing fields
watch(
  () => props.modelValue.parentInfo,
  (newParents) => {
    newParents.forEach((parent, index) => {
      if (errors.value[index]) {
        if (parent.firstName.trim()) errors.value[index].firstName = "";
        if (parent.phone.trim()) errors.value[index].phone = "";
      }
    });
  },
  { deep: true }
);

// ✅ Validation method
const validate = () => {
  let valid = true;
  errors.value = {};

  props.modelValue.parentInfo.forEach((parent, index) => {
    const parentErrors: { firstName: string; phone: string } = { firstName: "", phone: "" };
    if (!parent.firstName.trim()) {
      parentErrors.firstName = t("student.firstNameRequired");
      valid = false;
    }
    if (!parent.phone.trim()) {
      parentErrors.phone = t("student.phoneRequired");
      valid = false;
    }
    errors.value[index] = parentErrors;
  });

  return valid;
};

// ✅ Add parent only if last one complete
const addParent = () => {
  const lastIndex = props.modelValue.parentInfo.length - 1;
  const last = props.modelValue.parentInfo[lastIndex];
  if (!last.firstName.trim() || !last.phone.trim()) {
    errors.value[lastIndex] = {
      firstName: !last.firstName.trim() ? t("student.firstNameRequired") : "",
      phone: !last.phone.trim() ? t("student.phoneRequired") : "",
    };
    return;
  }

  errors.value[lastIndex] = { firstName: "", phone: "" };
  props.modelValue.parentInfo.push({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    relationship: "",
  });
};

// ✅ Remove parent
const removeParent = (index: number) => {
  props.modelValue.parentInfo.splice(index, 1);
  delete errors.value[index];
};

defineExpose({ validate });
</script>


<style scoped>
.form-label {
  @apply block text-sm font-medium text-gray-700 mb-1;
}
.form-input,
.form-select {
  @apply w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500;
}
</style>
