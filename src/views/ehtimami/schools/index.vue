<template>
    <div>
      <div class="flex justify-between items-center mb-4">
        <BreadCrumb :items="breadcrumbItems" />
        <AddButton @click="handleAddClickSchool" :label="t('add_school')" />
      </div>
  
      <!-- DataTable Component -->
      <Datatable
        :headers="headers"
        :data="schoolStore.schools"
        :searchPlaceHolder="t('search_placeholder')"
        :searchFilter="true"
        :noDataContent="t('no_schools')"
      >
        <!-- Action Slot -->
        <template #action="{ data }"> 
          <PopperActions
            :actions="popperActions"
            :onActionSelected="handleActionSelected(data)"
          />
        </template>
      </Datatable>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useMeta } from "@/composables/use-meta";
  import { computed, watchEffect, onBeforeMount } from "vue";
  import { useI18n } from "vue-i18n";
  import IconHome from "@/components/icon/icon-home.vue";
  import { useRouter } from "vue-router";
  import { useSchoolStore } from "@/stores/school";
  
  const { t } = useI18n();
  const router = useRouter();
  const schoolStore = useSchoolStore();
  
  // ✅ Reactively update the page title
  watchEffect(() => {
    useMeta({ title: t("schools") });
  });
  
  // ✅ Fetch Schools Before Mount
  onBeforeMount(() => {
    schoolStore.fetchSchools();
  });
  
  // 🏫 Breadcrumb Localization (Reactive)
  const breadcrumbItems = computed(() => [
    { label: t("breadcrumb.home"), link: "/", icon: IconHome },
    { label: t("schools") },
  ]);
  
  // ➕ Redirect to Add School Page
  const handleAddClickSchool = (): void => {
    router.push("/ehtimami/schools/add");
  };
  
  // 📌 Localized Table Headers (Reactive)
  const headers = computed(() => [
    { field: "school_unique_id", title: t("id"), isUnique: true },
    { field: "school_name", title: t("school_name") },
    { field: "school_region", title: t("region"), sort: false },
    { field: "school_city", title: t("city"), sort: false },
    { field: "school_address", title: t("address"), sort: false },
    { field: "school_email", title: t("email") },
    { field: "school_phone", title: t("phone") },
    { field: "school_type", title: t("school_type") },
    { field: "status", title: t("status"), sort: false },
    { field: "action", title: t("action"), sort: false },
  ]);
  
  // 🎯 Localized Action Buttons (Reactive)
  const popperActions = computed(() => [
    { label: t("actions.download"), value: "download" },
    { label: t("actions.share"), value: "share" },
    { label: t("actions.edit"), value: "edit" },
    { label: t("actions.delete"), value: "delete" },
  ]);
  
  // 🎯 Handle Action Events
  const handleActionSelected = (data: any) => (action: string) => {
    console.log(`Action '${action}' selected for`, data);
    switch (action) {
      case "download":
        console.log("Download action triggered");
        break;
      case "share":
        console.log("Share action triggered");
        break;
      case "edit":
        console.log("Edit action triggered");
        break;
      case "delete":
        deleteSchool(data);
        break;
    }
  };
  
  // ❌ Delete School Function
  const deleteSchool = (data: any) => {
    console.log("Deleting school:", data);
  };
  </script>
  
  <style lang="scss" scoped></style>
  