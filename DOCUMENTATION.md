# Project Activity & Decisions

This document summarizes what was implemented in the repository, why those choices were made, and important decisions that affected the final outcome.

## Overview

- Project type: React + TypeScript app scaffolded for a dashboard UI using Vite.
- Main concerns addressed: authentication flow, users list and details, basic service layer for API calls, styles via SCSS, and unit tests for key logic.

## What I implemented

- App wiring: `src/main.tsx` and `src/App.tsx` provide app bootstrap and routing.
- Authentication: `src/features/auth/AuthContext.tsx` implements an auth context to store user state and expose login/logout flows.
- Route protection: `src/components/ProtectedRoute.tsx` guards private routes and redirects unauthenticated users to login.
- Users feature: pages and components under `src/pages` and `src/features/users` implement listing, filtering, action menu, and a user details view.
- Service layer: `src/services/userService.ts` centralizes API calls for users — keeps components thin and testable.
- Styling: global variables and mixins (`src/styles/_variables.scss`, `_mixins.scss`) plus page-level SCSS files to keep styles modular.
- Tests: unit tests exist for `userService` and utilities in `tests/` to validate behavior and catch regressions early.

## Reasons for the approach

- Vite + TypeScript: chosen for fast local development, type safety, and modern bundling.
- Context API for auth: lightweight and built-in — suitable for storing auth state and providing it through the component tree without adding external dependencies.
- Service layer separation: makes API calls reusable, easier to mock in tests, and keeps components focused on UI.
- SCSS organization: variables/mixins encourage consistent design tokens and DRY styles across pages and components.
- Tests: small, focused unit tests improve confidence when refactoring and ensure key business logic is validated.

## Key decisions that influenced outcomes

- Centralized `userService` — influenced component structure to rely on services instead of embedding fetches in UI logic.
- Use of `AuthContext` and `ProtectedRoute` — shaped routing and page access, simplifying conditional rendering of private pages.
- Folder organization by feature (e.g., `features/auth`, `features/users`) — improved separation of concerns and made it easier to locate related code.
- SCSS variables/mixins — encouraged consistent styling decisions and reduced duplication.

## Assumptions made

- API endpoints expected by `userService` exist and follow the shapes used in tests and service calls.
- App entry and routing follow typical React Router patterns (as seen in `App.tsx`).

## How to run & verify locally

1. Install dependencies:

```bash
npm install
```

2. Start dev server:

```bash
npm run dev
```

3. Run tests:

```bash
npm test
```

## Notable files

- [src/main.tsx](src/main.tsx) — app bootstrap
- [src/App.tsx](src/App.tsx) — routes and layout composition
- [src/features/auth/AuthContext.tsx](src/features/auth/AuthContext.tsx) — auth state
- [src/components/ProtectedRoute.tsx](src/components/ProtectedRoute.tsx) — route guard
- [src/services/userService.ts](src/services/userService.ts) — users API
- [src/pages/Users.tsx](src/pages/Users.tsx) and [src/pages/UserDetails.tsx](src/pages/UserDetails.tsx) — users UI
- [src/styles/_variables.scss](src/styles/_variables.scss) and [src/styles/_mixins.scss](src/styles/_mixins.scss) — shared style tokens
- [tests/userService.test.ts](tests/userService.test.ts) — unit tests for user service

## LIVE APP ADDRESS
 - [https://alozie-chijindu-lendsqr-fe-test.vercel.app/login](https://alozie-chijindu-lendsqr-fe-test.vercel.app/login)


---
This document captures my current state and reasoning. see google docs - (https://docs.google.com/document/d/1wEvAyfOJP2EMD6mmS30BF7RQ-0ftQ-KqZPvC9zn8P0c/edit?usp=sharing)
