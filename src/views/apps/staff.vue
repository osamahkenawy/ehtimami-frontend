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
    /> 
  </div> 
</template>

<script lang="ts" setup>
import IconHome from "@/components/icon/icon-home.vue";
import { ref } from "vue";
import { users } from '@/fakeData/staff'; // Adjust the path as necessary

// Breadcrumb items for the page
const breadcrumbItems = [
  { label: 'Home', link: '/', icon: IconHome },
  { label: 'Staff' },
];

// Define headers and rows for DataTable
const headers = [
            { field: 'id', title: 'ID', isUnique: true },
            { field: 'firstName', title: 'User' },
            { field: 'country', title: 'Country', sort: false },
            { field: 'email', title: 'Email' },
            { field: 'age', title: 'Progress', sort: false },
            { field: 'phone', title: 'Phone' },
            { field: 'rating', title: 'Rate', sort: false, minWidth: '120px', headerClass: 'justify-center', cellClass: 'justify-center' },
            { field: 'series', title: 'Progress', sort: false },
            { field: 'status', title: 'Status', sort: false },
        ]; 
const rows = users;

// Search text for filtering
const filterText = ref('');

// Refresh data function (simulating API call)
// const fetchData = () => {
//   console.log('Fetching latest data...');
//   rows.value =  users;
// };
</script>
