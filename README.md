# Movie App

A responsive movie browser built with React and TypeScript. The app lets users search for movies, browse trending titles, explore movie categories, and open dedicated movie details pages. Movie data is provided by The Movie Database (TMDB) API.

## Demo

Live demo: https://movie-app-iota-fawn-79.vercel.app

## Features

- Search movies by title
- Debounced search input
- Browse trending movies
- Horizontal trending movies carousel
- Browse movie categories
- Open a category page with movies from the selected category
- Open a movie details page
- Responsive layout styled with Tailwind CSS
- Client-side routing with React Router

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Axios
- TMDB API

## Getting Started

### Prerequisites

- Node.js
- npm
- TMDB API key

### Installation

Clone the repository:

```bash
git clone https://github.com/werbel7777/movie-app.git
cd movie-app
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the project root:

```env
VITE_TMDB_BASE_URL=https://api.themoviedb.org/3
VITE_TMDB_API_KEY=your_tmdb_api_key
```

Start the development server:

```bash
npm run dev
```

## Available Scripts

```bash
npm run dev
```

Runs the app in development mode.

```bash
npm run build
```

Builds the app for production.

```bash
npm run lint
```

Runs ESLint checks.

```bash
npm run preview
```

Previews the production build locally.

## Project Structure

```text
src/
  components/   Reusable UI components
  hooks/        Custom React hooks
  pages/        Route-level pages
  services/     API service functions
  types/        Shared TypeScript types
```

## Environment Variables

| Variable | Description |
| --- | --- |
| `VITE_TMDB_BASE_URL` | Base URL for the TMDB API |
| `VITE_TMDB_API_KEY` | API key used to access TMDB data |

## Roadmap

- Add background images to category tiles
- Improve loading and empty states
- Add richer movie metadata
- Improve mobile layout and accessibility
- Add pagination or infinite scrolling

## Author

Created by [werbel7777](https://github.com/werbel7777).
