# MediPlan - Exercise Plans Application

A modern Vue.js frontend application for managing personalized exercise plans. Pre-configured for Strapi.js backend integration.

## Table of Contents

- [About](#about)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Live Preview](#live-preview)
- [Project Setup](#project-setup)
  - [Install Dependencies](#install-dependencies)
  - [Development Server](#development-server)
  - [Build for Production](#build-for-production)
  - [Type Checking](#type-checking)
- [Authentication](#authentication)
  - [Login & Logout](#login--logout)
  - [Password Reset](#password-reset)
  - [User Profile](#user-profile)
  - [Route Guards](#route-guards)
- [Plan Search & Filtering](#plan-search--filtering)
  - [Search Plans](#search-plans)
  - [Sort Options](#sort-options)
  - [Responsive Layout](#responsive-layout)
- [Project Structure](#project-structure)
- [Strapi Integration Guide](#strapi-integration-guide)
- [Component Structure](#component-structure)
- [Development Workflow](#development-workflow)
- [Deployment](#deployment)
- [IDE Setup](#ide-setup)
- [Resources](#resources)

## About

MediPlan is a responsive healthcare application that allows users to browse and follow curated exercise plans. Each plan includes a video, description, and detailed exercise sequences with duration, sets, and reps information.

## Tech Stack

- **Frontend**: Vue 3 with TypeScript
- **Styling**: Tailwind CSS
- **Routing**: Vue Router 4
- **Build Tool**: Vite
- **Backend**: Strapi.js (Node) - optional integration

## Features

- 🔐 User authentication with login and logout
- 🔑 Password reset functionality
- 👤 User profile with patient and doctor information
- 📋 Browse multiple exercise plans with difficulty levels
- 🔍 Search functionality to filter plans by name and description
- 📊 Sort and filter plans by:
  - Date added (newest or oldest)
  - Name (alphabetical or reverse)
  - Difficulty level (beginner to advanced or vice versa)
  - Duration (shortest to longest or vice versa)
- 📺 Video player for demonstration
- 💪 Detailed exercise sequences with metadata
- 📱 Fully responsive design with adaptive layouts
- 🎨 Modern healthcare-themed UI
- 🔌 Pre-configured for Strapi backend integration
- 🛡️ Route guards for authenticated pages

## Live Preview

Experience MediPlan in action:

- **Login Screen**: [Try Demo Login](https://808e5f7a97f843f78cce7a00386948cf-2d559e7e06c54b458400d3111.projects.builder.codes/login?skipAuth=true) (authenticate with demo credentials: john@example.com / demo123)
- **Dashboard**: [View Exercise Plans Dashboard](https://808e5f7a97f843f78cce7a00386948cf-2d559e7e06c54b458400d3111.projects.builder.codes/) (auto-authenticated)
- **Plan Preview**: [View Sample Plan Details](https://808e5f7a97f843f78cce7a00386948cf-2d559e7e06c54b458400d3111.projects.builder.codes/plan/1)

## Project Setup

### Install Dependencies

```sh
pnpm install
```

### Development Server

```sh
pnpm run dev
```

The app will be available at `http://localhost:8080`

### Build for Production

```sh
pnpm run build
```

### Type Checking

```sh
pnpm run typecheck
```

## Authentication

MediPlan includes a complete authentication system for user login, password reset, and profile management.

### Login & Logout

- **Login Page**: `/login` - Users can log in with email and password
- **Demo Credentials**:
  - Email: `john@example.com`
  - Password: `demo123`
- **Logout**: Available in the profile popup accessed via the profile icon in the header
- **Auth State**: Managed by `useAuth()` composable in `src/composables/useAuth.ts`
- **Session Persistence**: Auth state is persisted to localStorage

### Password Reset

- **Forgot Password Page**: `/forgot-password` - Accessible from the login page
- **Password Reset Flow**: Users enter email to request a password reset link
- **Integration Ready**: Service layer is prepared for Strapi authentication endpoints

### User Profile

- **Profile Popup**: Accessible via profile icon in header
- **Patient Tab**: Displays patient information including:
  - Patient photo
  - Name, email, phone, address
  - SNS ID
  - Assigned doctor
- **Doctor Tab**: Shows healthcare provider information including:
  - Doctor photo
  - Name, specialization, age
  - Email, phone, address
- **Logout Button**: Easy logout from the profile popup

### Route Guards

- **Protected Routes**: Home (`/`) and plan detail pages require authentication
- **Automatic Redirect**: Unauthenticated users are redirected to `/login`
- **Session Check**: Auth status is verified on every route change
- **Guard Configuration**: See `src/router.ts` for route definitions

## Plan Search & Filtering

MediPlan includes powerful search and filtering capabilities to help users find the right exercise plans.

### Search Plans

Users can search for plans by name or description using the search bar on the home page:

- Real-time filtering as you type
- Searches across plan title and description fields
- Case-insensitive matching

### Sort Options

Plans can be sorted by:

1. **Date Added**
   - Newest first (default)
   - Oldest first

2. **Name**
   - Alphabetical (A-Z)
   - Reverse alphabetical (Z-A)

3. **Difficulty**
   - Beginner → Intermediate → Advanced
   - Advanced → Intermediate → Beginner

4. **Duration**
   - Shortest first
   - Longest first

### Responsive Layout

The search and sort controls adapt to different screen sizes:

- **Mobile** (< 768px): Both elements stack vertically at full width
- **Tablet** (768px - 1024px): Side-by-side at 50% width each
- **Desktop** (> 1024px): Search bar takes 2/3 width, sort dropdown takes 1/3 width

The responsive layout is implemented using Tailwind CSS utility classes:

```html
<div class="flex flex-col md:flex-row gap-3">
  <div class="relative w-full md:w-1/2 lg:w-2/3">
    <!-- Search input -->
  </div>
  <select class="w-full md:w-1/2 lg:w-1/3">
    <!-- Sort options -->
  </select>
</div>
```

## Project Structure

```
src/
├── components/        # Reusable Vue components
├── composables/       # Vue composables (usePlans, etc.)
├── config/           # Configuration files (API config)
├── data/             # Mock data
├── services/         # API service layer
���── types.ts          # TypeScript type definitions
├── views/            # Page components
├── App.vue           # Root component
├── global.css        # Global styles and theme
├── main.ts           # Application entry point
└── router.ts         # Vue Router configuration
```

## Design System

### Colors

- **Primary**: Blue color scheme (#0284c7)
- **Neutral**: Grays for text and backgrounds (#f9fafb for main background)
- **Red**: Alert and action colors (#dc2626)
- **White**: Cards and interactive elements

### Layout

- **Max Width Constraint**: `max-w-7xl` for consistent centered layouts
- **Responsive Padding**: `px-4 sm:px-6 lg:px-8` across all screen sizes
- **Background**: App uses `bg-neutral-50` (rgb(249 250 251)) for main viewport
- **Cards & Headers**: White (`bg-white`) for contrast

## Strapi Integration Guide

This application is pre-configured to work with a Strapi.js backend. Currently, it uses mock data for demonstration.

### Current State

The app uses **mock data** located in `src/data/mockPlans.ts` to demonstrate UI and functionality.

### Integration Steps

#### 1. Set Strapi URL

Create a `.env.local` file in the project root:

```env
VITE_API_URL=http://your-strapi-server:1337/api
```

The app will automatically use this URL for all API calls.

#### 2. Update plansService

The API integration point is in `src/services/plansService.ts`. This service currently returns mock data but has TODO comments showing where to replace with actual Strapi API calls.

To integrate with Strapi, uncomment the actual API calls in:

- `getPlans()` - Fetches all plans
- `getPlanById()` - Fetches a single plan by ID

#### 3. Authentication

Authentication is implemented using the `useAuth()` composable in `src/composables/useAuth.ts`. To integrate with Strapi:

**Login Integration:**

```typescript
// In src/composables/useAuth.ts, update the login method:
const response = await fetch(`${API_URL}/auth/local`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ identifier: email, password }),
});
const data = await response.json();
localStorage.setItem("authToken", data.jwt);
localStorage.setItem("user", JSON.stringify(data.user));
```

**Protected Requests with Bearer Token:**
Add bearer token to protected requests in `src/services/plansService.ts`:

```typescript
const token = localStorage.getItem("authToken");
const headers = {
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json",
};
const response = await fetch(url, { headers });
```

**Password Reset:**
Integrate with Strapi's forgot-password endpoint:

```typescript
POST /auth/forgot-password
Content-Type: application/json

{ "email": "user@example.com" }
```

**Route Protection:**
Protected routes are configured in `src/router.ts` with `beforeEach` guard that checks auth status and redirects to `/login` if needed.

#### 4. Data Posting (Future)

When you're ready to add create/update functionality, extend the `plansService.ts` with new methods:

```typescript
async createPlan(planData: Plan): Promise<Plan>
async updatePlan(id: string, planData: Plan): Promise<Plan>
async deletePlan(id: string): Promise<void>
```

### API Architecture

- **src/config/api.ts** - API configuration and endpoints
- **src/services/plansService.ts** - Service layer for all API calls
- **src/composables/usePlans.ts** - Vue composable for plans data fetching and management
- **src/data/mockPlans.ts** - Mock data (easily replaceable with API calls)
- **src/types.ts** - TypeScript interfaces (Plan, Exercise, etc.)

### Expected Strapi Collection Structure

When you set up your Strapi backend, ensure your `plans` collection has these fields:

**Plans Collection:**

- `title` (String) - Plan name
- `description` (String) - Plan description
- `duration` (Number) - Duration in minutes
- `difficulty` (Enum) - Options: beginner, intermediate, advanced
- `imageUrl` (String) - URL to plan image
- `videoUrl` (String) - URL to demonstration video
- `exercises` (Relation or Component) - Related exercises

**Exercise Fields:**

- `name` (String) - Exercise name
- `description` (String) - Exercise description
- `duration` (Number) - Duration in seconds
- `reps` (Number, optional) - Number of repetitions
- `sets` (Number, optional) - Number of sets

## Environment Variables

Create a `.env.local` file with:

```env
# Strapi API endpoint
VITE_API_URL=http://localhost:1337/api
```

See `.env.example` for more options.

## Component Structure

### Header

Navigation component with app branding, profile icon, and responsive layout using max-width constraint for consistency. Sticky positioning with white background and subtle shadow.

### Footer

Application footer component displaying "Developed at FCTUC" with the current year. Automatically updates the year using `new Date().getFullYear()`. Consistent styling with max-width constraint matching the header and content areas.

### Login View

Authentication page with:

- Email and password inputs
- Demo credentials display
- "Forgot Password?" link
- Footer with version information

### Forgot Password View

Password reset page with:

- Email input for password reset request
- Success/error message display
- "Back to Login" link
- Consistent card layout

### Home View

Main page displaying a grid of exercise plans with:

- Search functionality to filter plans
- Responsive grid layout
- Plan cards with difficulty badges

### Plan Detail View

Detailed page showing:

- Video player
- Plan description and metadata
- Complete exercise sequence
- Quick tips sidebar
- Start session button

### ProfilePopup Component

User profile modal featuring:

- Circular user photos (patient and doctor)
- Two tabs: Patient and Doctor information
- Patient details: name, email, phone, address, SNS ID, doctor name
- Doctor details: name, specialization, age, email, phone, address
- Logout button with logout functionality
- Close button for modal dismissal
- Centered modal with dimmed background

### PlanCard

Reusable card component for displaying plan previews in a grid with:

- Plan image with overlay
- Difficulty badge
- Plan title and description
- Exercise count and duration
- Hover effects

### ExerciseItem

Component for displaying individual exercises in a sequence list.

## Development Workflow

1. Mock data is used by default
2. Components fetch data using the `usePlans` composable
3. The service layer (`plansService`) handles all API logic
4. When switching to real API, only `plansService.ts` needs to be updated
5. All components remain unchanged

## Deployment

The app builds to a static site and can be deployed to any static hosting:

```sh
pnpm run build
```

This creates a `dist` folder ready for deployment to Netlify, Vercel, GitHub Pages, etc.

## IDE Setup

Recommended setup for development:

- [VSCode](https://code.visualstudio.com/)
- [Volar Extension](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- Disable Vetur if installed

## Resources

- [Vue 3 Documentation](https://vuejs.org/)
- [Vite Documentation](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vue Router](https://router.vuejs.org/)
- [Strapi Documentation](https://strapi.io/documentation)

## License

MIT
