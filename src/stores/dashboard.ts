import { defineStore } from "pinia";
import { ref } from "vue";
import {  getCards } from "@/services/dashboard";

export const useDashboardStore = defineStore("dashboard", () => {

  const cards = ref([]); // Store all cards



  const fetchCards = async () => {
    try {
      const response = await getCards();
      cards.value = response.data; // ✅ Store the fetched schools
    } catch (error) {
      console.error("Error fetching cards list:", error);
    }
  };

  return {
    fetchCards,
    cards
  };
});
