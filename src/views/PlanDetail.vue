<template>
  <div class="min-h-screen bg-background">
    <Header />

    <main class="container mx-auto px-4 md:px-8 py-8 md:py-12">
      <!-- Back Button -->
      <button
        @click="$router.back()"
        class="mb-8 inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors font-medium"
      >
        <svg
          class="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to Plans
      </button>

      <div v-if="plan" class="grid gap-8 lg:grid-cols-3">
        <!-- Video and Description -->
        <div class="lg:col-span-2">
          <!-- Video Container -->
          <div class="mb-8">
            <div
              class="relative w-full rounded-2xl overflow-hidden bg-black aspect-video"
            >
              <video controls class="w-full h-full" :poster="plan.imageUrl">
                <source :src="plan.videoUrl" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <!-- Plan Title and Description -->
          <div class="mb-8 rounded-2xl border border-border bg-card p-6 md:p-8">
            <div class="flex items-start justify-between gap-4 mb-4">
              <div>
                <h1 class="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {{ plan.title }}
                </h1>
                <p class="text-lg text-muted-foreground">
                  {{ plan.description }}
                </p>
              </div>
              <span
                :class="[
                  'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold whitespace-nowrap',
                  difficultyColors[plan.difficulty],
                ]"
              >
                {{ capitalizeFirst(plan.difficulty) }}
              </span>
            </div>

            <!-- Plan Stats -->
            <div class="flex gap-6 pt-4 border-t border-border">
              <div class="flex items-center gap-2">
                <svg
                  class="h-5 w-5 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <p class="text-xs text-muted-foreground">Duration</p>
                  <p class="font-semibold text-primary-700">
                    {{ plan.duration }} minutes
                  </p>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <svg
                  class="h-5 w-5 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20 7l-8-4-8 4m0 0l8 4m-8-4v10l8 4m0-10l8-4m0 0v10l-8 4"
                  />
                </svg>
                <div>
                  <p class="text-xs text-muted-foreground">Exercises</p>
                  <p class="font-semibold text-primary-700">
                    {{ plan.exercises.length }} movements
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Exercises List -->
          <div>
            <h2 class="text-2xl font-bold text-foreground mb-6">
              Exercise Sequence
            </h2>
            <div class="space-y-4">
              <ExerciseItem
                v-for="(exercise, index) in plan.exercises"
                :key="exercise.id"
                :exercise="exercise"
                :index="index + 1"
              />
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="lg:sticky lg:top-24 lg:h-fit">
          <div class="rounded-2xl border border-border bg-card p-6">
            <div class="mb-6">
              <h3 class="font-semibold text-foreground mb-3">Quick Tips</h3>
              <ul class="space-y-3 text-sm text-muted-foreground">
                <li class="flex gap-2">
                  <span class="text-primary font-bold">•</span>
                  <span> Warm up before starting this exercise plan </span>
                </li>
                <li class="flex gap-2">
                  <span class="text-primary font-bold">•</span>
                  <span> Maintain proper form over speed </span>
                </li>
                <li class="flex gap-2">
                  <span class="text-primary font-bold">•</span>
                  <span> Rest between exercises as needed </span>
                </li>
                <li class="flex gap-2">
                  <span class="text-primary font-bold">•</span>
                  <span> Stay hydrated throughout the session </span>
                </li>
              </ul>
            </div>

            <div class="rounded-lg bg-primary-600/10 p-4 border border-primary-600/30">
              <p class="text-sm text-primary-600 font-medium mb-2">
                💪 Keep it up!
              </p>
              <p class="text-xs text-primary-600/70">
                Complete this plan regularly for the best results. Consider
                doing it 3-4 times per week.
              </p>
            </div>

            <button
              class="mt-6 w-full py-3 px-4 rounded-lg bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors"
            >
              Start Session
            </button>
          </div>
        </div>
      </div>

      <div v-else class="text-center py-12">
        <h2 class="text-2xl font-bold text-foreground mb-2">Plan not found</h2>
        <p class="text-muted-foreground mb-6">
          The exercise plan you're looking for doesn't exist.
        </p>
        <button
          @click="$router.push('/')"
          class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          <svg
            class="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Plans
        </button>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import Header from "../components/Header.vue";
import ExerciseItem from "../components/ExerciseItem.vue";
import usePlans from "../composables/usePlans";

const route = useRoute();
const router = useRouter();
const { plans, fetchPlans } = usePlans();

// Fetch plans on component mount
onMounted(() => {
  fetchPlans();
});

const difficultyColors: Record<string, string> = {
  beginner: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  intermediate:
    "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
  advanced: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
};

const plan = computed(() => {
  const planId = route.params.planId as string;
  return plans.value.find((p) => p.id === planId);
});

const capitalizeFirst = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);
</script>
