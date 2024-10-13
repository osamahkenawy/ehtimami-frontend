<template>
    <div>
      <div
        class="plate-number"
        :style="plateColor ? { color: `${plateColor} !important` } : {}"
        :class="[ { 'elevation-1': !flat } ]"
      >
        <div class="plate-number--top custom-flex">
          <div class="code">{{ code || '&nbsp;' }}</div>
          <div class="state">{{ state || '&nbsp;' }}</div>
        </div>
        <div class="plate-number--number center-text bold-font">{{ number || '&nbsp;' }}</div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, watch } from 'vue';
  
  // Props declaration
  interface PlateNumberProps {
    plateNumber: string;
    plateColor: string;
    flat: boolean;
  }
  
  const props = defineProps<PlateNumberProps>();
  
  // Define reactive state
  const code = ref('');
  const state = ref('');
  const number = ref('');
  
  // Regex to match plate number format
  const plate_regex = new RegExp('^[0-9a-z]{1,}?[ -]?[a-z\\.]{1,}?[ -]?[0-9]{1,6}$', 'i');
  
  // Method to format the plate number
  const formatPlateNumber = () => {
    if (props.plateNumber.includes('-')) {
      const plate = props.plateNumber.toUpperCase();
      const split = plate.split('-');
      if (!split) return reset();
      code.value = split[0];
      state.value = split[1];
      number.value = split[2];
    } else {
      const plate = props.plateNumber.trim();
      const split = plate.split(/\s+/);
      if (!split) return reset();
      code.value = split[0];
      state.value = split[1];
      number.value = split[2];
    }
  };
  
  // Method to reset the values
  const reset = () => {
    code.value = '';
    state.value = '';
    number.value = '';
  };
  
  // Watch the `plateNumber` prop and format it when it changes
  watch(() => props.plateNumber, formatPlateNumber, { immediate: true });
  
  </script>
  
  <style scoped lang="scss">
  .plate-number {
    user-select: none;
    min-width: 4rem;
    max-width: 5rem;
    border-radius: 0.3rem;
    overflow: hidden;
    border: 1px solid currentColor;
    position: relative;
    background: currentColor;
  
    .plate-number--top {
      > * {
        color: white;
      }
    }
  
    .plate-number--number {
      background: white;
      color: black;
    }
  
    .plate-number--state {
      font-size: 0.7rem;
    }
  }
  
  .custom-flex {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    flex-wrap: nowrap;
    margin: 0px 2px 0px 2px;
  }
  
  .center-text {
    text-align: center;
  }
  
  .bold-font {
    font-weight: bold;
  }
  
  .code {
    /* Additional custom styles for code if needed */
  }
  
  .state {
    margin-left: auto; /* Pushes the state element to the end */
    /* Additional custom styles for state if needed */
  }
  </style>
  