<template>
  <div>
    <div class="flex justify-between items-center mb-4">
      <BreadCrumb :items="breadcrumbItems" />
      <AddButton @click="handleAddClickClass" :label="t('add_class')" />
    </div>
    <FileUploader v-model="imageUrl" label="Profile Picture" platform="user-profile" @change="handleImageUpload" />


    <!-- DataTable Component -->
    <Datatable
      :headers="headers"
      :data="classStore.classes"
      :searchPlaceHolder="t('search_placeholder_classes')"
      :searchFilter="true"
      :noDataContent="t('no_classes')"
    >
      <!-- Action Slot -->
      <template #action="{ data }">
        <PopperActions
          :actions="getPopperActions(data)"
          :onActionSelected="handleActionSelected(data)"
        />
      </template>
    </Datatable>
  </div>
</template>

<script setup lang="ts">
import { useMeta } from "@/composables/use-meta";
import { computed, watchEffect, onBeforeMount, ref } from "vue";
import { useI18n } from "vue-i18n";
import IconHome from "@/components/icon/icon-home.vue";
import { useRouter } from "vue-router";
import { useClassStore } from "@/stores/class";
import Swal from "sweetalert2";

const { t } = useI18n();
const router = useRouter();
const classStore = useClassStore();
const imageUrl = ref<string>("");

// ✅ Reactively update the page title
watchEffect(() => {
  useMeta({ title: t("classes") });
});

const handleImageUpload = (data: { s3: string; base64: string }) => {
  console.log("Uploaded Image URL:", data.s3);
  imageUrl.value = data.s3;
};
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

// 🎯 Generate Action Buttons Based on Class Status
const getPopperActions = (data: any) => {
  const actions = [
    { label: t("actions.edit"), value: "edit" },
    { label: t("actions.delete"), value: "delete" },
  ];

  // ✅ Add "Set Active/Inactive" based on status
  if (data.status === "active") {
    actions.push({ label: t("set_active"), value: "set_inactive" });
  } else {
    actions.push({ label: t("set_inactive"), value: "set_active" });
  }

  return actions;
};

// 🎯 Handle Action Events
const handleActionSelected = (data: any) => async (action: string) => {
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
    case "set_active":
      await updateClassStatus(data, "active");
      break;
    case "set_inactive":
      await updateClassStatus(data, "inactive");
      break;
  }
};

// ❌ Delete Class Function
const deleteClass = (data: any) => {
  Swal.fire({
    icon: "warning",
    title: t("delete_class.confirm_title"),
    text: t("delete_class.confirm_text"),
    showCancelButton: true,
    confirmButtonText: t("delete_class.confirm_button"),
    cancelButtonText: t("delete_class.cancel_button"),
    padding: "2em",
    customClass: {
      popup: "sweet-alerts",
      confirmButton: "btn btn-danger",
      cancelButton: "btn btn-outline-secondary",
    },
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        console.log("Deleting class:", data);
        await classStore.deleteClassData(data.id);
        await classStore.fetchClasses(); // Refresh the list after deletion

        Swal.fire({
          title: t("delete_class.success_title"),
          text: t("delete_class.success_text"),
          icon: "success",
          customClass: {
            popup: "sweet-alerts",
            confirmButton: "btn btn-success",
          },
        });
      } catch (error) {
        console.error("Error deleting class:", error);
        Swal.fire({
          title: t("delete_class.error_title"),
          text: t("delete_class.error_text"),
          icon: "error",
          customClass: {
            popup: "sweet-alerts",
            confirmButton: "btn btn-danger",
          },
        });
      }
    }
  });
};


// 🔄 Update Class Status (Active/Inactive)

const updateClassStatus = async (data: any, newStatus: string) => {
  Swal.fire({
    icon: "warning",
    title: t("class_status.confirm_title"),
    text: t("class_status.confirm_text", { status: newStatus }),
    showCancelButton: true,
    confirmButtonText: t("class_status.confirm_button"),
    cancelButtonText: t("class_status.cancel_button"),
    padding: "2em",
    customClass: {
      popup: "sweet-alerts",
      confirmButton: "btn btn-primary",
      cancelButton: "btn btn-outline-secondary",
    },
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        console.log(`Updating status of class ${data.id} to ${newStatus}`);

        await classStore.updateClassData(data.id, {
          status: newStatus,
          schoolId: data.schoolId,
        });

        await classStore.fetchClasses(); // Refresh the list after update

        Swal.fire({
          title: t("class_status.success_title"),
          text: t("class_status.success_text", { status: newStatus }),
          icon: "success",
          customClass: {
            popup: "sweet-alerts",
            confirmButton: "btn btn-success",
          },
        });
      } catch (error) {
        console.error("Error updating class status:", error);
        Swal.fire({
          title: t("class_status.error_title"),
          text: t("class_status.error_text"),
          icon: "error",
          customClass: {
            popup: "sweet-alerts",
            confirmButton: "btn btn-danger",
          },
        });
      }
    }
  });
};
</script>

<style lang="scss" scoped></style>
