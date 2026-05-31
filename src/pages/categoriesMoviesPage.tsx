import service from "../services/movieServices";
import { useEffect, useState } from "react";
import { DisplayMovies } from "../components/displayMovies";
import { useParams } from "react-router-dom";
import type { Movie } from "../types/types";

export const MoviesByCategoryPage = () => {
  const { categoryId } = useParams();

  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    if (categoryId) {
      service.getMovieByCategory(Number(categoryId)).then((response) => {
        setMovies(response.data.results);
      });
    }
  }, [categoryId]);
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-blue-500 p-10 text-blue-500">
      <div className="font-sans text-2xl font-semibold text-white tracking-wide drop-shadow-[0_6px_12px_rgba(0,0,0,0.7)] -ml-6">
        movie searcher
      </div>
      <DisplayMovies results={movies}></DisplayMovies>
    </div>
  );
};
