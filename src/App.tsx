import { useEffect, useState } from "react";
import service from "./services/movieServices";
import { useRef } from "react";

type Movie = {
  adult: boolean;
  backdrop_path?: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path?: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  const [newSearch, setNewSearch] = useState<string>("");

  useEffect(() => {
    service.getAll("").then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const changeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (timer.current !== null) {
      clearTimeout(timer.current);
    }

    const value = event.target.value;
    setNewSearch(value);

    timer.current = window.setTimeout(() => {
      service.getAll(value).then((response) => {
        setMovies(response.data.results);
      });
    }, 500);
  };

  return (
    <div>
      <div>movie searcher</div>
      <Search newSearch={newSearch} changeSearch={changeSearch}></Search>
      <DisplayMovies results={movies}></DisplayMovies>
    </div>
  );
}

const DisplayMovies = ({ results }: { results: Movie[] }) => {
  return (
    <div>
      {results.map((movie, index) => (
        <Movie
          key={index}
          title={movie.original_title}
          premiere={movie.release_date}
        ></Movie>
      ))}
    </div>
  );
};

const Movie = ({ title, premiere }: { title: string; premiere: string }) => {
  return (
    <div>
      <p>
        Title: {title}/Year: {premiere}
      </p>
    </div>
  );
};

const Search = ({
  newSearch,
  changeSearch,
}: {
  newSearch: string;
  changeSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  console.log(newSearch);

  return (
    <div>
      <input value={newSearch} onChange={changeSearch} />
    </div>
  );
};

export default App;
