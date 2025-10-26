import { ref, computed } from "vue";
import plansService from "../services/plansService";
import type { MediPlan } from "../types";

/**
 * Composable for fetching and managing plans data
 * Ready to integrate with Strapi - just update plansService.getPlans()
 */
export function usePlans() {
  const plans = ref<MediPlan[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const fetchPlans = async () => {
    loading.value = true;
    error.value = null;
    try {
      plans.value = await plansService.getPlans();
    } catch (err) {
      error.value =
        err instanceof Error ? err.message : "Failed to fetch plans";
      console.error("Error fetching plans:", err);
    } finally {
      loading.value = false;
    }
  };

  const getPlanById = (id: string) => {
    return plans.value.find((p) => p.id === id);
  };

  return {
    plans: computed(() => plans.value),
    loading: computed(() => loading.value),
    error: computed(() => error.value),
    fetchPlans,
    getPlanById,
  };
}

export default usePlans;
