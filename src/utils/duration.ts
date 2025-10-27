import type { Plan } from "../types";

/**
 * Calculate total duration of a plan in seconds based on all exercise durations
 */
export function calculatePlanDuration(plan: Plan): number {
  if (!plan.exercises || plan.exercises.length === 0) {
    return 0;
  }
  return plan.exercises.reduce(
    (total, exercise) => total + exercise.duration,
    0,
  );
}

/**
 * Convert seconds to minutes
 */
export function secondsToMinutes(seconds: number): number {
  return Math.round(seconds / 60);
}

/**
 * Get plan duration in minutes
 */
export function getPlanDurationInMinutes(plan: Plan): number {
  return secondsToMinutes(calculatePlanDuration(plan));
}
