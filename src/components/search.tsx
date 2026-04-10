export const Search = ({
  newSearch,
  changeSearch,
}: {
  newSearch: string;
  changeSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div>
      <input value={newSearch} onChange={changeSearch} />
    </div>
  );
};
