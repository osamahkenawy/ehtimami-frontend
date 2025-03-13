import { defineStore } from "pinia";
import { ref, toRaw } from "vue";
import {
  createTeacher,
  getAllTeachers,
  getTeacherById,
  getTeacherByProfileId,
  updateTeacher,
  deleteTeacherByProfileId,
  getTeachersBySchoolId,
} from "@/services/teacher";
import { getAllSchools } from "@/services/school";

// ✅ Define TypeScript Interfaces
interface School {
  id: number;
  school_name: string;
}

interface Teacher {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  schoolId: number | null;
  profile: {
    id?: number;
    marital_status?: string;
    nationality?: string;
    birth_date?: string;
    join_date?: string;
    gender: number;
    address?: string;
    latitude?: number;
    longitude?: number;
    avatar?: string;
    occupation?: string;
    bio?: string;
    phone_number?: string
  };
  classes?: { id: number; name: string }[];
}

export const useTeacherStore = defineStore("teacher", () => {
  // ✅ State
  const teachers = ref<Teacher[]>([]);
  const schools = ref<School[]>([]);
  const teacherData = ref<Teacher>({
    firstName: "",
    lastName: "",
    email: "",
    schoolId: null,
    password: "",
    profile: {
      marital_status: "",
      nationality: "",
      birth_date: "",
      join_date: "",
      gender: 1, // Default Male
      address: "",
      latitude: 0,
      longitude: 0,
      avatar: "",
      occupation: "",
      phone_number: "",
      bio: ""
    },
    classes: [],
  });

  // ✅ Fetch all teachers
  const fetchTeachers = async () => {
    try {
      const response = await getAllTeachers();
      teachers.value = response.data as Teacher[];
    } catch (error) {
      console.error("Error fetching teachers:", error);
    }
  };

  // ✅ Fetch teachers by school ID
  const fetchTeachersBySchoolId = async (schoolId: number) => {
    try {
      const response = await getTeachersBySchoolId(schoolId);
      teachers.value = response.data as Teacher[];
    } catch (error) {
      console.error("Error fetching teachers by school ID:", error);
    }
  };

  // ✅ Fetch a single teacher by ID
  const fetchTeacherById = async (teacherId: number) => {
    try {
      const response = await getTeacherById(teacherId);
      teacherData.value = response.data as Teacher;
    } catch (error) {
      console.error("Error fetching teacher by ID:", error);
    }
  };

  // ✅ Fetch a teacher by Profile ID
  const fetchTeacherByProfileId = async (profileId: number) => {
    try {
      const response = await getTeacherByProfileId(profileId);
      teacherData.value = response.data as Teacher;
    } catch (error) {
      console.error("Error fetching teacher by Profile ID:", error);
    }
  };

  // ✅ Create a new teacher
  const createNewTeacher = async () => {
    try {
      const sanitizedData = toRaw(teacherData.value);
      const response = await createTeacher(sanitizedData);
      return response;
    } catch (error) {
      console.error("Error creating teacher:", error);
      throw error;
    }
  };

  // ✅ Update a teacher
  const updateTeacherData = async (teacherId: number, data: Partial<Teacher>) => {
    try {
      const response = await updateTeacher(teacherId, data);
      return response;
    } catch (error) {
      console.error("Error updating teacher:", error);
      throw error;
    }
  };

  // ✅ Delete a teacher by Profile ID
  const deleteTeacher = async (profileId: number) => {
    try {
      const response = await deleteTeacherByProfileId(profileId);
      return response;
    } catch (error) {
      console.error("Error deleting teacher:", error);
      throw error;
    }
  };

  // ✅ Fetch all schools
  const fetchSchools = async () => {
    try {
      const response = await getAllSchools();
      schools.value = response.data as School[];
    } catch (error) {
      console.error("Error fetching schools:", error);
    }
  };

  return {
    teachers,
    teacherData,
    fetchTeachers,
    fetchTeachersBySchoolId,
    fetchTeacherById,
    fetchTeacherByProfileId,
    createNewTeacher,
    updateTeacherData,
    deleteTeacher,
    fetchSchools,
    schools,
  };
});
