import { useEffect, useState } from "react";
import service from "./services/movieServices";
import { debounce } from "./utils/utils";
import type { Movie } from "./types/types";
import { Search } from "./components/search";
import { DisplayMovies } from "./components/displayMovies";

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  const [newSearch, setNewSearch] = useState<string>("");

  useEffect(() => {
    service.getAll("").then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const debouncedSearch = debounce((value: string) => {
    service.getAll(value).then((response) => {
      setMovies(response.data.results);
    });
  }, 500);

  const changeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setNewSearch(value);
    debouncedSearch(value);
  };

  return (
    <div>
      <div>movie searcher</div>
      <Search newSearch={newSearch} changeSearch={changeSearch}></Search>
      <DisplayMovies results={movies}></DisplayMovies>
    </div>
  );
}

export default App;
