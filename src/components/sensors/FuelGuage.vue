<template>
    <AnimatedIconWrapper class="flex items-center">
      <template v-slot:default="scope">
        <div class="flex m-2">
          <!-- Tooltip with dynamic background color using Tippy.js and content from props -->
          <div  class="inline-block">
            <p v-if="showPercentage" class="m-0 text-center font-bold" :style="{ color: currentColor }">
              {{ percent }} %
            </p>
          </div>
          <div class="flex items-center ltr:gap-1 rtl:gap-1" :class="{ 'flex-col-reverse': vertical }">
            <AnimatedIcon v-if="!noIcon" :name="ICONS.FUEL" />
            <div class="font-bold" :style="{ color: emptyColor }" :class="vertical ? 'mt-1' : 'ltr:mr-1 rtl:ml-1'">E</div>
            <!-- Fuel Gauge -->
            <div class="fuel-guage border-2 rounded relative" :style="{ borderColor: currentColor }" :class="{ vertical, small }">
              <div class="absolute transition-all ease-linear" :style="filledStyle"></div>
              <div class="absolute transition-all ease-linear" :style="emptyStyle"></div>
            </div>
            <div class="font-bold" :style="{ color: fullColor }" :class="vertical ? 'mb-1' : 'ltr:ml-1 rtl:mr-1'">F</div>
          </div>
        </div>
      </template>
    </AnimatedIconWrapper>
  </template>
  
  <script lang="ts">
  import { defineComponent, computed } from 'vue';
  import { CSSProperties } from 'vue';
  import { AnimatedIcon, AnimatedIconWrapper, ICONS } from '@/components/icon/animatedIcon';
  
  export default defineComponent({
    name: 'FuelGuage',
    components: {
      AnimatedIcon,
      AnimatedIconWrapper,
    },
    props: {
      val: { type: [Number, String], default: 1, required: true },
      noIcon: { type: Boolean, default: false },
      showPercentage: { type: Boolean, default: false },
      vertical: { type: Boolean, default: false },
      small: { type: Boolean, default: false },
      tooltip: { type: String, default: '' },  // Tooltip content passed as a prop
    },
    data() {
      return {
        ICONS,
      };
    },
    computed: {
      percent(): number {
        const value = Number(this.val);
        return isNaN(value) ? 0 : value > 1 ? value : value * 100;
      },
      currentColor(): string {
        if (this.percent >= 80) return '#4CAF50'; // green
        if (this.percent >= 60) return '#8BC34A'; // light-green
        if (this.percent >= 40) return '#FFC107'; // amber
        if (this.percent >= 20) return '#FF9800'; // orange
        return '#F44336'; // red
      },
      fullColor(): string {
        return '#4CAF50'; // Full tank color (green)
      },
      emptyColor(): string {
        return '#F44336'; // Empty tank color (red)
      },
      filledStyle(): CSSProperties {
        return {
          width: `${this.percent}%`,
          backgroundColor: this.currentColor,
          height: '100%',
          position: 'absolute',
          left: '0',
        };
      },
      emptyStyle(): CSSProperties {
        return {
          width: `${100 - this.percent}%`,
          backgroundColor: '#d8d8d8',
          height: '100%',
          position: 'absolute',
          right: '0',
        };
      },
    },
  });
  </script>
  <style scoped>
  .fuel-guage {
    width: 61px;
    height: 1.5rem;
  }
  .fuel-guage.small {
    height: 1.2rem;
    width: 48px;
  }
  .fuel-guage.vertical {
    transform: rotate(-90deg);
  }
  </style>
  