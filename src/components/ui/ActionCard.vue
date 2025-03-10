<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  title: String,
});
</script>

<template>
  <div class="panel px-0 flex-grow py-6 w-full lg:w-auto my-2">
    <div class="text-lg font-medium bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08] p-5">
      {{ title }}
    </div>

    <div class="p-5">
      <slot />
    </div>
  </div>
</template>

<style scoped></style>