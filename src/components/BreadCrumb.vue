<template>
  <ol class="flex text-gray-500 font-semibold dark:text-white-dark items-center">
    <li v-for="(item, index) in items" :key="index" class="flex items-center">
      <router-link
        v-if="item.link && !isLast(index)"
        :to="item.link"
        class="flex items-center hover:text-gray-500/70 dark:hover:text-white-dark/70"
      >
        <component :is="item.icon" v-if="item.icon" class="w-4 h-4 mr-2"></component>
        {{ item.label }}
      </router-link>
      <span v-else class="text-black dark:text-white-light">{{ item.label }}</span>
      <span v-if="!isLast(index)" class="before:content-['/'] before:px-1.5"></span>
    </li>
  </ol>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router';

interface BreadcrumbItem {
  label: string;
  link?: string;
  icon?: string;
}

const props = defineProps<{
  items: BreadcrumbItem[];
}>();

// Method to check if the current item is the last breadcrumb
const isLast = (index: number) => {
  return index === props.items.length - 1;
};
</script>

