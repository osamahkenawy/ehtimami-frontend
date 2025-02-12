import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import vueI18n from '@intlify/vite-plugin-vue-i18n';
import { fileURLToPath, URL } from 'url';

// Resolve `__dirname` in an ES module-compatible way
const dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
    plugins: [
        vue(),
        vueI18n({
            // Include all locale files for vue-i18n
            include: path.resolve(dirname, './src/locales/**'),
        }),
    ],
    resolve: {
        alias: {
            // Setup `@` as an alias for `src` directory
            '@': path.resolve(dirname, './src'),
        },
    },
    optimizeDeps: {
        // Pre-bundle specific dependencies for faster development
        include: ['quill', 'd3'],
    },
});
