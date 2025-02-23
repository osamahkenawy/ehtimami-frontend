<template>
  <div class="relative inline-block text-left">
    <Menu as="div" class="relative">
      <MenuButton class="flex items-center focus:outline-none">
        <IconHorizontalDots class="opacity-70 m-auto" />
      </MenuButton>

      <transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
      >
        <MenuItems class="dropdown-menu">
          <MenuItem v-for="(action, index) in actions" :key="index" v-slot="{ active }">
            <a
              href="javascript:void(0);"
              :class="[
                active ? 'bg-gray-100' : '',
                'block px-4 py-2 text-sm text-gray-700 cursor-pointer'
              ]"
              @click="triggerAction(action)"
            >
              {{ action.label }}
            </a>
          </MenuItem>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>

<script lang="ts"  setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import IconHorizontalDots from "@/components/icon/icon-horizontal-dots.vue";
import { PropType } from "vue";

const props = defineProps({
  actions: {
    type: Array as PropType<Array<{ label: string; value: string }>>,
    required: true,
  },
  onActionSelected: {
    type: Function,
    required: true,
  },
});

const triggerAction = (action) => {
  if (typeof props.onActionSelected === "function") {
    props.onActionSelected(action.value);
  } else {
    console.error("onActionSelected is not a function");
  }
};
</script>

<style lang="scss" scoped>
.dropdown-menu {
  position: absolute;
  z-index: 9999;
  min-width: 150px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 6px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  padding: 10px;
  right: 0; /* Align dropdown to the right */
}
</style>
