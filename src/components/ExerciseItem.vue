<template>
  <div
    class="flex gap-4 rounded-xl border border-border bg-card p-4 hover:bg-secondary/50 transition-colors"
  >
    <div
      class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary-100"
    >
      <span class="text-lg font-bold text-primary-600">{{ index }}</span>
    </div>

    <div class="flex-1">
      <h4 class="font-semibold text-foreground">{{ exercise.name }}</h4>
      <p class="mt-1 text-sm text-neutral-500">
        {{ exercise.description }}
      </p>

      <div class="mt-3 flex flex-wrap gap-3">
        <div class="flex items-center gap-1.5 text-xs">
          <svg
            class="h-4 w-4 text-primary-600"
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
          <span class="text-muted-foreground">{{ exercise.duration }}s</span>
        </div>

        <div v-if="exercise.sets" class="flex items-center gap-1.5 text-xs">
          <svg
            class="h-4 w-4 text-primary-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
          <span class="text-muted-foreground">{{ exercise.sets }} sets</span>
        </div>

        <div v-if="exercise.reps" class="flex items-center gap-1.5 text-xs">
          <svg
            class="h-4 w-4 text-primary-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          <span class="text-muted-foreground">{{ exercise.reps }} reps</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Exercise } from "../types";

interface Props {
  exercise: Exercise;
  index: number;
}

defineProps<Props>();
</script>
