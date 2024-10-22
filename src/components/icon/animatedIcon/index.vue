<template>
    <lord-icon
      v-if="showIcon"
      :src="source"
      ref="player"
      :trigger="trigger"
      :stroke="stroke"
      colors="primary:#121331,secondary:#253b5c"
      class="animated-icon"
    />
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, computed, watch } from 'vue';
  import { TRIGGER } from './icons';
  
  export default defineComponent({
    name: 'AnimatedIcon',
    props: { 
      name: {
        type: String,
        required: true,
      },
      trigger: {
        type: String,
        default: TRIGGER.HOVER,
      },
      stroke: {
        type: [Number, String],
        default: 50,
      },
    },
    setup(props) {
      const showIcon = ref(true);
  
      // Computed property to dynamically generate the source URL
      const source = computed(() => {
        return `https://cdn.lordicon.com/${props.name}.json`;
      });
  
      // Watchers for dynamic updates to icon attributes
      const player = ref<HTMLElement | null>(null);
  
      // Watch the computed source property, not props.source
      watch(
        source,
        (newSource) => {
          if (player.value) {
            player.value.setAttribute('src', newSource);
          }
        },
        { immediate: true }
      );
  
      // Watch the trigger prop and update the trigger attribute dynamically
      watch(
        () => props.trigger,
        (newTrigger) => {
          if (player.value) {
            player.value.setAttribute('trigger', newTrigger);
          }
        },
        { immediate: true }
      );
  
      // Watch the stroke prop and update the stroke attribute dynamically
      watch(
        () => props.stroke,
        (newStroke) => {
          if (player.value) {
            player.value.setAttribute('stroke', newStroke.toString());
          }
        },
        { immediate: true }
      );
  
      return {
        showIcon,
        source,
        player,
      };
    },
  });
  </script>
  
  <style scoped>
  .animated-icon {
    height: 2em;
    width: 2em;
  }
  </style>
  