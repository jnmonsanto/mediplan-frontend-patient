# Strapi Integration Guide

This MediPlan application is pre-configured to work with a Strapi.js (Node) backend.

## Current State

The app currently uses **mock data** located in `src/data/mockPlans.ts` to demonstrate the UI and functionality.

## Integration Steps

### 1. Set Strapi URL

Create a `.env.local` file in the project root:

```env
VITE_API_URL=http://your-strapi-server:1337/api
```

The app will use this URL for all API calls.

### 2. Update plansService

The API integration point is in `src/services/plansService.ts`. This service currently returns mock data but has TODO comments showing where to replace with actual Strapi API calls.

To integrate with Strapi, uncomment the actual API calls in:

- `getPlans()` - Fetches all plans
- `getPlanById()` - Fetches a single plan

### 3. Authentication

Authentication is now implemented using the `useAuth()` composable in `src/composables/useAuth.ts`.

**Login with Strapi:**

```typescript
// Update src/composables/useAuth.ts login() method:
const response = await fetch(`${API_URL}/auth/local`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ identifier: email, password }),
});
const data = await response.json();
localStorage.setItem("authToken", data.jwt);
localStorage.setItem("user", JSON.stringify(data.user));
isAuthenticated.value = true;
```

**Protected API Calls with Bearer Token:**

```typescript
// In src/services/plansService.ts:
const token = localStorage.getItem("authToken");
const headers = {
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json",
};
const response = await fetch(url, { headers });
```

**Password Reset:**

```typescript
// POST to Strapi forgot-password endpoint:
POST /auth/forgot-password
{ "email": "user@example.com" }
```

**Route Guards:**

- Protected routes check authentication status via `beforeEach` guard in `src/router.ts`
- Unauthenticated users are redirected to `/login`
- Auth status persists via localStorage

### 4. Frontend Search and Sorting

The application includes built-in search and sorting capabilities:

**Search:** Users can search plans by title or description in real-time.

**Sorting Options:** Plans can be sorted by:
- Date added (newest or oldest)
- Name (alphabetical or reverse)
- Difficulty (beginner to advanced or vice versa)
- Duration (shortest to longest or vice versa)

These features are implemented in `src/views/Home.vue` and work with both mock data and live Strapi data automatically.

### 5. Data Posting (Future)

When you're ready to add create/update functionality, extend the `plansService.ts` with new methods:

```typescript
async createPlan(planData: Plan): Promise<Plan>
async updatePlan(id: string, planData: Plan): Promise<Plan>
async deletePlan(id: string): Promise<void>
```

## Architecture

- **src/config/api.ts** - API configuration and endpoints
- **src/services/plansService.ts** - Service layer for all API calls
- **src/composables/usePlans.ts** - Vue composable for plans data fetching
- **src/composables/useAuth.ts** - Vue composable for authentication
- **src/data/mockPlans.ts** - Mock data (easily replaceable with API calls)
- **src/views/Home.vue** - Plans listing with search and sort functionality
- **src/types.ts** - TypeScript interfaces (Plan, Exercise, Patient, Doctor, etc.)
- **src/router.ts** - Route definitions and auth guards

## Expected Strapi Collection Structure

When you set up your Strapi backend, ensure your `plans` collection has these fields:

- `title` (String)
- `description` (String)
- `duration` (Number)
- `difficulty` (Enum: beginner, intermediate, advanced)
- `imageUrl` (String)
- `videoUrl` (String)
- `exercises` (Relation or Component with Exercise data)

Each exercise should have:

- `name` (String)
- `description` (String)
- `duration` (Number)
- `reps` (Number, optional)
- `sets` (Number, optional)
