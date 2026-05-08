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
    <Link to={`/movie/${id}`}>
      <div className="shrink-0 w-48 h-80 bg-white/20 hover:bg-white/60 transition rounded p-3 text-white shadow-md">
        {path && (
          <img src={`https://image.tmdb.org/t/p/w500${path}`} alt={title} />
        )}
        <p className="drop-shadow-[0_2px_8px_black]">{title}</p>
      </div>
    </Link>
  );
};
