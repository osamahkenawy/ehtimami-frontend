<template>
  <div>
    <EditToggleButtons
      v-model="editMode"
      @save="handleSave"
      @close="handleCancel"
    />
    <div class="mt-4"> 
        <div class="flex items-center justify-between mb-5">
             <h5 class="font-semibold text-lg dark:text-white-light">Default</h5>
        </div>
      <!-- <p><strong>Name:</strong> {{ user?.firstName }} {{ user?.lastName }}</p>
      <p><strong>Email:</strong> {{ user?.email }}</p> -->
      <!-- more fields -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeMount } from "vue";
import type { User } from "@/types";

const editMode = ref(false);

defineProps<{
  user: User | null;
}>();

const handleSave = () => {
  console.log("Saved!");
};

const handleCancel = () => {
  console.log("Cancelled edit.");
};
</script>

<style scoped></style>
