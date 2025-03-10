<template>
    <div>
      <div class="flex justify-between items-center mb-4">
        <BreadCrumb :items="breadcrumbItems" />
        <AddButton @click="handleAddClickTeacher" :label="t('add_teacher')" />
      </div>
  
      <!-- DataTable Component -->
      <Datatable
        :headers="headers"
        :data="teacherStore.teachers"
        :searchPlaceHolder="t('search_placeholder_teachers')"
        :searchFilter="true"
        :noDataContent="t('no_teachers')"
      >
        <!-- Action Slot -->
        <template #action="{ data }">
          <PopperActions :actions="getPopperActions(data)" :onActionSelected="handleActionSelected(data)" />
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
  import { useTeacherStore } from "@/stores/teacher";
  import Swal from "sweetalert2";
  
  const { t } = useI18n();
  const router = useRouter();
  const teacherStore = useTeacherStore();
  
  // ✅ Reactively update the page title
  watchEffect(() => {
    useMeta({ title: t("teachers") });
  });
  
  // ✅ Fetch Teachers Before Mount
  onBeforeMount(() => {
    teacherStore.fetchTeachers();
  });
  
  // 🏫 Breadcrumb Localization (Reactive)
  const breadcrumbItems = computed(() => [
    { label: t("breadcrumb.home"), link: "/", icon: IconHome },
    { label: t("teachers") },
  ]);
  
  // ➕ Redirect to Add Teacher Page
  const handleAddClickTeacher = (): void => {
    router.push("/ehtimami/teachers/add");
  };
  
  // 📌 Localized Table Headers (Reactive)
  const headers = computed(() => [
    { field: "firstName", title: t("first_name") },
    { field: "lastName", title: t("last_name") },
    { field: "email", title: t("email") },
    { field: "school_name", title: t("school_name") },
    { field: "status", title: t("status") },
    { field: "action", title: t("action"), sort: false },
  ]);
  
  // 🎯 Generate Action Buttons Based on Teacher Status
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
      case "edit":
        router.push(`/ehtimami/teachers/edit/${data.id}`);
        break;
      case "delete":
        deleteTeacher(data);
        break;
      case "set_active":
        await updateTeacherStatus(data, "active");
        break;
      case "set_inactive":
        await updateTeacherStatus(data, "inactive");
        break;
    }
  };
  
  // ❌ Delete Teacher Function
  const deleteTeacher = (data: any) => {
    Swal.fire({
      icon: "warning",
      title: t("delete_teacher.confirm_title"),
      text: t("delete_teacher.confirm_text"),
      showCancelButton: true,
      confirmButtonText: t("delete_teacher.confirm_button"),
      cancelButtonText: t("delete_teacher.cancel_button"),
      padding: "2em",
      customClass: {
        popup: "sweet-alerts",
        confirmButton: "btn btn-danger",
        cancelButton: "btn btn-outline-secondary",
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          console.log("Deleting teacher:", data);
          await teacherStore.deleteTeacher(data.profile.id);
          await teacherStore.fetchTeachers(); // Refresh the list after deletion
  
          Swal.fire({
            title: t("delete_teacher.success_title"),
            text: t("delete_teacher.success_text"),
            icon: "success",
            customClass: {
              popup: "sweet-alerts",
              confirmButton: "btn btn-success",
            },
          });
        } catch (error) {
          console.error("Error deleting teacher:", error);
          Swal.fire({
            title: t("delete_teacher.error_title"),
            text: t("delete_teacher.error_text"),
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
  
  // 🔄 Update Teacher Status (Active/Inactive)
  const updateTeacherStatus = async (data: any, newStatus: string) => {
    Swal.fire({
      icon: "warning",
      title: t("teacher_status.confirm_title"),
      text: t("teacher_status.confirm_text", { status: newStatus }),
      showCancelButton: true,
      confirmButtonText: t("teacher_status.confirm_button"),
      cancelButtonText: t("teacher_status.cancel_button"),
      padding: "2em",
      customClass: {
        popup: "sweet-alerts",
        confirmButton: "btn btn-primary",
        cancelButton: "btn btn-outline-secondary",
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          console.log(`Updating status of teacher ${data.id} to ${newStatus}`);
  
          await teacherStore.updateTeacherData(data.id, {
            schoolId: data.schoolId,
          });
  
          await teacherStore.fetchTeachers(); // Refresh the list after update
  
          Swal.fire({
            title: t("teacher_status.success_title"),
            text: t("teacher_status.success_text", { status: newStatus }),
            icon: "success",
            customClass: {
              popup: "sweet-alerts",
              confirmButton: "btn btn-success",
            },
          });
        } catch (error) {
          console.error("Error updating teacher status:", error);
          Swal.fire({
            title: t("teacher_status.error_title"),
            text: t("teacher_status.error_text"),
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
  