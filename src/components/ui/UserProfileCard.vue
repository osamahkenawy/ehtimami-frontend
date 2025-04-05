<template>
  <div class="flex items-center justify-center h-full w-full">
    <div class="flex flex-col items-center text-center pb-0">
      <!-- Profile Image with Gender Ring -->
      <div class="relative mt-2 profile-image">
        <div :class="['image-wrapper', genderClass, image ? 'has-image' : '']">
          <img
            v-if="image"
            :src="image"
            alt="User Image"
            class="w-25 h-25 object-cover rounded-full border-4"
            :class="genderBorderClass"
          />
          <span
            v-else
            class="w-24 h-24 flex items-center justify-center rounded-full text-xl text-white font-bold border-4"
            :class="[genderBorderClass, fallbackBgClass]"
          >
            {{ initials }}
          </span>
        </div>
      </div>

      <!-- Name -->
      <p class="text-lg font-semibold mt-3">{{ fullName }}</p>

      <!-- Horizontal Icon Info Row -->
      <div class="flex items-center justify-center mt-4 ltr:space-x-3 rtl:space-x-reverse rtl:space-x-3">
        <button
          v-if="email"
          v-tippy="email"
          class="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition"
        >
          <icon-mail class="w-4 h-4 text-gray-600" />
        </button>

        <button
          v-if="phone"
          v-tippy="phoneTooltip"
          class="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition"
        >
          <icon-phone class="w-4 h-4 text-gray-600" />
        </button>

        <button
          v-if="dob"
          v-tippy="formatDOB(dob)"
          class="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition"
        >
          <icon-cake class="w-4 h-4 text-gray-600" />
        </button>

        <button
          v-if="address"
          v-tippy="address"
          class="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition"
        >
          <icon-home class="w-4 h-4 text-gray-600" />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import IconMail from "@/components/icon/icon-mail.vue";
import IconPhone from "@/components/icon/icon-phone.vue";
import IconHome from "@/components/icon/icon-home.vue";
import IconCake from "@/components/icon/icon-cake.vue";
import { formatDOB } from '@/helpers/helper'

interface Props {
  image?: string;
  gender?: number;
  firstName: string;
  lastName: string;
  email?: string;
  phone?: string;
  dob?: string;
  address?: string;
}

const props = defineProps<Props>();

const fullName = computed(() => `${props.firstName} ${props.lastName}`);

const initials = computed(() => {
  const f = props.firstName?.charAt(0).toUpperCase() || "";
  const l = props.lastName?.charAt(0).toUpperCase() || "";
  return `${f}.${l}`;
});

const fallbackBgClass = computed(() => {
  return props.gender === 2 ? "bg-pink-500" : "bg-gray-800";
});
const genderClass = computed(() => {
  return props.gender === 1 ? "male" : "female";
});

const genderBorderClass = computed(() => {
  return props.gender === 1 ? "border-blue-500" : "border-pink-400";
});
const phoneTooltip = computed(() => ({
  content: `<span dir="ltr">${props.phone}</span>`,
  allowHTML: true,
}));

</script>

<style scoped>
.profile-image {
  position: relative;
  width: 96px;
  height: 96px;
}

.image-wrapper {
  width: 100%;
  height: 100%;
  border-radius: 9999px;
  overflow: hidden;
  position: relative;
}

.image-wrapper.male::before {
  content: "";
  position: absolute;
  background: url("@/assets/images/staff/male2.png") no-repeat center;
  background-size: contain;
  inset: 0;
  z-index: 1;
  pointer-events: none;
}

.image-wrapper.female.has-image::before {
  content: "";
  position: absolute;
  background: url("@/assets/images/staff/female.png") no-repeat center;
  background-size: contain;
  inset: 0;
  z-index: 1;
  pointer-events: none;
}
.image-wrapper img,
.image-wrapper span {
  position: relative;
  z-index: 2;
}
</style>
