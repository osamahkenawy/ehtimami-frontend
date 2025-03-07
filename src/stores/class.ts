import { defineStore } from "pinia";
import { ref, toRaw } from "vue";
import {
  createNewClass,
  getAllClasses,
  getClassById,
  updateClass,
  deleteClass,
  getClassesBySchoolId,
} from "@/services/class";
import { getAllSchools } from "@/services/school";

// ✅ Define TypeScript Interfaces for Class and School
interface School {
  id: number;
  school_name: string;
}

interface Class {
  class_unique_id: string;
  name: string;
  gradeLevel: string;
  capacity: number | null;
  teacherId: number | null;
  roomNumber: string;
  status: string;
  schedule: Record<string, string>; // e.g., { Monday: "08:00 - 12:00", Tuesday: "" }
  startDate: string | null;
  endDate: string | null;
  schoolId: number | null;
  class_logo: string | null;
}

export const useClassStore = defineStore("class", () => {
  // ✅ State
  const classes = ref<Class[]>([]); // Store all classes with explicit typing
  const schools = ref<School[]>([]); // Store all schools with explicit typing

  const generateSchoolId = (): string => {
    return `EHT-CLASS-${Math.floor(1000 + Math.random() * 9000)}`;
  };

  // ✅ Class Data (with correct types)
  const classData = ref<Class>({
    class_unique_id: generateSchoolId(),
    name: "",
    gradeLevel: "",
    capacity: 0,
    teacherId: null,
    roomNumber: "",
    status: "active",
    schedule: {}, // Initialize empty schedule
    startDate: null,
    endDate: null,
    schoolId: null,
    class_logo: ""
  });

  // ✅ Fetch all classes
  const fetchClasses = async () => {
    try {
      const response = await getAllClasses();
      classes.value = response.data as Class[]; // Ensure proper type assertion
    } catch (error) {
      console.error("Error fetching classes:", error);
    }
  };

  // ✅ Fetch classes by school ID
  const fetchClassesBySchoolId = async (schoolId: number) => {
    try {
      const response = await getClassesBySchoolId(schoolId);
      classes.value = response.data as Class[]; // Ensure proper type assertion
    } catch (error) {
      console.error("Error fetching classes by school ID:", error);
    }
  };

  // ✅ Fetch a single class by ID
  const fetchClassById = async (classId: number) => {
    try {
      const response = await getClassById(classId);
      classData.value = response.data as Class; // Ensure correct type assertion
    } catch (error) {
      console.error("Error fetching class by ID:", error);
    }
  };

  // ✅ Create a new class (Ensure raw object is sent)
  const createClass = async () => {
    try {
      const sanitizedData = toRaw(classData.value); // Remove Vue reactivity
      const response = await createNewClass(sanitizedData);
      return response;
    } catch (error) {
      console.error("Error creating new class:", error);
      throw error;
    }
  };

  // ✅ Update a class
  const updateClassData = async (classId: number, data: Partial<Class>) => {
    try {
      const response = await updateClass(classId, data);
      return response;
    } catch (error) {
      console.error("Error updating class:", error);
      throw error;
    }
  };

  // ✅ Delete a class
  const deleteClassData = async (classId: number) => {
    try {
      const response = await deleteClass(classId);
      return response;
    } catch (error) {
      console.error("Error deleting class:", error);
      throw error;
    }
  };

  // ✅ Fetch all schools
  const fetchSchools = async () => {
    try {
      const response = await getAllSchools();
      schools.value = response.data as School[]; // Ensure proper type assertion
    } catch (error) {
      console.error("Error fetching school list:", error);
    }
  };

  return {
    classes,
    classData,
    fetchClasses,
    fetchClassesBySchoolId,
    fetchClassById,
    createClass,
    updateClassData,
    deleteClassData,
    fetchSchools,
    schools,
  };
});
