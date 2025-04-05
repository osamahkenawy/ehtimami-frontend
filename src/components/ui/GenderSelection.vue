<template>
  <div class="flex w-full">
    <!-- Male Option -->
    <div
      @click="!disabled && updateGender(1)"
      class="cursor-pointer flex items-center justify-center w-1/2 py-3 border transition-all rounded-l-lg rtl:rounded-r-lg rtl:rounded-l-none"
      :class="[
        modelValue === 1
          ? 'bg-blue-500 text-white border-blue-500'
          : 'bg-gray-100 text-gray-600 border-gray-300',
        disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
      ]"
    >
      <span class="font-bold">{{ $t("male") }}</span>
    </div>

    <!-- Female Option -->
    <div
      @click="!disabled && updateGender(2)"
      class="cursor-pointer flex items-center justify-center w-1/2 py-3 border transition-all rounded-r-lg rtl:rounded-l-lg rtl:rounded-r-none"
      :class="[
        modelValue === 2
          ? 'bg-pink-500 text-white border-pink-500'
          : 'bg-gray-100 text-gray-600 border-gray-300',
        disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
      ]"
    >
      <i class="innov-icon icon-woman fnt-15 rtl:ml-2 ltr:mr-2"></i>
      <span class="font-bold">{{ $t("female") }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

// ✅ Define Props
const props = defineProps<{
  modelValue: number; // 1 = Male, 2 = Female
  disabled?: boolean;
}>();

// ✅ Define Emits
const emit = defineEmits<{
  (event: "update:modelValue", value: number): void;
}>();

// ✅ Update Gender Value
const updateGender = (value: number) => {
  emit("update:modelValue", value);
};
</script>
