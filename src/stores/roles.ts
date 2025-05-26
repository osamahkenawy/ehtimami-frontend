import { defineStore } from "pinia";
import { ref, toRaw } from "vue";
import {
  getAllRoles,
  createNewRole,
  deleteRole,
} from "@/services/roles";

interface Role {
  id: number;
  name: string;
  _count: {
    users: number;
  };
}

export const useRoleStore = defineStore("role", () => {
  const roles = ref<Role[]>([]);

  const roleName = ref<string>("");

  const fetchRoles = async () => {
    try {
      const response = await getAllRoles();
      
      roles.value = response as Role[];
      console.log("fetchRoles", roles.value)
    } catch (error) {
      console.error("Error fetching roles:", error);
    }
  };

  const createRole = async () => {
    try {
      const rawName = toRaw(roleName.value);
      const response = await createNewRole({ name: rawName });
      return response;
    } catch (error) {
      console.error("Error creating role:", error);
      throw error;
    }
  };

  const deleteRoleById = async (roleId: number) => {
    try {
      const response = await deleteRole(roleId);
      return response;
    } catch (error) {
      console.error("Error deleting role:", error);
      throw error;
    }
  };

  return {
    roles,
    roleName,
    fetchRoles,
    createRole,
    deleteRoleById,
  };
});
