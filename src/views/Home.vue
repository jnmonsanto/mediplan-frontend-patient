<template>
  <div class="min-h-screen bg-background">
    <Header />

    <main class="container mx-auto px-4 md:px-8 py-8 md:py-12">
      <!-- Hero Section -->
      <div class="mb-12">
        <div class="rounded-2xl bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 px-8 py-12 md:py-16">
          <div class="flex items-center gap-3 mb-4">
            <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <svg class="h-6 w-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span class="text-sm font-semibold text-primary">
              Recovery Hub
            </span>
          </div>
          <h1 class="text-4xl md:text-5xl font-bold text-foreground mb-3">
            Your Personalized Exercise Plans
          </h1>
          <p class="text-lg text-muted-foreground max-w-2xl">
            Follow carefully designed workout routines to improve your strength,
            flexibility, and overall wellness. Choose a plan and start your
            journey today.
          </p>
        </div>
      </div>

      <!-- Search Section -->
      <div class="mb-8">
        <div class="relative">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search exercise plans..."
            class="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
      </div>

      <!-- Plans Grid -->
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <PlanCard v-for="plan in filteredPlans" :key="plan.id" :plan="plan" />
        <div v-if="filteredPlans.length === 0" class="col-span-full text-center py-12">
          <p class="text-muted-foreground text-lg">
            No exercise plans found matching "{{ searchQuery }}"
          </p>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Header from '../components/Header.vue'
import PlanCard from '../components/PlanCard.vue'
import type { ExercisePlan } from '../types'

const searchQuery = ref('')

const mockPlans: ExercisePlan[] = [
  {
    id: "1",
    title: "Full Body Warm-up",
    description: "Get your body ready with dynamic stretching and light cardio",
    duration: 15,
    difficulty: "beginner",
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&h=400&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-library/sample/BigBuckBunny.mp4",
    exercises: [
      {
        id: "1-1",
        name: "Arm Circles",
        description: "Rotate your arms in big circles to warm up shoulders",
        duration: 30,
        sets: 2,
      },
      {
        id: "1-2",
        name: "Leg Swings",
        description: "Swing legs forward and backward to loosen hip joints",
        duration: 30,
        reps: 15,
      },
      {
        id: "1-3",
        name: "Jumping Jacks",
        description: "Full body warm-up exercise",
        duration: 45,
        reps: 30,
      },
      {
        id: "1-4",
        name: "Torso Twist",
        description: "Warm up your core by rotating your torso",
        duration: 30,
        sets: 2,
      },
    ],
  },
  {
    id: "2",
    title: "Upper Body Strength",
    description: "Build strength in shoulders, arms, and chest with resistance",
    duration: 30,
    difficulty: "intermediate",
    imageUrl: "https://images.unsplash.com/photo-1583454110118-64bfb941b6be?w=500&h=400&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-library/sample/ElephantsDream.mp4",
    exercises: [
      {
        id: "2-1",
        name: "Push-ups",
        description: "Classic upper body strength exercise",
        duration: 45,
        sets: 3,
        reps: 12,
      },
      {
        id: "2-2",
        name: "Shoulder Press",
        description: "Strengthen shoulders and upper chest",
        duration: 45,
        sets: 3,
        reps: 10,
      },
      {
        id: "2-3",
        name: "Bicep Curls",
        description: "Isolate and strengthen biceps",
        duration: 40,
        sets: 3,
        reps: 12,
      },
      {
        id: "2-4",
        name: "Plank Hold",
        description: "Core and shoulder stabilizer",
        duration: 60,
        sets: 3,
      },
    ],
  },
  {
    id: "3",
    title: "Lower Body Conditioning",
    description: "Strengthen legs and improve lower body endurance",
    duration: 25,
    difficulty: "intermediate",
    imageUrl: "https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=500&h=400&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-library/sample/ForBiggerBlazes.mp4",
    exercises: [
      {
        id: "3-1",
        name: "Squats",
        description: "Fundamental lower body exercise",
        duration: 45,
        sets: 3,
        reps: 15,
      },
      {
        id: "3-2",
        name: "Lunges",
        description: "Single leg strength and balance",
        duration: 40,
        sets: 2,
        reps: 12,
      },
      {
        id: "3-3",
        name: "Glute Bridges",
        description: "Activate and strengthen glutes",
        duration: 45,
        sets: 3,
        reps: 15,
      },
      {
        id: "3-4",
        name: "Calf Raises",
        description: "Target calf muscles",
        duration: 30,
        sets: 3,
        reps: 20,
      },
    ],
  },
  {
    id: "4",
    title: "Flexibility & Mobility",
    description: "Improve range of motion and reduce muscle tension",
    duration: 20,
    difficulty: "beginner",
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&h=400&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-library/sample/ForBiggerJoyrides.mp4",
    exercises: [
      {
        id: "4-1",
        name: "Forward Fold",
        description: "Stretch hamstrings and lower back",
        duration: 60,
      },
      {
        id: "4-2",
        name: "Cat-Cow Stretch",
        description: "Mobilize spine and warm up core",
        duration: 45,
        reps: 10,
      },
      {
        id: "4-3",
        name: "Child's Pose",
        description: "Relax and stretch shoulders and back",
        duration: 60,
      },
      {
        id: "4-4",
        name: "Pigeon Pose",
        description: "Deep hip opener and flexibility",
        duration: 45,
      },
    ],
  },
  {
    id: "5",
    title: "Core Activation",
    description: "Strengthen your core for better stability and posture",
    duration: 18,
    difficulty: "advanced",
    imageUrl: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=500&h=400&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-library/sample/ForBiggerMeltdowns.mp4",
    exercises: [
      {
        id: "5-1",
        name: "Dead Bug",
        description: "Core stability and coordination",
        duration: 40,
        sets: 3,
        reps: 12,
      },
      {
        id: "5-2",
        name: "Russian Twists",
        description: "Oblique and rotational core strength",
        duration: 45,
        sets: 3,
        reps: 20,
      },
      {
        id: "5-3",
        name: "Leg Raises",
        description: "Lower abdominal strength",
        duration: 40,
        sets: 3,
        reps: 10,
      },
      {
        id: "5-4",
        name: "Mountain Climbers",
        description: "Dynamic core and cardio combination",
        duration: 45,
        sets: 3,
        reps: 20,
      },
    ],
  },
]

const filteredPlans = computed(() =>
  mockPlans.filter(
    (plan) =>
      plan.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      plan.description.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
)
</script>
