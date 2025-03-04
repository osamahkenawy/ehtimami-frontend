<template>
  <div>
    <div class="flex justify-between items-center mb-4">
      <BreadCrumb :items="breadcrumbItems" />
    </div>
    <div class="pt-5" v-if="cards">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-6 text-white">
        <div class="panel bg-gradient-to-r from-violet-500 to-violet-400" v-if="cards && cards?.users">
          <div class="flex justify-between">
            <div class="ltr:mr-1 rtl:ml-1 text-md font-semibold">Users</div>
          </div>
          <div class="flex items-center mt-5">
            <div class="text-3xl font-bold ltr:mr-3 rtl:ml-3">Total {{cards.users?.all || 0}}</div>
            <div class="badge bg-green-600 text-white ltr:mr-2 rtl:ml-2" v-tippy="'Active Users'">{{cards.users?.active || 0}}</div>
            <div class="badge bg-red-200 text-red-800" v-tippy="'Inactive Users'">{{cards.users?.inactive || 0}}</div>
          </div>
        </div>
        <div class="panel bg-gradient-to-r from-cyan-500 to-cyan-400" v-if="cards && cards?.schools">
          <div class="flex justify-between">
            <div class="ltr:mr-1 rtl:ml-1 text-md font-semibold">Schools</div>
          </div>
          <div class="flex items-center mt-5">
            <div class="text-3xl font-bold ltr:mr-3 rtl:ml-3">Total {{cards.schools?.all || 0}}</div>
            <div class="badge bg-green-600 text-white ltr:mr-2 rtl:ml-2" v-tippy="'Active Schools'">{{cards.schools?.active || 0}}</div>
            <div class="badge bg-red-200 text-red-800" v-tippy="'Inactive Schools'">{{cards.schools?.inactive || 0}}</div>
          </div>
        </div>
          <!-- Time On-Site -->
          <div class="panel bg-gradient-to-r from-blue-500 to-blue-400">
                    <div class="flex justify-between">
                        <div class="ltr:mr-1 rtl:ml-1 text-md font-semibold">Time On-Site</div>
                        <div class="dropdown">
                            <Popper :placement="store.rtlClass === 'rtl' ? 'bottom-start' : 'bottom-end'" offsetDistance="0" class="align-middle">
                                <button type="button">
                                    <icon-horizontal-dots class="hover:opacity-80 opacity-70" />
                                </button>
                                <template #content="{ close }">
                                    <ul @click="close()" class="text-black dark:text-white-dark">
                                        <li>
                                            <a href="javascript:;">View Report</a>
                                        </li>
                                        <li>
                                            <a href="javascript:;">Edit Report</a>
                                        </li>
                                    </ul>
                                </template>
                            </Popper>
                        </div>
                    </div>
                    <div class="flex items-center mt-5">
                        <div class="text-3xl font-bold ltr:mr-3 rtl:ml-3">38,085</div>
                        <div class="badge bg-white/30">+ 1.35%</div>
                    </div>
                    <div class="flex items-center font-semibold mt-5">
                        <icon-eye class="ltr:mr-2 rtl:ml-2 shrink-0" />
                        Last Week 37,894
                    </div>
                </div>

                <!-- Bounce Rate -->
                <div class="panel bg-gradient-to-r from-fuchsia-500 to-fuchsia-400">
                    <div class="flex justify-between">
                        <div class="ltr:mr-1 rtl:ml-1 text-md font-semibold">Bounce Rate</div>
                        <div class="dropdown">
                            <Popper :placement="store.rtlClass === 'rtl' ? 'bottom-start' : 'bottom-end'" offsetDistance="0" class="align-middle">
                                <button type="button">
                                    <icon-horizontal-dots class="hover:opacity-80 opacity-70" />
                                </button>
                                <template #content="{ close }">
                                    <ul @click="close()" class="text-black dark:text-white-dark">
                                        <li>
                                            <a href="javascript:;">View Report</a>
                                        </li>
                                        <li>
                                            <a href="javascript:;">Edit Report</a>
                                        </li>
                                    </ul>
                                </template>
                            </Popper>
                        </div>
                    </div>
                    <div class="flex items-center mt-5">
                        <div class="text-3xl font-bold ltr:mr-3 rtl:ml-3">49.10%</div>
                        <div class="badge bg-white/30">- 0.35%</div>
                    </div>
                    <div class="flex items-center font-semibold mt-5">
                        <icon-eye class="ltr:mr-2 rtl:ml-2 shrink-0" />
                        Last Week 50.01%
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
const store = useAppStore();
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
