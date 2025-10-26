# fusion-vue-tailwind-starter

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
# Architecture for Strapi Integration:

✅ src/config/api.ts - API configuration with VITE_API_URL environment variable support
✅ src/services/plansService.ts - Service layer with TODO comments for Strapi integration
✅ src/composables/usePlans.ts - Vue composable for fetching and managing plans
✅ src/data/mockPlans.ts - All mock data centralized (easily replaceable)
✅ .env.example - Template for Strapi URL configuration
✅ STRAPI_INTEGRATION.md - Complete integration guide
How to Integrate Later:

Set VITE_API_URL in your .env.local file pointing to your Strapi server
Uncomment the actual fetch calls in plansService.ts
The composable and all components will automatically use the Strapi API
The app still displays all functionality with mock data, and when you're ready to connect Strapi, it's just a matter of updating the service methods—no component changes needed!
