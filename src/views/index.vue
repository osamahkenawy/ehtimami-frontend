<template>
  <div>
    <div class="flex justify-between items-center mb-4">
      <BreadCrumb :items="breadcrumbItems" />
    </div>
    <div class="pt-5">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4 mb-6 text-white"
      >
        <!-- Users Visit -->
        <div class="panel bg-gradient-to-r from-cyan-500 to-cyan-400">
          <div class="flex justify-between">
            <div class="ltr:mr-1 rtl:ml-1 text-md font-semibold">
              Ehtimami Users
            </div>
          </div>
          <div class="flex items-center mt-5">
            <div class="text-3xl font-bold ltr:mr-3 rtl:ml-3">
              {{ cards.totalUsers ?? 0 }}
            </div>
            <div class="badge bg-white/30">
              + {{ cards.usersLastMonth ?? 0 }} users last month
            </div>
          </div>
          <div class="flex items-center font-semibold mt-5">
            <icon-eye class="ltr:mr-2 rtl:ml-2 shrink-0" />
            Total registered users in Ehtimami
          </div>
        </div>

        <!-- Students -->
        <div class="panel bg-gradient-to-r from-violet-500 to-violet-400">
          <div class="flex justify-between">
            <div class="ltr:mr-1 rtl:ml-1 text-md font-semibold">
              Ehtimami Students
            </div>
          </div>
          <div class="flex items-center mt-5">
            <div class="text-3xl font-bold ltr:mr-3 rtl:ml-3">
              {{ cards.totalStudents }}
            </div>
            <div class="badge bg-white/30">
              + {{ cards.specialNeedsStudents }} special needs
            </div>
          </div>
          <div class="flex items-center font-semibold mt-5">
            <icon-eye class="ltr:mr-2 rtl:ml-2 shrink-0" />
            Total registered students in Ehtimami
          </div>
        </div>

        <!-- Schools -->
        <div class="panel bg-gradient-to-r from-blue-500 to-blue-400">
          <div class="flex justify-between">
            <div class="ltr:mr-1 rtl:ml-1 text-md font-semibold">Schools</div>
          </div>
          <div class="flex items-center mt-5">
            <div class="text-3xl font-bold ltr:mr-3 rtl:ml-3">
              {{ cards.totalSchools }}
            </div>
            <div class="badge bg-white/30">
              {{ cards.fullClasses }} full classes
            </div>
          </div>
          <div class="flex items-center font-semibold mt-5">
            <icon-eye class="ltr:mr-2 rtl:ml-2 shrink-0" />
            Total registered schools in Ehtimami
          </div>
        </div>

        <!-- Teachers -->
        <div class="panel bg-gradient-to-r from-indigo-500 to-indigo-400">
          <div class="flex justify-between">
            <div class="ltr:mr-1 rtl:ml-1 text-md font-semibold">Teachers</div>
          </div>
          <div class="flex items-center mt-5">
            <div class="text-3xl font-bold ltr:mr-3 rtl:ml-3">
              {{ cards.totalTeachers }}
            </div>
            <div class="badge bg-white/30">
              {{ cards.teachersWithoutClasses }} without classes
            </div>
          </div>
          <div class="flex items-center font-semibold mt-5">
            <icon-eye class="ltr:mr-2 rtl:ml-2 shrink-0" />
            Total registered teachers in Ehtimami
          </div>
        </div>

        <!-- Parents -->
        <div class="panel bg-gradient-to-r from-fuchsia-500 to-fuchsia-400">
          <div class="flex justify-between">
            <div class="ltr:mr-1 rtl:ml-1 text-md font-semibold">Parents</div>
          </div>
          <div class="flex items-center mt-5">
            <div class="text-3xl font-bold ltr:mr-3 rtl:ml-3">
              {{ cards.totalParents }}
            </div>
            <div class="badge bg-white/30">
              {{ cards.studentsWithoutParents }} students without parents
            </div>
          </div>
          <div class="flex items-center font-semibold mt-5">
            <icon-eye class="ltr:mr-2 rtl:ml-2 shrink-0" />
            Total registered parents in Ehtimami
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div class="grid gap-6 xl:grid-flow-row">
          <!-- Previous Statement -->
          <div class="panel overflow-hidden">
            <div class="flex items-center justify-between">
              <div>
                <div class="text-lg font-bold">Students Per Schools</div>
                <div class="text-success">Updated recently</div>
              </div>
            </div>
            <div class="relative mt-10">
              <div
                class="absolute -bottom-12 ltr:-right-12 rtl:-left-12 w-24 h-24"
              >
                <icon-circle-check
                  class="text-success opacity-20 w-full h-full"
                />
              </div>
              <div class="mb-5">
                <apexchart
                  height="300"
                  :options="donutChart"
                  :series="donutChartSeries"
                  class="bg-white dark:bg-black rounded-lg overflow-hidden"
                ></apexchart>
              </div>
            </div>
          </div>


        
        </div>

        <div class="panel overflow-hidden">
            <div class="flex items-center justify-between">
              <div>
                <div class="text-lg font-bold">Teachers Per Schools</div>
                <div class="text-success">Updated recently</div>
              </div>
            </div>
            <div class="relative mt-10">
              <div
                class="absolute -bottom-12 ltr:-right-12 rtl:-left-12 w-24 h-24"
              >
                <icon-circle-check class="text-info opacity-20 w-full h-full" />
              </div>
              <div class="mb-5">
                <apexchart
                  height="300"
                  :options="teachersDonutChart"
                  :series="teachersDonutChartSeries"
                  class="bg-white dark:bg-black rounded-lg overflow-hidden"
                ></apexchart>
              </div>
            </div>
          </div>
      </div>

    <div class="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">
        <div class="grid gap-6 xl:grid-flow-row">
          <!-- Previous Statement -->
          <div class="panel overflow-hidden">
            <div class="flex items-center justify-between mb-4">
              <div>
                <div class="text-lg font-bold">Recent Registrations</div>
                <div class="text-success">Last 6 months</div>
              </div>
            </div>
            <apexchart
              height="300"
              :options="recentLineChart"
              :series="recentLineSeries"
              class="bg-white dark:bg-black rounded-lg overflow-hidden"
            ></apexchart>
          </div>
        </div>

        <div class="panel overflow-hidden">
          <div class="flex items-center justify-between mb-4">
            <div>
              <div class="text-lg font-bold">Class Capacity Utilization</div>
              <div class="text-warning">Based on current enrollment</div>
            </div>
          </div>
          <apexchart
            height="300"
            :options="utilizationChart"
            :series="utilizationSeries"
            class="bg-white dark:bg-black rounded-lg overflow-hidden"
          ></apexchart>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, computed, onBeforeMount } from "vue";
import apexchart from "vue3-apexcharts";
import { useAppStore } from "@/stores/index";
import { useMeta } from "@/composables/use-meta";
import { useI18n } from "vue-i18n";
import IconHome from "@/components/icon/icon-home.vue";

import { useDashboardStore } from "@/stores/dashboard";

import IconHorizontalDots from "@/components/icon/icon-horizontal-dots.vue";
import IconEye from "@/components/icon/icon-eye.vue";

import IconCircleCheck from "@/components/icon/icon-circle-check.vue";
import IconInfoCircle from "@/components/icon/icon-info-circle.vue";

useMeta({ title: "Admin Dashboard" });

const donutChartSeries = computed(() => {
  return dashboardStore.studentsPerSchool.map((s) => s.studentCount);
});

const donutChart = computed(() => ({
  chart: {
    height: 300,
    type: "donut",
    toolbar: {
  show: true,
  export: {
    csv: {
      filename: "students_per_school",
      columnDelimiter: ",",
      headerCategory: "School Name",
      headerValue: "Student Count",
      dateFormatter(timestamp) {
        return new Date(timestamp).toLocaleDateString();
      }
    }
  }
}

  },
  labels: dashboardStore.studentsPerSchool.map((s) => s.schoolName),
  colors: ["#4361ee", "#805dca", "#e2a03f", "#00ab55", "#e7515a"],
  legend: {
    position: "bottom",
  },
}));

const teachersDonutChartSeries = computed(() =>
  dashboardStore.teachersPerSchool.map((s) => s.teacherCount)
);

const teachersDonutChart = computed(() => ({
  chart: {
    height: 300,
    type: "donut",
    toolbar: {
  show: true,
  export: {
    csv: {
      filename: "teachers_per_school",
      columnDelimiter: ",",
      headerCategory: "School Name",
      headerValue: "Teacher Count",
      dateFormatter(timestamp) {
        return new Date(timestamp).toLocaleDateString();
      }
    }
  }
}
  },
  labels: dashboardStore.teachersPerSchool.map((s) => s.schoolName),
  colors: ["#00ab55", "#e7515a", "#805dca", "#e2a03f", "#4361ee"],
  legend: {
    position: "bottom",
  },
}));

const utilizationChart = computed(() => ({
  chart: { type: "bar", height: 350,toolbar: {
  show: true,
  export: {
    csv: {
      filename: "class_utilization",
      columnDelimiter: ",",
      headerCategory: "Class Name",
      headerValue: "Utilization (%)",
      dateFormatter(timestamp) {
        return new Date(timestamp).toLocaleDateString();
      }
    }
  }
}
 },
  plotOptions: {
    bar: { horizontal: false, columnWidth: "45%" }
  },
  dataLabels: { enabled: false },
  xaxis: {
    categories: dashboardStore.classUtilization.map(c => c.className),
    labels: {
      rotate: -45, // tilt for better readability
      style: {
        fontSize: "12px"
      },
      trim: true,
      hideOverlappingLabels: false
    },
    tooltip: {
      enabled: true
    }
  },
  yaxis: {
    title: {
      text: "Utilization (%)",
      style: {
        fontSize: "12px",
        fontWeight: 600
      }
    }
  },
  colors: ["#805dca"]
}));


const utilizationSeries = computed(() => [
  {
    name: "Utilization (%)",
    data: dashboardStore.classUtilization.map(c => c.utilization)
  }
]);


const { t } = useI18n();

const store = useAppStore();
const dashboardStore = useDashboardStore();
const cards = computed(() => dashboardStore.cards);

const breadcrumbItems = computed(() => [
  { label: t("breadcrumb.home"), link: "/", icon: IconHome },
  { label: t("dashboard") },
]);

onBeforeMount(() => {
  dashboardStore.fetchCards();
  dashboardStore.fetchStudentsPerSchool();
  dashboardStore.fetchTeachersPerSchool();
  dashboardStore.fetchRecentRegistrations();
  dashboardStore.fetchClassUtilization();

});

const recentLineSeries = computed(() => [
  {
    name: "Registrations",
    data: dashboardStore.recentRegistrations.map(item => item.count),
  },
]);


const recentLineChart = computed(() => ({
  chart: {
    height: 300,
    type: "line",
    toolbar: {
  show: true,
  export: {
    csv: {
      filename: "recent_registrations",
      columnDelimiter: ",",
      headerCategory: "Month",
      headerValue: "Users Registered",
      dateFormatter(timestamp) {
        return new Date(timestamp).toLocaleDateString();
      }
    }
  }
},
    zoom: { enabled: false },
  },
  xaxis: {
    categories: dashboardStore.recentRegistrations.map(item => item.month),
  },
  stroke: {
    curve: "smooth",
  },
  yaxis: {
    title: {
      text: "Users Count",
      style: {
        fontSize: "12px",
        fontWeight: 600
      }
    }
  },
  colors: ["#00ab55"],
  dataLabels: { enabled: false },
  legend: { position: "bottom" },
}));

// bitcoin
const bitcoin = computed(() => {
  return {
    chart: {
      height: 45,
      type: "line",
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      width: 2,
    },
    markers: {
      size: 0,
    },
    colors: ["#00ab55"],
    grid: {
      padding: {
        top: 0,
        bottom: 0,
        left: 0,
      },
    },
    tooltip: {
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: (val: any) => {
            return "";
          },
        },
      },
    },
    responsive: [
      {
        breakPoint: 576,
        options: {
          chart: {
            height: 95,
          },
          grid: {
            padding: {
              top: 45,
              bottom: 0,
              left: 0,
            },
          },
        },
      },
    ],
  };
});

const bitcoinSeries = ref([
  {
    data: [21, 9, 36, 12, 44, 25, 59, 41, 25, 66],
  },
]);

// ethereum
const ethereum = computed(() => {
  return {
    chart: {
      height: 45,
      type: "line",
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      width: 2,
    },
    markers: {
      size: 0,
    },
    colors: ["#e7515a"],
    grid: {
      padding: {
        top: 0,
        bottom: 0,
        left: 0,
      },
    },
    tooltip: {
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: (val: any) => {
            return "";
          },
        },
      },
    },
    responsive: [
      {
        breakPoint: 576,
        options: {
          chart: {
            height: 95,
          },
          grid: {
            padding: {
              top: 45,
              bottom: 0,
              left: 0,
            },
          },
        },
      },
    ],
  };
});



</script>
