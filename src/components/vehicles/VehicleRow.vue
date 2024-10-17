<template>
  <div v-if="asset" class="w-full grid space-x-1 rtl:space-x-reverse grid-cols-3 gap-4 items-center">
    <!-- Asset Image -->
    <div class="flex justify-center">
      <img
        :src="asset.image"
        alt=""
        v-if="asset.image"
        class="w-10 h-10 rounded-full object-cover"
      />
      <div class="flex items-center justify-center gap-2 text-white flex-wrap" v-else>
        <span  class=" justify-center items-center w-10 h-10 text-center rounded-full object-cover bg-info lmSm">{{ asset && asset.vtype_name ? getNameInitials(asset.vtype_name) : '-'}}</span>
      </div>
    </div>

    <!-- Asset Details and Plate Number -->
    <div class="flex items-center"> 
      <div class="flex items-center">
        <!-- Vehicle Color Bar -->
        <div class="vehicle-color-bar" :style="{ background: asset.color }"></div>
        <div class="font-weight-medium ml-2 rtl:mr-2">
          <!-- Vehicle Year and Asset Type -->
          <div class="font-weight-large-bold">{{ `${asset.year} ${asset.vtype_name}` }}</div>
          <!-- Vehicle Make and Model -->
          <div class="grey--text text-capitalize">
            {{ `${asset.make} ${asset.name}` }}
          </div> 
        </div>
      </div>
    </div> 

    <!-- UAE Plate Component -->
    <div class="flex justify-start">
      <UAEPlate
        v-if="asset && asset.plate && asset.vehicle_plate_color"
        :plateNumber="asset.plate || ''"
        :plateColor="asset.vehicle_plate_color || 'orange'"
        :flat="false"
        style="font-size: 12px"
      />
    </div>
  </div>

  <!-- Fallback in case asset is undefined -->
  <div v-else>
    <p>Loading asset details...</p>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import { getNameInitials } from "@/helpers/helper";

// Define a type for the asset prop
interface Asset {
  image?: string;
  year?: string;
  plate?: string;
  vtype_name?: string;
  make?: string;
  name?: string;
  vehicle_plate?: string;
  vehicle_plate_color?: string;
  color?: string;
}

// Define props and specify that asset is required
const props = defineProps<{
  asset: Asset | undefined; // Asset is optional but will be handled with a fallback
}>();
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 80px 1fr 150px; /* Adjust the width of the columns */
  gap: 16px; /* Space between columns */
  align-items: center; /* Align items vertically in the center */
}

.vehicle-color-bar {
  width: 10px;
  height: 30px;
  border-radius: 2px;
}

.font-weight-medium {
  font-weight: 500;
}

.grey--text {
  color: #6b7280; /* Adjust color if needed */
}

.ml-2 {
  margin-left: 8px;
}

.ml-7 {
  margin-left: 28px;
}

.lmSm {
  line-height: 3 !important;
}
.font-weight-large-bold {
  font-weight: 900 !important;
}
</style>
