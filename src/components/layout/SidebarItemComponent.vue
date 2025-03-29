<template>
  <!-- Optional heading block -->
  <li v-if="item.heading" class="menu nav-item">
    <span>{{ $t(item.label) }}</span>
  </li>

  <!-- Dropdown with children -->
  <li v-else-if="item.children" class="menu nav-item">
    <button
      type="button"
      class="nav-link group w-full"
      :class="{ active: activeDropdown === (item.key || item.label) }"
      @click="
        $emit(
          'toggle',
          activeDropdown === (item.key || item.label)
            ? ''
            : item.key || item.label
        )
      "
    >
      <div class="flex items-center">
        <AnimatedIcon
          v-if="item.icon"
          :name="item.icon"
          :trigger="
            activeDropdown === (item.key || item.label) ? 'loop' : 'hover'
          "
        />
        <span
          class="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark"
        >
          {{ $t(item.label) }}
        </span>
      </div>
    </button>

    <VueCollapsible :isOpen="activeDropdown === (item.key || item.label)">
      <ul class="sub-menu text-gray-500">
        <li v-for="(child, i) in item.children" :key="i">
          <router-link :to="child.route" @click="$emit('linkClicked')">
            {{ $t(child.label) }}
          </router-link>
        </li>
      </ul>
    </VueCollapsible>
  </li>

  <!-- Simple router-link item -->
  <li v-else class="nav-item">
    <router-link :to="item.route" class="group" @click="$emit('linkClicked')">
      <div class="flex items-center">
        <AnimatedIcon
          v-if="item.icon"
          :name="item.icon"
          :trigger="
            activeDropdown === (item.key || item.label) ? 'loop' : 'hover'
          "
        />
        <span
          class="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark"
        >
          {{ $t(item.label) }}
        </span>
      </div>
    </router-link>
  </li>
</template>

<script setup lang="ts">
import VueCollapsible from "vue-height-collapsible/vue3";
import { AnimatedIcon } from "@/components/icon/animatedIcon";

defineProps<{
  item: any;
  activeDropdown: string;
  subActive?: string;
}>();

defineEmits(["toggle", "subToggle", "linkClicked"]);
</script>
