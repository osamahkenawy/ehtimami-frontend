<template>
    <div class="container mx-auto">
      <!-- Scrollable Icon List in a Container -->
      <div class="relative flex items-center w-full">
        <!-- Icon List (scrollable, starts from left) -->
        <div
          ref="iconList"
          class="flex items-center space-x-4 overflow-x-auto scrollbar-hide w-full px-4"
          @scroll="handleScroll"
        >
          <!-- Icons (Placeholder SVGs) -->
          <div v-for="(icon, index) in icons" :key="index" class="flex-shrink-0 w-12 h-12">
            <svg
              class="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </div>
        </div>

      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, reactive, onMounted } from 'vue';
  
  export default defineComponent({
    name: 'ResponsiveIconScroller',
    setup() {
      const iconList = ref<HTMLElement | null>(null);
      const state = reactive({
        showLeftArrow: false,
        showRightArrow: true, // Initially show the right arrow because content may overflow
      });
  
      // Dummy icons (for demonstration)
      const icons = Array(20).fill(null); // Array of 20 placeholder icons
  
      const handleScroll = () => {
        if (!iconList.value) return;
        const { scrollLeft, scrollWidth, clientWidth } = iconList.value;
        state.showLeftArrow = scrollLeft > 0;
        state.showRightArrow = scrollLeft + clientWidth < scrollWidth;
      };
  
      const scrollLeft = () => {
        if (iconList.value) iconList.value.scrollBy({ left: -100, behavior: 'smooth' });
      };
  
      const scrollRight = () => {
        if (iconList.value) iconList.value.scrollBy({ left: 100, behavior: 'smooth' });
      };
  
      const checkForOverflow = () => {
        if (iconList.value) {
          const { scrollWidth, clientWidth } = iconList.value;
          // Check if content overflows
          state.showRightArrow = scrollWidth > clientWidth;
          state.showLeftArrow = false; // Initially at the start
        }
      };
  
      onMounted(() => {
        setTimeout(() => {
          // Start from the left side, and check for overflow
          checkForOverflow();
          window.addEventListener('resize', checkForOverflow); // Re-check on window resize
        }, 200); // Small delay to ensure proper DOM rendering
      });
  
      return {
        icons,
        iconList,
        ...state,
        scrollLeft,
        scrollRight,
        handleScroll,
      };
    },
  });
  </script>
  
  <style scoped>
  /* Hide scrollbar */
  .scrollbar-hide::-webkit-scrollbar {
    display: auto;
  }
  .scrollbar-hide {
    -ms-overflow-style: auto; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  </style>
  