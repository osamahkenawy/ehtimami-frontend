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