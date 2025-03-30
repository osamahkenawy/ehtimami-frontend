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
    
                Swal.fire({
                    title: i18n.t('login_success_title'),
                    text: i18n.t('login_success_message'),
                    icon: 'success',
                    confirmButtonText: i18n.t('ok')
                });
    
                return true;
            }
        } catch (error: any) {
            let errorMessage = i18n.t('error_occurred');
    
            if (error.response?.status === 403) {
                errorMessage = i18n.t('account_not_verified'); // 🔁 Use your localization key
            } else if (error.response?.status === 401) {
                errorMessage = i18n.t('invalid_credentials'); // Optional: use different messages for 401
            }
    
            Swal.fire({
                title: i18n.t('login_failed_title'),
                text: errorMessage,
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
