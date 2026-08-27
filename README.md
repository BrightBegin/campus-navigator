# Campus Navigator

A website prototype to help first-year university students — especially those coming from unfamiliar backgrounds — navigate campuses, courses, and student housing in one place.

## The problem

Many first-year students arrive at university with little knowledge of their campus, available courses per campus, safe places to stay, or nearby essential facilities. Existing resources are scattered across different sites, word-of-mouth, or not available at all. Campus Navigator aims to bring this information together and help students make informed housing decisions.

## Current features (prototype, Wits University only)

- **Campus & course browser** — view each campus and the courses offered there
- **Residence listings** — price range, distance to campus, safety score, and key facts per residence
- **Priority-based filtering** — weight what matters most to you (price, safety, distance) using sliders, and residences re-rank live based on your preferences

## Planned features

- Nearby facilities (clinics, police stations, stores) per residence
- Support for additional universities beyond Wits
- Verified-resident safety reviews
- NSFAS-accreditation filtering
- Orientation and first-week checklist info

## Tech stack

- React (via Vite)
- Plain JSON as a mock dataset (no backend yet — this is a prototype)

## Running locally

```bash
git clone https://github.com/BrightBegin/campus-navigator.git
cd campus-navigator
npm install
npm run dev
```

Then open the local URL shown in your terminal (usually `http://localhost:5173`).

## Status

This is an early-stage prototype built to validate the core concept before further development and potential publishing.