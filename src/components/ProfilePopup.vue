<template>
  <div>
    <!-- Profile Icon Button -->
    <button
      @click="isOpen = !isOpen"
      class="flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 text-primary-600 hover:bg-primary-200 transition-colors"
      title="Profile"
    >
      <svg
        class="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    </button>

    <!-- Teleport Modal to Body -->
    <Teleport to="body">
      <!-- Popup Modal Overlay -->
      <div
        v-if="isOpen"
        class="fixed inset-0 z-40 bg-black/50"
        @click="isOpen = false"
      />

      <!-- Popup Modal Content -->
      <div
        v-if="isOpen"
        class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 bg-white rounded-2xl shadow-xl z-50 border border-border"
        @click.stop
      >
      <!-- Header -->
      <div class="px-6 py-4 border-b border-border">
        <h2 class="text-xl font-bold text-foreground">Profile</h2>
      </div>

      <!-- Tabs -->
      <div class="flex gap-0 border-b border-border">
        <button
          @click="activeTab = 'patient'"
          :class="[
            'flex-1 px-4 py-3 font-medium text-sm transition-colors',
            activeTab === 'patient'
              ? 'text-primary-600 border-b-2 border-primary-600'
              : 'text-neutral-500 hover:text-neutral-700',
          ]"
        >
          Patient
        </button>
        <button
          @click="activeTab = 'doctor'"
          :class="[
            'flex-1 px-4 py-3 font-medium text-sm transition-colors',
            activeTab === 'doctor'
              ? 'text-primary-600 border-b-2 border-primary-600'
              : 'text-neutral-500 hover:text-neutral-700',
          ]"
        >
          Doctor
        </button>
      </div>

      <!-- Content -->
      <div class="px-6 py-6 max-h-96 overflow-y-auto space-y-4">
        <!-- Patient Tab -->
        <div v-if="activeTab === 'patient'" class="space-y-4">
          <div>
            <label class="block text-xs font-semibold text-neutral-500 mb-1">
              Name
            </label>
            <p class="text-foreground font-medium">
              {{ currentUser?.name }}
            </p>
          </div>

          <div>
            <label class="block text-xs font-semibold text-neutral-500 mb-1">
              Email
            </label>
            <p class="text-foreground font-medium">
              {{ currentUser?.email }}
            </p>
          </div>

          <div>
            <label class="block text-xs font-semibold text-neutral-500 mb-1">
              Phone
            </label>
            <p class="text-foreground font-medium">
              {{ currentUser?.phone || "N/A" }}
            </p>
          </div>

          <div>
            <label class="block text-xs font-semibold text-neutral-500 mb-1">
              Address
            </label>
            <p class="text-foreground font-medium">
              {{ currentUser?.address || "N/A" }}
            </p>
          </div>

          <div>
            <label class="block text-xs font-semibold text-neutral-500 mb-1">
              SNS ID
            </label>
            <p class="text-foreground font-medium">
              {{ currentUser?.snsId }}
            </p>
          </div>

          <div>
            <label class="block text-xs font-semibold text-neutral-500 mb-1">
              Doctor
            </label>
            <p class="text-foreground font-medium">
              {{ doctor?.name }}
            </p>
          </div>
        </div>

        <!-- Doctor Tab -->
        <div v-if="activeTab === 'doctor'" class="space-y-4">
          <div>
            <label class="block text-xs font-semibold text-neutral-500 mb-1">
              Name
            </label>
            <p class="text-foreground font-medium">
              {{ doctor?.name }}
            </p>
          </div>

          <div>
            <label class="block text-xs font-semibold text-neutral-500 mb-1">
              Specialization
            </label>
            <p class="text-foreground font-medium">
              {{ doctor?.specialization }}
            </p>
          </div>

          <div>
            <label class="block text-xs font-semibold text-neutral-500 mb-1">
              Age
            </label>
            <p class="text-foreground font-medium">
              {{ doctor?.age }}
            </p>
          </div>

          <div>
            <label class="block text-xs font-semibold text-neutral-500 mb-1">
              Email
            </label>
            <p class="text-foreground font-medium">
              {{ doctor?.email }}
            </p>
          </div>

          <div>
            <label class="block text-xs font-semibold text-neutral-500 mb-1">
              Phone
            </label>
            <p class="text-foreground font-medium">
              {{ doctor?.phone || "N/A" }}
            </p>
          </div>

          <div>
            <label class="block text-xs font-semibold text-neutral-500 mb-1">
              Address
            </label>
            <p class="text-foreground font-medium">
              {{ doctor?.address || "N/A" }}
            </p>
          </div>
        </div>
      </div>

      <!-- Logout Button -->
      <div class="px-6 py-4 border-t border-border">
        <button
          @click="handleLogout"
          class="w-full flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors"
          :style="{ borderColor: '#dc2626', color: '#dc2626', border: '0.5px solid #dc2626' }"
          @mouseenter="$event.target.style.backgroundColor = '#fef2f2'"
          @mouseleave="$event.target.style.backgroundColor = 'transparent'"
        >
          <svg
            class="h-4 w-4 mr-[15px]"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            :style="{ stroke: '#dc2626' }"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          Logout
        </button>
      </div>
    </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import useAuth from "../composables/useAuth";

const router = useRouter();
const isOpen = ref(false);
const activeTab = ref<"patient" | "doctor">("patient");

const { currentUser, doctor, logout } = useAuth();

const handleLogout = () => {
  logout();
  isOpen.value = false;
  router.push("/login");
};
</script>
