import axios from 'axios';

const API_URL = `${import.meta.env.VITE_API_URL}/auth`;

export const loginUser = async (email: string, password: string) => {
    try {
        const response = await axios.post(`${API_URL}/login`, {
            email,
            password,
        });
        return response.data;
    } catch (error) {
        console.error('Login request failed:', error);
        throw error;
    }
};

export const sendForgotPasswordEmail = async (email: string) => {
    const response = await axios.post(`${API_URL}/forgot-password`, { email });
    return response.data;
};

export const logoutUser = () => {
    localStorage.removeItem('authToken');
};
