<template>
  <form autocomplete="off">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <!-- Avatar and Gender -->
      <div class="col-span-1 md:col-span-1">
        <label class="form-label">{{ $t("student.avatar") }}</label>
        <div class="flex items-center gap-4">
          <!-- Make FileUploader circle shaped -->
          <div class="w-28 h-28 relative overflow-hidden rounded-full">
            <FileUploader
              v-model="profile.avatar"
              :label="$t('teacher_form.profile_image')"
              platform="user-profile"
              @change="handleImageUpload"
            />
          </div>

          <!-- Make GenderSelection smaller -->
          <div class="w-48">
            <GenderSelection v-model="profile.gender" />
          </div>
        </div>
      </div>

      <!-- Empty div to keep layout balanced -->
      <div class="col-span-1 md:col-span-1"></div>

      <!-- Nationality & Religion -->
      <div>
        <label class="form-label">{{ $t("student.nationality") }}</label>
        <select
          v-model="profile.nationality"
         
          :class="[
            'form-select ltr:rounded-l-none rtl:rounded-r-none py-2.5 text-base w-full'
          ]"
        >
          <option value="" disabled>{{ t('user.nationality') }}</option>
          <option v-for="nation in nationalities" :key="nation.value" :value="nation.value">
            {{ nation.flag }} {{ nation.text }}
          </option>
        </select>
      </div> 

      <div>
        <label class="form-label">{{ $t("student.religion") }}</label>
        <input
          v-model="profile.religion"
          :class="[
            'form-input ltr:rounded-l-none rtl:rounded-r-none py-2.5 text-base w-full'
          ]"
          placeholder="Religion"
        />
      </div>

      <!-- Birth Date & Join Date -->
      <div>
        <label class="form-label">{{ $t("student.birth_date") }}</label>
        <input v-model="profile.birth_date" type="date"  :class="[
            'form-input ltr:rounded-l-none rtl:rounded-r-none py-2.5 text-base w-full'
          ]" />
      </div>

      <div>
        <label class="form-label">{{ $t("student.join_date") }}</label>
        <input v-model="profile.join_date" type="date" :class="[
            'form-input ltr:rounded-l-none rtl:rounded-r-none py-2.5 text-base w-full'
          ]" />
      </div>

      <!-- Address -->
      <div class="col-span-2">
        <label class="form-label">{{ $t("student.address") }}</label>
        <input
          v-model="profile.address"
          :class="[
            'form-input ltr:rounded-l-none rtl:rounded-r-none py-2.5 text-base w-full'
          ]"
          placeholder="Address"
        />
      </div>

      <!-- Profile Visibility -->
      <div>
        <label class="form-label">{{ $t("student.profile_visibility") }}</label>
        <select v-model="profile.profile_visibility" class="form-input">
          <option value="public">Public</option>
          <option value="school-only">School Only</option>
          <option value="private">Private</option>
        </select>
      </div>

      <!-- Language & Notification -->
      <div>
        <label class="form-label">{{ $t("student.language") }}</label>
        <select v-model="profile.user_language" class="form-input">
          <option value="en">English</option>
          <option value="ar">Arabic</option>
        </select>
      </div>

      <!-- Nickname & Middle Name -->
      <div>
        <label class="form-label">{{ $t("student.nickname") }}</label>
        <input
          v-model="profile.nickname"
          class="form-input"
          placeholder="Nickname"
        />
      </div>

      <div>
        <label class="form-label">{{ $t("student.middleName") }}</label>
        <input
          v-model="profile.middleName"
          class="form-input"
          placeholder="Middle Name"
        />
      </div>

      <!-- Occupation & Website -->
      <div>
        <label class="form-label">{{ $t("student.occupation") }}</label>
        <input
          v-model="profile.occupation"
          class="form-input"
          placeholder="Occupation"
        />
      </div>

      <div>
        <label class="form-label">{{ $t("student.website") }}</label>
        <input
          v-model="profile.website"
          class="form-input"
          placeholder="Website"
        />
      </div>

      <!-- Interests -->
      <div class="col-span-2">
        <label class="form-label">{{ $t("student.interests") }}</label>
        <input
          v-model="interestsInput"
          class="form-input"
          placeholder="Press Enter to add interest"
          @keyup.enter.prevent="addInterest"
        />
        <div class="mt-2 flex flex-wrap gap-2">
          <span
            v-for="(interest, index) in profile.interests"
            :key="index"
            class="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm flex items-center gap-2"
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

      <!-- Emergency Contacts -->
      <div class="col-span-2">
        <label class="form-label">{{ $t("student.emergency_contacts") }}</label>
        <div
          v-for="(contact, index) in profile.emergency_contacts"
          :key="index"
          class="grid grid-cols-2 gap-4 items-center mb-2"
        >
          <input v-model="contact.name" class="form-input" placeholder="Name" />
          <input
            v-model="contact.phone"
            class="form-input"
            placeholder="Phone"
          />
          <button
            type="button"
            class="text-red-500 text-sm"
            @click="removeEmergencyContact(index)"
          >
            {{ $t("student.remove_contact") }}
          </button>
        </div>
        <button
          type="button"
          @click="addEmergencyContact"
          class="text-blue-600 text-sm mt-1"
        >
          + {{ $t("student.add_contact") }}
        </button>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";

import { nationalities } from "@/fakeData/nationalityList";
const { t } = useI18n();
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
      notification: boolean;
      language: string;
    };
    interests: string[];
    marital_status: string;
    nationality: string;
    religion: string;
    birth_date: string;
    join_date: string;
    gender: number | null;
    address: string;
    latitude: number | null;
    longitude: number | null;
    emergency_contacts: { name: string; phone: string }[];
    profile_visibility: string;
    user_language: string;
  };
}>();

const profile = props.modelValue;
const emit = defineEmits(["update:modelValue"]);
const interestsInput = ref("");

const handleImageUpload = (data: { s3: string; base64: string }) => {
  profile.avatar = data.s3;
};

const addInterest = () => {
  const value = interestsInput.value.trim();
  if (value && !profile.interests.includes(value)) {
    profile.interests.push(value);
  }
  interestsInput.value = "";
};

const removeInterest = (index: number) => {
  profile.interests.splice(index, 1);
};

const addEmergencyContact = () => {
  profile.emergency_contacts.push({ name: "", phone: "" });
};

const removeEmergencyContact = (index: number) => {
  profile.emergency_contacts.splice(index, 1);
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
