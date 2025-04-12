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
  userId: number;
  student_no: string;
  grade: string;
  section: string;
  email: string;
  phone?: string;
  is_verified: boolean;
  nationality?: string;
  gender?: number;
  address?: string;
  bio?: string;
  avatar?: string;
  firstName: string;
  lastName: string;
  join_date?: string;
  latitude?: number; // ✅ Add this
  longitude?: number; // ✅ Add this

  school?: {
    id: number;
    school_name: string;
    school_logo?: string | null;
    school_email?: string;
    school_phone?: string;
  };

  studentClasses?: Array<{
    studentId: number;
    classId: number;
    class: {
      id: number;
      name: string;
      subject?: string;
      roomNumber?: string;
      academic_year?: string;
      class_logo?: string | null;
      status: string;
    };
  }>;

  parents?: Array<{
    id: number;
    userId: number;
    user: {
      id: number;
      firstName: string;
      lastName: string;
      email: string;
      phone?: string | null;
      profile?: {
        avatar?: string;
        nationality?: string;
      };
    };
  }>;
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
