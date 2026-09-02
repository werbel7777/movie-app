import type { Category as CategoryType } from "../types/types";
import { Link } from "react-router-dom";

type CategoryProps = {
  category: CategoryType;
  posters: string[];
  activePosterIndex: number;
};

export const Category = ({
  category,
  posters,
  activePosterIndex,
}: CategoryProps) => {
  const activePoster = posters.length
    ? posters[activePosterIndex % posters.length]
    : undefined;

  return (
    <Link
      to={`/categories/${category.id}`}
      className="group relative flex h-56 w-44 shrink-0 items-end overflow-hidden rounded-lg bg-white/[0.06] p-4 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.09]"
    >
      {activePoster ? (
        <img
          key={activePoster}
          src={`https://image.tmdb.org/t/p/w500${activePoster}`}
          alt=""
          className="absolute inset-0 h-full w-full animate-[posterFade_700ms_ease-out] object-cover opacity-70 saturate-75 transition duration-500 group-hover:scale-105 group-hover:opacity-85 group-hover:saturate-100"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950" />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-transparent" />
      <span className="relative z-10 text-lg font-semibold leading-tight text-white transition group-hover:text-sky-100">
        {category.name}
      </span>
    </Link>
  );
};
