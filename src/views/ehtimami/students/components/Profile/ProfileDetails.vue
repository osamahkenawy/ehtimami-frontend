<template>
  <div class="mt-1 h-fit">
    <div class="flex items-center justify-between mb-5">
      <h5 class="font-semibold text-lg dark:text-white-light">
        {{ t("student.edit_profile") }}
      </h5>
      <EditToggleButtons
        v-model="editMode"
        @save="handleSave"
        @close="handleCancel"
        class="ltr:ml-4 rtl:mr-4"
      />
    </div>

    <!-- 1. Avatar + Gender -->
    <div
      class="flex flex-col sm:flex-row gap-4 items-center justify-start mb-6"
    >
      <div class="w-full sm:w-[200px] text-center">
        <FileUploader
          v-model="form.avatar"
          :label="t('avatar')"
          platform="user-profile"
          :disabled="!editMode"
        />
      </div>

      <div class="w-full sm:w-[200px] text-center sm:text-left">
        <label
          class="block text-sm font-semibold text-gray-700 dark:text-white mb-1"
        >
          {{ t("user.chooseGender") }}
        </label>
        <GenderSelection
          v-model="form.gender"
          :disabled="!editMode"
          class="justify-center sm:justify-start"
        />
      </div>
    </div>

    <!-- 2. Student No + Verified -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <div class="flex">
        <div class="label-chip">{{ t("student.student_no") }}</div>
        <input
          type="text"
          :value="props.user?.student_no"
          class="form-input input-style cursor-not-allowed"
          disabled
        />
      </div>

      <!-- Verified Toggle -->
      <div class="flex items-center gap-2">
        <label
          class="text-sm font-medium text-gray-700 dark:text-white whitespace-nowrap"
        >
          {{ t("student.is_verified") }}
        </label>
        <label class="relative inline-flex items-center cursor-not-allowed">
          <input
            type="checkbox"
            class="sr-only peer"
            :checked="props.user?.user?.is_verified"
            disabled
          />
          <div
            class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-green-500 relative transition-all"
          >
            <div
              class="absolute left-0.5 top-0.5 bg-white border border-gray-300 w-5 h-5 rounded-full transition-transform peer-checked:translate-x-full"
            ></div>
          </div>
        </label>
      </div>
    </div>

    <!-- 3. Contact Info -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <div class="flex">
        <div class="label-chip">{{ t("student.email") }}</div>
        <input
          type="email"
          v-model="form.email"
          class="form-input input-style cursor-not-allowed"
          disabled
        />
      </div>

      <div class="flex">
        <div class="label-chip">{{ t("student.phone") }}</div>
        <input
          type="tel"
          v-model="form.phone"
          :placeholder="t('student.phone')"
          class="form-input input-style"
          :disabled="!editMode"
        />
      </div>
    </div>

    <!-- 4. Birth Date + Join Date -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <div class="flex">
        <div class="label-chip">{{ t("student.dob") }}</div>
        <input
          type="text"
          :value="props.user?.user?.profile?.birth_date?.split('T')[0] || '-'"
          class="form-input input-style cursor-not-allowed"
          disabled
        />
      </div>

      <div class="flex">
        <div class="label-chip">{{ t("student.joinDate") }}</div>
        <input
          type="text"
          :value="props.user?.user?.profile?.join_date?.split('T')[0] || '-'"
          class="form-input input-style cursor-not-allowed"
          disabled
        />
      </div>
    </div>

    <!-- 5. Nationality + Marital Status -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <div class="flex">
        <div class="label-chip">{{ t("student.nationality") }}</div>
        <input
          type="text"
          :value="props.user?.user?.profile?.nationality || '-'"
          class="form-input input-style cursor-not-allowed"
          disabled
        />
      </div>

      <div class="flex">
        <div class="label-chip">{{ t("student.maritalStatus") }}</div>
        <input
          type="text"
          :value="props.user?.user?.profile?.marital_status || '-'"
          class="form-input input-style cursor-not-allowed"
          disabled
        />
      </div>
    </div>

    <!-- 6. Bio -->
    <div class="flex" style="margin-bottom: 20px">
      <div class="label-chip">
        {{ t("user.bio") }}
      </div>
      <textarea
        rows="4"
        class="form-input input-style w-full cursor-not-allowed"
        :value="props.user?.user?.profile?.bio || '-'"
        disabled
      />
    </div>

    <div class="md:col-span-2 w-full">
      <div class="w-full h-full overflow-hidden">
        <LocationPicker
          v-model="form.location"
          :editMode="editMode"
          :placeholder="t('user.location')"
          height="400px"
          :key="locationPickerKey"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Swal from "sweetalert2";
import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import LocationPicker from "./LocationPicker.vue";
import { useStudentStore } from "@/stores/students";

const { t } = useI18n();
const studentStore = useStudentStore();
const editMode = ref(false);

const props = defineProps<{ user: any | null }>();
const emit = defineEmits<{
  (e: "cancel"): void;
  (e: "updated"): void;
}>();

const locationPickerKey = ref(0);

const form = ref({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  gender: undefined,
  avatar: "",
  location: {
    lat: 0,
    lng: 0,
    address: "",
  },
});

const errors = ref({
  firstName: "",
  lastName: "",
});

watch(
  () => props.user,
  (user) => {
    if (user && user.user) {
      const profile = user.user.profile || {};
      form.value.firstName = user.user.firstName || "";
      form.value.lastName = user.user.lastName || "";
      form.value.email = user.user.email || "";
      form.value.phone = user.user.phone || "";
      form.value.avatar = profile.avatar || "";
      form.value.gender = profile.gender;
      form.value.location = {
        lat: profile.latitude || 0,
        lng: profile.longitude || 0,
        address: profile.address || "",
      };
    }
  },
  { immediate: true }
);

const validateForm = () => {
  errors.value.firstName =
    form.value.firstName.trim() === "" ? t("user.firstNameRequired") : "";
  errors.value.lastName =
    form.value.lastName.trim() === "" ? t("user.lastNameRequired") : "";
  return !errors.value.firstName && !errors.value.lastName;
};

const handleSave = async () => {
  if (!validateForm() || !props.user?.user?.id) return;

  const toast: any = Swal.mixin({
    toast: true,
    position: "top",
    showConfirmButton: false,
    timer: 3000,
    customClass: { container: "toast" },
  });

  try {
    await studentStore.updateStudentInfo(props.user.user.id, {
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      phone: form.value.phone,
      email: form.value.email,
      avatar: form.value.avatar,
      gender: form.value.gender,
      address: form.value.location.address,
      location: {
        lat: form.value.location.lat,
        lng: form.value.location.lng,
      },
    });

    toast.fire({ icon: "success", title: t("user.profileUpdated") });
    editMode.value = false;
    emit("updated");
  } catch (error: any) {
    toast.fire({
      icon: "error",
      title: error?.response?.data?.message || t("user.profileUpdateFailed"),
    });
  }
};

const handleCancel = () => {
  const user = props.user?.user;
  if (user) {
    const profile = user.profile || {};
    form.value.firstName = user.firstName || "";
    form.value.lastName = user.lastName || "";
    form.value.email = user.email || "";
    form.value.phone = user.phone || "";
    form.value.avatar = profile.avatar || "";
    form.value.gender = profile.gender;
    form.value.location = {
      lat: profile.latitude || 0,
      lng: profile.longitude || 0,
      address: profile.address || "",
    };
    locationPickerKey.value++;
  }

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
