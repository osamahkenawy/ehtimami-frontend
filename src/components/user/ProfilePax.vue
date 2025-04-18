<template>
  <div class="flex items-center space-x-2">
    <div
      class="w-12 h-12 flex justify-center items-center rounded-full border font-bold"
      :class="compLogo ? 'bg-none text-dark' : 'bg-dark text-white'"
    >
      <img v-if="image" :src="image" class="w-full h-full rounded-full object-cover" />
      <span v-else>{{ nameChip }}</span>
    </div>

    <div class="flex flex-col">
      <!-- Name with Gender Icon -->
      <div class="truncate max-w-[150px] flex items-center gap-1" v-tippy="name">
        {{ truncatedName }}
        <img
          v-if="gender === 1"
          src="@/assets/images/staff/male.svg"
          alt="Male"
          class="w-4 h-4"
        />
        <img
          v-else-if="gender === 2"
          src="@/assets/images/staff/female.svg"
          alt="Female"
          class="w-4 h-4"
        />
      </div>

      <div v-if="extraTop" class="italic">{{ extraTop }}</div>

      <div class="flex items-center space-x-2">
        <button v-if="payable" class="w-7 h-7 flex items-center justify-center rounded-full bg-gray-200">
          <img src="@/assets/images/staff/check.svg" alt="Account Payable" class="w-4 h-4" />
        </button>

        <img
          v-if="displayEmail"
          v-tippy="displayEmail"
          src="@/assets/images/staff/email-circle.svg"
          alt="Email"
          class="w-5 h-5 cursor-pointer"
        />
        <img
          v-if="displayPhone"
          v-tippy="displayPhone"
          src="@/assets/images/staff/phone-border.svg"
          alt="Phone"
          class="w-5 h-5 cursor-pointer"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, PropType } from 'vue';

type ContactInfo = string | string[];

const props = defineProps({
  name: { type: String, required: true },
  image: { type: String, default: '' },
  email: { type: [String, Array] as PropType<ContactInfo>, default: '' },
  phone: { type: [String, Array] as PropType<ContactInfo>, default: '' },
  extraTop: { type: String, default: '' },
  payable: { type: Boolean, default: false },
  compLogo: { type: Boolean, default: false },
  gender: { type: Number as PropType<1 | 2 | undefined>, default: undefined }, // 1: male, 2: female
});

const displayPhone = computed(() => {
  return Array.isArray(props.phone) ? props.phone[0] || '' : props.phone;
});

const displayEmail = computed(() => {
  return Array.isArray(props.email) ? props.email[0] || '' : props.email;
});

const truncatedName = computed(() => {
  const maxLength = 30;
  return props.name.length > maxLength ? `${props.name.substring(0, maxLength)}...` : props.name;
});

const nameChip = computed(() => {
  return props.name
    .split(' ')
    .filter(m => m.trim() !== '')
    .map(m => m.substring(0, 1))
    .join('')
    .substring(0, 2)
    .toUpperCase();
});
</script>
