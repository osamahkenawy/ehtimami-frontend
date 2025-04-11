import { defineStore } from "pinia";
import { ref } from "vue";
import {
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
} from "@/services/students";

export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender?: number;
  class_name?: string;
  is_verified?: boolean;
  nationality?: string;
  profile?: any;
}

export const useStudentStore = defineStore("students", () => {
  const students = ref<Student[]>([]);
  const studentData = ref<Student | null>(null);

  const fetchStudents = async () => {
    try {
      const res = await getAllStudents();
      students.value = res.data;
    } catch (err) {
      console.error("Error fetching students:", err);
    }
  };

  const fetchStudentById = async (id: number) => {
    try {
      const res = await getStudentById(id);
      studentData.value = res.data;
      return res.data;
    } catch (err) {
      console.error("Error fetching student:", err);
      throw err;
    }
  };

  const updateStudentInfo = async (id: number, payload: Partial<Student>) => {
    try {
      return await updateStudent(id, payload);
    } catch (err) {
      console.error("Error updating student:", err);
      throw err;
    }
  };

  const deleteStudentById = async (id: number) => {
    try {
      return await deleteStudent(id);
    } catch (err) {
      console.error("Error deleting student:", err);
      throw err;
    }
  };

  return {
    students,
    studentData,
    fetchStudents,
    fetchStudentById,
    updateStudentInfo,
    deleteStudentById,
  };
});
