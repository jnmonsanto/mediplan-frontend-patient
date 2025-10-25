/**
 * Shared code between client and server
 * Useful to share types between client and server
 * and/or small pure JS functions that can be used on both client and server
 */

export interface DemoResponse {
  message: string;
}

export interface Exercise {
  id: string;
  name: string;
  description: string;
  duration: number;
  reps?: number;
  sets?: number;
}

export interface ExercisePlan {
  id: string;
  title: string;
  description: string;
  duration: number;
  difficulty: "beginner" | "intermediate" | "advanced";
  exercises: Exercise[];
  videoUrl: string;
  imageUrl: string;
}
