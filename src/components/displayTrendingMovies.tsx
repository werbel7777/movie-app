import { TrendingMovie } from "./trendingMovie";
import type { Movie as MovieType } from "../types/types";
import { useRef } from "react";

export const DisplayTrendingMovies = ({
  results,
}: {
  results: MovieType[];
}) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  if (!results.length) return null;

  return (
    <div className="relative">
      <button
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 h-10 w-10 rounded-full bg-white/5 text-white text-xl font-bold shadow-md backdrop-blur-md transition hover:bg-white/10"
        onClick={scrollLeft}
      >
        &lt;
      </button>
      <div
        ref={scrollRef}
        className="hide-scrollbar flex gap-4 overflow-x-auto bg-white/10 backdrop-blur-md rounded p-4"
      >
        {results.map((movie) => (
          <TrendingMovie
            key={movie.id}
            title={movie.original_title}
            path={movie.poster_path}
          />
        ))}
      </div>
      <button
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 h-10 w-10 rounded-full bg-white/20 text-white text-xl font-bold shadow-md backdrop-blur-md transition hover:bg-white/40"
        onClick={scrollRight}
      >
        &gt;
      </button>
    </div>
  );
};
