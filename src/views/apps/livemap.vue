<template>
  <div>
    <!-- Breadcrumb for the Livemap Page -->
    <BreadCrumb :items="breadcrumbItems" />

    <!-- UAEPlate Component -->
    <UAEPlate plateNumber="12-DUB-3456" plateColor="red" :flat="false" />

    <!-- LocationMap Component -->
    <div class="mt-5">
      <LocationMap />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import BreadCrumb from '@/components/BreadCrumb.vue';
  import LocationMap from '@/components/maps/LocationMap.vue';
  import UAEPlate from '@/components/plates/UAEPlate.vue';
  import IconHome from '@/components/icon/icon-home.vue';

  // Define the breadcrumb items for this page
  const breadcrumbItems = [
    { label: 'Home', link: '/', icon: IconHome },
    { label: 'Components', link: '/apps/todolist' },
    { label: 'UI Kit', link: '/apps/mailbox' },
    { label: 'Livemap' }
  ];
</script>
