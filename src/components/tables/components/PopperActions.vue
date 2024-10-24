<template>
    <div class="dropdown">
      <Popper
        :placement="computedPlacement"
        :offsetDistance="0"
        class="align-middle"
      >
        <a href="javascript:;">
          <icon-horizontal-dots class="opacity-70 m-auto" />
        </a>
        <template #content="{ close }">
          <ul @click="close()">
            <li v-for="(action, index) in actions" :key="index">
              <a href="javascript:;" @click="triggerAction(action)">
                {{ action.label }}
              </a>
            </li>
          </ul>
        </template>
      </Popper>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { computed } from 'vue';
  import { useAppStore } from '@/stores/index';
  import { PropType } from 'vue';
  import IconHorizontalDots from "@/components/icon/icon-horizontal-dots.vue";
  
  // Access the store to determine RTL or LTR layout
  const store = useAppStore();
  
  // Props definition
  const props = defineProps({
    actions: {
      type: Array as PropType<Array<{ label: string; value: string }>>, // Array of actions
      required: true,
    },
    onActionSelected: {
      type: Function, // Ensure it is defined as a function
      required: true,
    },
  });
  
  // Compute the placement based on RTL setting
  const computedPlacement = computed(() => {
    return store.rtlClass === 'rtl' ? 'bottom-start' : 'bottom-end';
  });
  
  // Trigger the action in the parent when an item is clicked
  const triggerAction = (action: { label: string; value: string }) => {
    if (typeof props.onActionSelected === 'function') {
      props.onActionSelected(action.value); // Call the parent callback with the action value
    } else {
      console.error('onActionSelected is not a function');
    }
  };
  </script>
  