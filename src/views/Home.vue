<template>
  <div class="min-h-screen">
    <Header />

    <main class="mx-auto max-w-7xl px-4 md:px-8 py-8 md:py-12 sm:px-6 lg:px-8">
      <!-- Hero Section -->
      <div class="mb-12">
        <div
          class="rounded-lg bg-gradient-to-r from-primary-600 via-primary-500 to-primary-700 px-8 py-12 md:py-16"
        >
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-3">
            Your Personalized Exercise Plans
          </h1>
          <p class="text-lg text-white/80 max-w-2xl">
            Follow carefully designed workout routines to improve your strength,
            flexibility, and overall wellness. Choose a plan and start your
            journey today.
          </p>
        </div>
      </div>

      <!-- Search and Sort Section -->
      <div class="mb-8 flex flex-col md:flex-row gap-3">
        <!-- Search -->
        <div class="relative w-full md:w-1/2 lg:w-2/3">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search exercise plans..."
            class="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        <!-- Sort Filter -->
        <select
          id="sort-select"
          v-model="sortBy"
          class="w-full md:w-1/2 lg:w-1/3 px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        >
          <option value="dateAdded">Date Added (Newest)</option>
          <option value="dateAddedOld">Date Added (Oldest)</option>
          <option value="name">Name (A-Z)</option>
          <option value="nameDesc">Name (Z-A)</option>
          <option value="difficulty">Difficulty (Beginner First)</option>
          <option value="difficultyDesc">Difficulty (Advanced First)</option>
          <option value="duration">Duration (Shortest)</option>
          <option value="durationDesc">Duration (Longest)</option>
        </select>
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
import { calculatePlanDuration } from "../utils/duration";

const searchQuery = ref("");
const sortBy = ref("dateAdded");
const { plans, fetchPlans } = usePlans();

// Fetch plans on component mount
onMounted(() => {
  fetchPlans();
});

const difficultyOrder = { beginner: 0, intermediate: 1, advanced: 2 };

const filteredAndSortedPlans = computed(() => {
  // First, filter by search query
  const filtered = plans.value.filter(
    (plan) =>
      plan.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      plan.description.toLowerCase().includes(searchQuery.value.toLowerCase()),
  );

  // Then, apply sorting
  return filtered.sort((a, b) => {
    switch (sortBy.value) {
      case "dateAdded":
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      case "dateAddedOld":
        return (
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      case "name":
        return a.title.localeCompare(b.title);
      case "nameDesc":
        return b.title.localeCompare(a.title);
      case "difficulty":
        return (
          difficultyOrder[a.difficulty as keyof typeof difficultyOrder] -
          difficultyOrder[b.difficulty as keyof typeof difficultyOrder]
        );
      case "difficultyDesc":
        return (
          difficultyOrder[b.difficulty as keyof typeof difficultyOrder] -
          difficultyOrder[a.difficulty as keyof typeof difficultyOrder]
        );
      case "duration":
        return calculatePlanDuration(a) - calculatePlanDuration(b);
      case "durationDesc":
        return calculatePlanDuration(b) - calculatePlanDuration(a);
      default:
        return 0;
    }
  });
});

const filteredPlans = filteredAndSortedPlans;
</script>
