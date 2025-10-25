import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { ExerciseItem } from "@/components/ExerciseItem";
import { ExercisePlan } from "@shared/api";
import { ArrowLeft, Clock, Dumbbell } from "lucide-react";
import { cn } from "@/lib/utils";

// Mock data - same as Index
const mockPlans: ExercisePlan[] = [
  {
    id: "1",
    title: "Full Body Warm-up",
    description: "Get your body ready with dynamic stretching and light cardio",
    duration: 15,
    difficulty: "beginner",
    imageUrl:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&h=400&fit=crop",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-library/sample/BigBuckBunny.mp4",
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
    imageUrl:
      "https://images.unsplash.com/photo-1583454110118-64bfb941b6be?w=500&h=400&fit=crop",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-library/sample/ElephantsDream.mp4",
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
    imageUrl:
      "https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=500&h=400&fit=crop",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-library/sample/ForBiggerBlazes.mp4",
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
    imageUrl:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&h=400&fit=crop",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-library/sample/ForBiggerJoyrides.mp4",
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
    imageUrl:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=500&h=400&fit=crop",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-library/sample/ForBiggerMeltdowns.mp4",
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
];

const difficultyColors = {
  beginner: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  intermediate:
    "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
  advanced: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
};

export default function PlanDetail() {
  const { planId } = useParams<{ planId: string }>();
  const navigate = useNavigate();

  const plan = mockPlans.find((p) => p.id === planId);

  if (!plan) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container py-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Plan not found
            </h2>
            <p className="text-muted-foreground mb-6">
              The exercise plan you're looking for doesn't exist.
            </p>
            <button
              onClick={() => navigate("/")}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Plans
            </button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container py-8 md:py-12">
        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="mb-8 inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
        >
          <ArrowLeft className="h-5 w-5" />
          Back to Plans
        </button>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Video and Description */}
          <div className="lg:col-span-2">
            {/* Video Container */}
            <div className="mb-8">
              <div className="relative w-full rounded-2xl overflow-hidden bg-black aspect-video">
                <video
                  controls
                  className="w-full h-full"
                  poster={plan.imageUrl}
                >
                  <source src={plan.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Plan Title and Description */}
            <div className="mb-8 rounded-2xl border border-border bg-card p-6 md:p-8">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    {plan.title}
                  </h1>
                  <p className="text-lg text-muted-foreground">
                    {plan.description}
                  </p>
                </div>
                <span
                  className={cn(
                    "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold whitespace-nowrap",
                    difficultyColors[plan.difficulty],
                  )}
                >
                  {plan.difficulty.charAt(0).toUpperCase() +
                    plan.difficulty.slice(1)}
                </span>
              </div>

              {/* Plan Stats */}
              <div className="flex gap-6 pt-4 border-t border-border">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Duration</p>
                    <p className="font-semibold text-foreground">
                      {plan.duration} minutes
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Dumbbell className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Exercises</p>
                    <p className="font-semibold text-foreground">
                      {plan.exercises.length} movements
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Exercises List */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Exercise Sequence
              </h2>
              <div className="space-y-4">
                {plan.exercises.map((exercise, index) => (
                  <ExerciseItem
                    key={exercise.id}
                    exercise={exercise}
                    index={index + 1}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:sticky lg:top-24 lg:h-fit">
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="mb-6">
                <h3 className="font-semibold text-foreground mb-3">
                  Quick Tips
                </h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Warm up before starting this exercise plan</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Maintain proper form over speed</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Rest between exercises as needed</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Stay hydrated throughout the session</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg bg-primary/10 p-4 border border-primary/20">
                <p className="text-sm text-primary font-medium mb-2">
                  💪 Keep it up!
                </p>
                <p className="text-xs text-muted-foreground">
                  Complete this plan regularly for the best results. Consider
                  doing it 3-4 times per week.
                </p>
              </div>

              <button className="mt-6 w-full py-3 px-4 rounded-lg bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors">
                Start Session
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
