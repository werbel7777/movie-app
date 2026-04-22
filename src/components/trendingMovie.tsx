export const TrendingMovie = ({
  title,
  path,
}: {
  title: string;
  path?: string;
}) => {
  return (
    <div className="bg-white/20 hover:bg-white/60 transition rounded p-3 text-white shadow-md">
      <img src={`https://image.tmdb.org/t/p/w500${path}`} alt={title} />
      <p className="drop-shadow-[0_2px_8px_black]">{title}</p>
    </div>
  );
};
