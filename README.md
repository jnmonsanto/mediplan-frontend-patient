# MediPlan - Exercise Plans Application

A modern Vue.js frontend application for managing personalized exercise plans. Pre-configured for Strapi.js backend integration.

## About

MediPlan is a responsive healthcare application that allows users to browse and follow curated exercise plans. Each plan includes a video, description, and detailed exercise sequences with duration, sets, and reps information.

## Tech Stack

- **Frontend**: Vue 3 with TypeScript
- **Styling**: Tailwind CSS
- **Routing**: Vue Router 4
- **Build Tool**: Vite
- **Backend**: Strapi.js (Node) - optional integration

## Features

- 📋 Browse multiple exercise plans with difficulty levels
- 🔍 Search functionality to filter plans
- 📺 Video player for demonstration
- 💪 Detailed exercise sequences with metadata
- 📱 Fully responsive design
- 🎨 Modern healthcare-themed UI
- 🔌 Pre-configured for Strapi backend integration

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

## Project Structure

```
src/
├── components/        # Reusable Vue components
├── composables/       # Vue composables (usePlans, etc.)
├── config/           # Configuration files (API config)
├── data/             # Mock data
├── services/         # API service layer
├── types.ts          # TypeScript type definitions
├── views/            # Page components
├── App.vue           # Root component
├── global.css        # Global styles and theme
├── main.ts           # Application entry point
└── router.ts         # Vue Router configuration
```

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

#### 3. Authentication (Future)

When authentication is implemented, add the Bearer token to requests in `src/services/plansService.ts`:

```typescript
const headers = {
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json",
};

const response = await fetch(url, { headers });
```

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

Navigation component with app branding and links.

### Home View

Main page displaying a grid of exercise plans with search functionality.

### Plan Detail View

Detailed page showing:

- Video player
- Plan description and metadata
- Complete exercise sequence
- Quick tips sidebar
- Start session button

### PlanCard

Reusable card component for displaying plan previews in a grid.

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
