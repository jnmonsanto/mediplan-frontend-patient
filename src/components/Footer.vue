<template>
  <footer class="w-full border-t border-neutral-200 bg-white">
    <div class="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
      <p class="text-center text-sm text-neutral-500">
        Developed at FCTUC {{ currentYear }}
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from "vue";

const currentYear = computed(() => new Date().getFullYear());
</script>
