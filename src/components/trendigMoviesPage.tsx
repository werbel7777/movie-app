import { useState, useEffect } from "react";
import type { Movie } from "../types/types";
import service from "../services/movieServices";
import { DisplayTrendingMovies } from "./displayTrendingMovies";
import { SectionTitle } from "./trendind-now";

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
      <div className="mt-10">
        <SectionTitle>Trending now</SectionTitle>
      </div>

      <DisplayTrendingMovies results={trendingMovies} />
    </>
  );
};
