export const Search = ({
  newSearch,
  changeSearch,
}: {
  newSearch: string;
  changeSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="relative w-full max-w-2xl">
      <input
        className="w-full rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-base text-white outline-none transition placeholder:text-slate-400 hover:border-blue-300/40 focus:border-blue-300 focus:bg-white/15 focus:ring-2 focus:ring-blue-400/20"
        value={newSearch}
        onChange={changeSearch}
      />

      {newSearch === "" && (
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 opacity-100 transition">
          find your movie
        </span>
      )}
    </div>
  );
};
