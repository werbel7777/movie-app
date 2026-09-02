import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import service from "../services/movieServices";
import type { Movie } from "../types/types";
import { Logo } from "../components/logo";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../store/favoritesSlice";
import type { RootState } from "../store/store";
import { toggleWatchList } from "../store/watchListSlice";

export const Welcome = () => {
  const dispatch = useDispatch();

  const favoriteList = useSelector(
    (state: RootState) => state.favorites.favoriteList,
  );
  const watchList = useSelector(
    (state: RootState) => state.watchList.watchList,
  );

  const [actualMovie, setActualMovie] = useState<Movie | null>(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (movieId) {
      service
        .getDetails(movieId)
        .then((response) => setActualMovie(response.data));
    }
  }, [movieId]);

  const handleToggleFavorite = () => {
    if (!actualMovie) return;
    dispatch(toggleFavorite(actualMovie.id));
  };

  const handleToggleWatchList = () => {
    if (!actualMovie) return;
    dispatch(toggleWatchList(actualMovie.id));
  };

  if (!actualMovie) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 px-5 text-slate-100">
        <p className="rounded-lg border border-white/10 bg-white/[0.06] px-5 py-4 text-sm text-slate-300">
          Cannot show movie, search again!
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 px-5 py-6 text-slate-100 md:px-10">
      <div className="mx-auto max-w-7xl">
        <Link to="/" className="relative z-50 mb-8 block w-fit cursor-pointer">
          <Logo />
        </Link>

        <article className="grid gap-8 lg:grid-cols-[minmax(260px,360px)_1fr] lg:items-start">
          <div className="overflow-hidden rounded-xl bg-white/[0.06] shadow-2xl shadow-black/30">
            {actualMovie.poster_path ? (
              <img
                className="aspect-[2/3] w-full object-cover"
                src={`https://image.tmdb.org/t/p/w500${actualMovie.poster_path}`}
                alt={actualMovie.title}
              />
            ) : (
              <div className="flex aspect-[2/3] items-center justify-center px-6 text-center text-slate-500">
                No poster available
              </div>
            )}
          </div>

          <div className="max-w-3xl">
            <div className="mb-5 flex flex-wrap items-start justify-between gap-5">
              <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                  Movie details
                </p>
                <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
                  {actualMovie.title}
                </h1>
              </div>

              <div className="flex items-center gap-3">
                <button
                  className={`flex h-12 w-12 items-center justify-center rounded-full bg-white/[0.08] text-3xl transition hover:bg-white/[0.14] ${
                    favoriteList.includes(actualMovie.id)
                      ? "text-red-400"
                      : "text-white"
                  }`}
                  onClick={handleToggleFavorite}
                >
                  {favoriteList.includes(actualMovie.id) ? "♥" : "♡"}
                </button>
                <button
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white/[0.08] text-2xl text-white transition hover:bg-white/[0.14]"
                  onClick={handleToggleWatchList}
                >
                  {watchList.includes(actualMovie.id) ? "🔖" : "👁️"}
                </button>
              </div>
            </div>

            <p className="mb-8 inline-flex rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-medium text-slate-300">
              {actualMovie.release_date}
            </p>

            <p className="text-base leading-8 text-slate-300 md:text-lg">
              {actualMovie.overview}
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};
