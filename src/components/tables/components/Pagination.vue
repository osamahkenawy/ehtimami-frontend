<template>
    <div :class="directionClass" class="flex justify-center flex-col w-full mt-2">
      <ul
        class="inline-flex items-center space-x-1 rtl:space-x-reverse mx-auto mb-4 flex-wrap"
      >
        <!-- First Page Button -->
        <li>
          <button
            @click="goToFirstPage"
            :disabled="currentPage === 1"
            class="flex justify-center font-semibold p-2 rounded-full transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
          >
            <icon-carets-down :class="rtlDirectionClass('rotate-90', '-rotate-90')" />
          </button>
        </li>
  
        <!-- Previous Page Button -->
        <li>
          <button
            @click="prevPage"
            :disabled="currentPage === 1"
            class="flex justify-center font-semibold p-2 rounded-full transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
          >
            <icon-caret-down :class="rtlDirectionClass('rotate-90', '-rotate-90')" />
          </button>
        </li>
  
        <!-- First Page -->
        <li>
          <button
            @click="changePage(1)"
            class="flex justify-center font-semibold px-3.5 py-2 rounded-full transition"
            :class="{
              'bg-primary text-white': 1 === currentPage,
              'bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary':
                1 !== currentPage
            }"
          >
            1
          </button>
        </li>
  
        <!-- Ellipsis if there's a gap after the first page -->
        <li v-if="showLeftEllipsis">...</li>
  
        <!-- Page Numbers Near Current Page -->
        <li v-for="page in pageWindow" :key="page">
          <button
            @click="changePage(page)"
            class="flex justify-center font-semibold px-3.5 py-2 rounded-full transition"
            :class="{
              'bg-primary text-white': page === currentPage,
              'bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary':
                page !== currentPage
            }"
          >
            {{ page }}
          </button>
        </li>
  
        <!-- Ellipsis if there's a gap before the last page -->
        <li v-if="showRightEllipsis">...</li>
  
        <!-- Last Page -->
        <li v-if="totalPages > 1">
          <button
            @click="changePage(totalPages)"
            class="flex justify-center font-semibold px-3.5 py-2 rounded-full transition"
            :class="{
              'bg-primary text-white': totalPages === currentPage,
              'bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary':
                totalPages !== currentPage
            }"
          >
            {{ totalPages }}
          </button>
        </li>
  
        <!-- Next Page Button -->
        <li>
          <button
            @click="nextPage"
            :disabled="currentPage === totalPages"
            class="flex justify-center font-semibold p-2 rounded-full transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
          >
            <icon-caret-down :class="rtlDirectionClass('-rotate-90', 'rotate-90')" />
          </button>
        </li>
  
        <!-- Last Page Button -->
        <li>
          <button
            @click="goToLastPage"
            :disabled="currentPage === totalPages"
            class="flex justify-center font-semibold p-2 rounded-full transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
          >
            <icon-carets-down :class="rtlDirectionClass('-rotate-90', 'rotate-90')" />
          </button>
        </li>
      </ul>
    </div>
  </template>
  

<script lang="ts" setup>
import { defineProps, defineEmits, computed } from "vue";
import IconCaretsDown from '@/components/icon/icon-carets-down.vue';
import IconCaretDown from '@/components/icon/icon-caret-down.vue';

// Define the props for the Pagination component
const props = defineProps({
  currentPage: {
    type: Number,
    default: 1,
  },
  totalPages: {
    type: Number,
    required: true,
  },
  rtl: {
    type: Boolean,
    default: false, // RTL is off by default
  }
});

// Emit event for page change
const emit = defineEmits(["pageChange"]);

// Methods for changing pages
const prevPage = () => {
  if (props.currentPage > 1) {
    emit("pageChange", props.currentPage - 1);
  }
};

const nextPage = () => {
  if (props.currentPage < props.totalPages) {
    emit("pageChange", props.currentPage + 1);
  }
};

// Method to go to the first page
const goToFirstPage = () => {
  if (props.currentPage !== 1) {
    emit("pageChange", 1);
  }
};

// Method to go to the last page
const goToLastPage = () => {
  if (props.currentPage !== props.totalPages) {
    emit("pageChange", props.totalPages);
  }
};

const changePage = (page: number) => {
  emit("pageChange", page);
};

// Show ellipsis if there's a gap between the first page and the current page window
const showLeftEllipsis = computed(() => {
  return props.currentPage > 3;
});

// Show ellipsis if there's a gap between the current page window and the last page
const showRightEllipsis = computed(() => {
  return props.currentPage < props.totalPages - 2;
});

// Compute the window of page numbers near the current page
const pageWindow = computed(() => {
  const windowSize = 3; // Show 3 pages around the current page
  const startPage = Math.max(2, props.currentPage - 1);
  const endPage = Math.min(props.totalPages - 1, props.currentPage + 1);

  const pages: number[] = []; // Explicitly define the array as `number[]`

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i); // Now `i` can be pushed into the `pages` array
  }
  return pages;
});

// Compute the direction class for RTL or LTR
const directionClass = computed(() => {
  return props.rtl ? 'rtl' : 'ltr';
});

// Handle direction-specific icon rotation for RTL or LTR
const rtlDirectionClass = (ltrClass: string, rtlClass: string) => {
  return props.rtl ? rtlClass : ltrClass;
};
</script>


<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

/* Customize the button size and behavior for smaller screens */
@media (max-width: 640px) {
  button {
    font-size: 14px;
    padding: 8px;
  }
}
</style>
