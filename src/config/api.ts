// API Configuration
// The Strapi URL can be set via environment variable or manually updated here
export const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:1337/api";

export const api = {
  baseURL: API_BASE_URL,

  endpoints: {
    plans: "/plans",
    plan: (id: string) => `/plans/${id}`,
  },

  // Helper to construct full URLs
  getFullUrl: (endpoint: string) => `${API_BASE_URL}${endpoint}`,
};

export default api;
