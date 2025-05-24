import api from "./axiosInstance";

const API_URL = `${import.meta.env.VITE_API_URL}/dashboards`;


export const getCards = async () => {
  try {
    const response = await api.get(`${API_URL}/cards`);
    return response.data; // ✅ Return cards data
  } catch (error) {
    console.error("Error fetching cards:", error);
    throw error;
  }
};

export const getStudentsPerSchool = async () => {
  try {
    const response = await api.get(`${API_URL}/students-per-school`);
    return response.data;
  } catch (error) {
    console.error("Error fetching students per school:", error);
    throw error;
  }
};

export const getTeachersPerSchool = async () => {
  try {
    const response = await api.get(`${API_URL}/teachers-per-school`);
    return response.data;
  } catch (error) {
    console.error("Error fetching teachers per school:", error);
    throw error;
  }
};

export const getRecentRegistrations = async () => {
  try {
    const response = await api.get(`${API_URL}/recent-registrations`);
    return response.data;
  } catch (error) {
    console.error("Error fetching recent registrations:", error);
    throw error;
  }
};

export const getClassUtilization = async () => {
  try {
    const response = await api.get(`${API_URL}/class-utilization`);
    return response.data;
  } catch (error) {
    console.error("Error fetching class utilization:", error);
    throw error;
  }
};