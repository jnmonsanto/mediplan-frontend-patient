import type { Plan, Exercise, PlanExercise, Doctor, Patient } from "../types";

// Mock doctors
export const mockDoctors: Doctor[] = [
  {
    id: "doc-1",
    name: "Dr. Sarah Johnson",
    email: "sarah@mediplan.com",
    phone: "+1 (555) 123-4567",
    address: "123 Medical Center Dr, Boston, MA 02115",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    specialization: "Sports Medicine",
    age: 42,
  },
];

// Mock patients
export const mockPatients: Patient[] = [
  {
    id: "patient-1",
    doctorId: "doc-1",
    doctor: mockDoctors[0],
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 (555) 987-6543",
    address: "456 Main St, Boston, MA 02116",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    snsId: "SNS-123456",
  },
];

// Mock exercises
export const mockExercises: Exercise[] = [
  // Plan 1 exercises
  {
    id: "ex-1-1",
    doctorId: "doc-1",
    name: "Arm Circles",
    description: "Rotate your arms in big circles to warm up shoulders",
    jsonData: { duration: 30, type: "warm-up" },
  },
  {
    id: "ex-1-2",
    doctorId: "doc-1",
    name: "Leg Swings",
    description: "Swing legs forward and backward to loosen hip joints",
    jsonData: { duration: 30, type: "warm-up" },
  },
  {
    id: "ex-1-3",
    doctorId: "doc-1",
    name: "Jumping Jacks",
    description: "Full body warm-up exercise",
    jsonData: { duration: 45, type: "cardio" },
  },
  {
    id: "ex-1-4",
    doctorId: "doc-1",
    name: "Torso Twist",
    description: "Warm up your core by rotating your torso",
    jsonData: { duration: 30, type: "warm-up" },
  },
  // Plan 2 exercises
  {
    id: "ex-2-1",
    doctorId: "doc-1",
    name: "Push-ups",
    description: "Classic upper body strength exercise",
    jsonData: { duration: 45, type: "strength" },
  },
  {
    id: "ex-2-2",
    doctorId: "doc-1",
    name: "Shoulder Press",
    description: "Strengthen shoulders and upper chest",
    jsonData: { duration: 45, type: "strength" },
  },
  {
    id: "ex-2-3",
    doctorId: "doc-1",
    name: "Bicep Curls",
    description: "Isolate and strengthen biceps",
    jsonData: { duration: 40, type: "strength" },
  },
  {
    id: "ex-2-4",
    doctorId: "doc-1",
    name: "Plank Hold",
    description: "Core and shoulder stabilizer",
    jsonData: { duration: 60, type: "isometric" },
  },
  // Plan 3 exercises
  {
    id: "ex-3-1",
    doctorId: "doc-1",
    name: "Squats",
    description: "Fundamental lower body exercise",
    jsonData: { duration: 45, type: "strength" },
  },
  {
    id: "ex-3-2",
    doctorId: "doc-1",
    name: "Lunges",
    description: "Single leg strength and balance",
    jsonData: { duration: 40, type: "strength" },
  },
  {
    id: "ex-3-3",
    doctorId: "doc-1",
    name: "Glute Bridges",
    description: "Activate and strengthen glutes",
    jsonData: { duration: 45, type: "strength" },
  },
  {
    id: "ex-3-4",
    doctorId: "doc-1",
    name: "Calf Raises",
    description: "Target calf muscles",
    jsonData: { duration: 30, type: "strength" },
  },
  // Plan 4 exercises
  {
    id: "ex-4-1",
    doctorId: "doc-1",
    name: "Forward Fold",
    description: "Stretch hamstrings and lower back",
    jsonData: { duration: 60, type: "flexibility" },
  },
  {
    id: "ex-4-2",
    doctorId: "doc-1",
    name: "Cat-Cow Stretch",
    description: "Mobilize spine and warm up core",
    jsonData: { duration: 45, type: "flexibility" },
  },
  {
    id: "ex-4-3",
    doctorId: "doc-1",
    name: "Child's Pose",
    description: "Relax and stretch shoulders and back",
    jsonData: { duration: 60, type: "flexibility" },
  },
  {
    id: "ex-4-4",
    doctorId: "doc-1",
    name: "Pigeon Pose",
    description: "Deep hip opener and flexibility",
    jsonData: { duration: 45, type: "flexibility" },
  },
  // Plan 5 exercises
  {
    id: "ex-5-1",
    doctorId: "doc-1",
    name: "Dead Bug",
    description: "Core stability and coordination",
    jsonData: { duration: 40, type: "core" },
  },
  {
    id: "ex-5-2",
    doctorId: "doc-1",
    name: "Russian Twists",
    description: "Oblique and rotational core strength",
    jsonData: { duration: 45, type: "core" },
  },
  {
    id: "ex-5-3",
    doctorId: "doc-1",
    name: "Leg Raises",
    description: "Lower abdominal strength",
    jsonData: { duration: 40, type: "core" },
  },
  {
    id: "ex-5-4",
    doctorId: "doc-1",
    name: "Mountain Climbers",
    description: "Dynamic core and cardio combination",
    jsonData: { duration: 45, type: "cardio" },
  },
];

export const mockPlans: Plan[] = [
  {
    id: "1",
    doctorId: "doc-1",
    doctor: mockDoctor,
    patientId: "patient-1",
    patient: mockPatient,
    title: "Full Body Warm-up",
    description: "Get your body ready with dynamic stretching and light cardio",
    difficulty: "beginner",
    imageUrl:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&h=400&fit=crop",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-library/sample/BigBuckBunny.mp4",
    exercises: [
      {
        exerciseId: "ex-1-1",
        sets: 2,
        repetitions: 0,
        duration: 30,
        exercise: mockExercises[0],
      },
      {
        exerciseId: "ex-1-2",
        sets: 0,
        repetitions: 15,
        duration: 30,
        exercise: mockExercises[1],
      },
      {
        exerciseId: "ex-1-3",
        sets: 0,
        repetitions: 30,
        duration: 45,
        exercise: mockExercises[2],
      },
      {
        exerciseId: "ex-1-4",
        sets: 2,
        repetitions: 0,
        duration: 30,
        exercise: mockExercises[3],
      },
    ],
    score: 85,
    rating: 4.5,
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-01-15"),
    duration: 0, // Calculated from exercises
  },
  {
    id: "2",
    doctorId: "doc-1",
    doctor: mockDoctor,
    patientId: "patient-1",
    patient: mockPatient,
    title: "Upper Body Strength",
    description: "Build strength in shoulders, arms, and chest with resistance",
    difficulty: "intermediate",
    imageUrl:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&h=400&fit=crop",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-library/sample/ElephantsDream.mp4",
    exercises: [
      {
        exerciseId: "ex-2-1",
        sets: 3,
        repetitions: 12,
        duration: 45,
        exercise: mockExercises[4],
      },
      {
        exerciseId: "ex-2-2",
        sets: 3,
        repetitions: 10,
        duration: 45,
        exercise: mockExercises[5],
      },
      {
        exerciseId: "ex-2-3",
        sets: 3,
        repetitions: 12,
        duration: 40,
        exercise: mockExercises[6],
      },
      {
        exerciseId: "ex-2-4",
        sets: 3,
        repetitions: 0,
        duration: 60,
        exercise: mockExercises[7],
      },
    ],
    score: 90,
    rating: 4.7,
    createdAt: new Date("2024-01-20"),
    updatedAt: new Date("2024-01-20"),
    duration: 0, // Calculated from exercises
  },
  {
    id: "3",
    doctorId: "doc-1",
    doctor: mockDoctor,
    patientId: "patient-1",
    patient: mockPatient,
    title: "Lower Body Conditioning",
    description: "Strengthen legs and improve lower body endurance",
    difficulty: "intermediate",
    imageUrl:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=500&h=400&fit=crop",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-library/sample/ForBiggerBlazes.mp4",
    exercises: [
      {
        exerciseId: "ex-3-1",
        sets: 3,
        repetitions: 15,
        duration: 45,
        exercise: mockExercises[8],
      },
      {
        exerciseId: "ex-3-2",
        sets: 2,
        repetitions: 12,
        duration: 40,
        exercise: mockExercises[9],
      },
      {
        exerciseId: "ex-3-3",
        sets: 3,
        repetitions: 15,
        duration: 45,
        exercise: mockExercises[10],
      },
      {
        exerciseId: "ex-3-4",
        sets: 3,
        repetitions: 20,
        duration: 30,
        exercise: mockExercises[11],
      },
    ],
    score: 88,
    rating: 4.6,
    createdAt: new Date("2024-02-01"),
    updatedAt: new Date("2024-02-01"),
    duration: 0, // Calculated from exercises
  },
  {
    id: "4",
    doctorId: "doc-1",
    doctor: mockDoctor,
    patientId: "patient-1",
    patient: mockPatient,
    title: "Flexibility & Mobility",
    description: "Improve range of motion and reduce muscle tension",
    difficulty: "beginner",
    imageUrl:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&h=400&fit=crop",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-library/sample/ForBiggerJoyrides.mp4",
    exercises: [
      {
        exerciseId: "ex-4-1",
        sets: 0,
        repetitions: 0,
        duration: 60,
        exercise: mockExercises[12],
      },
      {
        exerciseId: "ex-4-2",
        sets: 0,
        repetitions: 10,
        duration: 45,
        exercise: mockExercises[13],
      },
      {
        exerciseId: "ex-4-3",
        sets: 0,
        repetitions: 0,
        duration: 60,
        exercise: mockExercises[14],
      },
      {
        exerciseId: "ex-4-4",
        sets: 0,
        repetitions: 0,
        duration: 45,
        exercise: mockExercises[15],
      },
    ],
    score: 82,
    rating: 4.4,
    createdAt: new Date("2024-02-10"),
    updatedAt: new Date("2024-02-10"),
    duration: 0, // Calculated from exercises
  },
  {
    id: "5",
    doctorId: "doc-1",
    doctor: mockDoctor,
    patientId: "patient-1",
    patient: mockPatient,
    title: "Core Activation",
    description: "Strengthen your core for better stability and posture",
    difficulty: "advanced",
    imageUrl:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=500&h=400&fit=crop",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-library/sample/ForBiggerMeltdowns.mp4",
    exercises: [
      {
        exerciseId: "ex-5-1",
        sets: 3,
        repetitions: 12,
        duration: 40,
        exercise: mockExercises[16],
      },
      {
        exerciseId: "ex-5-2",
        sets: 3,
        repetitions: 20,
        duration: 45,
        exercise: mockExercises[17],
      },
      {
        exerciseId: "ex-5-3",
        sets: 3,
        repetitions: 10,
        duration: 40,
        exercise: mockExercises[18],
      },
      {
        exerciseId: "ex-5-4",
        sets: 3,
        repetitions: 20,
        duration: 45,
        exercise: mockExercises[19],
      },
    ],
    score: 92,
    rating: 4.8,
    createdAt: new Date("2024-02-15"),
    updatedAt: new Date("2024-02-15"),
    duration: 0, // Calculated from exercises
  },
];
