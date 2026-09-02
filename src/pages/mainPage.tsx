import { useEffect, useState } from "react";
import service from "../services/movieServices";
import useDebounce from "../hooks/useDebounce";
import type { Category, Movie } from "../types/types";
import { Search } from "../components/search";
import { DisplayMovies } from "../components/displayMovies";
import { DisplayCategories } from "../components/displayCategories";
import { TrendingMoviesPage } from "../components/trendigMoviesPage";
import { Logo } from "../components/logo";
import { Menu } from "../components/hamburgerMenu";

function MainPage() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [newSearch, setNewSearch] = useState<string>("");
  const [categories, setCategories] = useState<Category[]>([]);

  const debouncedSearch = useDebounce(newSearch, 500);

  useEffect(() => {
    service.getAll(debouncedSearch).then((response) => {
      setMovies(response.data.results);
    });
  }, [debouncedSearch]);

  useEffect(() => {
    service.getCategories().then((response) => {
      setCategories(response.data.genres);
    });
  }, []);

  const changeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setNewSearch(value);
  };

  return (
    <div className="min-h-screen bg-slate-950 px-5 py-6 text-slate-100 md:px-10">
      <header className="mx-auto flex max-w-7xl flex-col gap-5 border-b border-white/10 pb-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="font-sans text-2xl font-semibold tracking-wide text-white">
            <Logo />
          </div>
          <Menu></Menu>
        </div>

        <Search newSearch={newSearch} changeSearch={changeSearch}></Search>
      </header>

      <main className="mx-auto max-w-7xl">
        <TrendingMoviesPage query={newSearch}></TrendingMoviesPage>
        <DisplayCategories categories={categories} query={newSearch} />
        <DisplayMovies results={movies}></DisplayMovies>
      </main>
    </div>
  );
}

export default MainPage;
