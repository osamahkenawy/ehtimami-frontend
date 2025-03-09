import { defineStore } from "pinia";
import { ref, onMounted } from "vue";
import { createNewSchool, getAllSchools } from "@/services/school";

export const useSchoolStore = defineStore("school", () => {
  // 🔹 Generate a unique school ID
  const generateSchoolId = () => {
    return `EHT-SCH-${Math.floor(1000 + Math.random() * 9000)}`;
  };
  const schools = ref([]); // Store all schools
  // 🔹 School Data
  const schoolData = ref({
    school_unique_id: generateSchoolId(), // ✅ Include Unique School ID
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
    school_logo: ""
  });

  // 🔹 Ensure the school ID is generated only once
  onMounted(() => {
    if (!schoolData.value.school_unique_id) {
      schoolData.value.school_unique_id = generateSchoolId();
    }
  });

  // 🔹 Submit School Data API Call
  const submitSchoolData = async () => {
    try {
      const response = await createNewSchool(schoolData.value);
      return response;
    } catch (error) {
      console.error("Error submitting school data:", error);
      throw error;
    }
  };
  const fetchSchools = async () => {
    try {
      const response = await getAllSchools();
      schools.value = response.data; // ✅ Store the fetched schools
    } catch (error) {
      console.error("Error fetching school list:", error);
    }
  };

  return {
    schoolData,
    submitSchoolData,
    fetchSchools,
    schools
  };
});
