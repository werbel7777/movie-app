export const Movie = ({
  title,
  premiere,
}: {
  title: string;
  premiere: string;
}) => {
  return (
    <div className="text-white drop-shadow-[0_2px_8px_black] mt-2">
      <p>
        Title: {title}/Year: {premiere}
      </p>
    </div>
  );
};
