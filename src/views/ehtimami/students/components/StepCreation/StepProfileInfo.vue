<template>
  <form autocomplete="off">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <!-- Avatar -->
      <div class="col-span-2">
        <label class="form-label">{{ $t("student.avatar") }}</label>
        <div class="flex items-center gap-5">
          <FileUploader
                  v-model="profile.avatar"
                  :label="$t('teacher_form.profile_image')"
                  platform="user-profile"
                  @change="handleImageUpload"
                />
                <GenderSelection
                v-model="profile.gender"
              />
        </div>
      </div>

      <!-- Nickname & Middle Name -->
      <div>
        <label class="form-label">{{ $t("student.nickname") }}</label>
        <input v-model="profile.nickname" class="form-input" />
      </div>
      <div>
        <label class="form-label">{{ $t("student.middleName") }}</label>
        <input v-model="profile.middleName" class="form-input" />
      </div>

      <!-- Occupation & Website -->
      <div>
        <label class="form-label">{{ $t("student.occupation") }}</label>
        <input v-model="profile.occupation" class="form-input" />
      </div>
      <div>
        <label class="form-label">{{ $t("student.website") }}</label>
        <input v-model="profile.website" class="form-input" />
      </div>

      <!-- Social Links -->

      <!-- Language & Interests -->
      <div>
        <label class="form-label">{{ $t("student.language") }}</label>
        <select v-model="profile.preferences.language" class="form-input">
          <option value="en">English</option>
          <option value="ar">Arabic</option>
        </select>
      </div>
      <div>
        <label class="form-label">{{ $t("student.interests") }}</label>
        <input
          v-model="interestsInput"
          class="form-input"
          @keyup.enter="addInterest"
          placeholder="Press Enter to add"
        />
        <div class="mt-2 flex flex-wrap gap-2">
          <span
            v-for="(interest, index) in profile.interests"
            :key="index"
            class="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm flex items-center gap-1"
          >
            {{ interest }}
            <button
              type="button"
              @click="removeInterest(index)"
              class="text-red-600"
            >
              ×
            </button>
          </span>
        </div>
      </div>

      <!-- Marital Status & Nationality -->
      <div>
        <label class="form-label">{{ $t("student.marital_status") }}</label>
        <select v-model="profile.marital_status" class="form-input">
          <option value="SINGLE">Single</option>
          <option value="MARRIED">Married</option>
        </select>
      </div>
      <div>
        <label class="form-label">{{ $t("student.nationality") }}</label>
        <input v-model="profile.nationality" class="form-input" />
      </div>

      <!-- Dates -->
      <div>
        <label class="form-label">{{ $t("student.birth_date") }}</label>
        <input v-model="profile.birth_date" type="date" class="form-input" />
      </div>
      <div>
        <label class="form-label">{{ $t("student.join_date") }}</label>
        <input v-model="profile.join_date" type="date" class="form-input" />
      </div>

      <!-- Gender -->
      <div>
        <label class="form-label">{{ $t("student.gender") }}</label>
        <select v-model="profile.gender" class="form-input">
          <option :value="1">Male</option>
          <option :value="2">Female</option>
        </select>
      </div>

      <!-- Address -->
      <div class="col-span-2">
        <label class="form-label">{{ $t("student.address") }}</label>
        <input v-model="profile.address" class="form-input w-full" />
      </div>

      <!-- Emergency Contacts -->
      <div class="col-span-2">
        <label class="form-label">{{ $t("student.emergency_contacts") }}</label>
        <div
          v-for="(contact, index) in profile.emergency_contacts"
          :key="index"
          class="grid grid-cols-2 gap-4 mb-2"
        >
          <input v-model="contact.name" class="form-input" placeholder="Name" />
          <input
            v-model="contact.phone"
            class="form-input"
            placeholder="Phone"
          />
        </div>
        <button
          type="button"
          @click="addEmergencyContact"
          class="text-blue-600 text-sm mt-1"
        >
          + Add Contact
        </button>
      </div>

      <!-- Profile Visibility -->
      <div class="col-span-2">
        <label class="form-label">{{ $t("student.profile_visibility") }}</label>
        <select v-model="profile.profile_visibility" class="form-input">
          <option value="public">Public</option>
          <option value="school-only">School Only</option>
          <option value="private">Private</option>
        </select>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  modelValue: {
    bio: string;
    avatar: string;
    middleName: string;
    nickname: string;
    occupation: string;
    website: string;
    social_links: {
      github: string;
      instagram: string;
    };
    preferences: {
      language: string;
    };
    interests: string[];
    marital_status: string;
    nationality: string;
    birth_date: string;
    join_date: string;
    gender: number | null;
    address: string;
    latitude: number | null;
    longitude: number | null;
    emergency_contacts: { name: string; phone: string }[];
    profile_visibility: string;
  };
}>();

const profile = props.modelValue;

const emit = defineEmits(["update:modelValue"]);

const interestsInput = ref("");

const addInterest = () => {
  const value = interestsInput.value.trim();
  if (value && !profile.interests.includes(value)) {
    profile.interests.push(value);
  }
  interestsInput.value = "";
};
const handleImageUpload = (data: { s3: string; base64: string }) => {
  profile.avatar = data.s3;
};
const removeInterest = (index: number) => {
  profile.interests.splice(index, 1);
};

const addEmergencyContact = () => {
  profile.emergency_contacts.push({ name: "", phone: "" });
};
</script>

<style scoped>
.form-label {
  @apply block text-sm font-medium text-gray-700 mb-1;
}
.form-input {
  @apply w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500;
}
</style>
