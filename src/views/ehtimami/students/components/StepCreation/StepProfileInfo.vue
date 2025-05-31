<template>
  <form autocomplete="off">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <!-- Avatar and Gender -->
      <div class="col-span-1">
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
        <input
          v-model="modelValue.firstName"
          type="text"
          class="form-input"
          :placeholder="$t('student.placeholders.firstName')"
          @blur="validateFirstName(modelValue.firstName)"
          :class="{ 'border-red-500': firstNameError }"
        />
        <p v-if="firstNameError" class="text-red-500 text-sm mt-1">
          {{ firstNameError }}
        </p>
      </div>
      <div>
        <label class="form-label">{{ $t("student.lastName") }}</label>
        <input
          v-model="modelValue.lastName"
          type="text"
          class="form-input"
          :placeholder="$t('student.placeholders.lastName')"
          @blur="validateLastName(modelValue.lastName)"
          :class="{ 'border-red-500': lastNameError }"
        />
        <p v-if="lastNameError" class="text-red-500 text-sm mt-1">
          {{ lastNameError }}
        </p>
      </div>

      <!-- Email -->
      <div>
        <label class="form-label">{{ $t("student.email") }}</label>
        <input
          v-model="modelValue.email"
          type="email"
          class="form-input"
          :placeholder="$t('student.placeholders.email')"
          :class="{ 'border-red-500': emailError }"
          @blur="validateEmail(modelValue.email)"
        />
        <p v-if="emailError" class="text-red-500 text-sm mt-1">
          {{ emailError }}
        </p>
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
        <LocationSearchInput
          :placeholder="$t('student.enterStudentAddress')"
          @update:location="handleLocationSelected"
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
      <!-- Health Notes -->
      <div>
        <label class="form-label">{{ $t("student.health_notes") }}</label>
        <textarea
          v-model="modelValue.health_notes"
          class="form-input"
          :placeholder="$t('student.placeholders.healthNotes')"
          rows="3"
        ></textarea>
      </div>
      <div class="flex items-center gap-2">
        <label class="form-label">{{ $t("student.is_special_needs") }}</label>
        <input
          type="checkbox"
          v-model="modelValue.is_special_needs"
          class="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
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
            :placeholder="$t('student.placeholders.contactName')"
          />
          <select v-model="contact.relation" class="form-select flex-1">
            <option value="" disabled>
              {{ $t("student.select_relation") }}
            </option>
            <option value="father">{{ $t("student.relations.father") }}</option>
            <option value="mother">{{ $t("student.relations.mother") }}</option>
            <option value="brother">
              {{ $t("student.relations.brother") }}
            </option>
            <option value="sister">{{ $t("student.relations.sister") }}</option>
            <option value="friend">{{ $t("student.relations.friend") }}</option>
            <option value="spouse">{{ $t("student.relations.spouse") }}</option>
            <option value="other">{{ $t("student.relations.other") }}</option>
          </select>
          <vue-tel-input
            v-model="contact.phone"
            mode="international"
            :default-country="'AE'"
            :preferred-countries="['AE', 'SA', 'EG']"
            :auto-format="true"
            @input="(value) => updatePhone(index, value)"
            :inputOptions="{ placeholder: $t('student.placeholders.phone') }"
            class="flex-1"
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
import { useValidation } from "@/composables/use-validation";
import LocationSearchInput from "@/components/ui/LocationSearchInput.vue";
import { defineExpose } from "vue";

const {
  emailError,
  validateEmail,
  firstNameError,
  lastNameError,
  validateFirstName,
  validateLastName,
} = useValidation();

const { t } = useI18n();
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
const handleLocationSelected = ({ address, latitude, longitude }) => {
  // console.log("handleLocationSelected", address , latitude , longitude)
  props.modelValue.profile.address = address;
  props.modelValue.profile.latitude = latitude;
  props.modelValue.profile.longitude = longitude;
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
  props.modelValue.profile.emergency_contacts.push({
    name: "",
    relation: "",
    phone: "",
  });
};

const removeEmergencyContact = (index: number) => {
  props.modelValue.profile.emergency_contacts.splice(index, 1);
};

const validate = (): boolean => {
  let valid = true;

  // Validate first name
  if (!props.modelValue.firstName || props.modelValue.firstName.trim() === "") {
    validateFirstName(props.modelValue.firstName); // will set firstNameError
    valid = false;
  }

  // Validate last name
  if (!props.modelValue.lastName || props.modelValue.lastName.trim() === "") {
    validateLastName(props.modelValue.lastName); // will set lastNameError
    valid = false;
  }

  // Validate email
  if (!props.modelValue.email || props.modelValue.email.trim() === "") {
    validateEmail(props.modelValue.email); // will set emailError
    valid = false;
  }

  // Validate emergency contacts
  const contacts = props.modelValue.profile.emergency_contacts;
  const hasValidContact = contacts?.some(
    (c: any) => c.name?.trim() && c.phone?.trim()
  );

  if (!hasValidContact) {
    toast(t("student.emergency_contact_warning_step"), "warning");
    valid = false;
  }

  return valid;
  // return true
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
