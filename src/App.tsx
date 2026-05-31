import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/mainPage";
import { Welcome } from "./pages/moviePage";
import { MoviesByCategoryPage } from "./pages/categoriesMoviesPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/movie/:movieId" element={<Welcome />} />
        <Route
          path="/categories/:categoryId"
          element={<MoviesByCategoryPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
