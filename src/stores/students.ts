import { defineStore } from "pinia";
import { ref } from "vue";
import {
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
  createStudent
} from "@/services/students";

export interface StudentProfile {
  id: number;
  userId: number;
  bio?: string; 
  avatar?: string;
  profile_banner?: string | null;
  middleName?: string;
  nickname?: string;
  occupation?: string;
  company?: string | null;
  website?: string;
  social_links?: Record<string, string>;
  preferences?: Record<string, any>;
  interests?: string[];
  marital_status?: string;
  nationality?: string;
  birth_date?: string;
  join_date?: string;
  gender?: number;
  address?: string;
  latitude?: number;
  longitude?: number;
  emergency_contacts?: { name: string; phone: string }[];
  profile_visibility?: string;
  updatedAt?: string;
}

export interface Student {
  id: number;
  userId: number;
  student_no: string;
  grade: string;
  section: string;
  email: string;
  phone?: string;
  is_verified: boolean;
  avatar?: string;
  firstName: string;
  lastName: string;
  admission_date?: string | Date;
  previous_school?: string;
  guardian_name?: string;
  guardian_relation?: string;
  guardian_contact?: string;
  is_special_needs?: boolean;
  learning_style?: string;
  health_notes?: string;
  student_category?: string;
  profile?: StudentProfile;

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

  const createNewStudent = async (payload: any) => {
    try {
      const res = await createStudent(payload);
      return res;
    } catch (err) {
      console.error("Error creating student:", err);
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
    createNewStudent,
  };
});
