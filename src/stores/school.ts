import { defineStore } from "pinia";
import { ref } from "vue";
import { createNewSchool } from "@/services/school";

export const useSchoolStore = defineStore("school", () => {
  const schoolData = ref({
    school_name: "",
    school_type: "PRIVATE",
    education_level: "ALL",
    curriculum: "SAUDI_NATIONAL",
    school_phone_country: "+966",
    school_phone: "",
    school_email: "",
    school_address: "",
    school_lat: 0,
    school_lng: 0,
    school_region: "",
    school_city: "",
    school_country: "",
  });

  const submitSchoolData = async () => {
    try {
      const response = await createNewSchool(schoolData.value);
      return response;
    } catch (error) {
      console.error("Error submitting school data:", error);
      throw error;
    }
  };

  return {
    schoolData,
    submitSchoolData,
  };
});
