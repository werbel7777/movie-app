import { useState } from "react";
import { useEffect } from "react";
import type { Movie } from "../types/types";
import service from "../services/movieServices";
import { DisplayTrendingMovies } from "./displayTrendingMovies";
export const TrendingMoviesPage = ({ query }: { query: string }) => {
  const [trendingMovies, setTrendingMovies] = useState<Movie[]>([]);

  useEffect(() => {
    service.getTrend().then((response) => {
      setTrendingMovies(response.data.results);
    });
  }, []);

  if (query) return null;

  return (
    <>
      <h2 className="mt-10 mb-3 font-sans text-xl font-semibold text-white tracking-wide drop-shadow-[0_6px_12px_rgba(0,0,0,0.7)] -ml-6">
        trending now
      </h2>
      <DisplayTrendingMovies results={trendingMovies}></DisplayTrendingMovies>
    </>
  );
};
