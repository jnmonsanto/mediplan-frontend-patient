<template>
  <header
    class="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
  >
    <div
      class="container mx-auto px-4 md:px-8 flex h-16 items-center justify-between"
    >
      <RouterLink to="/" class="no-underline">
        <span class="text-lg font-bold text-foreground">MediPlan</span>
      </RouterLink>

    </div>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
