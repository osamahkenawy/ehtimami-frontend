import { defineStore } from "pinia";
import { ref } from "vue";
import { loginUser, getRoles, registerUser } from "@/services/auth";
import { jwtDecode } from "jwt-decode";
import Swal from "sweetalert2";
import { useI18n } from "vue-i18n";

export const useAuthStore = defineStore("auth", () => {
  const token = ref<string | null>(null);
  const user = ref<Record<string, any> | null>(null);
  const roles = ref<{ id: number; name: string }[]>([]);
  const i18n = useI18n();

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const response = await loginUser(email, password);

      if (response.status === 200 && response.data.token) {
        token.value = response.data.token;

        const decodedUser = jwtDecode(response.data.token);
        user.value = decodedUser;

        localStorage.setItem("authToken", response.data.token);
        localStorage.setItem("user", JSON.stringify(decodedUser));

        Swal.fire({
          title: i18n.t("login_success_title"),
          text: i18n.t("login_success_message"),
          icon: "success",
          confirmButtonText: i18n.t("ok"),
        });

        return true;
      }
    } catch (error: any) {
      let errorMessage = i18n.t("error_occurred");

      if (error.response?.status === 403) {
        errorMessage = i18n.t("account_not_verified");
      } else if (error.response?.status === 401) {
        errorMessage = i18n.t("invalid_credentials");
      }

      Swal.fire({
        title: i18n.t("login_failed_title"),
        text: errorMessage,
        icon: "error",
        confirmButtonText: i18n.t("try_again"),
      });
    }

    return false;
  };

  const logout = (): void => {
    token.value = null;
    user.value = null;
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
  };

  const fetchRoles = async () => {
    try {
      const res = await getRoles();
      if (res.status === 200 && Array.isArray(res.data)) {
        roles.value = res.data;
      }
      return res.data;
    } catch (err) {
      console.error("Error fetching roles:", err);
      throw err;
    }
  };

  const register = async (payload: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    roleIds: number[];
  }): Promise<boolean> => {
    try {
      const res = await registerUser(payload);
      if (res?.status === 201) {
        Swal.fire({
          icon: "success",
          title: i18n.t("auth.registrationSuccess"),
          text: i18n.t("auth.welcomeEmailSent"),
          confirmButtonText: i18n.t("ok"),
        });
        return true;
      }
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: i18n.t("auth.registrationFailed"),
        text: error?.message || i18n.t("auth.unknownError"),
      });
    }

    return false;
  };

  return {
    token,
    user,
    roles,
    login,
    logout,
    fetchRoles,
    register, // ✅ this was missing
  };
});
