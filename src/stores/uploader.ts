import { defineStore } from "pinia";
import { ref } from "vue";
import { uploadImage } from "@/services/uploaderService";

export const useUploaderStore = defineStore("uploader", () => {
  const isUploading = ref(false);

  /**
   * Upload an image via API and return the uploaded URL.
   * @param {string} fileData - The base64 file data.
   * @param {string} platform - The platform context (e.g., "user-profile").
   * @returns {Promise<string>} - The uploaded image URL.
   */
  const uploadFile = async (fileData: string): Promise<string> => {
    isUploading.value = true;
    try {
      const response = await uploadImage(fileData);
      return response.fileUrl; // ✅ Return the uploaded image URL
    } catch (error) {
      console.error("Error uploading file:", error);
      throw error;
    } finally {
      isUploading.value = false;
    }
  };

  return {
    isUploading,
    uploadFile,
  };
});
