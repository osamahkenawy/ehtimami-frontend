import api from "./axiosInstance";
import { toRaw, unref } from "vue";

const API_URL = `${import.meta.env.VITE_API_URL}/teacher`;

/**
 * ✅ Create a New Teacher
 */
export const createTeacher = async (teacherData: any) => {
  try {
    // ✅ Unwrap the Ref first
    const unwrappedData = unref(teacherData);

    // ✅ Convert to raw JavaScript object
    const rawData = toRaw(unwrappedData);

    // ✅ Deep Clone to remove Vue reactivity
    const sanitizedData = JSON.parse(JSON.stringify(rawData));

    // ✅ Send the sanitized data
    const response = await api.post(`${API_URL}/register`, sanitizedData);
    return response.data;
  } catch (error) {
    console.error("Error creating teacher:", error);
    throw error;
  }
};

/**
 * ✅ Get All Teachers
 */
export const getAllTeachers = async () => {
  try {
    const response = await api.get(`${API_URL}/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching teachers:", error);
    throw error;
  }
};

/**
 * ✅ Get Teacher by ID
 */
export const getTeacherById = async (teacherId: number) => {
  try {
    const response = await api.get(`${API_URL}/${teacherId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching teacher details:", error);
    throw error;
  }
};

/**
 * ✅ Get Teacher by Profile ID
 */
export const getTeacherByProfileId = async (profileId: number) => {
  try {
    const response = await api.get(`${API_URL}/profile/${profileId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching teacher by profile ID:", error);
    throw error;
  }
};

/**
 * ✅ Update Teacher
 */
export const updateTeacher = async (teacherId: number, updateData: any) => {
  try {
    // ✅ Unwrap and sanitize data
    const sanitizedData = JSON.parse(JSON.stringify(toRaw(unref(updateData))));

    const response = await api.put(`${API_URL}/${teacherId}`, sanitizedData);
    return response.data;
  } catch (error) {
    console.error("Error updating teacher:", error);
    throw error;
  }
};

/**
 * ✅ Delete Teacher by Profile ID
 */
export const deleteTeacherByProfileId = async (profileId: number) => {
  try {
    const response = await api.delete(`${API_URL}/${profileId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting teacher:", error);
    throw error;
  }
};

/**
 * ✅ Get Teachers by School ID
 */
export const getTeachersBySchoolId = async (schoolId: number) => {
  try {
    const response = await api.get(`${API_URL}/by-school`);
    return response.data;
  } catch (error) {
    console.error("Error fetching teachers for school:", error);
    throw error;
  }
};
