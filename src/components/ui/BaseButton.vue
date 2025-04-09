<template>
    <button
        :type="type"
        :disabled="loading"
        :class="['flex justify-center items-center gap-2 transition-all', baseClasses, classes]"
        @click="handleClick"
    >
        <svg
            v-if="loading"
            class="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
        >
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
            <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
        </svg>
        <span v-else>{{ title }}</span>
    </button>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{
    title: string;
    loading?: boolean;
    classes?: string;
    type?: 'submit' | 'button';
}>();

const emits = defineEmits(['click']);

const handleClick = (event: Event) => {
    if (!props.loading) emits('click', event);
};

const baseClasses = 'btn btn-dark border-0 uppercase w-full shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)]';
</script>
