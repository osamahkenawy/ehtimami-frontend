<template>
  <form autocomplete="off">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label class="form-label">{{ $t("student.firstName") }}</label>
        <input v-model="modelValue.firstName" type="text" class="form-input" />
        <p v-if="errors.firstName" class="text-red-600 text-sm mt-1">
          {{ $t("student.firstNameRequired") }}
        </p>
      </div>

      <div>
        <label class="form-label">{{ $t("student.lastName") }}</label>
        <input v-model="modelValue.lastName" type="text" class="form-input" />
        <p v-if="errors.lastName" class="text-red-600 text-sm mt-1">
          {{ $t("student.lastNameRequired") }}
        </p>
      </div>

      <div>
        <label class="form-label">{{ $t("student.email") }}</label>
        <input
          v-model="modelValue.email"
          type="email"
          class="form-input"
          autocomplete="off"
        />
        <p v-if="errors.email" class="text-red-600 text-sm mt-1">
          {{ $t("student.emailRequired") }}
        </p>
      </div>

      <div>
        <label class="form-label">{{ $t("student.phone") }}</label>
        <input
          v-model="modelValue.phone"
          type="tel"
          class="form-input"
          autocomplete="off"
        />
        <p v-if="errors.phone" class="text-red-600 text-sm mt-1">
          {{ $t("student.phoneRequired") }}
        </p>
      </div>

      <div>
        <label class="form-label">{{ $t("student.password") }}</label>
        <div class="relative">
          <input
            :type="showPassword ? 'text' : 'password'"
            v-model="modelValue.password"
            class="form-input pr-10"
            autocomplete="new-password"
          />
          <i
            @click="togglePassword"
            :class="[
              'fas',
              showPassword ? 'fa-eye-slash' : 'fa-eye',
              'absolute right-3 top-3.5 cursor-pointer text-gray-500',
            ]"
            :title="
              $t(showPassword ? 'student.hidePassword' : 'student.showPassword')
            "
          ></i>
        </div>
      </div>

      <div>
        <label class="form-label">{{ $t("student.studentNumber") }}</label>
        <input v-model="modelValue.student_no" type="text" class="form-input" />
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, defineExpose, reactive } from "vue";
import { useI18n } from "vue-i18n";
import "@fortawesome/fontawesome-free/css/all.min.css";

// const { t } = useI18n();
const { t, locale } = useI18n(); // ✅
const props = defineProps<{
  modelValue: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    student_no: string;
  };
}>();

const emit = defineEmits(["update:modelValue"]);

const errors = ref({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
});

const validate = () => {
  let valid = true;
  errors.value = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  };

  if (!props.modelValue.firstName) {
    errors.value.firstName = t("student.firstNameRequired");
    valid = false;
  }
  if (!props.modelValue.lastName) {
    errors.value.lastName = t("student.lastNameRequired");
    valid = false;
  }
  if (!props.modelValue.email) {
    errors.value.email = t("student.emailRequired");
    valid = false;
  }
  if (!props.modelValue.phone) {
    errors.value.phone = t("student.phoneRequired");
    valid = false;
  }

  return valid;
};

defineExpose({ validate });

const showPassword = ref(false);
const togglePassword = () => {
  showPassword.value = !showPassword.value;
};
</script>
