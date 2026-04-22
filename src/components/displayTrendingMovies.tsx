import { TrendingMovie } from "./trendingMovie";
import type { Movie as MovieType } from "../types/types";

export const DisplayTrendingMovies = ({
  results,
}: {
  results: MovieType[];
}) => {
  if (!results.length) return null;

  return (
    <div className="mt-10 grid gap-4 bg-white/10 backdrop-blur-md rounded p-4">
      {results.map((movie) => (
        <TrendingMovie
          key={movie.id}
          title={movie.original_title}
          path={movie.poster_path}
        />
      ))}
    </div>
  );
};
