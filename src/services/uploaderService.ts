import api from "./axiosInstance";

const API_URL = `${import.meta.env.VITE_API_URL}/api/upload`;

/**
 * Uploads an image to the server.
 * @param {string} fileData - The base64 file data.
 * @param {string} platform - The platform context (e.g., "user-profile").
 * @returns {Promise<any>} - The uploaded image data from the server.
 */
export const uploadImage = async (fileData: string) => {
  try {
    const response = await api.post(API_URL, { file: fileData });
    return response.data;
  } catch (error) {
    console.error("Upload Error:", error);
    throw error;
  }
};
