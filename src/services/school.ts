import api from "./axiosInstance";

const API_URL = `${import.meta.env.VITE_API_URL}/schools`;

export const createNewSchool = async (schoolData: any) => {
  try {
    const response = await api.post(`${API_URL}/create-new-school`, schoolData);
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
