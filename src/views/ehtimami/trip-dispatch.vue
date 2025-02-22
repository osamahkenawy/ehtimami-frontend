<template>
    <div>
      <div class="flex justify-between items-center mb-4">
        <BreadCrumb :items="breadcrumbItems" />
        <AddButton @click="handleAddClickTrip" />
      </div>
      
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed } from "vue";
  import { useI18n } from "vue-i18n";
  import IconHome from "@/components/icon/icon-home.vue";
  
  const { t } = useI18n();
  
  const breadcrumbItems = computed(() => [
    { label: "Home", link: "/", icon: IconHome },
    { label: t("trip-dispatch") },
  ]);
  
  const handleAddClickTrip = (): void => {
    console.log("Button clicked! Perform action here.");
  };
  </script>
  
  <style lang="scss" scoped></style>
  