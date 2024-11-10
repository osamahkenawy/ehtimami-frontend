<template>
  <!-- Default Skeleton Loader -->
  <div v-if="type === 'default'" role="status" class="max-w-sm animate-pulse">
    <!-- (Default skeleton HTML goes here) -->
    <div
      class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"
    ></div>
    <div
      class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"
    ></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div
      class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"
    ></div>
    <div
      class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"
    ></div>
    <div
      class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"
    ></div>
    <span class="sr-only">Loading...</span>
  </div>

  <!-- Image Skeleton Loader -->
  <div
    v-else-if="type === 'image'"
    role="status"
    class="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center"
  >
    <!-- (Image skeleton HTML goes here) -->
    <div
      class="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700"
    >
      <svg
        class="w-10 h-10 text-gray-200 dark:text-gray-600"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 18"
      >
        <path
          d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"
        />
      </svg>
    </div>
  </div>
  <div
    v-else-if="type === 'paragraph'"
    role="status"
    class="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center"
  >
    <!-- (Image skeleton HTML goes here) -->
    <div
      class="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700"
    >
      <div class="w-full">
        <div
          class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"
        ></div>
        <div
          class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"
        ></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div
          class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"
        ></div>
        <div
          class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"
        ></div>
        <div
          class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"
        ></div>
      </div>
    </div>
  </div>

  <div v-else-if="type === 'list'" role="status" class="max-w-md p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
    <div class="flex items-center justify-between">
        <div>
            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
    </div>
    <div class="flex items-center justify-between pt-4">
        <div>
            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
    </div>
    <div class="flex items-center justify-between pt-4">
        <div>
            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
    </div>
    <div class="flex items-center justify-between pt-4">
        <div>
            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
    </div>
    <div class="flex items-center justify-between pt-4">
        <div>
            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
    </div>
    <span class="sr-only">Loading...</span>
</div>

  <!-- Video Skeleton Loader -->
  <div
    v-else-if="type === 'video'"
    role="status"
    class="flex items-center justify-center h-56 max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"
  >
    <svg
      class="w-10 h-10 text-gray-200 dark:text-gray-600"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 16 20"
    >
      <path
        d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"
      />
      <path
        d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z"
      />
    </svg>
  </div>

  <!-- Card Skeleton Loader -->
  <div
    v-else-if="type === 'card'"
    role="status"
    class="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
  >
    <!-- (Card skeleton HTML goes here) -->
  </div>

  <div
    v-else-if="type === 'text'"
    role="status"
    class="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
  >
    <div role="status" class="space-y-2.5 animate-pulse max-w-lg">
      <div class="flex items-center w-full">
        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
        <div
          class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"
        ></div>
        <div
          class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"
        ></div>
      </div>
      <div class="flex items-center w-full max-w-[480px]">
        <div
          class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"
        ></div>
        <div
          class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"
        ></div>
        <div
          class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"
        ></div>
      </div>
      <div class="flex items-center w-full max-w-[400px]">
        <div
          class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"
        ></div>
        <div
          class="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"
        ></div>
        <div
          class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"
        ></div>
      </div>
      <div class="flex items-center w-full max-w-[480px]">
        <div
          class="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full"
        ></div>
        <div
          class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"
        ></div>
        <div
          class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"
        ></div>
      </div>
      <div class="flex items-center w-full max-w-[440px]">
        <div
          class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-32"
        ></div>
        <div
          class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"
        ></div>
        <div
          class="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full"
        ></div>
      </div>
      <div class="flex items-center w-full max-w-[360px]">
        <div
          class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"
        ></div>
        <div
          class="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"
        ></div>
        <div
          class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"
        ></div>
      </div>
      <span class="sr-only">Loading...</span>
    </div>
  </div>
  <!-- Testimonial Skeleton Loader -->
  <div v-else-if="type === 'testimonial'" role="status" class="animate-pulse">
    <div
      class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto"
    ></div>
    <div
      class="h-2.5 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]"
    ></div>
    <div class="flex items-center justify-center mt-4">
      <!-- Profile Icon -->
      <svg
        class="w-8 h-8 text-gray-200 dark:text-gray-700 me-4"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"
        />
      </svg>
      <div
        class="w-20 h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 me-3"
      ></div>
      <div class="w-24 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
    </div>
    <span class="sr-only">Loading...</span>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  type: {
    type: String,
    default: "default",
    validator: (value: string) =>
      [
        "default",
        "image",
        "video",
        "card",
        "testimonial",
        "paragraph",
        "text",
        "list"
      ].includes(value),
  },
});
</script>
