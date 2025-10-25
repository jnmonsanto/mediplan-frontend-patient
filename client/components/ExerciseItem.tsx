import { Exercise } from "@shared/api";
import { Clock, Repeat2, BarChart3 } from "lucide-react";

interface ExerciseItemProps {
  exercise: Exercise;
  index: number;
}

export function ExerciseItem({ exercise, index }: ExerciseItemProps) {
  return (
    <div className="flex gap-4 rounded-xl border border-border bg-card p-4 hover:bg-secondary/50 transition-colors">
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
        <span className="text-lg font-bold text-primary">{index}</span>
      </div>

      <div className="flex-1">
        <h4 className="font-semibold text-foreground">{exercise.name}</h4>
        <p className="mt-1 text-sm text-muted-foreground">
          {exercise.description}
        </p>

        <div className="mt-3 flex flex-wrap gap-3">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{exercise.duration}s</span>
          </div>

          {exercise.sets && (
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <BarChart3 className="h-4 w-4" />
              <span>{exercise.sets} sets</span>
            </div>
          )}

          {exercise.reps && (
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Repeat2 className="h-4 w-4" />
              <span>{exercise.reps} reps</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
