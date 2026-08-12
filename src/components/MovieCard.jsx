import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <Link className="movie-card-link" to={`/movie/${movie.id}`}>
      <article className="movie-card">
        <div className="poster-wrapper">
          <img src={movie.posterURL} alt={`${movie.title} poster`} />
          <span
            className="rating-badge"
            aria-label={`Rating ${movie.rating} out of 10`}
          >
            ★ {Number(movie.rating).toFixed(1)}
          </span>
        </div>

        <div className="movie-content">
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
        </div>
      </article>
    </Link>
  );
}

export default MovieCard;
