import api from "./axiosInstance";
import { toRaw, unref } from "vue";

const API_URL = `${import.meta.env.VITE_API_URL}/student`;

/**
 * ✅ Get All Students
 */
export const getAllStudents = async () => {
  const res = await api.get(`${API_URL}/all`);
  return res.data;
};

/**
 * ✅ Get Student by ID
 */
export const getStudentById = async (studentId: number) => {
  const res = await api.get(`${API_URL}/${studentId}`);
  return res.data;
};

/**
 * ✅ Update Student
 */
export const updateStudent = async (studentId: number, data: any) => {
  const sanitized = JSON.parse(JSON.stringify(toRaw(unref(data))));
  const res = await api.put(`${API_URL}/${studentId}`, sanitized);
  return res.data;
};

/**
 * ✅ Delete Student
 */
export const deleteStudent = async (studentId: number) => {
  const res = await api.delete(`${API_URL}/${studentId}`);
  return res.data;
};

export const createStudent = async (data: any) => {
  const sanitized = JSON.parse(JSON.stringify(toRaw(unref(data))));
  const res = await api.post(`${API_URL}`, sanitized);
  return res.data;
};