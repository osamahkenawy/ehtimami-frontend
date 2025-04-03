
<template>
  <div class="mt-1 h-fit">
    <div class="flex items-center justify-between mb-5 ltr:flex-row rtl:flex-row-reverse h-fit">
      <h5 class="font-semibold text-lg dark:text-white-light">Profile Details</h5>
      <EditToggleButtons
        v-model="editMode"
        @save="handleSave"
        @close="handleCancel"
        class="ltr:ml-4 rtl:mr-4"
      />
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 h-fit">
      <!-- First Name -->
      <div class="flex flex-col">
        <div class="flex">
          <div class="bg-[#eee] whitespace-nowrap flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-[#e0e6ed] dark:border-[#17263c] dark:bg-[#1b2e4b]">
            First Name
          </div>
          <input
            type="text"
            v-model="form.firstName"
            placeholder="First Name"
            class="form-input ltr:rounded-l-none rtl:rounded-r-none py-2.5 text-base w-full"
            :disabled="!editMode"
          />
        </div>
        <span class="text-red-500 text-sm mt-1" v-if="errors.firstName">{{ errors.firstName }}</span>
      </div>

      <!-- Last Name -->
      <div class="flex flex-col">
        <div class="flex">
          <div class="bg-[#eee] whitespace-nowrap flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-[#e0e6ed] dark:border-[#17263c] dark:bg-[#1b2e4b]">
            Last Name
          </div>
          <input
            type="text"
            v-model="form.lastName"
            placeholder="Last Name"
            class="form-input ltr:rounded-l-none rtl:rounded-r-none py-2.5 text-base w-full"
            :disabled="!editMode"
          />
        </div>
        <span class="text-red-500 text-sm mt-1" v-if="errors.lastName">{{ errors.lastName }}</span>
      </div>

      <!-- Email (always disabled) -->
      <div class="flex">
        <div class="bg-[#eee] whitespace-nowrap flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-[#e0e6ed] dark:border-[#17263c] dark:bg-[#1b2e4b]">
          Email
        </div>
        <input
          type="email"
          v-model="form.email"
          placeholder="Email"
          class="form-input ltr:rounded-l-none rtl:rounded-r-none py-2.5 text-base w-full"
          disabled
        />
      </div>

      <!-- Phone (always disabled) -->
      <div class="flex">
        <div class="bg-[#eee] whitespace-nowrap flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-[#e0e6ed] dark:border-[#17263c] dark:bg-[#1b2e4b]">
          Phone
        </div>
        <input
          type="tel"
          v-model="form.phone"
          placeholder="Phone Number"
          class="form-input ltr:rounded-l-none rtl:rounded-r-none py-2.5 text-base w-full"
           :disabled="!editMode"
        />
      </div>

      <!-- Location Picker -->
      <div class="md:col-span-2 w-full">
        <div class="w-full h-full overflow-hidden">
          <LocationPicker
            v-model="form.location"
            :editMode="editMode"
            placeholder="Search for a location"
            height="400px"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Swal from "sweetalert2";
import { ref, watch } from "vue";
import LocationPicker from "./LocationPicker.vue";
import type { User } from "@/types";
import { useUserStore } from "@/stores/users";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const userStore = useUserStore();
const editMode = ref(false);
const props = defineProps<{ user: User | null }>();

const form = ref({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  location: {
    lat: 0,
    lng: 0,
    address: ""
  }
});

const errors = ref({
  firstName: "",
  lastName: ""
});

watch(
  () => props.user,
  (user) => {
    if (user) {
      form.value.firstName = user.firstName || "";
      form.value.lastName = user.lastName || "";
      form.value.email = user.email || "";
      form.value.phone = user.phone || "";
      form.value.location = {
        lat: user.profile?.latitude || 0,
        lng: user.profile?.longitude || 0,
        address: user.profile?.address || ""
      };
    }
  },
  { immediate: true }
);

const validateForm = () => {
  errors.value.firstName = form.value.firstName.trim() === "" ? "First name is required" : "";
  errors.value.lastName = form.value.lastName.trim() === "" ? "Last name is required" : "";
  return !errors.value.firstName && !errors.value.lastName;
};

const handleSave = async () => {
  if (!validateForm() || !props.user?.userId) return;

  const toast: any = Swal.mixin({
    toast: true,
    position: "top",
    showConfirmButton: false,
    timer: 3000,
    customClass: { container: "toast" },
  });

  const userId = props.user.userId;

  try {
    await userStore.updateProfile(userId, {
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      phone: form.value.phone,
      address: form.value.location.address,
      latitude: form.value.location.lat,
      longitude: form.value.location.lng,
      email: form.value.email, // optional
    });

    toast.fire({
      icon: "success",
      title: t("user.profileUpdated") || "Profile updated successfully!",
    });

    editMode.value = false;
  } catch (error: any) {
    toast.fire({
      icon: "error",
      title:
        error?.response?.data?.message ||
        t("user.profileUpdateFailed") ||
        "Failed to update profile.",
    });
  }
};

const handleCancel = () => {
  console.log("Cancelled edit.");
};
</script>