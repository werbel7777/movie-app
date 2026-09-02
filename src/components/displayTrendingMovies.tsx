import { TrendingMovie } from "./trendingMovie";
import type { Movie as MovieType } from "../types/types";
import { useRef } from "react";
import { SectionTitle } from "./trending-now";

export const DisplayTrendingMovies = ({
  results,
  title,
}: {
  results: MovieType[];
  title: string;
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
    <section className="mt-10 overflow-hidden rounded-xl border border-white/10 bg-white/[0.04]">
      <div className="border-b border-white/10 px-4 py-3">
        <SectionTitle>{title}</SectionTitle>
      </div>
      <div className="relative">
        <button
          className="absolute inset-y-0 left-0 z-10 hidden w-12 items-center justify-center bg-slate-950/60 text-2xl font-semibold text-slate-300 backdrop-blur transition hover:bg-slate-900/90 hover:text-white lg:flex"
          onClick={scrollLeft}
        >
          &lt;
        </button>
        <div
          ref={scrollRef}
          className="hide-scrollbar flex gap-3 overflow-x-auto p-3 sm:gap-4 sm:p-4"
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
          className="absolute inset-y-0 right-0 z-10 hidden w-12 items-center justify-center bg-slate-950/60 text-2xl font-semibold text-slate-300 backdrop-blur transition hover:bg-slate-900/90 hover:text-white lg:flex"
          onClick={scrollRight}
        >
          &gt;
        </button>
      </div>
    </section>
  );
};
