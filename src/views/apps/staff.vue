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
        <div class="dropdown">
          <Popper
            :placement="
              store.rtlClass === 'rtl' ? 'bottom-start' : 'bottom-end'
            "
            offsetDistance="0"
            class="align-middle"
          >
            <a href="javascript:;">
              <icon-horizontal-dots class="opacity-70 m-auto" />
            </a>
            <template #content="{ close }">
              <ul @click="close()">
                <li>
                  <a href="javascript:;">Download</a>
                </li>
                <li>
                  <a href="javascript:;">Share</a>
                </li>
                <li>
                  <a href="javascript:;">Edit</a>
                </li>
                <li>
                  <a href="javascript:;">Delete</a>
                </li>
              </ul>
            </template>
          </Popper>
        </div>
        <!-- <button @click="deleteAc(data)" class="btn btn-danger">Delete</button> -->
      </template>
    </Datatable>
  </div>
</template>

<script lang="ts" setup>
import IconHome from "@/components/icon/icon-home.vue";
import { ref } from "vue";
import { users, User } from "@/fakeData/staff"; // Import the User type from the staff module
import { useAppStore } from "@/stores/index";
import IconHorizontalDots from "@/components/icon/icon-horizontal-dots.vue";

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

// Use the imported User type for rows
const rows = users as User[];

// Function to handle the delete action with raw data
const deleteAc = (data: User) => {
  console.log("Deleting data for:", data);
  // Here, data is now unwrapped from the Proxy
};
</script>
