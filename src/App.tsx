import { useEffect, useState } from "react";
import service from "./services/movieServices";
import { useRef } from "react";

function App(): JSX.Element {
  const [movies, setMovies] = useState<any[]>([]);

  const [newSearch, setNewSearch] = useState("");

  useEffect(() => {
    service.getAll().then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const timer = useRef(null);
  const changeSearch = (event) => {
    clearTimeout(timer.current);
    const value = event.target.value;
    setNewSearch(value);
    timer.current = setTimeout(() => {
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

const DisplayMovies = ({ results }) => {
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

const Movie = ({ title, premiere }) => {
  return (
    <div>
      <p>
        Title: {title}/Year: {premiere}
      </p>
    </div>
  );
};

const Search = ({ newSearch, changeSearch }) => {
  console.log(newSearch);

  return (
    <div>
      <input value={newSearch} onChange={changeSearch} />
    </div>
  );
};

export default App;
