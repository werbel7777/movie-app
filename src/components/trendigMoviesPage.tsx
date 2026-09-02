import { useState, useEffect } from "react";
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
    <DisplayTrendingMovies
      results={trendingMovies}
      title="Trending this week"
    />
  );
};
