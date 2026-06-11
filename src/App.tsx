import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/mainPage";
import { Welcome } from "./pages/moviePage";
import { MoviesByCategoryPage } from "./pages/categoriesMoviesPage";
import { useState } from "react";

const App = () => {
  const [favoriteList, setFavoriteList] = useState<number[]>([]);

  const updateFavoriteList = (movieId: number) => {
    setFavoriteList((prevFavoriteList) => [...prevFavoriteList, movieId]);
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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
