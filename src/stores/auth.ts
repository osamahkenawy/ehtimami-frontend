import { defineStore } from 'pinia';
import { ref } from 'vue';
import { loginUser } from '@/services/auth';
import { jwtDecode } from 'jwt-decode';
import Swal from 'sweetalert2';
import { useI18n } from 'vue-i18n';

export const useAuthStore = defineStore('auth', () => {
    const token = ref<string | null>(null);
    const user = ref<Record<string, any> | null>(null);
    const i18n = useI18n();

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
                
                // Show success alert with localization
                Swal.fire({
                    title: i18n.t('login_success_title'),
                    text: i18n.t('login_success_message'),
                    icon: 'success',
                    confirmButtonText: i18n.t('ok')
                });
                return true;
            }
        } catch (error: any) {
            console.error('Login failed:', error);
            
            // Show error alert with localization
            Swal.fire({
                title: i18n.t('login_failed_title'),
                text: error.response?.data?.message || i18n.t('error_occurred'),
                icon: 'error',
                confirmButtonText: i18n.t('try_again')
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
