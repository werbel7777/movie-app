import { Link } from "react-router-dom";

export const Movie = ({
  title,
  premiere,
  posterPath,
  id,
}: {
  title: string;
  premiere: string;
  posterPath?: string;
  id: number;
}) => {
  return (
    <article className="group overflow-hidden rounded-lg bg-white/[0.06] text-slate-100 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.09]">
      <Link to={`/movie/${id}`} className="block">
        <div className="aspect-[2/3] overflow-hidden bg-slate-900">
          {posterPath ? (
            <img
              className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              src={`https://image.tmdb.org/t/p/w500${posterPath}`}
              alt={title}
            />
          ) : (
            <div className="flex h-full items-center justify-center px-4 text-center text-sm text-slate-500">
              No poster
            </div>
          )}
        </div>
        <div className="p-3">
          <h2 className="line-clamp-2 text-sm font-semibold leading-snug text-white">
            {title}
          </h2>
          <p className="mt-1 text-xs text-slate-400">{premiere}</p>
        </div>
      </Link>
    </article>
  );
};
