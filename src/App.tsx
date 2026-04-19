import { useEffect, useState } from "react";
import service from "./services/movieServices";
import useDebounce from "./utils/utils";
import type { Movie } from "./types/types";
import { Search } from "./components/search";
import { DisplayMovies } from "./components/displayMovies";
import { Watermark } from "./components/emptyPageWatermark";

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [newSearch, setNewSearch] = useState<string>("");

  const debouncedSearch = useDebounce(newSearch, 500);

  useEffect(() => {
    service.getAll(debouncedSearch).then((response) => {
      setMovies(response.data.results);
    });
  }, [debouncedSearch]);

  const changeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setNewSearch(value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-blue-500 text-blue-500 p-10">
      <div className="font-sans text-2xl font-semibold text-white tracking-wide drop-shadow-[0_6px_12px_rgba(0,0,0,0.7)] -ml-6">
        movie searcher
      </div>

      <Search
        newSearch={newSearch}
        changeSearch={changeSearch}
        setNewSearch={setNewSearch}
      />

      <Watermark query={newSearch} />

      {newSearch && <DisplayMovies results={movies} />}
    </div>
  );
}

export default App;
