import api from "./axiosInstance";
import { toRaw , unref} from "vue";
const API_URL = `${import.meta.env.VITE_API_URL}/classes`;


export const createNewClass = async (classData: any) => {
  try {
    // ✅ Unwrap the Ref first
    const unwrappedData = unref(classData);

    // ✅ Convert to raw JavaScript object
    const rawData = toRaw(unwrappedData);

    // ✅ Deep Clone to remove Vue reactivity
    const sanitizedData = JSON.parse(JSON.stringify(rawData));
    // ✅ Send the sanitized data
    const response = await api.post(`${API_URL}/create-new-class`, sanitizedData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllClasses = async () => {
  try {
    const response = await api.get(`${API_URL}/`);
    return response.data; // ✅ Return class data
  } catch (error) {
    console.error("Error fetching classes:", error);
    throw error;
  }
};

export const getClassById = async (code: number) => {
  try {
    const response = await api.get(`${API_URL}/${code}`);
    return response.data; // ✅ Return specific class data
  } catch (error) {
    console.error("Error fetching class details:", error);
    throw error;
  }
};

export const updateClass = async (code: number, updateData: any) => {
  try {
    const response = await api.put(`${API_URL}/${code}`, updateData);
    return response.data; // ✅ Return updated class data
  } catch (error) {
    console.error("Error updating class:", error);
    throw error;
  }
};

export const deleteClass = async (code: number) => {
  try {
    const response = await api.delete(`${API_URL}/${code}`);
    return response.data; // ✅ Confirm deletion
  } catch (error) {
    console.error("Error deleting class:", error);
    throw error;
  }
};

export const getClassesBySchoolId = async (schoolId: number) => {
  try {
    const response = await api.get(`${API_URL}/school/${schoolId}`);
    return response.data; // ✅ Return classes for a specific school
  } catch (error) {
    console.error("Error fetching classes for school:", error);
    throw error;
  }
};
