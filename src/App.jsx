import { useMemo, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import initialMovies from "./data/movies";

function App() {
  const [movies, setMovies] = useState(initialMovies);
  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);

  const filteredMovies = useMemo(() => {
    const normalizedTitle = titleFilter.trim().toLowerCase();

    return movies.filter((movie) => {
      const matchesTitle = movie.title.toLowerCase().includes(normalizedTitle);
      const matchesRating = movie.rating >= ratingFilter;
      return matchesTitle && matchesRating;
    });
  }, [movies, titleFilter, ratingFilter]);

  const addMovie = (newMovie) => {
    setMovies((currentMovies) => [
      { ...newMovie, id: crypto.randomUUID() },
      ...currentMovies,
    ]);
  };

  const resetFilters = () => {
    setTitleFilter("");
    setRatingFilter(0);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            movies={movies}
            filteredMovies={filteredMovies}
            titleFilter={titleFilter}
            ratingFilter={ratingFilter}
            onTitleChange={setTitleFilter}
            onRatingChange={setRatingFilter}
            onResetFilters={resetFilters}
            onAddMovie={addMovie}
          />
        }
      />
      <Route path="/movie/:id" element={<MovieDetail movies={movies} />} />
    </Routes>
  );
}

export default App;
