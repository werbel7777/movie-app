import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./mainPage";
import { Welcome } from "./moviePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/credits" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
