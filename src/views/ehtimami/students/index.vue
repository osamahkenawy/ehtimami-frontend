<template>
  <div>
    <div class="flex justify-between items-center mb-4">
      <BreadCrumb :items="breadcrumbItems" />
      <AddButton @click="handleAddStudent" :label="t('student.add_new_student')" />
    </div>
    <Datatable 
      :headers="headers"
      :data="students"
      :searchPlaceHolder="t('student.search_placeholder')"
      :searchFilter="true"
      :noDataContent="t('student.no_data')" 
    >
      <template #action="{ data }">
        <PopperActions
          :actions="getActions(data)"
          :onActionSelected="handleActionSelected(data)"
        />
      </template>
    </Datatable>
  </div>
</template>

<script setup lang="ts">
import { useStudentStore } from "@/stores/students";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import { onMounted, computed } from "vue";
import IconHome from "@/components/icon/icon-home.vue";
import Swal from "sweetalert2";

const { t } = useI18n();
const router = useRouter();
const studentStore = useStudentStore();

onMounted(() => {
  studentStore.fetchStudents();
});

const students = computed(() => studentStore.students);

const breadcrumbItems = [
  { label: t("breadcrumb.home"), link: "/", icon: IconHome },
  { label: t("student.page_title") },
];

const headers = computed(() => [
  { field: "student_no", title: t("student.student_no") },
  { field: "student_name", title: t("student.name") },
  { field: "student_nationality", title: t("student.nationality") },
  { field: "student_school_name", title: t("student.school_name") },
  { field: "grade", title: t("student.grade") },
  { field: "section", title: t("student.section") },
  
  { field: "student_is_verified", title: t("student.is_verified"), sort: false },
  { field: "action", title: t("student.action"), sort: false },
]);

const getActions = (student) => [
  { label: t("student.view_details"), value: "view-details" },
  { label: t("student.delete"), value: "delete" },
];

const handleActionSelected = (student) => async (action: string) => {
  if (action === "view-details") {
    router.push({ path: `/ehtimami/students/profile/${student.userId}` });
  } else if (action === "delete") {
    const confirm = await Swal.fire({
      icon: "warning",
      title: t("student.delete_confirm_title"),
      text: t("student.delete_confirm_text"),
      showCancelButton: true,
      confirmButtonText: t("student.confirm_button"),
      cancelButtonText: t("student.cancel_button"),
    });

    if (confirm.isConfirmed) {
      await studentStore.deleteStudentById(student.id);
      await studentStore.fetchStudents();

      Swal.fire({
        icon: "success",
        title: t("student.deleted"),
        text: t("student.delete_success"),
      });
    }
  }
};

const handleAddStudent = (): void => {
  router.push("/ehtimami/classes/add");
};
</script>
