<template>
    <div
        class="main-section antialiased relative font-nunito text-sm font-normal"
        :class="[store.sidebar ? 'toggle-sidebar' : '', store.menu, store.layout, store.rtlClass]"
    >
        <component v-bind:is="mainLayout"></component>
    </div>
</template>

<script lang="ts" setup>
    import { computed } from 'vue';

    import appLayout from '@/layouts/app-layout.vue';
    import authLayout from '@/layouts/auth-layout.vue';

    import { useAppStore } from '@/stores/index';
    import { useMeta } from '@/composables/use-meta';
    import 'https://cdn.lordicon.com/lordicon.js';

    const store = useAppStore();

    // meta
    useMeta({ title: 'AutoMovCa' });

    const mainLayout = computed(() => {
        return store.mainLayout === 'auth' ? authLayout : appLayout;
    });
</script>
