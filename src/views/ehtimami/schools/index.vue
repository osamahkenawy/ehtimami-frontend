<template>
    <div>
      <div class="flex justify-between items-center mb-4">
        <BreadCrumb :items="breadcrumbItems" />
        <AddButton @click="handleAddClickSchool" />
      </div>
  
      <!-- DataTable Component -->
      <Datatable
        :headers="headers"
        :data="schoolStore.schools"
        searchPlaceHolder="Search..."
        :searchFilter="true"
        :noDataContent="'No Schools Available'"
      >
        <!-- Receive raw data in the action slot -->
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
  import { computed, onBeforeMount } from "vue";
  import { useI18n } from "vue-i18n";
  import IconHome from "@/components/icon/icon-home.vue";
  import { useRouter } from "vue-router";
  import { useSchoolStore } from "@/stores/school";
  
  const { t } = useI18n();
  const router = useRouter();
  const schoolStore = useSchoolStore();
  
  onBeforeMount(() => {
    schoolStore.fetchSchools(); // ✅ Fetch schools on page load
  });
   
  const breadcrumbItems = computed(() => [
    { label: "Home", link: "/", icon: IconHome },
    { label: t("schools") },
  ]);
  
  const handleAddClickSchool = (): void => {
    router.push("/ehtimami/schools/add"); // ✅ Redirects to add school page
  };
  
  // Define headers correctly mapped to API model
  const headers = [
    { field: "school_unique_id", title: "ID", isUnique: true },
    { field: "school_name", title: "School Name" },
    { field: "school_region", title: "Region", sort: false },
    { field: "school_city", title: "City", sort: false },
    { field: "school_address", title: "Address", sort: false },
    { field: "school_email", title: "Email" },
    { field: "school_phone", title: "Phone" },
    { field: "school_type", title: "School Type" },
    { field: "status", title: "Status", sort: false },
    { field: "action", title: "Action", sort: false },
  ];
  
  // Sample actions to be passed to PopperActions
  const popperActions = [
    { label: "Download", value: "download" },
    { label: "Share", value: "share" },
    { label: "Edit", value: "edit" },
    { label: "Delete", value: "delete" },
  ];
  
  // Function to handle the action selected by the user
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
  
  // Function to handle the delete action with raw data
  const deleteSchool = (data: any) => {
    console.log("Deleting school:", data);
  };
  </script>
  
  <style lang="scss" scoped></style>
  