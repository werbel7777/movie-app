import { Movie } from "./movie";
import type { Movie as MovieType } from "./types";

export const DisplayMovies = ({ results }: { results: MovieType[] }) => {
  return (
    <div>
      {results.map((movie, index) => (
        <Movie
          key={index}
          title={movie.original_title}
          premiere={movie.release_date}
        />
      ))}
    </div>
  );
};
