<template>
  <form autocomplete="off">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <!-- Avatar and Gender -->
      <div class="col-span-1">
        <label class="form-label">{{ $t("student.avatar") }}</label>
        <div class="flex items-center gap-4">
          <div class="w-28 h-28 relative overflow-hidden rounded-full">
            <FileUploader
              v-model="modelValue.profile.avatar"
              :label="$t('teacher_form.profile_image')"
              platform="user-profile"
              @change="handleImageUpload"
            />
          </div>
          <div class="w-48">
            <GenderSelection v-model="modelValue.profile.gender" />
          </div>
        </div>
      </div>
      <div></div>
      <!-- First Name & Last Name -->
      <div>
        <label class="form-label">{{ $t("student.firstName") }}</label>
        <input v-model="modelValue.firstName" type="text" class="form-input" />
      </div>

      <div>
        <label class="form-label">{{ $t("student.lastName") }}</label>
        <input v-model="modelValue.lastName" type="text" class="form-input" />
      </div>

      <!-- Email & Phone -->
      <div>
        <label class="form-label">{{ $t("student.email") }}</label>
        <input v-model="modelValue.email" type="email" class="form-input" />
      </div>
      <div>
        <label class="form-label">{{ $t("student.phone") }}</label>
        <vue-tel-input
          v-model="modelValue.phone"
          mode="international"
          :default-country="'AE'"
          :preferred-countries="['AE', 'SA', 'EG']"
          :auto-format="true"
          class="flex-1"
        />
      </div>

      <!-- Nationality & Religion -->
      <div>
        <label class="form-label">{{ $t("student.nationality") }}</label>
        <select v-model="modelValue.profile.nationality" class="form-select">
          <option value="" disabled>{{ t("user.nationality") }}</option>
          <option
            v-for="nation in nationalities"
            :key="nation.value"
            :value="nation.value"
          >
            {{ nation.flag }} {{ nation.text }}
          </option>
        </select>
      </div>

      <div>
        <label class="form-label">{{ $t("student.religion") }}</label>
        <select v-model="modelValue.profile.religion" class="form-select">
      <option value="" disabled>{{ $t("student.select_religion") }}</option>
      <option
        v-for="religion in religionList"
        :key="religion.name"
        :value="religion.name"
      > 
        {{ religion.symbol }} {{ religion.name }}
      </option>
    </select>
      </div>

      <!-- Dates -->
      <div>
        <label class="form-label">{{ $t("student.birth_date") }}</label>
        <input
          v-model="modelValue.profile.birth_date"
          type="date"
          class="form-input"
          :max="today"
        />
      </div>
      <div>
        <label class="form-label">{{ $t("student.join_date") }}</label>
        <input
          v-model="modelValue.profile.join_date"
          type="date"
          class="form-input"
        />
      </div>

      <!-- Address -->
      <div class="col-span-2">
        <label class="form-label">{{ $t("student.address") }}</label>
        <input
          v-model="modelValue.profile.address"
          class="form-input w-full"
          placeholder="Address"
        />
      </div>

      <!-- Visibility & Language -->
      <div>
        <label class="form-label">{{ $t("student.profile_visibility") }}</label>
        <select
          v-model="modelValue.profile.profile_visibility"
          class="form-input"
        >
          <option value="public">Public</option>
          <option value="school-only">School Only</option>
          <option value="private">Private</option>
        </select>
      </div>
      <div>
        <label class="form-label">{{ $t("student.language") }}</label>
        <select v-model="modelValue.profile.user_language" class="form-input">
          <option value="en">English</option>
          <option value="ar">Arabic</option>
        </select>
      </div>

      <!-- Nickname & Middle Name -->
      <div>
        <label class="form-label">{{ $t("student.nickname") }}</label>
        <input
          v-model="modelValue.profile.nickname"
          class="form-input"
          placeholder="Nickname"
        />
      </div>

      <div>
        <label class="form-label">{{ $t("student.middleName") }}</label>
        <input
          v-model="modelValue.profile.middleName"
          class="form-input"
          placeholder="Middle Name"
        />
      </div>

      <!-- Occupation & Website -->
      <div>
        <label class="form-label">{{ $t("student.occupation") }}</label>
        <input
          v-model="modelValue.profile.occupation"
          class="form-input"
          placeholder="Occupation"
        />
      </div>

      <div>
        <label class="form-label">{{ $t("student.website") }}</label>
        <input
          v-model="modelValue.profile.website"
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
            v-for="(interest, index) in modelValue.profile.interests"
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
          v-for="(contact, index) in modelValue.profile.emergency_contacts"
          :key="index"
          class="flex items-center gap-2 mb-2"
        >
          <input
            v-model="contact.name"
            class="form-input flex-1"
            placeholder="Name"
          />
          <vue-tel-input
            class="flex-1"
            mode="international"
            :default-country="'AE'"
            :preferred-countries="['AE', 'SA', 'EG']"
            :auto-format="true"
            v-model="contact.phone"
            @input="(value) => updatePhone(index, value)"
          />
          <button
            v-if="modelValue.profile.emergency_contacts.length > 1"
            type="button"
            class="text-red-500 hover:text-red-700"
            @click="removeEmergencyContact(index)"
          >
            <i class="fas fa-minus-circle text-lg"></i>
          </button>
          <button
            v-if="index === modelValue.profile.emergency_contacts.length - 1"
            type="button"
            class="text-green-600 hover:text-green-800"
            @click="addEmergencyContact"
          >
            <i class="fas fa-plus-circle text-lg"></i>
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { useToast } from "@/composables/user-toast";
import { nationalities } from "@/fakeData/nationalityList";
import { religionList } from "@/fakeData/religionList";

const { t} = useI18n();
const toast = useToast();
const today = new Date().toISOString().split("T")[0];

const props = defineProps<{ modelValue: any }>();
if (!props.modelValue.profile.join_date) {
  props.modelValue.profile.join_date = today;
}
const emit = defineEmits(["update:modelValue"]);

const interestsInput = ref("");

const handleImageUpload = (data: { s3: string; base64: string }) => {
  props.modelValue.profile.avatar = data.s3;
};

const addInterest = () => {
  const value = interestsInput.value.trim();
  if (value && !props.modelValue.profile.interests.includes(value)) {
    props.modelValue.profile.interests.push(value);
  }
  interestsInput.value = "";
};

const removeInterest = (index: number) => {
  props.modelValue.profile.interests.splice(index, 1);
};

const updatePhone = (index: number, value: string | Event) => {
  if (typeof value === "string") {
    props.modelValue.profile.emergency_contacts[index].phone = value;
  }
};

const addEmergencyContact = () => {
  const last = props.modelValue.profile.emergency_contacts.slice(-1)[0];
  if (!last.name || !last.phone) {
    toast(t("student.emergency_contact_warning"), "warning");

    return;
  }
  props.modelValue.profile.emergency_contacts.push({ name: "", phone: "" });
};

const removeEmergencyContact = (index: number) => {
  props.modelValue.profile.emergency_contacts.splice(index, 1);
};
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
