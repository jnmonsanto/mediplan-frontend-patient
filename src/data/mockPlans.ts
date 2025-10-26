import type { Plan } from "../types";

export const mockPlans: Plan[] = [
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
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&h=400&fit=crop",
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
