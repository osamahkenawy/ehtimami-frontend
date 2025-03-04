<template>
  <div>
    <div class="flex justify-between items-center mb-4">
      <BreadCrumb :items="breadcrumbItems" />
      <AddButton @click="handleAddClickClass" :label="t('add_class')" />
    </div>

    <!-- DataTable Component -->
    <Datatable
      :headers="headers"
      :data="classStore.classes"
      :searchPlaceHolder="t('search_placeholder')"
      :searchFilter="true"
      :noDataContent="t('no_classes')"
    >
      <!-- Action Slot -->
      <template #action="{ data }"> 
        <PopperActions
          :actions="popperActions" 
          :onActionSelected="handleActionSelected(data)"
        />
      </template>
      <template #school_name="{ data }"> 
       {{ data.school.school_name }}
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
import { useClassStore } from "@/stores/class";

const { t } = useI18n();
const router = useRouter();
const classStore = useClassStore();

// ✅ Reactively update the page title
watchEffect(() => {
  useMeta({ title: t("classes") });
});

// ✅ Fetch Classes Before Mount
onBeforeMount(() => {
  classStore.fetchClasses();
});

// 🏫 Breadcrumb Localization (Reactive)
const breadcrumbItems = computed(() => [
  { label: t("breadcrumb.home"), link: "/", icon: IconHome },
  { label: t("classes") },
]);

// ➕ Redirect to Add Class Page
const handleAddClickClass = (): void => {
  router.push("/ehtimami/classes/add");
};

// 📌 Localized Table Headers (Reactive)
const headers = computed(() => [
  { field: "name", title: t("class_name") },
  { field: "class_school_name", title: t("school_name") },
  { field: "gradeLevel", title: t("grade_level") },
  { field: "capacity", title: t("capacity") },
  { field: "roomNumber", title: t("room_number") },
  { field: "responsible_teacher", title: t("responsible_teacher") },
  { field: "class_status", title: t("status") },
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
      deleteClass(data);
      break;
  }
};

// ❌ Delete Class Function
const deleteClass = (data: any) => {
  console.log("Deleting class:", data);
  classStore.deleteClassData(data.id).then(() => {
    classStore.fetchClasses(); // Refresh list after deletion
  }).catch(error => {
    console.error("Error deleting class:", error);
  });
};
</script>

<style lang="scss" scoped></style>
