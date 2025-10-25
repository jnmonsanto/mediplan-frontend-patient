import { ExercisePlan } from "@shared/api";
import { Link } from "react-router-dom";
import { ChevronRight, Dumbbell } from "lucide-react";
import { cn } from "@/lib/utils";

interface PlanCardProps {
  plan: ExercisePlan;
}

const difficultyColors = {
  beginner: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  intermediate:
    "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
  advanced: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
};

export function PlanCard({ plan }: PlanCardProps) {
  return (
    <Link
      to={`/plan/${plan.id}`}
      className="group relative overflow-hidden rounded-2xl bg-card shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
    >
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
        <img
          src={plan.imageUrl}
          alt={plan.title}
          className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

        <div className="absolute top-4 right-4">
          <span
            className={cn(
              "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
              difficultyColors[plan.difficulty]
            )}
          >
            {plan.difficulty.charAt(0).toUpperCase() + plan.difficulty.slice(1)}
          </span>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-foreground line-clamp-2">
              {plan.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
              {plan.description}
            </p>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Dumbbell className="h-4 w-4" />
              <span>{plan.exercises.length} exercises</span>
            </div>
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <span>{plan.duration} min</span>
            </div>
          </div>
          <ChevronRight className="h-5 w-5 text-primary group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
