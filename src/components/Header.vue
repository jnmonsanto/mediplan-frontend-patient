<template>
  <header
    class="sticky top-0 z-40 border-b border-neutral-200 bg-white shadow-sm"
  >
    <div
      class="mx-auto max-w-7xl flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
    >
      <RouterLink to="/" class="no-underline">
        <h1 class="text-xl text-primary-600" style="font-weight: 700">
          MediPlan
        </h1>
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
