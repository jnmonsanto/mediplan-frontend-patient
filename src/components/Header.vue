<template>
  <header
    class="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
  >
    <div
      class="container mx-auto px-4 md:px-8 flex h-16 items-center justify-between"
    >
      <RouterLink to="/" class="flex items-center gap-3 no-underline">
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
        <div class="flex flex-col">
          <span class="text-lg font-bold text-foreground">MediPlan</span>
          <span class="text-xs text-muted-foreground">Recovery Hub</span>
        </div>
      </RouterLink>

      <nav class="flex items-center gap-1">
        <RouterLink
          to="/"
          :class="[
            'px-4 py-2 rounded-md text-sm font-medium transition-colors',
            $route.path === '/'
              ? 'bg-primary text-primary-foreground'
              : 'text-foreground hover:bg-secondary',
          ]"
        >
          Plans
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { RouterLink, useRoute } from "vue-router";
</script>
