import { defineStore } from "pinia";
import { ref } from "vue";
import { getCards, getStudentsPerSchool, getTeachersPerSchool, getRecentRegistrations, getClassUtilization } from "@/services/dashboard"; // 👈 import new service
const teachersPerSchool = ref<{ schoolName: string; teacherCount: number }[]>([]);
const recentRegistrations = ref<{ month: string; count: number }[]>([]);
export type ClassUtilization = {
  className: string;
  utilization: number;
};
const classUtilization = ref<ClassUtilization[]>([]);

export type DashboardStats = {
  totalStudents: number;
  totalTeachers: number;
  totalParents: number;
  totalSchools: number;
  totalUsers: number;
  activeUsers: number;
  inactiveUsers: number;
  verifiedUsers: number;
  totalClasses: number;
  fullClasses: number;
  upcomingClasses: number;
  studentsWithHealthNotes: number;
  specialNeedsStudents: number;
  teachersWithoutClasses: number;
  studentsWithoutParents: number;
  usersLastMonth: number;
};

export type StudentsPerSchool = {
  schoolName: string;
  studentCount: number;
};


export type RegistrationData = {
  month: string;
  count: number;
};

const fetchTeachersPerSchool = async () => {
  try {
    const response = await getTeachersPerSchool();
    teachersPerSchool.value = response.data;
  } catch (error) {
    console.error("Error fetching teachers chart:", error);
  }
};

export const useDashboardStore = defineStore("dashboard", () => {
  const cards = ref<DashboardStats>({
    totalStudents: 0,
    totalTeachers: 0,
    totalParents: 0,
    totalSchools: 0,
    totalUsers: 0,
    activeUsers: 0,
    inactiveUsers: 0,
    verifiedUsers: 0,
    totalClasses: 0,
    fullClasses: 0,
    upcomingClasses: 0,
    studentsWithHealthNotes: 0,
    specialNeedsStudents: 0,
    teachersWithoutClasses: 0,
    studentsWithoutParents: 0,
    usersLastMonth: 0,
  });

  const studentsPerSchool = ref<StudentsPerSchool[]>([]); // 👈 add state

  const fetchCards = async () => {
    try {
      const response = await getCards();
      cards.value = response.data as DashboardStats;
    } catch (error) {
      console.error("Error fetching cards list:", error);
    }
  };

  const fetchStudentsPerSchool = async () => {
    try {
      const response = await getStudentsPerSchool();
      studentsPerSchool.value = response.data as StudentsPerSchool[];
    } catch (error) {
      console.error("Error fetching students per school:", error);
    }
  };
  const recentRegistrations = ref<RegistrationData[]>([]); // ✅

  const fetchRecentRegistrations = async () => {
    try {
      const response = await getRecentRegistrations();
      recentRegistrations.value = response.data;
    } catch (error) {
      console.error("Error fetching recent registrations:", error);
    }
  };

  const fetchClassUtilization = async () => {
    try {
      const response = await getClassUtilization();
      classUtilization.value = response.data;
    } catch (error) {
      console.error("Error fetching class utilization:", error);
    }
  };

  return {
    fetchCards,
    fetchStudentsPerSchool,
    fetchTeachersPerSchool,
    cards,
    studentsPerSchool,
    teachersPerSchool,
    fetchRecentRegistrations,
    recentRegistrations,
    fetchClassUtilization,
    classUtilization 
  };
});
