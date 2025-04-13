import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/auth`;

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Login request failed:", error);
    throw error;
  }
};

export const sendForgotPasswordEmail = async (email: string) => {
  const response = await axios.post(`${API_URL}/forgot-password`, { email });
  return response.data;
};

export const resetPasswordWithToken = async (
  token: string,
  newPassword: string
) => {
  try {
    const response = await axios.post(`${API_URL}/reset-password`, {
      token,
      newPassword,
    });

    return response.data;
  } catch (error) {
    console.error("Reset password request failed:", error);
    throw error;
  }
};

export const logoutUser = () => {
  localStorage.removeItem("authToken");
};

export const getRoles = async () => {
  try {
    const response = await axios.get(`${API_URL}/roles`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
