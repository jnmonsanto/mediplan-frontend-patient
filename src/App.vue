<template>
  <div class="min-h-screen bg-background flex flex-col">
    <router-view />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from "./components/Footer.vue";
</script>
