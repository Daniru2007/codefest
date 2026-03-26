# Codefest E-Learning Platform

This repository contains the project built for the SLIIT Codefest 2022 hackathon (2nd place). It combines a React frontend with a PHP authentication backend to deliver an online learning experience for school students.

## Features

- **Landing experience with navigation**
  - Home page with animated hero text and quick links to all learning modules.
  - Responsive navigation to Home, Study, Time Management, and About Us.

- **Study module (Grade-based learning)**
  - Grade selection flow (Grades 6–9).
  - Subject-level navigation for each grade.
  - Lesson pages with embedded YouTube videos and additional learning links.
  - Built-in quiz flow per lesson using multiple-choice quizzes.

- **Time management module**
  - Create study projects with total days/hours/minutes.
  - Add subjects and assign subject difficulty/weight.
  - Automatic study-time distribution across subjects.
  - Per-project timer view and visual analytics (pie/radial charts).
  - Save/update/delete projects with data persisted through JSON Server.

- **Discussion module**
  - Real-time discussion board powered by Firebase Firestore.
  - Post messages with username and live updates for all participants.

- **Educational news feed**
  - Fetches education-related news articles from NewsCatcher API.
  - Displays article title, summary, author, and link.

- **Authentication backend (PHP + MySQL)**
  - User registration and login.
  - Email verification workflow for new accounts.
  - Forgot-password flow with email reset link.
  - Profile and account management pages.

## Tech Stack

- **Frontend:** React, Vite, React Router, Recharts, Firebase, React Icons
- **Local data/API mock:** JSON Server (`frontend/database/users.json`)
- **Auth backend:** PHP, MySQL, PHPMailer

## Project Structure

- `frontend/` – React app (learning modules, timers, news feed, discussion UI)
- `backend/` and `3/` – PHP authentication and user-account related flows

## Run Locally (Frontend)

```bash
cd frontend
npm install
npm run json   # starts json-server at localhost:3000
npm run dev    # starts Vite dev server
```

## Notes

- Some modules rely on local endpoints and service keys (JSON Server, Firebase, News API, PHP backend), so environment setup is required for full end-to-end functionality.
