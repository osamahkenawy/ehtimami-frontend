<template>
    <div class="overflow-x-auto">
      <table class="min-w-full bg-white dark:bg-gray-800 shadow-md rounded-lg">
        <thead>
          <tr>
            <th class="flex px-4 py-2 text-left text-sm font-semibold text-gray-700 dark:text-gray-200"> 
              <img :src="dragAndDrop" alt="drag and drop icon" width="24" height="24" />
            </th>
            <th class="px-4 py-2 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">Sequence</th>
            <th class="px-4 py-2 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">{{ computedColumnHeader }}</th>
          </tr>
        </thead>
        <draggable
          tag="tbody"
          :list="localItems"
          group="handler"
          ghost-class="opacity-50"
          handle=".handle"
          :animation="200"
        >
          <template v-for="(item, index) in localItems" :key="item.id">
            <tr class="border-b last:border-none dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700">
              <!-- Cursor Column -->
              <td class="px-4 py-2 cursor-pointer handle text-gray-600 dark:text-gray-400">
                <img :src="dragAndDrop" alt="drag and drop icon" width="24" height="24" />
              </td>
              <!-- Sequence Column (computed based on index) -->
              <td class="px-4 py-2 text-gray-800 dark:text-gray-300">{{ index + 1 }}</td>
              <!-- Customizable Content Column -->
              <td class="px-4 py-2 text-gray-800 dark:text-gray-300">
                <slot :item="item">
                  <!-- Fallback content if no slot is provided -->
                  <div>{{ item.text || 'No Content' }}</div>
                </slot>
              </td>
            </tr>
          </template>
        </draggable>
      </table>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { defineProps, ref, computed, watch } from 'vue';
  import { VueDraggableNext as draggable } from 'vue-draggable-next';
  import dragAndDrop from '@/assets/images/tableImgs/drag-drop.svg';
  
  // Define the interface for items
  interface Item {
    id: number;
    text: string;
    [key: string]: any; // Allow additional properties for flexibility
  }
  
  // Define props with items and columnHeader for the third column name
  const props = defineProps<{
    items: Item[];
    columnHeader: string;
  }>();
  
  // Create a local reactive copy of items to ensure reactivity after dragging
  const localItems = ref([...props.items]);
  
  // Watch for changes in props.items to sync with localItems
  watch(
    () => props.items,
    (newItems) => {
      localItems.value = [...newItems];
    },
    { deep: true, immediate: true }
  );
  
  // Computed property to handle the column header text based on direction (ltr/rtl)
  const computedColumnHeader = computed(() => {
    const isRtl = document.documentElement.dir === 'rtl';
    return isRtl ? `${props.columnHeader} (RTL)` : `${props.columnHeader} (LTR)`;
  });
  </script>
  
  <style scoped>
  .cursor-pointer {
    cursor: pointer;
  }
  </style>
  
  <!-- How To Call -->

  <!-- <div class="panel">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-12">
        <DraggableTable :items="items" columnHeader="Task Details">
            <template #default="{ item }">
            <div>
                <strong>{{ item.name }}</strong> - {{ item.text }}
            </div>
            </template>
        </DraggableTable>
     </div>
</div> -->