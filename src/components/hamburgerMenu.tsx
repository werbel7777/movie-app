import { useState } from "react";
import { Link } from "react-router-dom";

export const Menu = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleIsVisible = () => setIsVisible(!isVisible);
  const buttonClassName =
    "text-sm font-semibold uppercase tracking-[0.2em] text-slate-300 transition hover:text-white";
  const linkClassName =
    "rounded px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white";

  return (
    <div className="relative w-fit self-start md:self-auto">
      <button className={buttonClassName} onClick={toggleIsVisible}>
        Menu
      </button>
      {isVisible && (
        <div className="absolute left-0 top-full z-50 mt-3 flex min-w-40 flex-col items-stretch rounded-lg border border-white/10 bg-slate-900/95 p-2 shadow-xl shadow-black/30 backdrop-blur md:left-auto md:right-0">
          <Link to={"/favorites"} className={linkClassName}>
            Favorites
          </Link>
          <Link to={"/watchList"} className={linkClassName}>
            WatchList
          </Link>
        </div>
      )}
    </div>
  );
};
