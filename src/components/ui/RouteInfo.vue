<template>
    <div class="d-inline-flex flex-column detailed-directional-item mt-2">
      <!-- From Item -->
      <div class="d-flex align-items-center justify-content-start detailed-directional-item--from">
        <span class="mr-2">
          <img :src="startIconSrc" alt="Start Icon" />
        </span>
        <div class="ellipsis text-truncate detailed-directional-item--truncate">
          <fleet-locale-display :val="''" />
          <!-- Tooltip for item.source -->
          <span class="truncated-text" v-b-tooltip.hover.bottom="item.source">
            {{ item.source }}
          </span>
        </div>
      </div>
  
      <!-- Directional Info -->
      <div class="detailed-directional-item--direction text-primary-dark d-flex align-items-center justify-content-center px-2">
        <div class="bg-blue-dark detailed-directional-item--extras mx-1 text-light">
          <div class="d-flex align-items-center flex-nowrap">
            <div class="mx-2 my-1 text-nowrap d-flex align-items-center">
              <!-- Stops -->
              <span class="mr-1"></span> 
              <v-icon>mdi-arrow-down-thick</v-icon>
              <span class="mx-3">{{ item.stops }} <sup class="mr-1">ST</sup></span> 
              
              <!-- Distance -->
              <span class="mr-1"></span> 
              <v-icon>mdi-speedometer</v-icon> 
              <span class="mx-3">{{ distanceInKm }} <sup class="mr-1">Km</sup></span>
              
              <!-- Duration -->
              <v-icon>mdi-camera-timer</v-icon>
              <span class="mx-3" :class="['time-info']" v-html="toHoursAndMinutes(item.duration).timeHtml"></span>
            </div>
          </div>
        </div>
      </div>
  
      <!-- To Item -->
      <div class="d-flex align-items-center justify-content-start detailed-directional-item--to">
        <span class="mr-2">
          <img :src="endIconSrc" alt="End Icon" />
        </span>
        <div class="ellipsis text-truncate detailed-directional-item--truncate">
          <!-- Tooltip for item.destination -->
          <span class="truncated-text" v-b-tooltip.hover.bottom="item.destination">
            {{ item.destination }}
          </span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { computed } from "vue";
  
  export default {
    props: {
      item: {
        type: Object,
        required: true,
        default: () => ({
          source: "",
          destination: "",
          stops: 0,
          distance: 0,
          duration: 0,
        }),
      },
      startIconSrc: {
        type: String,
        default: new URL('@/assets/images/map/start_icon.svg', import.meta.url).href,
      },
      endIconSrc: {
        type: String,
        default: new URL('@/assets/images/map/end_icon.svg', import.meta.url).href,
      },
    },
    setup(props) {
      const toHoursAndMinutes = (duration) => {
        const hours = Math.floor(duration / 3600);
        const minutes = Math.floor((duration % 3600) / 60);
        return {
          timeHtml: `${hours}<sup>h</sup> ${minutes}<sup>m</sup>`,
        };
      };
  
      const distanceInKm = computed(() =>
        props.item.distance ? (props.item.distance / 1000).toFixed(2) : 0
      );
  
      return {
        toHoursAndMinutes,
        distanceInKm,
      };
    },
  };
  </script>
  
  <style scoped lang="scss">
  .detailed-directional-item {
    .detailed-directional-item--from {}
    .detailed-directional-item--to {} 
    .detailed-directional-item--direction {
      position: relative;
      width: 300px; /* Set a fixed width to ensure consistent layout */
      &::after {
        content: '';
        left: 0;
        right: 0;
        border: 1px solid currentColor;
        position: absolute;
      }
      .detailed-directional-item--extras {
        z-index: 1;
        font-size: 0.7rem;
        border-radius: 1rem;
      }
    }
  }
  
  .detailed-directional-item--truncate {
    width: 300px; /* Match the width of the directional info */
  }
  
  .truncated-text {
    cursor: pointer;
    width: 100%; /* Takes the full width of the parent container */
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  .bg-blue-dark {
    background-color: #2B4284 !important;
  }
  .text-primary-dark {
    color: #2B4284 !important;
  }
  .time-info sup {
    font-size: 0.75em;
    margin-left: 0.1em;
  }
  </style>
  