import { DisplayMovies } from "../components/displayMovies";
import { useEffect, useState } from "react";
import type { FavoritesProps, Movie } from "../types/types";
import service from "../services/movieServices";
import { Link } from "react-router-dom";
import { Logo } from "../components/logo";

export const Favorites = ({ favoriteList }: FavoritesProps) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    const requests = favoriteList.map((id) => service.getDetails(String(id)));

    Promise.all(requests).then((responses) => {
      const favoriteMovies = responses.map((response) => response.data);
      setMovies(favoriteMovies);
    });
  }, [favoriteList]);
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-blue-500 p-10 text-white">
      <Link to="/" className="relative z-50 mb-8 block w-fit cursor-pointer">
        <Logo />
      </Link>

      <h1 className="text-3xl font-bold drop-shadow-[0_2px_8px_black]">
        Favorite movies
      </h1>

      <DisplayMovies results={movies}></DisplayMovies>
    </div>
  );
};
