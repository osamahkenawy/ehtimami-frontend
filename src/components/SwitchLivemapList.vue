<template>
    <div :class="{'ml-auto': !isRtl, 'mr-auto': isRtl}" class="flex items-center">
      <!-- Conditionally render Drivers and Assets based on RTL mode -->
      <template v-if="!isRtl">
        <!-- LTR: Drivers on the left, Assets on the right -->
        <span :class="{'font-bold': !modelValue}" class="relative ltr:mr-2 rtl:ml-2">{{$t('drivers')}}</span>
        <label class="w-12 h-6 relative">
          <input
            type="checkbox"
            class="custom_switch absolute w-full h-full opacity-0 z-10 cursor-pointer peer"
            id="custom_switch_checkbox4"
            :checked="modelValue"
            @change="onChange"
          />
          <span
            for="custom_switch_checkbox4"
            class="bg-[#ebedf2] dark:bg-dark block h-full rounded-full before:absolute before:left-1 before:bg-white dark:before:bg-white-dark dark:peer-checked:before:bg-white before:bottom-1 before:w-4 before:h-4 before:rounded-full peer-checked:before:left-7 peer-checked:bg-primary before:transition-all before:duration-300"
          ></span>
        </label>
        <span :class="{'font-bold': modelValue}" class="relative ltr:ml-2 rtl:mr-2">{{$t('assets')}}</span>
      </template>
      <template v-else>
        <!-- RTL: Assets on the left, Drivers on the right  -->
        <span :class="{'font-bold': modelValue}" class="relative rtl:mr-4">{{$t('assets')}}</span>
        <label class="w-12 h-6 relative rtl:mr-4">
          <input
            type="checkbox"
            class="custom_switch absolute w-full h-full opacity-0 z-10 cursor-pointer peer"
            id="custom_switch_checkbox4"
            :checked="modelValue"
            @change="onChange"
          />
          <span
            for="custom_switch_checkbox4"
            class="bg-[#ebedf2] dark:bg-dark block h-full rounded-full before:absolute before:left-1 before:bg-white dark:before:bg-white-dark dark:peer-checked:before:bg-white before:bottom-1 before:w-4 before:h-4 before:rounded-full peer-checked:before:left-7 peer-checked:bg-primary before:transition-all before:duration-300"
          ></span>
        </label>
        <span :class="{'font-bold': !modelValue}" class="relative rtl:mr-4">{{$t('drivers')}}</span>
      </template>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { computed } from 'vue';
  
  // Define props
  const props = defineProps({
    modelValue: {
      type: Boolean,
      required: true
    },
    isRtl: {
      type: Boolean,
      required: true
    }
  });
  
  // Define emits
  const emit = defineEmits(['update:modelValue']);
  
  // Function to handle switch change event
  const onChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (target) {
      // Emit the updated model value
      emit('update:modelValue', target.checked);
    }
  };
  </script>
  