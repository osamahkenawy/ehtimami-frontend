<template>
  <lord-icon
    v-if="showIcon"
    :src="source"
    ref="player"
    :trigger="trigger"
    :stroke="stroke"
    :colors="computedColors"
    class="animated-icon"
  />
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from "vue";
import { TRIGGER } from "./icons";

export default defineComponent({
  name: "AnimatedIcon",
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
    primaryColor: {
      type: String,
      default: "#121331", // Default primary color
    },
    secondaryColor: {
      type: String,
      default: "#253b5c", // Default secondary color
    },
  },
  setup(props) {
    const showIcon = ref(true);

    // Computed property to dynamically generate the source URL
    const source = computed(() => {
      return `https://cdn.lordicon.com/${props.name}.json`;
    });

    // Computed property to set colors dynamically
    const computedColors = computed(() => {
      return `primary:${props.primaryColor}, secondary:${props.secondaryColor}`;
    });

    // Watchers for dynamic updates to icon attributes
    const player = ref<HTMLElement | null>(null);

    watch(
      source,
      (newSource) => {
        if (player.value) {
          player.value.setAttribute("src", newSource);
        }
      },
      { immediate: true }
    );

    watch(
      () => props.trigger,
      (newTrigger) => {
        if (player.value) {
          player.value.setAttribute("trigger", newTrigger);
        }
      },
      { immediate: true }
    );

    watch(
      () => props.stroke,
      (newStroke) => {
        if (player.value) {
          player.value.setAttribute("stroke", newStroke.toString());
        }
      },
      { immediate: true }
    );

    watch(
      computedColors,
      (newColors) => {
        if (player.value) {
          player.value.setAttribute("colors", newColors);
        }
      },
      { immediate: true }
    );

    return {
      showIcon,
      source,
      player,
      computedColors,
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
