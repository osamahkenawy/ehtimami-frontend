<template>
    <div>
      <!-- Breadcrumb for the Livemap Page -->
      <BreadCrumb :items="breadcrumbItems" />

    </div>
  </template>
  
  <script lang="ts" setup>
    import BreadCrumb from '@/components/BreadCrumb.vue';
    import IconHome from '@/components/icon/icon-home.vue';
  
    // Define the breadcrumb items for this page
    const breadcrumbItems = [
      { label: 'Home', link: '/', icon: IconHome },
      { label: 'Staff' }
    ];
  </script>
  