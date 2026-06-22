import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/mainPage";
import { Welcome } from "./pages/moviePage";
import { MoviesByCategoryPage } from "./pages/categoriesMoviesPage";
import { useState } from "react";
import { Favorites } from "./pages/favorites";
import { useEffect } from "react";

const App = () => {
  const [favoriteList, setFavoriteList] = useState<number[]>(() => {
    const localStorageFavorites = localStorage.getItem("favoriteMovies");
    if (!localStorageFavorites) {
      return [];
    }
    return JSON.parse(localStorageFavorites);
  });
  useEffect(() => {
    localStorage.setItem("favoriteMovies", JSON.stringify(favoriteList));
    console.log(localStorage.getItem("favoriteMovies"));
  }, [favoriteList]);

  const updateFavoriteList = (movieId: number) => {
    setFavoriteList((prevFavoriteList) => {
      if (prevFavoriteList.includes(movieId)) {
        return prevFavoriteList.filter((id) => id !== movieId);
      }
      return [...prevFavoriteList, movieId];
    });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/movie/:movieId"
          element={
            <Welcome
              favoriteList={favoriteList}
              updateFavoriteList={updateFavoriteList}
            />
          }
        />
        <Route
          path="/categories/:categoryId"
          element={<MoviesByCategoryPage />}
        />
        <Route
          path="/favorites"
          element={<Favorites favoriteList={favoriteList}></Favorites>}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
