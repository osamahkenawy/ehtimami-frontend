<template>
    <ol class="flex text-gray-500 font-semibold dark:text-white-dark">
      <li v-for="(item, index) in items" :key="index" class="flex items-center">
        <a
          v-if="item.link && !isLast(index)"
          :href="item.link"
          class="hover:text-gray-500/70 dark:hover:text-white-dark/70"
        >
          <component :is="item.icon" v-if="item.icon" class="w-4 h-4"></component>
          {{ item.label }}
        </a>
        <span v-else class="text-black dark:text-white-light">{{ item.label }}</span>
        <span v-if="!isLast(index)" class="before:content-['/'] before:px-1.5"></span>
      </li>
    </ol>
  </template>
  
  <script lang="ts" setup>
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
  
  <style scoped>
  .breadcrumb-item + .breadcrumb-item:before {
    content: '/';
    margin: 0 8px;
    color: gray;
  }
  </style>
  