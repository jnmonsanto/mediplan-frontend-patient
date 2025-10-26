<template>
  <div class="min-h-screen bg-background">
    <Header />

    <main class="container mx-auto px-4 md:px-8 py-8 md:py-12">
      <!-- Hero Section -->
      <div class="mb-12">
        <div
          class="rounded-2xl bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 px-8 py-12 md:py-16"
        >
          <div class="flex items-center gap-3 mb-4">
            <div
              class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary"
            >
              <svg
                class="h-6 w-6 text-primary-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <span class="text-sm font-semibold text-primary">
              Recovery Hub
            </span>
          </div>
          <h1 class="text-4xl md:text-5xl font-bold text-foreground mb-3">
            Your Personalized Exercise Plans
          </h1>
          <p class="text-lg text-muted-foreground max-w-2xl">
            Follow carefully designed workout routines to improve your strength,
            flexibility, and overall wellness. Choose a plan and start your
            journey today.
          </p>
        </div>
      </div>

      <!-- Search Section -->
      <div class="mb-8">
        <div class="relative">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search exercise plans..."
            class="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
      </div>

      <!-- Plans Grid -->
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <PlanCard v-for="plan in filteredPlans" :key="plan.id" :plan="plan" />
        <div
          v-if="filteredPlans.length === 0"
          class="col-span-full text-center py-12"
        >
          <p class="text-muted-foreground text-lg">
            No exercise plans found matching "{{ searchQuery }}"
          </p>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import Header from "../components/Header.vue";
import PlanCard from "../components/PlanCard.vue";
import usePlans from "../composables/usePlans";

const searchQuery = ref("");
const { plans, fetchPlans } = usePlans();

// Fetch plans on component mount
onMounted(() => {
  fetchPlans();
});

const filteredPlans = computed(() =>
  plans.value.filter(
    (plan) =>
      plan.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      plan.description.toLowerCase().includes(searchQuery.value.toLowerCase()),
  ),
);
</script>
