<template>
  <div class="mt-1">
    <div
      class="flex items-center justify-between mb-5 ltr:flex-row rtl:flex-row-reverse"
    >
      <h5 class="font-semibold text-lg dark:text-white-light">
        Profile Details
      </h5>
      <EditToggleButtons
        v-model="editMode"
        @save="handleSave"
        @close="handleCancel"
        class="ltr:ml-4 rtl:mr-4"
      />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <!-- First Name -->
      <div class="flex">
        <div
          class="bg-[#eee] whitespace-nowrap flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-[#e0e6ed] dark:border-[#17263c] dark:bg-[#1b2e4b]"
        >
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

      <!-- Last Name -->
      <div class="flex">
        <div
          class="bg-[#eee] whitespace-nowrap flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-[#e0e6ed] dark:border-[#17263c] dark:bg-[#1b2e4b]"
        >
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

      <!-- Email -->
      <div class="flex">
        <div
          class="bg-[#eee] whitespace-nowrap flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-[#e0e6ed] dark:border-[#17263c] dark:bg-[#1b2e4b]"
        >
          Email
        </div>
        <input
          type="email"
          v-model="form.email"
          placeholder="Email"
          class="form-input ltr:rounded-l-none rtl:rounded-r-none py-2.5 text-base w-full"
          :disabled="!editMode"
        />
      </div>

      <!-- Phone (if available) -->
     <!-- Phone (using vue-tel-input) -->
      <div class="flex">
        <div
          class="bg-[#eee] whitespace-nowrap flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-[#e0e6ed] dark:border-[#17263c] dark:bg-[#1b2e4b]"
        >
          Phone
        </div>
        <input
          type="tel"
          v-model="form.phone"
          placeholder="+971522200730"
          class="form-input ltr:rounded-l-none rtl:rounded-r-none py-2.5 text-base w-full"
          :disabled="!editMode"
        />
      </div>

      <div class="md:col-span-2 w-full">
        <div class="w-full h-full overflow-hidden">
          <LocationPicker
            :initial-lat="form.latitude || 0"
            :initial-lng="form.longitude || 0"
            @locationSelected="updateUserLocation"
            :editMode="editMode"
          />
        </div>
      </div>
      
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import LocationPicker from "./LocationPicker.vue";
import type { User } from "@/types"; 

const editMode = ref(false);


const props = defineProps<{ user: User | null }>();
// Step 1: Create local form state
const form = ref({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  latitude: 0,
  longitude: 0
});

// Optional: destructure for easier use
const user = props.user;
const updateUserLocation = (loc) => {
  if (!user?.profile) return;
  user.profile.latitude = loc.lat;
  user.profile.longitude = loc.lon;
  user.profile.address = loc.address;
};

// Step 2: Sync when user changes
watch(
  () => props.user,
  (user) => {
    if (user) {
      form.value.firstName = user.firstName || "";
      form.value.lastName = user.lastName || "";
      form.value.email = user.email || "";
      form.value.phone = user.profile?.phone || "";
      form.value.address = user.profile?.address || "";
      form.value.latitude = user.profile?.latitude || 0;
      form.value.longitude = user.profile?.longitude || 0;
      
    }
  },
  { immediate: true }
);
const handleSave = () => {
  console.log("Saved!");
};

const handleCancel = () => {
  console.log("Cancelled edit.");
};
</script>