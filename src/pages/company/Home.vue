<template>
  <div>
    <v-btn class="text-white terminate-btn" color="#E11900" @click="onClick">
      <div class="text-capitalize" style="display: flex; align-items: center">
        Click Me
      </div>
    </v-btn>
    <overflow-dialog
      :key="`fleet-overflow-dailog-salary-assistant`"
      :noPadding="true"
      :modelValue="showOverFlowDialog"
      :title="'Termination'"
      :imgIcon="true"
      :icon="terminationIcon"
      :colorOfDialog="'error'"
      @close="onCloseOverflow"
      @save="onCloseOverflow"
      :width="'800'"
      :height="'900px'"
      :SaveLabel="'Save'"
      :showsaveBtn="false"
    >
      <!-- Dialog Content -->
      <template v-slot:content>
        <div class="container">
         Osamah Kenawy
          
        </div>
      </template>
    </overflow-dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import terminationIcon from "@/assets/images/hr/termination.svg";

const showOverFlowDialog = ref(false);

const onClick = async () => {
  showOverFlowDialog.value = !showOverFlowDialog.value;
};
const onCloseOverflow = async () => {
  showOverFlowDialog.value = !showOverFlowDialog.value;
};
</script>

<style lang="scss" scoped>
.container {
  margin: 25px !important;
}
</style>
