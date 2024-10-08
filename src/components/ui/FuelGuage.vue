<template>
  <animated-icon-wrapper class="d-flex align-items-center">
    <template v-slot:default="scope">
      <animated-icon v-if="!noIcon" :trigger="scope.trigger" :name="ICONS.FUEL" class="mr-2" />
      <div>
        <!-- Using v-tooltip for the percentage -->
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <p
              v-if="showPercentage"
              class="m-0 text-center current-color-text font-weight-bold"
              v-bind="attrs"
              v-on="on"
              :style="{ color: currentColor }"
            >
              {{ val }} %
            </p>
          </template>
          <span>{{ tooltip }}</span>
        </v-tooltip>

        <div
          class="d-flex align-items-center flex-nowrap fuel-guage-wrapper"
          :class="{ 'flex-column-reverse': vertical }"
        >
          <div class="bold-font" :style="{ color: emptyColor }" :class="vertical ? 'mt-1' : 'mr-1'">E</div>
          <div class="fuel-guage rounded" :style="{ borderColor: currentColor }" :class="{ vertical, small }">
            <div class="fuel-guage-cover h-100 w-100 position-relative overflow-hidden">
              <div class="filled" :style="filledStyle"></div>
              <div class="empty" :style="emptyStyle"></div>
            </div>
          </div>
          <div class="bold-font" :style="{ color: fullColor }" :class="vertical ? 'mb-1' : 'ml-1'">F</div>
        </div>
      </div>
    </template>
  </animated-icon-wrapper>
</template>

<script>
import AnimatedIcon from "./AnimatedIcon/index.vue";
import AnimatedIconWrapper from "./AnimatedIcon/wrapper.vue";
import { ICONS } from "./AnimatedIcon";

export default {
  components: {
    AnimatedIcon,
    AnimatedIconWrapper
  },
  props: {
    val: { type: [Number, String], default: 1, required: true },
    noIcon: { type: Boolean, default: false },
    showPercentage: { type: Boolean, default: false },
    vertical: { type: Boolean, default: false },
    small: { type: Boolean, default: false },
    tooltip: { type: [String, Object], default: "" }
  },
  data() {
    return {
      ICONS
    };
  },
  computed: {
    // Color based on percentage
    currentColor() {
      if (this.percent >= 80) return "#4CAF50"; // green
      if (this.percent >= 60) return "#8BC34A"; // light-green
      if (this.percent >= 40) return "#FFC107"; // amber
      if (this.percent >= 20) return "#FF9800"; // orange
      return "#F44336"; // red
    },
    fullColor() {
      return "#4CAF50"; // Full tank color (green)
    },
    emptyColor() {
      return "#F44336"; // Empty tank color (red)
    },
    percent() {
      if (typeof this.val === "string" && isNaN(parseInt(this.val))) return "0";
      if (this.val > 1) return +this.val;
      return +this.val * 100;
    },
    filledStyle() {
      return {
        width: `${this.percent}%`,
        backgroundColor: this.currentColor,
        position: 'absolute',
        left: 0,
        height: '100%',
      };
    },
    emptyStyle() {
      return {
        width: `${100 - this.percent}%`,
        backgroundColor: "#d8d8d8", // Grey color for the empty part
        position: 'absolute',
        right: 0,
        height: '100%',
      };
    }
  }
};
</script>

<style scoped>
.current-color-text {
  color: currentColor;
}
.fuel-guage-wrapper {
  direction: ltr;
}
.fuel-guage {
  width: 61px;
  height: 1.5rem;
  border: 2px solid currentColor;
  padding: 2px;
  position: relative;
  &.small {
    height: 1.2rem;
    width: 48px;
  }
  &.vertical {
    transform: rotate(-90deg);
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .filled,
  .empty {
    height: 100%;
    transition: all 0.2s linear;
  }
}
</style>
