<template>
  <div class="relative inline-block text-left">
    <Menu as="div">
      <MenuButton as="template">
        <button
          ref="buttonRef"
          class="flex items-center focus:outline-none"
          @click="toggleMenu"
        >
          <IconHorizontalDots class="opacity-70 m-auto" />
        </button>
      </MenuButton>

      <Teleport to="body" v-if="isOpen">
        <transition
          enter-active-class="transition ease-out duration-100"
          enter-from-class="transform opacity-0 scale-95"
          enter-to-class="transform opacity-100 scale-100"
          leave-active-class="transition ease-in duration-75"
          leave-from-class="transform opacity-100 scale-100"
          leave-to-class="transform opacity-0 scale-95"
        >
          <div class="dropdown-menu" :style="dropdownStyle" ref="dropdownRef">
            <template v-for="(action, index) in actions" :key="index">
              <button
                type="button"
                class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                @click="() => triggerAction(action)"
              >
                {{ action.label }}
              </button>
            </template>
          </div>
        </transition>
      </Teleport>
    </Menu>
  </div>
</template>

<script lang="ts" setup>
import { ref, nextTick } from "vue";
import { Menu, MenuButton, MenuItem } from "@headlessui/vue";
import IconHorizontalDots from "@/components/icon/icon-horizontal-dots.vue";
import { onClickOutside } from "@vueuse/core";
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

const buttonRef = ref<HTMLElement | null>(null);
const dropdownRef = ref<HTMLElement | null>(null);
const isOpen = ref(false);
const dropdownStyle = ref<Record<string, string>>({});

const toggleMenu = async () => {
  isOpen.value = !isOpen.value;

  await nextTick(); // ensure DOM is updated

  if (isOpen.value && buttonRef.value instanceof HTMLElement) {
    const rect = buttonRef.value.getBoundingClientRect();

    dropdownStyle.value = {
      position: "fixed",
      top: `${rect.bottom + 8}px`,
      left: `${rect.left}px`,
    };
  }
};

const triggerAction = (action: { label: string; value: string }) => {
  isOpen.value = false;
  props.onActionSelected?.(action.value);
};

onClickOutside(dropdownRef, () => {
  isOpen.value = false;
});
</script>

<style lang="scss" scoped>
.dropdown-menu {
  position: fixed !important;
  z-index: 99999 !important;
  background: white;
  border-radius: 6px;
  border: 1px solid #ddd;
  min-width: 150px;
  padding: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15); // nice elevation
}

// 🔥 Patch vue3-datatable container to allow overflow
::v-deep .bh-table-responsive {
  overflow: visible !important;
  position: relative !important;
  z-index: auto !important;
}
</style>
