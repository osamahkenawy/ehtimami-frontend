<template>
  <v-app>
    <v-btn class="text-white terminate-btn" color="#E11900" @click="onClick">
      <div class="text-capitalize" style="display: flex; align-items: center">
        Click Me
      </div>
    </v-btn>
    <v-row>
      <v-col class="d-flex text-center">
        <span>
          <fuel-guage  :val="50" :tooltip="'50 %'" class="px-1" /> 
        </span>
       <v-card height="100%">
       
       </v-card>
      </v-col>
    </v-row>

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
      :showsaveBtn="true"
    >
      <!-- Dialog Content -->
      <template v-slot:content>
        <div class="container">
         Osamah Kenawy
         <route-info :item="{
          source: ' Emirates Driving Company, Street 17, ICAD I, Musaffah, Abu Dhabi, Abu Dhabi Emirate, United Arab Emirates ',
          destination: ' Street 16, Musaffah Industrial Area, Musaffah, Abu Dhabi, Abu Dhabi Emirate, United Arab Emirates ',
          stops: 4,
          distance: 5000,
          duration: 251541,
        }" />
        </div>
      </template>
    </overflow-dialog>
  </v-app>
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
