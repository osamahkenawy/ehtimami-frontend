import { defineStore } from 'pinia';
import { ref } from 'vue';
import { loginUser } from '@/services/auth';

export const useAuthStore = defineStore('auth', () => {
    const token = ref<string | null>(null);
    const user = ref<Record<string, any> | null>(null);

    const login = async (email: string, password: string): Promise<boolean> => {
        try {
            const response = await loginUser(email, password);
            if (response.token) {
                token.value = response.token;
                user.value = response.user;
                localStorage.setItem('authToken', response.token);
                return true;
            }
        } catch (error) {
            console.error('Login failed:', error);
        }
        return false;
    };

    const logout = (): void => {
        token.value = null;
        user.value = null;
        localStorage.removeItem('authToken');
    };

    return { token, user, login, logout };
});
