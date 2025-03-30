<template>
  <div
    class="flex items-center justify-center px-1 py-1  font-bold text-white"
    :style="{
      backgroundColor: props.headerBackgroundColor,
      border: `1px solid ${props.borderColor}`,
      maxWidth: 'fit-content',
      margin: '3px',
      alignItems: 'center',
      display: 'flex',
    }"
  >
    <!-- Optional small circle if showShip is true -->
    <div
      v-if="props.showShip"
      :style="{
        width: '7px',
        height: '7px',
        backgroundColor: props.textColor,
        marginRight: '5px',
        borderRadius: '50%',
        marginTop: '2px'
      }"
    ></div>

    <!-- Chip Content -->
    <span class="font-bold" :style="{ color: props.textColor }">
      {{ props.content }}
    </span>
  </div>
</template>

<script lang="ts" setup>
import { withDefaults, defineProps } from "vue";

const props = withDefaults(
  defineProps<{
    content: string;
    textColor?: string;
    borderColor?: string;
    headerBackgroundColor?: string;
    showShip?: boolean;
  }>(),
  {
    textColor: "#244066",
    borderColor: "#244066",
    headerBackgroundColor: "#FFF",
    showShip: false,
  }
);
</script>
