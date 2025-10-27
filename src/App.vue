<template>
  <div class="min-h-screen bg-neutral-50 flex flex-col">
    <router-view />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from "./components/Footer.vue";
</script>
