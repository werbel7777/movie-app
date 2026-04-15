export const Movie = ({
  title,
  premiere,
}: {
  title: string;
  premiere: string;
}) => {
  return (
    <div className="bg-white/20 hover:bg-white/60 transition rounded p-3 text-white shadow-md">
      <p className="drop-shadow-[0_2px_8px_black]">
        {title} / {premiere}
      </p>
    </div>
  );
};
