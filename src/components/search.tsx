export const Search = ({
  newSearch,
  changeSearch,
}: {
  newSearch: string;
  changeSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div>
      <input
        className="border border-gray-400 rounded text-black drop-shadow-[0_2px_2px_black] "
        value={newSearch}
        onChange={changeSearch}
      />
    </div>
  );
};
