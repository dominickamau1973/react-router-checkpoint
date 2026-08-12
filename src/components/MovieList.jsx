import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  if (movies.length === 0) {
    return (
      <div className="empty-state">
        <span>🎬</span>
        <h2>No movies found</h2>
        <p>Try changing the title or minimum rating.</p>
      </div>
    );
  }

  return (
    <section className="movie-grid" aria-label="Movie list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </section>
  );
}

export default MovieList;
