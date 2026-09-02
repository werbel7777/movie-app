import { Link } from "react-router-dom";

export const TrendingMovie = ({
  title,
  path,
  id,
}: {
  title: string;
  path?: string;
  id: number;
}) => {
  return (
    <Link to={`/movie/${id}`} className="group block w-40 shrink-0 sm:w-44">
      <div className="overflow-hidden rounded-lg bg-white/[0.06] shadow-lg shadow-black/20 transition duration-300 group-hover:-translate-y-1 group-hover:bg-white/[0.09]">
        <div className="aspect-[2/3] overflow-hidden bg-slate-900">
          {path ? (
            <img
              className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              src={`https://image.tmdb.org/t/p/w500${path}`}
              alt={title}
            />
          ) : (
            <div className="flex h-full items-center justify-center px-4 text-center text-sm text-slate-500">
              No poster
            </div>
          )}
        </div>
        <p className="line-clamp-2 flex h-14 items-center p-3 text-sm font-semibold leading-snug text-white">
          {title}
        </p>
      </div>
    </Link>
  );
};
