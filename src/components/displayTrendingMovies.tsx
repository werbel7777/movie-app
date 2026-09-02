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
    <div className="relative mt-4">
      <button
        className="absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-x-2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-slate-950/80 text-lg font-semibold text-slate-200 shadow-lg shadow-black/30 backdrop-blur transition hover:bg-slate-800 hover:text-white"
        onClick={scrollLeft}
      >
        &lt;
      </button>
      <div
        ref={scrollRef}
        className="hide-scrollbar flex gap-4 overflow-x-auto rounded-xl border border-white/10 bg-white/[0.04] p-4"
      >
        {results.map((movie) => (
          <TrendingMovie
            key={movie.id}
            title={movie.original_title}
            path={movie.poster_path}
            id={movie.id}
          />
        ))}
      </div>
      <button
        className="absolute right-0 top-1/2 z-10 flex h-10 w-10 translate-x-2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-slate-950/80 text-lg font-semibold text-slate-200 shadow-lg shadow-black/30 backdrop-blur transition hover:bg-slate-800 hover:text-white"
        onClick={scrollRight}
      >
        &gt;
      </button>
    </div>
  );
};
