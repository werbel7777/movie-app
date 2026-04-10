export const Movie = ({
  title,
  premiere,
}: {
  title: string;
  premiere: string;
}) => {
  return (
    <div>
      <p>
        Title: {title}/Year: {premiere}
      </p>
    </div>
  );
};
