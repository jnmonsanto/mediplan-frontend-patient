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
