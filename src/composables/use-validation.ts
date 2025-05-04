import { ref } from "vue";

export function useValidation() {
  const emailError = ref("");
  const firstNameError = ref("");
  const lastNameError = ref("");

  const validateEmail = (value: string): boolean => {
    if (!value?.trim()) {
      emailError.value = "Email is required";
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      emailError.value = "Email is invalid";
      return false;
    }
    emailError.value = "";
    return true;
  };

  const validateFirstName = (value: string): boolean => {
    if (!value?.trim()) {
      firstNameError.value = "First name is required";
      return false;
    }
    const nameRegex = /^[A-Za-z\u0600-\u06FF\s]+$/;
    if (!nameRegex.test(value)) {
      firstNameError.value = "First name must not contain numbers or symbols";
      return false;
    }
    firstNameError.value = "";
    return true;
  };

  const validateLastName = (value: string): boolean => {
    if (!value?.trim()) {
      lastNameError.value = "Last name is required";
      return false;
    }
    const nameRegex = /^[A-Za-z\u0600-\u06FF\s]+$/;
    if (!nameRegex.test(value)) {
      lastNameError.value = "Last name must not contain numbers or symbols";
      return false;
    }
    lastNameError.value = "";
    return true;
  };

  return {
    emailError,
    validateEmail,
    firstNameError,
    validateFirstName,
    lastNameError,
    validateLastName,
  };
}
