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

      <!-- Forgot Password Card -->
      <div class="bg-white rounded-2xl shadow-lg p-8 border border-border">
        <h2 class="text-2xl font-bold text-foreground mb-2">Reset Password</h2>
        <p class="text-neutral-600 text-sm mb-6">
          Enter your email address and we'll send you a link to reset your
          password.
        </p>

        <form @submit.prevent="handleReset" class="space-y-4 mb-8">
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

          <!-- Success Message -->
          <div
            v-if="successMessage"
            class="bg-green-50 border border-green-200 rounded-lg p-3"
          >
            <p class="text-sm text-green-600">{{ successMessage }}</p>
          </div>

          <!-- Error Message -->
          <div
            v-if="errorMessage"
            class="bg-red-50 border border-red-200 rounded-lg p-3"
          >
            <p class="text-sm text-red-600">{{ errorMessage }}</p>
          </div>

          <!-- Reset Button -->
          <button
            type="submit"
            :disabled="isLoading"
            class="w-full py-3 px-4 rounded-lg bg-primary-600 text-white font-semibold hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {{ isLoading ? "Sending..." : "Send Reset Link" }}
          </button>
        </form>

        <!-- Back to Login Link -->
        <div class="mt-3 pt-3 text-center">
          <p class="text-sm">
            <span class="text-neutral-600">Remember your password? </span>
            <RouterLink
              to="/login"
              class="text-primary-600 font-semibold hover:text-primary-700 transition-colors"
            >
              Back to Login
            </RouterLink>
          </p>
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
import { RouterLink } from "vue-router";

const email = ref("");
const errorMessage = ref("");
const successMessage = ref("");
const isLoading = ref(false);

const handleReset = async () => {
  errorMessage.value = "";
  successMessage.value = "";

  if (!email.value) {
    errorMessage.value = "Please enter your email address.";
    return;
  }

  isLoading.value = true;

  try {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // In a real application, this would send an API request to initiate the password reset
    successMessage.value =
      "Password reset link has been sent to your email. Please check your inbox.";
    email.value = "";
  } catch (error) {
    errorMessage.value =
      "An error occurred. Please try again later.";
    console.error("Reset error:", error);
  } finally {
    isLoading.value = false;
  }
};
</script>
