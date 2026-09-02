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
    <div className="min-h-screen bg-slate-950 px-5 py-6 text-slate-100 md:px-10">
      <div className="mx-auto max-w-[1600px]">
        <Link to="/" className="relative z-50 mb-8 block w-fit cursor-pointer">
          <Logo />
        </Link>
        <DisplayMovies results={movies}></DisplayMovies>
      </div>
    </div>
  );
};
