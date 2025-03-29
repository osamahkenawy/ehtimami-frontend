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
import { defineComponent, ref, computed, watch, onMounted, nextTick } from "vue";
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
      default: "#253b5c",
    },
    secondaryColor: {
      type: String,
      default: "#6399eb",
    },
  },
  setup(props) {
    const showIcon = ref(true);
    const player = ref<HTMLElement | null>(null);

    const source = computed(() => `https://cdn.lordicon.com/${props.name}.json`);
    const computedColors = computed(() => `primary:${props.primaryColor},secondary:${props.secondaryColor}`);

    const updateAttributes = () => {
      if (!player.value) return;

      player.value.setAttribute("src", source.value);
      player.value.setAttribute("trigger", props.trigger);
      player.value.setAttribute("stroke", props.stroke.toString());
      player.value.setAttribute("colors", computedColors.value);
    };

    watch(() => props.name, updateAttributes);
    watch(() => props.trigger, updateAttributes);
    watch(() => props.stroke, updateAttributes);
    watch(() => props.primaryColor, updateAttributes);
    watch(() => props.secondaryColor, updateAttributes);

    onMounted(() => {
      nextTick(() => {
        updateAttributes();
      });
    });

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
