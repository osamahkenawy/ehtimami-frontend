<script setup lang="ts">
import { onMounted, ref, defineProps, watchEffect, nextTick } from "vue";
import { OrgChart } from "d3-org-chart";
import { createApp } from "vue";
import { VueDraggableNext } from "vue-draggable-next";
import OrgChartCard from "./OrgChartCard.vue";

interface OrgChartNode {
  id: string;
  name: string;
  level: number;
  color: string;
  parentId?: string | null;
}

const props = defineProps<{ data: { levels: OrgChartNode[] } }>();

const chartContainer = ref<HTMLElement | null>(null);
let chart: OrgChart | null = null;
const draggedNode = ref<OrgChartNode | null>(null);

const zoomIn = () => chart?.zoomIn();
const zoomOut = () => chart?.zoomOut();

// ✅ Handles node click event
const handleNodeClick = (node: any) => {
  console.log("📌 Node Clicked:", {
    id: node.data.id,
    name: node.data.name,
    level: node.data.level,
    color: node.data.color,
    parentId: node.data.parentId ?? "Root Node",
  });
};

// ✅ Check if a node has children
const hasChildren = (nodeId: string) => {
  return props.data.levels.some((node) => node.parentId === nodeId);
};

// ✅ Update Parent on Drag Drop
const updateParentNode = (childId: string, newParentId: string) => {
  const nodeToUpdate = props.data.levels.find((node) => node.id === childId);
  if (nodeToUpdate) {
    nodeToUpdate.parentId = newParentId;
    console.log(`✅ Updated ${nodeToUpdate.id}'s parent to ${nodeToUpdate.parentId}`);

    setTimeout(() => {
      initializeChart();
    }, 500);
  }
};

// ✅ Initialize the Chart
const initializeChart = async () => {
  await nextTick();

  if (!chartContainer.value) {
    console.warn("⏳ Retrying: Chart container is missing...");
    setTimeout(() => {
      if (!chartContainer.value) {
        console.error("❌ Chart container is still missing!");
        return;
      }
      console.log("✅ Chart container found, initializing chart...");
      createChart();
    }, 100);
  } else {
    console.log("✅ Chart container found, initializing chart...");
    createChart();
  }
};

// ✅ Create Chart
const createChart = () => {
  if (!chartContainer.value) return;

  if (!props.data?.levels || props.data.levels.length === 0) {
    console.error("❌ No data available for rendering!", props.data);
    return;
  }

  console.log("✅ Chart Data Received:", props.data.levels);

  const hasRoot = props.data.levels.some((node) => node.parentId === null);
  if (!hasRoot) {
    console.error("❌ No root node found! Ensure a node has `parentId: null`.");
    return;
  }

  const chartData = props.data.levels.map((level) => ({
    id: level.id,
    name: level.name,
    level: level.level,
    color: level.color,
    parentId: level.parentId || null,
  }));

  console.log("🛠 Formatted Chart Data for D3:", chartData);

  chart = new OrgChart()
    .container(chartContainer.value!)
    .data(chartData)
    .nodeWidth(() => 450)
    .nodeHeight(() => 380)
    .childrenMargin(() => 100)
    .compactMarginBetween(() => 75)
    .compactMarginPair(() => 80)
    .onNodeClick(handleNodeClick)
    .nodeContent(renderNodeContent)
    .render();
};

// ✅ Render Node Content
const renderNodeContent = (node: any) => {
  const container = document.createElement("div");
  const nodeId = `node-${node.data.id}`;

  container.innerHTML = `<div id="${nodeId}"></div>`;

  setTimeout(() => {
    const mountPoint = document.getElementById(nodeId);
    if (mountPoint) {
      const app = createApp(OrgChartCard, {
        showHeadquarter: node.data.level === 0,
        headquarterTitle: "Headquarter",
        superAdminTitle: node.data.name,
        country: "UAE",
        state: "Abu Dhabi",
        city: "Abu Dhabi City",
        isCountryDefault: true,
        isStateDefault: false,
        isCityDefault: true,
      });

      app.mount(mountPoint);
    }
  }, 0);

  return container.outerHTML;
};

// ✅ Ensure the chart initializes correctly when component is mounted
onMounted(() => {
  console.log("ViewOrgChart Mounted ✅");
  initializeChart();
});

// ✅ Watch for data updates dynamically
watchEffect(() => {
  if (props.data?.levels?.length) {
    console.log("📌 Data updated, re-initializing chart...");
    initializeChart();
  }
});
</script>

<template>
  <div class="flex flex-col bg-white border p-4">
    <div class="flex justify-between">
      <!-- Zoom Controls inside the main container -->
      <div class="zoom-controls flex flex-col bg-white border border-gray-300 rounded-md p-1 max-h-20 items-center justify-center gap-2 mb-4">
        <button @click="zoomIn" class="p-1 text-sm rounded hover:bg-gray-200 transition">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 5v14m-7-7h14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
        <hr class="w-8 border-gray-300" />
        <button @click="zoomOut" class="p-1 text-sm rounded hover:bg-gray-200 transition">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Chart Container with Drag and Drop -->
    <div ref="chartContainer" class="chart-container w-full">
      <VueDraggableNext
        v-model="props.data.levels"
        :group="{ name: 'nodes', pull: 'clone', put: true }"
        item-key="id"
        class="flex flex-wrap gap-2 p-2"
        @end="updateParentNode(draggedNode?.id, draggedNode?.parentId)"
      >
        <template #item="{ element }">
          <div
            class="cursor-pointer bg-blue-500 text-white p-2 rounded-md"
            @mousedown="draggedNode = element"
          >
            {{ element.name }}
          </div>
        </template>
      </VueDraggableNext>
    </div>
  </div>
</template>

<style scoped>
.chart-container {
  height: 600px;
  background-color: #fff;
}
</style>
