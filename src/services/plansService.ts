import api from "../config/api";
import type { MediPlan } from "../types";

/**
 * Plans Service - Handles API calls to Strapi for plans
 * Currently uses mock data, but ready to integrate with Strapi
 */

// Mock data - will be replaced with actual API calls
import { mockPlans } from "../data/mockPlans";

export const plansService = {
  /**
   * Fetch all plans
   * TODO: Replace with actual Strapi API call:
   * const response = await fetch(`${api.baseURL}${api.endpoints.plans}`)
   * return response.json()
   */
  async getPlans(): Promise<MediPlan[]> {
    try {
      // Simulating API call delay
      await new Promise((resolve) => setTimeout(resolve, 100));
      return mockPlans;
    } catch (error) {
      console.error("Error fetching plans:", error);
      return mockPlans;
    }
  },

  /**
   * Fetch a single plan by ID
   * TODO: Replace with actual Strapi API call:
   * const response = await fetch(`${api.baseURL}${api.endpoints.plan(id)}`)
   * return response.json()
   */
  async getPlanById(id: string): Promise<MediPlan | null> {
    try {
      const plan = mockPlans.find((p) => p.id === id);
      return plan || null;
    } catch (error) {
      console.error(`Error fetching plan ${id}:`, error);
      return null;
    }
  },
};

export default plansService;
