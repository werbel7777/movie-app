import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import service from "../services/movieServices";
import type { Movie } from "../types/types";
import { Logo } from "../components/Logo";

export const Welcome = () => {
  const [actualMovie, setActualMovie] = useState<Movie | null>(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (movieId) {
      service
        .getDetails(movieId)
        .then((response) => setActualMovie(response.data));
    }
  }, [movieId]);

  if (!actualMovie) {
    return <div>Cannot show movie, search again!</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-blue-500 p-10">
      <Link to="/" className="relative z-50 mb-8 block w-fit cursor-pointer">
        <Logo />
      </Link>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="shrink-0">
          <img
            className="w-full md:w-[90%] rounded"
            src={`https://image.tmdb.org/t/p/w500${actualMovie.poster_path}`}
            alt={actualMovie.title}
          />
        </div>

        <div className="grid gap-4 content-start">
          <h1 className="text-3xl font-bold text-white drop-shadow-[0_2px_8px_black]">
            {actualMovie.title}
          </h1>

          <p className="text-sm text-blue-100 drop-shadow-[0_2px_8px_black]">
            {actualMovie.release_date}
          </p>

          <p className="text-white leading-7 drop-shadow-[0_2px_8px_black]">
            {actualMovie.overview}
          </p>
        </div>
      </div>
    </div>
  );
};
