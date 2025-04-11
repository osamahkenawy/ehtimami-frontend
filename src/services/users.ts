import api from "./axiosInstance";
import { toRaw, unref } from "vue";

const API_URL = `${import.meta.env.VITE_API_URL}/users`;

/**
 * ✅ Get All Users
 */
export const getAllUsers = async () => {
  try {
    const response = await api.get(`${API_URL}/get-all-users`);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

/**
 * ✅ Get User by ID
 */
export const getUserById = async (userId: number) => {
  try {
    const response = await api.get(`${API_URL}/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    throw error;
  }
};
 
/**
 * ✅ Get User by Profile ID
 */
export const getUserByProfileId = async (profileId: number) => {
  try {
    const response = await api.get(`${API_URL}/${profileId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user by profile ID:", error);
    throw error;
  }
};

/**
 * ✅ Update User
 */
export const updateUser = async (userId: number, updateData: any) => {
  try {
    const sanitizedData = JSON.parse(JSON.stringify(toRaw(unref(updateData))));
    const response = await api.put(`${API_URL}/${userId}`, sanitizedData);
    return response.data;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};

/**
 * ✅ Verify/Unverify User
 */
export const verifyUserById = async (userId: number, isVerified: boolean) => {
  try {
    const response = await api.patch(`${API_URL}/verify/${userId}`, { is_verified: isVerified });
    return response.data;
  } catch (error) {
    console.error("Error verifying user:", error);
    throw error;
  }
};

/**
 * ✅ Update User Profile
 */
export const updateUserProfile = async (userId: number, profileData: any) => {
  try {
    const sanitizedData = JSON.parse(JSON.stringify(toRaw(unref(profileData))));
    const response = await api.put(`${API_URL}/profile/${userId}`, sanitizedData);
    return response.data;
  } catch (error) {
    console.error("Error updating user profile:", error);
    throw error;
  }
};
