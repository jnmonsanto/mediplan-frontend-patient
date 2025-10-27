<template>
  <RouterLink
    :to="`/plan/${plan.id}`"
    class="group relative overflow-hidden rounded-2xl bg-card shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 no-underline block"
  >
    <div
      class="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10"
    >
      <img
        :src="plan.imageUrl"
        :alt="plan.title"
        class="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
      />

      <div class="absolute top-4 right-4">
        <span
          :class="[
            'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold',
            difficultyColors[plan.difficulty],
          ]"
        >
          {{ capitalizeFirst(plan.difficulty) }}
        </span>
      </div>
    </div>

    <div class="p-5">
      <div class="flex items-start justify-between gap-3">
        <div class="flex-1">
          <h3 class="text-lg font-bold text-neutral-600 line-clamp-2">
            {{ plan.title }}
          </h3>
          <p class="mt-2 text-sm text-neutral-500 line-clamp-2">
            {{ plan.description }}
          </p>
        </div>
      </div>

      <div class="mt-4 flex items-center justify-between">
        <div class="flex items-center gap-4 text-sm">
          <div class="flex items-center gap-1.5 text-neutral-500">
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
                d="M20 7l-8-4-8 4m0 0l8 4m-8-4v10l8 4m0-10l8-4m0 0v10l-8 4"
              />
            </svg>
            <span>{{ plan.exercises.length }} exercises</span>
          </div>
          <div class="flex items-center gap-1.5 text-neutral-500">
            <span>{{ getDurationInMinutes() }} min</span>
          </div>
        </div>
        <svg
          class="h-5 w-5 text-primary-700 group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import type { Plan } from "../types";
import { getPlanDurationInMinutes } from "../utils/duration";

interface Props {
  plan: Plan;
}

defineProps<Props>();

const difficultyColors: Record<string, string> = {
  beginner: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  intermediate:
    "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
  advanced: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
};

const capitalizeFirst = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

const getDurationInMinutes = () => getPlanDurationInMinutes(props.plan);

const props = defineProps<Props>();
</script>
