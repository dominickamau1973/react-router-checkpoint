import { Link } from "react-router-dom";
import AddMovie from "../components/AddMovie";
import Filter from "../components/Filter";
import MovieList from "../components/MovieList";

function Home({
  movies,
  filteredMovies,
  titleFilter,
  ratingFilter,
  onTitleChange,
  onRatingChange,
  onResetFilters,
  onAddMovie,
}) {
  return (
    <div className="app-shell">
      <header className="hero">
        <nav>
          <Link className="brand" to="/" aria-label="Movie Night home">
            <span>▶</span> Movie Night
          </Link>
          <span className="movie-count">{movies.length} titles</span>
        </nav>

        <div className="hero-copy" id="top">
          <p className="eyebrow">FIND YOUR NEXT FAVORITE</p>
          <h1>Stories worth watching.</h1>
          <p>Build your watchlist and find the perfect movie for tonight.</p>
        </div>
      </header>

      <main>
        <AddMovie onAddMovie={onAddMovie} />

        <section className="collection-section">
          <div className="section-heading collection-heading">
            <div>
              <p className="eyebrow">BROWSE</p>
              <h2>Favorite movies</h2>
            </div>
            <p className="result-count">
              Showing {filteredMovies.length} of {movies.length}
            </p>
          </div>

          <Filter
            titleFilter={titleFilter}
            ratingFilter={ratingFilter}
            onTitleChange={onTitleChange}
            onRatingChange={onRatingChange}
            onReset={onResetFilters}
          />

          <MovieList movies={filteredMovies} />
        </section>
      </main>

      <footer>Made with React hooks and a love for great stories.</footer>
    </div>
  );
}

export default Home;
