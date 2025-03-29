<template>
  <div :class="{ 'dark text-white-dark': store.semidark }">
    <nav
      class="sidebar fixed min-h-screen h-full top-0 bottom-0 w-[260px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] z-50 transition-all duration-300"
    >
      <div class="bg-white dark:bg-[#0e1726] h-full">
        <div class="flex justify-between items-center px-4 py-3">
          <router-link to="/" class="main-logo flex items-center shrink-0">
            <img
              class="w-20 ml-[5px] flex-none"
              src="/assets/images/ehtimamiLogo.svg"
              alt=""
            />
            <span
              class="text-2xl ltr:ml-1.5 rtl:mr-1.5 font-semibold align-middle lg:inline dark:text-white-light"
            >
              {{ $t("project_name") }}
            </span>
          </router-link>
          <a
            href="javascript:;"
            class="collapse-icon w-8 h-8 rounded-full flex items-center hover:bg-gray-500/10 dark:hover:bg-dark-light/10 dark:text-white-light transition duration-300 rtl:rotate-180 hover:text-primary"
            @click="store.toggleSidebar()"
          >
            <icon-carets-down class="m-auto rotate-90" />
          </a>
        </div>
        <perfect-scrollbar
          :options="{ swipeEasing: true, wheelPropagation: false }"
          class="h-[calc(100vh-80px)] relative"
        > <ul class="relative font-semibold space-y-0.5 p-4 py-0">

        
          <SidebarItemComponent
            v-for="(item, index) in items"
            :key="index"
            :item="item"
            :activeDropdown="activeDropdown"
            :subActive="subActive"
            @toggle="activeDropdown = $event"
            @subToggle="subActive = $event"
            @linkClicked="toggleMobileMenu"
          />

        </ul>
      </perfect-scrollbar>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useAppStore } from "@/stores";
import IconCaretsDown from '@/components/icon/icon-carets-down.vue';

import { sidebarItems } from "@/config/sidebar-config";
import SidebarItemComponent from "@/components/layout/SidebarItemComponent.vue";
import { getUserRoles } from "@/helpers/helper";

const store = useAppStore();
const activeDropdown = ref("");
const subActive = ref("");
const roles = getUserRoles();
console.log("user roles", roles);
const toggleMobileMenu = () => {
  if (window.innerWidth < 1024) {
    store.toggleSidebar();
  }
};
const filteredSidebarItems = computed(() => {
  return sidebarItems.filter((item) => {
    if (!item.roles || item.roles.length === 0) return true;

    const match = item.roles.some((role) => roles.includes(role));

    return match;
  });
});
const items = computed(() => filteredSidebarItems.value);

onMounted(() => {
  const selector = document.querySelector(
    '.sidebar ul a[href="' + window.location.pathname + '"]'
  );
  if (selector) {
    selector.classList.add("active");
    const ul = selector.closest("ul.sub-menu");
    if (ul) {
      const ele: any = ul.closest("li.menu")?.querySelector(".nav-link");
      if (ele) {
        setTimeout(() => ele.click());
      }
    }
  }
});
</script>
