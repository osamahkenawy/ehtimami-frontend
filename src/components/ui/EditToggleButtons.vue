<template>
    <div class="flex items-center gap-2">
      <button
        v-if="!modelValue"
        @click="enableEdit"
        class="hover:text-primary"
        aria-label="Edit"
      >
        <IconEdit class="w-5 h-5" />
      </button>
  
      <template v-else>
        <button
          @click="onSave"
          class="hover:text-green-600"
          aria-label="Save"
        >
          <IconSave class="w-5 h-5" />
        </button>
        <button
          @click="onCancel"
          class="hover:text-red-600"
          aria-label="Cancel"
        >
          <IconX class="w-5 h-5" />
        </button>
      </template>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { defineProps, defineEmits } from 'vue';
  
  import IconEdit from '@/components/icon/icon-pencil.vue';
  import IconSave from '@/components/icon/icon-save.vue';
  import IconX from '@/components/icon/icon-x.vue';
  
  const props = defineProps<{
    modelValue: boolean;
  }>();
  
  const emit = defineEmits<{
    (e: 'update:modelValue', value: boolean): void;
    (e: 'save'): void;
    (e: 'close'): void;
  }>();
  
  const enableEdit = () => {
    emit('update:modelValue', true);
  };
  
  const onSave = () => {
    emit('save');
  };
  
  const onCancel = () => {
    emit('update:modelValue', false);
    emit('close');
  };
  </script>
  