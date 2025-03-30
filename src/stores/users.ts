import { defineStore } from "pinia";
import { ref, toRaw } from "vue";
import {
  getAllUsers,
  getUserById,
  getUserByProfileId,
  updateUser,
  verifyUserById,
  updateUserProfile,
} from "@/services/users";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  is_verified: boolean;
  roles: string[];
  profile?: {
    id?: number;
    marital_status?: string;
    nationality?: string;
    birth_date?: string;
    join_date?: string;
    gender?: number;
    address?: string;
    latitude?: number;
    longitude?: number;
    avatar?: string;
    occupation?: string;
    bio?: string;
    phone?: string;
    profile_visibility?: string;
    emergency_contacts?: any;
    social_links?: any;
    preferences?: any;
    interests?: any;
  };
}

export const useUserStore = defineStore("user", () => {
  const users = ref<User[]>([]);
  const userData = ref<User | null>(null);

  const fetchUsers = async () => {
    try {
      const response = await getAllUsers();
      users.value = response.data as User[];
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const fetchUserById = async (userId: number) => {
    try {
      const response = await getUserById(userId);
      userData.value = response.data as User;
    } catch (error) {
      console.error("Error fetching user by ID:", error);
    }
  };

  const fetchUserByProfileId = async (profileId: number) => {
    try {
      const response = await getUserByProfileId(profileId);
      userData.value = response.data as User;
    } catch (error) {
      console.error("Error fetching user by profile ID:", error);
    }
  };

  const updateUserInfo = async (userId: number, data: Partial<User>) => {
    try {
      const response = await updateUser(userId, data);
      return response;
    } catch (error) {
      console.error("Error updating user:", error);
      throw error;
    }
  };

  const verifyUser = async (userId: number, isVerified: boolean) => {
    try {
      const response = await verifyUserById(userId, isVerified);
      return response;
    } catch (error) {
      console.error("Error verifying user:", error);
      throw error;
    }
  };

  const updateProfile = async (userId: number, data: any) => {
    try {
      const response = await updateUserProfile(userId, data);
      return response;
    } catch (error) {
      console.error("Error updating user profile:", error);
      throw error;
    }
  };

  return {
    users,
    userData,
    fetchUsers,
    fetchUserById,
    fetchUserByProfileId,
    updateUserInfo,
    verifyUser,
    updateProfile,
  };
});
