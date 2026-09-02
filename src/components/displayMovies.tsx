import { Movie } from "./movie";
import type { Movie as MovieType } from "../types/types";

export const DisplayMovies = ({ results }: { results: MovieType[] }) => {
  if (!results.length) return null;

  return (
    <section className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {results.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.original_title}
          premiere={movie.release_date}
          posterPath={movie.poster_path}
          id={movie.id}
        />
      ))}
    </section>
  );
};
