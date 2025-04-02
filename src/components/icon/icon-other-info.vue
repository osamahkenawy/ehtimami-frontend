<template>
    <svg
        v-if="!fill"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5" />
        <circle cx="12" cy="8" r="1" fill="currentColor" />
        <path
            d="M12 11V16"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
        />
    </svg>

    <svg
        v-else
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
    >
        <circle cx="12" cy="12" r="9" fill="currentColor" />
        <circle cx="12" cy="8" r="1" fill="white" />
        <path
            d="M12 11V16"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
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
