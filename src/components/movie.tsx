import { Link } from "react-router-dom";

export const Movie = ({
  title,
  premiere,
  id,
}: {
  title: string;
  premiere: string;
  id: string;
}) => {
  return (
    <div className="bg-white/20 hover:bg-white/60 transition rounded p-3 text-white shadow-md">
      <Link to={`/movie/${id}`} className="drop-shadow-[0_2px_8px_black]">
        {title} / {premiere}
      </Link>
    </div>
  );
};
