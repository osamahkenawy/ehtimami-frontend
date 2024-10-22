<template>
    <div @mouseenter="mouseEnter" @mouseleave="mouseLeave">
      <slot v-bind="{ trigger }" />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { TRIGGER } from './icons';
  
  export default defineComponent({
    name: 'AnimatedIconWrapper',
    setup(_, { slots }) {
      const trigger = ref(TRIGGER.LOOP_ON_HOVER);
  
      const mouseEnter = () => {
        trigger.value = TRIGGER.LOOP;
      };
  
      const mouseLeave = () => {
        trigger.value = TRIGGER.LOOP_ON_HOVER;
      };
  
      return {
        trigger,
        mouseEnter,
        mouseLeave,
        slots,
      };
    },
  });
  </script>
  