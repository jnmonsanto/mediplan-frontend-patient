<template>
  <header
    class="sticky top-0 z-40 border-b border-neutral-200 bg-white shadow-sm"
  >
    <div
      class="container mx-auto px-4 md:px-8 flex h-16 items-center justify-between"
    >
      <RouterLink to="/" class="no-underline">
        <h1 class="text-xl text-primary-600" style="font-weight: 700;">MediPlan</h1>
      </RouterLink>

      <ProfilePopup />
    </div>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import ProfilePopup from "./ProfilePopup.vue";
import { useProfilePopup } from "../composables/useProfilePopup";

const { profilePopupOpen } = useProfilePopup();
</script>
