<template>
  <div class=" rounded-md bg-white shadow dark:bg-[#0e1726] overflow-x-auto">
    <div class="min-w-max container mx-auto">
      <!-- Scrollable Icon List in a Container -->
      <div class="relative flex items-center w-full">
        <!-- Icon List (scrollable, starts from left) -->
        <div
          ref="iconList"
          class="flex items-center space-x-1 overflow-x-auto scrollbar-hide w-full px-2" 
          @scroll="handleScroll"
        >
          <!-- Replace static icons with orderedItems -->
          <div
            v-for="(item, index) in orderedItems"
            :key="`vehicle-dash-item-${item.name}`"
            class="flex items-center"
          >
            <!-- Display the item -->
            <div class="flex-shrink-0 flex flex-row items-center min-w-[80px]"  v-tippy="item.tooltip">
              <template v-if="item.name === 'fuel'">
                <FuelGuage v-tippy="item.value + '%'" :val="80" class="px-1" />
              </template>
              <template v-else>
                <AnimatedIcon :name="item.icon" :trigger="TRIGGER.LOOP" />
                <!-- Display value next to the icon with appropriate spacing -->
                <span class="ml-2" v-if="item.name === 'drive_time' || item.name === 'on_time'" v-html="formatTime(item.value)"></span>
                <span class="ml-2" v-else-if="item.name === 'co2'">{{ formatCo2(item.value) }}</span>
                <span class="ml-2" v-else>{{ formatDefault(item.value) }}</span>
              </template>
            </div>
 
            <!-- Divider between items, except for the last item --> 
            <template v-if="index < orderedItems.length - 1">
              <div class="h-8 border-l-2 border-gray-300 mx-0.5"></div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, onMounted, computed } from 'vue';
import FuelGuage from './FuelGuage.vue';
import { AnimatedIcon, ICONS, TRIGGER } from '@/components/icon/animatedIcon';
export default defineComponent({
  name: 'HeaderSensor',
  components: {
    FuelGuage,
    AnimatedIcon
  },
  setup() {
    const iconList = ref<HTMLElement | null>(null);
    const state = reactive({
      showLeftArrow: false,
      showRightArrow: true, // Initially show the right arrow because content may overflow
    });

    const handleScroll = () => {
      if (!iconList.value) return;
      const { scrollLeft, scrollWidth, clientWidth } = iconList.value;
      state.showLeftArrow = scrollLeft > 0;
      state.showRightArrow = scrollLeft + clientWidth < scrollWidth;
    };

    const scrollLeft = () => {
      if (iconList.value) iconList.value.scrollBy({ left: -100, behavior: 'smooth' });
    };

    const scrollRight = () => {
      if (iconList.value) iconList.value.scrollBy({ left: 100, behavior: 'smooth' });
    };

    const checkForOverflow = () => {
      if (iconList.value) {
        const { scrollWidth, clientWidth } = iconList.value;
        // Check if content overflows
        state.showRightArrow = scrollWidth > clientWidth;
        state.showLeftArrow = false; // Initially at the start
      }
    };

     // Helper method for drive_time and on_time (showing mins for 0 value)
     const formatTime = (value) => {
      if (value && value !== '0') {
        return `${value} mins`;
      }
      return `0<sup> mins </sup>`;
    };

    // Helper method for co2 (formatting with thousands separator)
    const formatCo2 = (value) => {
      if (value) {
        return `${parseFloat(value).toLocaleString("en-US")} kg`;
      }
      return '';
    };

    // Default formatting for other items
    const formatDefault = (value) => {
      return value || '';
    };

    onMounted(() => {
      setTimeout(() => {
        // Start from the left side, and check for overflow
        checkForOverflow();
        window.addEventListener('resize', checkForOverflow); // Re-check on window resize
      }, 200); // Small delay to ensure proper DOM rendering
    });
    // Take the orderedItems logic from the previous component 
    const items = {
      pedal_position: { name: 'pedal_position', tooltip: 'Pedal Position', value: '0 %',icon: ICONS.BREAK_PEDAL  },
      check_engine: { name: 'check_engine', tooltip: 'Engine DTC', value: '0',icon: ICONS.CAR_SERVICE },
      engine_temperature: { name: 'engine_temperature', tooltip: 'Engine Temperature', value: 'N/A ˚C',icon: ICONS.SPEEDOMETER },
      co2: { name: 'co2', tooltip: 'CO2', value: '0 Kg',icon: ICONS.CARBON_FOOT_PRINT },
      coolant_temperature: { name: 'coolant_temperature', tooltip: 'Coolant Temperature', value: '0 ˚C',icon: ICONS.HEATING_RADIATOR },
      engine_rpm: { name: 'engine_rpm', tooltip: 'Engine RPM', value: '0 RPM',icon: ICONS.SPEEDOMETER },
      speed: { name: 'speed', tooltip: 'Speed', value: '0 Km/h',icon: ICONS.DASHBOARD },
      fuel: { name: 'fuel', tooltip: 'Fuel level', value: '0' },
      distance: { name: 'distance', tooltip: 'Distance', value: '0 Km',icon: ICONS.TRACK_ORDER },
      drive_time: { name: 'drive_time', tooltip: 'Driving For', value: '0',icon: ICONS.DRIVER },
      idle_time: { name: 'idle_time', tooltip: 'Idling For', value: '0 s',icon: ICONS.IDLING },
      on_time: { name: 'on_time', tooltip: 'Engine ON', value: '0' ,icon: ICONS.ELECTRIC_POWER},
      network_signal: { name: 'network_signal', tooltip: 'Network Signal', value: '--' ,icon: ICONS.WIFI},
      gps_signal: { name: 'gps_signal', tooltip: 'GPS Signal', value: '0 Mhz' ,icon: ICONS.SATELLITE},
      car_battery: { name: 'car_battery', tooltip: 'Car Battery', value: '0 V' ,icon: ICONS.CAR_BATTERY},
      temperature: { name: 'temperature', tooltip: 'Temperature', value: 'N/A',icon: ICONS.TEMPERATURE },
      humidity: { name: 'humidity', tooltip: 'Humidity', value: 'N/A',icon: ICONS.WATER_DROP },
    };

    const orderedItems = computed(() => {
      const order = [
        'fuel',
        'engine_rpm',
        'pedal_position',
        'speed',
        'distance',
        'drive_time',
        'idle_time',
        'on_time',
        'co2',
        'engine_temperature',
        'network_signal',
        'car_battery',
        'temperature',
        'humidity',
      ];

      return order.map(name => items[name]); // Return ordered items
    });

    return {
      orderedItems,
      iconList,
      ...state,
      scrollLeft,
      scrollRight,
      handleScroll,
      formatTime,
      formatCo2,
      formatDefault,
      TRIGGER
    };
  },
});
</script>

<style scoped>
/* Hide scrollbar */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
/* Optional: Adjust height of the divider based on content */
</style>
