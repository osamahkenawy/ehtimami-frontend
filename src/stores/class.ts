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

interface School {
  id: number;
  school_name: string;
}

interface Class {
  code: string;
  name: string;
  gradeLevel: string;
  subject: string;
  semester: number;
  academic_year: string;
  teaching_method: string;
  capacity: number;
  max_students: number; 
  roomNumber: string;
  class_logo: string | null;
  status: string;
  schedule: Record<string, string>;
  start_time: string;
  end_time: string;
  credits: number;
  startDate: string;
  endDate: string;
  schoolId: undefined;
  teacherId: undefined;
  studentIds: number[];
}

export const useClassStore = defineStore("class", () => {
  const classes = ref<Class[]>([]);
  const schools = ref<School[]>([]);

  const generateSchoolId = (): string => {
    return `EHT-CLASS-${Math.floor(1000 + Math.random() * 9000)}`;
  };

  const classData = ref<Class>({
    code: generateSchoolId(),
    name: "",
    gradeLevel: "",
    subject: "",
    semester: 1,
    academic_year: "",
    teaching_method: "in-person",
    capacity: 0,
    max_students: 0,
    roomNumber: "",
    class_logo: "",
    status: "active",
    schedule: {},
    start_time: "",
    end_time: "",
    credits: 0,
    startDate: "",
    endDate: "",
    schoolId: undefined,
    teacherId: undefined,
    studentIds: [],
  });

  const fetchClasses = async () => {
    try {
      const response = await getAllClasses();
      classes.value = response.data as Class[];
    } catch (error) {
      console.error("Error fetching classes:", error);
    }
  };

  const fetchClassesBySchoolId = async (schoolId: number) => {
    try {
      const response = await getClassesBySchoolId(schoolId);
      classes.value = response.data as Class[];
    } catch (error) {
      console.error("Error fetching classes by school ID:", error);
    }
  };

  const fetchClassById = async (code: number) => {
    try {
      const response = await getClassById(code);
      classData.value = response.data as Class;
      console.log('fetchClassById', response)
      return response.data
    } catch (error) {
      console.error("Error fetching class by ID:", error);
    }
  };

  const createClass = async () => {
    try {
      const sanitizedData = toRaw(classData.value);
      const response = await createNewClass(sanitizedData);
      return response; 
    } catch (error) {
      console.error("Error creating new class:", error);
      throw error;
    }
  };

  const updateClassData = async (code: number, data: Partial<Class>) => {
    try {
      
      const response = await updateClass(code, data);
      return response;
    } catch (error) {
      console.error("Error updating class:", error);
      throw error;
    }
  };

  const deleteClassData = async (code: number) => {
    try {
      const response = await deleteClass(code);
      return response;
    } catch (error) {
      console.error("Error deleting class:", error);
      throw error;
    }
  };

  const fetchSchools = async () => {
    try {
      const response = await getAllSchools();
      schools.value = response.data as School[];
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
