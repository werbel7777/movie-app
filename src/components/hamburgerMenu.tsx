import { useState } from "react";
import { Link } from "react-router-dom";

export const Menu = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleIsVisible = () => setIsVisible(!isVisible);

  if (!isVisible) {
    return (
      <button
        className="mt-3 text-xl font-semibold tracking-wide text-white transition hover:text-blue-100 md:text-2xl"
        onClick={toggleIsVisible}
      >
        Menu
      </button>
    );
  }
  {
    return (
      <div className="relative">
        <button
          className="mt-3 text-xl font-semibold tracking-wide text-white transition hover:text-blue-100 md:text-2xl"
          onClick={toggleIsVisible}
        >
          Menu
        </button>
        <div className="absolute left-0 top-full z-50 mt-2 flex flex-col items-start gap-1 rounded bg-blue-950/45 px-4 py-3 backdrop-blur-sm">
          <Link
            to={"/favorites"}
            className="text-xl font-semibold tracking-wide text-blue-100 transition hover:text-white md:text-2xl"
          >
            Favorites
          </Link>
          <Link
            to={"/watchList"}
            className="text-xl font-semibold tracking-wide text-blue-100 transition hover:text-white md:text-2xl"
          >
            WatchList
          </Link>
        </div>
      </div>
    );
  }
};
