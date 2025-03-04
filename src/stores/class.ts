import { defineStore } from "pinia";
import { ref } from "vue";
import { createNewClass, getAllClasses, getClassById, updateClass, deleteClass, getClassesBySchoolId } from "@/services/class";
import { getAllSchools } from "@/services/school";
export const useClassStore = defineStore("class", () => {
  const classes = ref([]); // Store all classes
  const schools = ref([]); // Store all schools

  const generateSchoolId = () => {
    return `EHT-CLASS-${Math.floor(1000 + Math.random() * 9000)}`;
  };
  // Class Data
  const classData = ref({
    class_unique_id: generateSchoolId(), // ✅ Include Unique School ID
    name: "",
    gradeLevel: "",
    capacity: 0,
    teacherId: null, 
    roomNumber: "",
    status: "active",
    schedule: {},
    startDate: "",
    endDate: "",
    schoolId: null
  }); 

  // Fetch all classes
  const fetchClasses = async () => {
    try {
      const response = await getAllClasses();
      classes.value = response.data; // Store the fetched classes
    } catch (error) {
      console.error("Error fetching classes:", error);
    }
  };

  // Fetch classes by school ID
  const fetchClassesBySchoolId = async (schoolId) => {
    try {
      const response = await getClassesBySchoolId(schoolId);
      classes.value = response.data; // Store the fetched classes for the school
    } catch (error) {
      console.error("Error fetching classes by school ID:", error);
    }
  };

  // Fetch a single class by ID
  const fetchClassById = async (classId) => {
    try {
      const response = await getClassById(classId);
      classData.value = response.data; // Store the detailed class data
    } catch (error) {
      console.error("Error fetching class by ID:", error);
    }
  };

  // Create a new class
  const createClass = async (data) => {
    try {
      const response = await createNewClass(data);
      return response;
    } catch (error) {
      console.error("Error creating new class:", error);
      throw error;
    }
  };

  // Update a class
  const updateClassData = async (classId, data) => {
    try {
      const response = await updateClass(classId, data);
      return response;
    } catch (error) {
      console.error("Error updating class:", error);
      throw error;
    }
  };

  // Delete a class
  const deleteClassData = async (classId) => {
    try {
      const response = await deleteClass(classId);
      return response;
    } catch (error) {
      console.error("Error deleting class:", error);
      throw error;
    }
  };
  const fetchSchools = async () => {
    try {
      const response = await getAllSchools();
      schools.value = response.data; // ✅ Store the fetched schools
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
    schools
  };
});
