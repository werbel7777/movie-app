import { act, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import service from "./services/movieServices";
import type { Movie } from "./types/types";

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

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-blue-500 text-blue-500 p-10">
      <div className="font-sans text-2xl font-semibold text-white tracking-wide drop-shadow-[0_6px_12px_rgba(0,0,0,0.7)] -ml-6 mb-8">
        movie searcher
      </div>
      <div>
        <img
          className="rounded-lg"
          src={`https://image.tmdb.org/t/p/w500${actualMovie?.poster_path}`}
        ></img>
      </div>

      <div className="mt-10 grid gap-4 bg-white/10 backdrop-blur-md rounded p-6 shadow-md">
        <h1 className="text-3xl font-bold text-white drop-shadow-[0_2px_8px_black]">
          {actualMovie?.title}
        </h1>

        <p className="text-sm text-blue-100 drop-shadow-[0_2px_8px_black]">
          {actualMovie?.release_date}
        </p>

        <p className="text-white leading-7 drop-shadow-[0_2px_8px_black]">
          {actualMovie?.overview}
        </p>
      </div>
    </div>
  );
};
