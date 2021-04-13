import { MovieCard } from "./MovieCard";
import movies from "./movies.json";
import styles from "./MovieCard.module.css"

export function MoviesGrid() {
  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
