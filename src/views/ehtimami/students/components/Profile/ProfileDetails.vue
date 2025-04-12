<template>
  <div class="mt-1 h-fit">
    <div class="flex items-center justify-between mb-5">
      <h5 class="font-semibold text-lg dark:text-white-light">
        {{ t("student.profile_overview") }}
      </h5>
      <EditToggleButtons
        v-model="editMode"
        @save="handleSave"
        @close="handleCancel"
        class="ltr:ml-4 rtl:mr-4"
      />
    </div>

    <!-- 1. Avatar + Gender -->
    <div class="flex flex-col sm:flex-row gap-4 items-center justify-start mb-6">
      <div class="w-full sm:w-[200px] text-center">
        <FileUploader
          v-model="form.avatar"
          :label="t('avatar')"
          platform="student-profile"
          :disabled="!editMode"
        />
      </div>
      <div class="w-full sm:w-[200px] text-center sm:text-left">
        <label class="block text-sm font-semibold text-gray-700 dark:text-white mb-1">
          {{ t("student.chooseGender") }}
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
        <input type="text" :value="props.user?.student_no" class="form-input input-style cursor-not-allowed" disabled />
      </div>
      <div class="flex items-center gap-2">
        <Chip
              :content="form.is_verified ? 'Verified' : 'Unverified'"
              :textColor="form.is_verified ? '#00ab55' : '#e7515a'"
              :borderColor="form.is_verified ? '#00ab55' : '#e7515a'"
              :headerBackgroundColor="
                form.is_verified ? '#e6f9f0' : '#ffecec'
              "
            />
      </div>
    </div>
<!-- 3. First Name + Last Name -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
  <div class="flex flex-col">
    <div class="flex">
      <div class="label-chip">{{ t("student.first_name") }}</div>
      <input
        type="text"
        v-model="form.firstName"
        class="form-input input-style"
        :placeholder="t('student.first_name')"
        :disabled="!editMode"
      />
    </div>
    <span class="text-red-500 text-sm mt-1" v-if="errors.firstName">
      {{ errors.firstName }}
    </span>
  </div>
  <div class="flex flex-col">
    <div class="flex">
      <div class="label-chip">{{ t("student.last_name") }}</div>
      <input
        type="text"
        v-model="form.lastName"
        class="form-input input-style"
        :placeholder="t('student.last_name')"
        :disabled="!editMode"
      />
    </div>
    <span class="text-red-500 text-sm mt-1" v-if="errors.lastName">
      {{ errors.lastName }}
    </span>
  </div>
</div>

    <!-- 3. Contact Info -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <div class="flex">
        <div class="label-chip">{{ t("student.email") }}</div>
        <input type="email" v-model="form.email" class="form-input input-style cursor-not-allowed" disabled />
      </div>
      <div class="flex">
        <div class="label-chip">{{ t("student.phone") }}</div>
        <input type="tel" v-model="form.phone" class="form-input input-style" :disabled="!editMode" />
      </div>
    </div>

    <!-- 4. Birth Date + Join Date -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <div class="flex">
        <div class="label-chip">{{ t("student.dob") }}</div>
        <input type="date" v-model="form.birth_date" class="form-input input-style" :disabled="!editMode" />
      </div>
      <div class="flex">
        <div class="label-chip">{{ t("student.joinDate") }}</div>
        <input type="date" v-model="form.join_date" class="form-input input-style" :disabled="!editMode" />
      </div>
    </div>

    <!-- 5. Nationality + Marital Status -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <div class="flex">
        <div class="label-chip">{{ t("student.nationality") }}</div>
        <select
          v-model="form.nationality"
          :disabled="!editMode"
          :class="[
            'form-select ltr:rounded-l-none rtl:rounded-r-none py-2.5 text-base w-full',
            !editMode && 'cursor-not-allowed'
          ]"
        >
          <option value="" disabled>{{ t('user.nationality') }}</option>
          <option v-for="nation in nationalities" :key="nation.value" :value="nation.value">
            {{ nation.flag }} {{ nation.text }}
          </option>
        </select>
      </div>
      <div class="flex">
        
        <select
            v-model="form.marital_status"
            :disabled="!editMode"
            :class="[
              'form-select ltr:rounded-l-none rtl:rounded-r-none py-2.5 text-base w-full',
              !editMode && 'cursor-not-allowed'
            ]"
          >
            <option value="SINGLE">{{ t("student.single") }}</option>
            <option value="MARRIED">{{ t("student.married") }}</option>
            <option value="DIVORCED">{{ t("student.divorced") }}</option>
          </select>
      </div>
    </div>

    <!-- 6. Bio -->
    <div class="flex mb-6">
      <div class="label-chip">{{ t("student.bio") }}</div>
      <textarea
        rows="4"
        v-model="form.bio"
        class="form-input input-style w-full"
        :disabled="!editMode"
      />
    </div>

    <!-- 7. Address -->
    <div class="md:col-span-2 w-full">
      <LocationPicker
        v-model="form.location"
        :editMode="editMode"
        :placeholder="t('user.location')"
        height="400px"
        :key="locationPickerKey"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Swal from "sweetalert2";
import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import { useStudentStore } from "@/stores/students";
import LocationPicker from "./LocationPicker.vue";
import { nationalities } from "@/fakeData/nationalityList";

const { t } = useI18n();
const studentStore = useStudentStore();
const editMode = ref(false);

const props = defineProps<{ user: any | null }>();
const emit = defineEmits<{ (e: "cancel"): void; (e: "updated"): void }>();

const locationPickerKey = ref(0);

const form = ref({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  gender: undefined,
  avatar: "",
  is_verified: false,
  birth_date: "",
  join_date: "",
  nationality: "",
  marital_status: "",
  bio: "",
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
      form.value.is_verified = user.user.is_verified;
      form.value.birth_date = profile.birth_date?.split("T")[0] || "";
      form.value.join_date = profile.join_date?.split("T")[0] || "";
      form.value.nationality = profile.nationality || "";
      form.value.marital_status = profile.marital_status || "";
      form.value.bio = profile.bio || "";
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
  errors.value.firstName = form.value.firstName.trim() === "" ? t("student.firstNameRequired") : "";
  errors.value.lastName = form.value.lastName.trim() === "" ? t("student.lastNameRequired") : "";
  return !errors.value.firstName && !errors.value.lastName;
};

const handleSave = async () => {
  if (!validateForm() || !props.user?.user?.id) return;
  try {
    await studentStore.updateStudentInfo(props.user.user.id, {
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      phone: form.value.phone,
      email: form.value.email,
      is_verified: form.value.is_verified,
      profile: {
        gender: form.value.gender,
        bio: form.value.bio,
        avatar: form.value.avatar,
        nationality: form.value.nationality,
        birth_date: form.value.birth_date,
        join_date: form.value.join_date,
        address: form.value.location.address,
        latitude:  form.value.location.lat,
        longitude: form.value.location.lng,
      } as any
    
    });

    Swal.fire({ icon: "success", title: t("student.profileUpdated") });
    editMode.value = false;
    emit("updated");
  } catch (error: any) {
    Swal.fire({
      icon: "error",
      title: error?.response?.data?.message || t("student.profileUpdateFailed"),
    });
  }
};

const handleCancel = () => {
  if (props.user && props.user.user) {
    const profile = props.user.user.profile || {};
    form.value.firstName = props.user.user.firstName || "";
    form.value.lastName = props.user.user.lastName || "";
    form.value.email = props.user.user.email || "";
    form.value.phone = props.user.user.phone || "";
    form.value.avatar = profile.avatar || "";
    form.value.gender = profile.gender;
    form.value.is_verified = props.user.user.is_verified;
    form.value.birth_date = profile.birth_date?.split("T")[0] || "";
    form.value.join_date = profile.join_date?.split("T")[0] || "";
    form.value.nationality = profile.nationality || "";
    form.value.marital_status = profile.marital_status || "";
    form.value.bio = profile.bio || "";
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
