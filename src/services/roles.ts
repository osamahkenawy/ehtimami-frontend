import api from "./axiosInstance";
import { toRaw, unref } from "vue";

const API_URL = `${import.meta.env.VITE_API_URL}/roles`;

export const getAllRoles = async () => {
  try {
    const response = await api.get(`${API_URL}/getRoles`);
    return response.data.message; // ✅ Return all roles with user count
  } catch (error) {
    console.error("Error fetching roles:", error);
    throw error;
  }
};

export const createNewRole = async (name: string | { name: string }) => {
  try {
    // ✅ Support both string or object input
    const raw = typeof name === "string" ? { name } : toRaw(unref(name));
    const sanitized = JSON.parse(JSON.stringify(raw));
    const response = await api.post(`${API_URL}/insert-role`, sanitized);
    return response.data;
  } catch (error) {
    console.error("Error creating role:", error);
    throw error;
  }
};

export const deleteRole = async (roleId: number) => {
  try {
    const response = await api.delete(`${API_URL}/${roleId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting role:", error);
    throw error;
  }
};
