import service from "../services/movieServices";
import { useEffect, useState } from "react";
import { DisplayMovies } from "../components/displayMovies";
import { Link, useParams } from "react-router-dom";
import type { Movie } from "../types/types";
import { Logo } from "../components/logo";

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
      <Link to="/" className="relative z-50 mb-8 block w-fit cursor-pointer">
        <Logo />
      </Link>
      <DisplayMovies results={movies}></DisplayMovies>
    </div>
  );
};
