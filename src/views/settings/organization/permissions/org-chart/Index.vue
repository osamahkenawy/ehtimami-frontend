<template>
   <div>
      <div class="flex justify-between items-center mb-4">
        <BreadCrumb :items="breadcrumbItems" />
      </div>
      
    </div> 
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import IconHome from "@/components/icon/icon-home.vue";
import iconOrgChart from "@/components/icon/icon-org-chart.vue";

  const { t } = useI18n();
  const breadcrumbItems = computed(() => [
    { label: "Home", link: "/", icon: IconHome },  
    { label: t("organization"), link: "/", icon: iconOrgChart },
    { label: t("organization-chart") },
  ]);
</script>

<style scoped> 

</style>