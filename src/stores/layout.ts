// stores/layout.ts
import { defineStore } from 'pinia';
import i18n from '@/i18n';
import appSetting from '@/app-setting';

export const useAppStore = defineStore('app', {
    state: () => ({
        isDarkMode: false,
        mainLayout: 'app',
        theme: 'light', 
        menu: 'vertical',
        layout: 'full',
        rtlClass: 'ltr',
        animation: '',
        navbar: 'navbar-sticky', 
        locale: 'en',
        sidebar: false,
        languageList: [
            { code: 'zh', name: 'Chinese' },
            { code: 'da', name: 'Danish' },
            { code: 'en', name: 'English' },
            { code: 'fr', name: 'French' },
            { code: 'de', name: 'German' },
            { code: 'el', name: 'Greek' },
            { code: 'hu', name: 'Hungarian' },
            { code: 'it', name: 'Italian' },
            { code: 'ja', name: 'Japanese' },
            { code: 'pl', name: 'Polish' },
            { code: 'pt', name: 'Portuguese' },
            { code: 'ru', name: 'Russian' },
            { code: 'es', name: 'Spanish' },
            { code: 'sv', name: 'Swedish' },
            { code: 'tr', name: 'Turkish' },
            { code: 'ae', name: 'Arabic' },
        ],
        isShowMainLoader: true,
        semidark: false,
    }),

    actions: {
        setMainLayout(payload: string = 'app') {
            this.mainLayout = payload;
        },
        toggleTheme(payload: string = this.theme) {
            localStorage.setItem('theme', payload);
            this.theme = payload;
            this.isDarkMode = payload === 'dark' || (payload === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

            document.body.classList.toggle('dark', this.isDarkMode);
        },
        toggleMenu(payload: string = this.menu) {
            this.sidebar = false;
            localStorage.setItem('menu', payload);
            this.menu = payload;
        },
        toggleLayout(payload: string = this.layout) {
            localStorage.setItem('layout', payload);
            this.layout = payload;
        },
        toggleRTL(payload: string = this.rtlClass) {
            localStorage.setItem('rtlClass', payload);
            this.rtlClass = payload;
            document.documentElement.setAttribute('dir', payload);
        },
        toggleAnimation(payload: string = this.animation) {
            localStorage.setItem('animation', payload.trim());
            this.animation = payload.trim();
            appSetting.changeAnimation();
        },
        toggleNavbar(payload: string = this.navbar) {
            localStorage.setItem('navbar', payload);
            this.navbar = payload;
        },
        toggleSemidark(payload: boolean = false) {
            localStorage.setItem('semidark', String(payload));
            this.semidark = payload;
        },
        toggleLocale(payload: string = this.locale) {
            i18n.global.locale.value = payload;
            localStorage.setItem('i18n_locale', payload);
            this.locale = payload;
            this.toggleRTL(payload === 'ae' ? 'rtl' : 'ltr');
        },
        toggleSidebar() {
            this.sidebar = !this.sidebar;
        },
        toggleMainLoader() {
            this.isShowMainLoader = true;
            setTimeout(() => (this.isShowMainLoader = false), 500);
        },
    },
    getters: {},
});
