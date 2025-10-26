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

### 3. Authentication (Future)

When authentication is implemented, add the Bearer token to requests in `plansService.ts`:

```typescript
const headers = {
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json",
};
```

### 4. Data Posting (Future)

When you're ready to add create/update functionality, extend the `plansService.ts` with new methods:

```typescript
async createPlan(planData: MediPlan): Promise<MediPlan>
async updatePlan(id: string, planData: MediPlan): Promise<MediPlan>
async deletePlan(id: string): Promise<void>
```

## Architecture

- **src/config/api.ts** - API configuration and endpoints
- **src/services/plansService.ts** - Service layer for all API calls
- **src/composables/usePlans.ts** - Vue composable for plans data fetching
- **src/data/mockPlans.ts** - Mock data (easily replaceable with API calls)
- **src/types.ts** - TypeScript interfaces (MediPlan, Exercise, etc.)

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
