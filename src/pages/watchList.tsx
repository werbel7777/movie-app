import type { RootState } from "../store/store";
import { useSelector } from "react-redux";
import { DisplayMovies } from "../components/displayMovies";
import { useState, useEffect } from "react";
import type { Movie } from "../types/types";
import service from "../services/movieServices";
import { Link } from "react-router-dom";
import { Logo } from "../components/logo";
import { SectionTitle } from "../components/trending-now";

export const WatchList = () => {
  const watchList = useSelector(
    (state: RootState) => state.watchList.watchList,
  );

  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const requests = watchList.map((id) => service.getDetails(String(id)));

    Promise.all(requests).then((responses) => {
      const watchListMovies = responses.map((response) => response.data);
      setMovies(watchListMovies);
    });
  }, [watchList]);

  return (
    <div className="min-h-screen bg-slate-950 px-5 py-6 text-slate-100 md:px-10">
      <div className="mx-auto max-w-[1600px]">
        <Link to="/" className="relative z-50 mb-8 block w-fit cursor-pointer">
          <Logo />
        </Link>

        <SectionTitle>WatchList movies</SectionTitle>

        <DisplayMovies results={movies}></DisplayMovies>
      </div>
    </div>
  );
};
