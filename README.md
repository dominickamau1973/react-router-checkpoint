# Movie Night — React Hooks Checkpoint

A movie and TV show collection built with React. Users can add a title and filter the collection by title or minimum rating.

## Features

- Display movies using reusable `MovieCard` and `MovieList` components
- Add a new movie with a title, description, poster URL, and rating
- Search for movies by title (case-insensitive)
- Filter movies using a minimum rating
- Reset all filters
- Responsive layout for desktop, tablet, and mobile
- Form validation for missing fields and ratings outside 0–10

## Components

- `MovieCard.jsx` displays one movie.
- `MovieList.jsx` maps the movie array into cards.
- `Filter.jsx` contains the title and rating filters.
- `AddMovie.jsx` contains the controlled form used to add a movie.
- `App.jsx` owns the main state and passes data/functions to child components through props.

## Hooks used

- `useState` stores the movies, filters, form values, and validation message.
- `useMemo` recalculates the filtered list only when the movies or filter values change.

## Run the project

1. Open a terminal in the `movie-app` folder.
2. Install the packages:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the local URL displayed in the terminal (normally `http://localhost:5173`).

## How the filtering works

Each movie is kept only when both conditions are true:

1. Its lowercase title contains the lowercase search text.
2. Its rating is greater than or equal to the selected minimum rating.

The original `movies` state is never modified by filtering; React only passes the derived `filteredMovies` array to `MovieList`.
