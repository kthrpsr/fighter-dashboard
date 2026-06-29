# Fighter's Dashboard — React Component Assignment

A single-page React application for logging and tracking combat sports training sessions.

## Tech Stack
- React 18 (functional components + hooks)
- Vite (build tool)
- Plain CSS modules (no framework)

## Component Architecture

```
App (root state: workouts[], view, darkMode)
├── Header          — nav + theme toggle, receives view/darkMode via props
└── Dashboard       — receives workouts[] + callbacks via props
    ├── StatsSummary    — derived stats computed from workouts[]
    ├── AddWorkoutForm  — controlled form, calls onAdd() on submit
    └── WorkoutLog      — .map() renders workout list, filter state internal
About               — static info view, conditionally rendered
```

## Requirements Checklist
- [x] 5+ distinct functional components (App, Header, Dashboard, StatsSummary, AddWorkoutForm, WorkoutLog, About)
- [x] Props data flow (workouts[], callbacks passed parent → child)
- [x] useState in 3+ meaningful ways (view, workouts[], darkMode, form fields, open toggle, filter)
- [x] Controlled form (AddWorkoutForm — all inputs driven by React state)
- [x] 2 views (Dashboard / About) switched with useState string flag
- [x] Dynamic list rendering via .map() (WorkoutLog, filter buttons, discipline cards)
- [x] CSS theming (dark/light via CSS custom properties)

## Running Locally

```bash
npm install
npm run dev
```

## Building

```bash
npm run build
```
