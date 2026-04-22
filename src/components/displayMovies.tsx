import { Movie } from "./movie";
import type { Movie as MovieType } from "./types";

export const DisplayMovies = ({ results }: { results: MovieType[] }) => {
  if (!results.length) return null;

  return (
    <div className="mt-10 grid gap-4 bg-white/10 backdrop-blur-md rounded p-4">
      {results.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.original_title}
          premiere={movie.release_date}
          id={movie.id}
        />
      ))}
    </div>
  );
};
