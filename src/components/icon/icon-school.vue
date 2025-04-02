<template>
    <svg
        v-if="!fill"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M3 9.5L12 4L21 9.5L12 15L3 9.5Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linejoin="round"
        />
        <path
            opacity="0.5"
            d="M7 12.5V17.5C7 18.3284 7.67157 19 8.5 19H15.5C16.3284 19 17 18.3284 17 17.5V12.5"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
        />
    </svg>

    <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
            d="M3 9.5L12 4L21 9.5L12 15L3 9.5Z"
            fill="currentColor"
        />
        <path
            opacity="0.5"
            d="M7 12.5V17.5C7 18.3284 7.67157 19 8.5 19H15.5C16.3284 19 17 18.3284 17 17.5V12.5"
            fill="currentColor"
        />
    </svg>
</template>

<script lang="ts" setup>
defineProps({
    fill: {
        type: Boolean,
        default: false,
    },
});
</script>
