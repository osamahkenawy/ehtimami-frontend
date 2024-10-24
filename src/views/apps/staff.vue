<template>
  <div>
    <!-- Breadcrumb for the Livemap Page -->
    <BreadCrumb :items="breadcrumbItems" />

    <!-- DataTable Component -->
    <Datatable
      :headers="headers"
      :data="rows"
      searchPlaceHolder="Search..."
      :searchFilter="true"
      :noDataContent="'No Staff Available'"
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

<script lang="ts" setup>
import IconHome from "@/components/icon/icon-home.vue";
import { ref } from "vue";
import { users, User } from "@/fakeData/staff";
import { useAppStore } from "@/stores/index";
// import PopperActions from "@/components/PopperActions.vue";

const store = useAppStore();

// Breadcrumb items for the page
const breadcrumbItems = [
  { label: "Home", link: "/", icon: IconHome },
  { label: "Staff" },
];

// Define headers and rows for DataTable
const headers = [
  { field: "id", title: "ID", isUnique: true },
  { field: "firstName", title: "User" },
  { field: "country", title: "Country", sort: false },
  { field: "email", title: "Email" },
  { field: "age", title: "Progress", sort: false },
  { field: "phone", title: "Phone" },
  {
    field: "rating",
    title: "Rate",
    sort: false,
    minWidth: "120px",
    headerClass: "justify-center",
    cellClass: "justify-center",
  },
  { field: "series", title: "Progress", sort: false },
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

// Use the imported User type for rows
const rows = users as User[];

// Function to handle the action selected by the user
const handleActionSelected = (data: User) => (action: string) => {
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
      deleteAc(data);
      break;
  }
};

// Function to handle the delete action with raw data
const deleteAc = (data: User) => {
  console.log("Deleting data for:", data);
};
</script>
