<template>
    <div>
      <div class="flex justify-between items-center mb-4">
        <BreadCrumb :items="breadcrumbItems" />
      </div>
  
      <!-- Ensure `orgChartData` is passed -->
      <ViewOrgChart :data="orgChartData" />
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed, ref } from "vue";
  import { useI18n } from "vue-i18n";
  import IconHome from "@/components/icon/icon-home.vue";
  import iconOrgChart from "@/components/icon/icon-org-chart.vue";
  import ViewOrgChart from "./components/ViewOrgChart.vue";
  
  const { t } = useI18n();
  
  const breadcrumbItems = computed(() => [
    { label: "Home", link: "/", icon: IconHome },
    { label: t("organization"), link: "/", icon: iconOrgChart },
    { label: t("organization-chart") },
  ]);
  
  // ✅ Ensure `orgChartData.levels` exists
  const orgChartData = ref({
    levels: [
      { id: "1", name: "Superadmin", level: 0, color: "#2097F3", parentId: null },
      { id: "2", name: "VP of Operations", level: 1, color: "#98A2B3", parentId: "1" },
      { id: "3", name: "VP of Finance", level: 1, color: "#98A2B3", parentId: "1" },
      { id: "4", name: "Operations Manager", level: 2, color: "#FFC107", parentId: "2" },
      { id: "5", name: "Finance Manager", level: 2, color: "#FFC107", parentId: "3" },
      { id: "6", name: "Team Lead - Operations", level: 3, color: "#F79009", parentId: "4" },
      { id: "7", name: "Accountant", level: 3, color: "#F44336", parentId: "5" },
    ],
  });
  </script>
  