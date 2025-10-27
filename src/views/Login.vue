<template>
  <div
    class="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center px-4"
  >
    <div class="w-full max-w-md">
      <!-- Logo -->
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold text-primary-600 mb-2">MediPlan</h1>
        <p class="text-neutral-600">Patient Exercise Plans Portal</p>
      </div>

      <!-- Login Card -->
      <div class="bg-white rounded-2xl shadow-lg p-8 border border-border">
        <h2 class="text-2xl font-bold text-foreground mb-6">Login</h2>

        <form @submit.prevent="handleLogin" class="space-y-4 mb-8">
          <!-- Email Input -->
          <div>
            <label class="block text-sm font-medium text-foreground mb-2">
              Email Address
            </label>
            <input
              v-model="email"
              type="email"
              placeholder="Enter your email"
              class="w-full px-4 py-3 rounded-lg border border-neutral-300 text-foreground placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent transition"
              required
            />
          </div>

          <!-- Password Input -->
          <div>
            <label class="block text-sm font-medium text-foreground mb-2">
              Password
            </label>
            <input
              v-model="password"
              type="password"
              placeholder="Enter your password"
              class="w-full px-4 py-3 rounded-lg border border-neutral-300 text-foreground placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent transition"
              required
            />
          </div>

          <!-- Error Message -->
          <div
            v-if="errorMessage"
            class="bg-red-50 border border-red-200 rounded-lg p-3"
          >
            <p class="text-sm text-red-600">{{ errorMessage }}</p>
          </div>

          <!-- Login Button -->
          <button
            type="submit"
            :disabled="isLoading"
            class="w-full py-3 px-4 rounded-lg bg-primary-600 text-white font-semibold hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {{ isLoading ? "Logging in..." : "Login" }}
          </button>

          <!-- Forgot Password Link -->
          <div class="text-center">
            <RouterLink
              to="/forgot-password"
              class="text-sm text-primary-600 font-semibold hover:text-primary-700 transition-colors"
            >
              Forgot Password?
            </RouterLink>
          </div>
        </form>

        <!-- Demo Credentials -->
        <div class="mt-6 pt-6 border-t border-neutral-200 mb-8">
          <p class="text-xs text-neutral-600 text-center mb-3">
            Demo Credentials:
          </p>
          <div class="bg-neutral-50 rounded-lg p-3 space-y-2">
            <div class="text-xs">
              <p class="font-semibold text-neutral-700">Patient</p>
              <p class="text-neutral-600">Email: john@example.com</p>
              <p class="text-neutral-600">Password: demo123</p>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="mt-8 pt-6 border-t border-neutral-200">
          <p class="text-xs text-neutral-500 text-center">
            Multi-Doctor Management System • Version 1.0
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter, RouterLink } from "vue-router";
import useAuth from "../composables/useAuth";

const router = useRouter();
const { login } = useAuth();

const email = ref("");
const password = ref("");
const errorMessage = ref("");
const isLoading = ref(false);

const handleLogin = async () => {
  errorMessage.value = "";
  isLoading.value = true;

  try {
    // Demo login validation
    if (email.value === "john@example.com" && password.value === "demo123") {
      login();
      await router.push("/");
    } else {
      errorMessage.value = "Invalid email or password. Please try again.";
    }
  } catch (error) {
    errorMessage.value = "An error occurred during login. Please try again.";
    console.error("Login error:", error);
  } finally {
    isLoading.value = false;
  }
};
</script>
