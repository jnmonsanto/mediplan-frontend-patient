import { ref, computed } from "vue";
import type { Patient, Doctor } from "../types";

// Mock logged-in patient
const loggedInPatient: Patient = {
  id: "patient-1",
  doctorId: "doc-1",
  name: "John Doe",
  email: "john@example.com",
  phone: "+1 (555) 987-6543",
  address: "456 Main St, Boston, MA 02116",
  photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
  snsId: "SNS-123456",
};

// Mock doctor
const assignedDoctor: Doctor = {
  id: "doc-1",
  name: "Dr. Sarah Johnson",
  email: "sarah@mediplan.com",
  phone: "+1 (555) 123-4567",
  address: "123 Medical Center Dr, Boston, MA 02115",
  photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
  specialization: "Sports Medicine",
  age: 42,
};

const isAuthenticated = ref(true);
const currentUser = ref<Patient | null>(loggedInPatient);
const doctor = ref<Doctor | null>(assignedDoctor);

/**
 * Composable for managing user authentication and current user state
 */
export function useAuth() {
  const login = (user: Patient) => {
    currentUser.value = user;
    isAuthenticated.value = true;
  };

  const logout = () => {
    currentUser.value = null;
    isAuthenticated.value = false;
  };

  return {
    isAuthenticated: computed(() => isAuthenticated.value),
    currentUser: computed(() => currentUser.value),
    doctor: computed(() => doctor.value),
    login,
    logout,
  };
}

export default useAuth;
