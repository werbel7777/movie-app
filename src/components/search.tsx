export const Search = ({
  newSearch,
  changeSearch,
  setNewSearch,
}: {
  newSearch: string;
  changeSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setNewSearch: (value: string) => void;
}) => {
  return (
    <div className="relative">
      <input
        className="border border-gray-400 rounded text-black drop-shadow-[0_2px_2px_black] placeholder-gray-500"
        value={newSearch}
        onChange={changeSearch}
      />
      {newSearch === "" && (
        <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 animate-pulse pointer-events-none opacity-100  transition">
          find your movie
        </span>
      )}
    </div>
  );
};
