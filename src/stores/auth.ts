import { defineStore } from 'pinia';
import { ref } from 'vue';
import { loginUser } from '@/services/auth';
import { jwtDecode } from 'jwt-decode';
import Swal from 'sweetalert2';

export const useAuthStore = defineStore('auth', () => {
    const token = ref<string | null>(null);
    const user = ref<Record<string, any> | null>(null);

    const login = async (email: string, password: string): Promise<boolean> => {
        try {
            const response = await loginUser(email, password);
            if (response.status === 200 && response.data.token) {
                token.value = response.data.token;
                
                // Decode token and extract user data
                const decodedUser = jwtDecode(response.data.token);
                user.value = decodedUser;

                // Save token and user data in localStorage
                localStorage.setItem('authToken', response.data.token);
                localStorage.setItem('user', JSON.stringify(decodedUser));
                
                // Show success alert
                Swal.fire({
                    title: 'Login Successful',
                    text: 'You have successfully logged in!',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
                return true;
            }
        } catch (error: any) {
            console.error('Login failed:', error);
            
            // Show error alert
            Swal.fire({
                title: 'Login Failed',
                text: error.response?.data?.message || 'An error occurred.',
                icon: 'error',
                confirmButtonText: 'Try Again'
            });
        }
        return false;
    };

    const logout = (): void => {
        token.value = null;
        user.value = null;
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
    };

    return { token, user, login, logout };
});
