<script setup lang="ts">
import { onMounted, ref, defineProps, watchEffect, nextTick } from "vue";
import { OrgChart } from "d3-org-chart";
import { createApp } from "vue";
import OrgChartCard from "./OrgChartCard.vue";
import EditOrgChart from "@/views/settings/organization/permissions/org-chart/components/EditOrgChart.vue";
import iconOrganizationSidebar from "@/components/icon/icon-organization-sidebar.vue";
interface OrgChartNode {
  id: string;
  name: string;
  level: number;
  color: string;
  parentId?: string | null;
}

const props = defineProps<{ data: { levels: OrgChartNode[] } }>();

const chartContainer = ref<HTMLElement | null>(null);
const isEditSidebarOpen = ref(false);

let chart: OrgChart | null = null;

// State to track hovered node and popup visibility
const hoveredNode = ref<{ title: string; x: number; y: number; width: number } | null>(null);
const isPopupVisible = ref(false);

const zoomIn = () => chart?.zoomIn();
const zoomOut = () => chart?.zoomOut();

const editOrgChart = () => {
  console.log("editOrgChart", props.data.levels);
  isEditSidebarOpen.value = true;
};

const closeSidebar = () => {
  isEditSidebarOpen.value = false;
};
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

// ✅ Handles node hover
const handleNodeHover = (node: any, event: MouseEvent) => {
  const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
  hoveredNode.value = {
    title: `Hovering on ${node.data.name}`,
    x: rect.left + rect.width / 2, // Center horizontally
    y: rect.top - 50, // Place above the node with some spacing
    width: rect.width,
  };
  isPopupVisible.value = true; // Keep popup visible
};

// ✅ Clears hover state when leaving both the node and popup
const clearHover = () => {
  setTimeout(() => {
    if (!isPopupVisible.value) {
      hoveredNode.value = null;
    }
  }, 200);
};

// ✅ Ensures popup remains visible when hovered
const keepPopupVisible = () => {
  isPopupVisible.value = true;
};

// ✅ Hides popup when leaving it
const hidePopup = () => {
  isPopupVisible.value = false;
  clearHover();
};

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
    id: `level-${level.id}`,
    name: level.name,
    level: level.level,
    color: level.color,
    parentId: level.parentId ? `level-${level.parentId}` : null,
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
    .onNodeClick(handleNodeClick) // ✅ Added Click Event
    .nodeContent(renderNodeContent)
    .render();
};

const renderNodeContent = (node: any) => {
  const container = document.createElement("div");
  const nodeId = `node-${node.data.id}`;

  container.innerHTML = `<div id="${nodeId}" class="node-container relative"></div>`;

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

      // ✅ Attach hover events dynamically
      mountPoint.addEventListener("mouseenter", (event) => handleNodeHover(node, event));
      mountPoint.addEventListener("mouseleave", clearHover);
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
  <div class="relative flex bg-white border p-4">
    <div ref="chartContainer" class="chart-container w-full"></div>

    <!-- Controls Wrapper (Aligned to Top) -->
      <!-- Controls Wrapper (Aligned to Top) -->
      <div class="flex flex-col items-start gap-2 ml-4">
      <!-- Zoom Controls + Edit Button -->
      <div class="flex items-start gap-2 mr-4"
      > 
       <!-- Edit Org Chart Button -->
       <button  v-tippy="$t('edit-chart')" @click="editOrgChart" class="p-1 text-sm rounded-full border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-100 transition">
          <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
            <path d="M11.9268 6.52L12.8468 7.44L3.78676 16.5H2.86676V15.58L11.9268 6.52ZM15.5268 0.5C15.2768 0.5 15.0168 0.6 14.8268 0.79L12.9968 2.62L16.7468 6.37L18.5768 4.54C18.9668 4.15 18.9668 3.52 18.5768 3.13L16.2368 0.79C16.0368 0.59 15.7868 0.5 15.5268 0.5ZM11.9268 3.69L0.86676 14.75V18.5H4.61676L15.6768 7.44L11.9268 3.69Z" fill="#9E9E9E"/>
          </svg> 
        </button> 
        <!-- Zoom Controls --> 
        <div class="zoom-controls flex flex-col bg-white border border-gray-300 rounded-md p-1 items-center justify-center gap-2">
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
      <teleport to="body">
        <div v-if="isEditSidebarOpen" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex">
          <!-- Sidebar -->
          <div class="w-full h-full bg-white shadow-lg border-l">
            <div class="flex justify-between items-center p-4 border-b">
              <div class="flex">
                <iconOrganizationSidebar />
                <h2 class="text-lg font-semibold">Organization Hierarchy</h2>
              </div>
              <button @click="closeSidebar" class="text-gray-600 hover:text-gray-800">
                ✖
              </button>
            </div>
            <div class="p-4">
              <EditOrgChart :data="props.data.levels" />
            </div>
          </div>
        </div>
      </teleport> 

      <!-- Placeholder for Future Controls Below -->
    </div>

  </div>
</template>
