<template>
  <div>
    <div class="flex justify-between items-center mb-4">
      <BreadCrumb :items="breadcrumbItems" />
    </div>
    <div class="pt-5" v-if="cards">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-6 text-white">
        <div class="panel bg-gradient-to-r from-violet-500 to-violet-400" v-if="cards && cards.users">
          <div class="flex justify-between">
            <div class="ltr:mr-1 rtl:ml-1 text-md font-semibold">Users</div>
          </div>
          <div class="flex items-center mt-5">
            <div class="text-3xl font-bold ltr:mr-3 rtl:ml-3">{{cards.users?.all || 0}}</div>
            <div class="badge bg-green-600 text-white ltr:mr-2 rtl:ml-2" v-tippy="'Active Users'">{{cards.users?.active || 0}}</div>
            <div class="badge bg-red-200 text-red-800" v-tippy="'Inactive Users'">{{cards.users?.inactive || 0}}</div>
          </div>
        </div>
        <div class="panel bg-gradient-to-r from-cyan-500 to-cyan-400" v-if="cards && cards.schools">
          <div class="flex justify-between">
            <div class="ltr:mr-1 rtl:ml-1 text-md font-semibold">Schools</div>
          </div>
          <div class="flex items-center mt-5">
            <div class="text-3xl font-bold ltr:mr-3 rtl:ml-3">{{cards.schools?.all || 0}}</div>
            <div class="badge bg-green-600 text-white ltr:mr-2 rtl:ml-2" v-tippy="'Active Schools'">{{cards.schools?.active || 0}}</div>
            <div class="badge bg-red-200 text-red-800" v-tippy="'Inactive Schools'">{{cards.schools?.inactive || 0}}</div>
          </div>
        </div>
      </div> 
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed, onBeforeMount } from "vue";
import { useI18n } from "vue-i18n";
import { useAppStore } from '@/stores/index';
import { useDashboardStore } from "@/stores/dashboard";
import IconHome from "@/components/icon/icon-home.vue";
const dashboardStore = useDashboardStore();
const cards = computed( () => {return dashboardStore.cards})
const { t } = useI18n();
  // ✅ Fetch Schools Before Mount  
  onBeforeMount(() => {
    dashboardStore.fetchCards();
  });
// 🏫 Breadcrumb Localization (Reactive)
const breadcrumbItems = computed(() => [
  { label: t("breadcrumb.home"), link: "/", icon: IconHome },
  { label: t("dashboard") },
]);
</script>
