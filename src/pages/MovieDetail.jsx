import { Link, useParams } from "react-router-dom";

function MovieDetail({ movies }) {
  const { id } = useParams();
  const movie = movies.find((item) => String(item.id) === id);

  if (!movie) {
    return (
      <div className="app-shell">
        <main className="detail-page">
          <div className="detail-not-found">
            <h1>Movie not found</h1>
            <p>We could not find a movie with that id.</p>
            <Link className="primary-button back-link" to="/">
              ← Back to home
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="app-shell">
      <header className="detail-header">
        <nav>
          <Link className="brand" to="/" aria-label="Movie Night home">
            <span>▶</span> Movie Night
          </Link>
        </nav>
      </header>

      <main className="detail-page">
        <Link className="back-link" to="/">
          ← Back to home
        </Link>

        <article className="movie-detail">
          <div className="detail-poster">
            <img src={movie.posterURL} alt={`${movie.title} poster`} />
            <span
              className="rating-badge"
              aria-label={`Rating ${movie.rating} out of 10`}
            >
              ★ {Number(movie.rating).toFixed(1)}
            </span>
          </div>

          <div className="detail-content">
            <p className="eyebrow">NOW PLAYING</p>
            <h1>{movie.title}</h1>
            <p className="detail-description">{movie.description}</p>

            {movie.trailerURL && (
              <section className="trailer-section">
                <h2>Trailer</h2>
                <div className="trailer-wrapper">
                  <iframe
                    src={movie.trailerURL}
                    title={`${movie.title} trailer`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </section>
            )}
          </div>
        </article>
      </main>

      <footer>Made with React hooks and a love for great stories.</footer>
    </div>
  );
}

export default MovieDetail;
