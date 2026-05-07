import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/mainPage";
import { Welcome } from "./pages/moviePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/movie/:movieId" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
