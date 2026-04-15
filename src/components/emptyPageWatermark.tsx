export const Watermark = ({ query }: { query: string }) => {
  if (query) return null;

  return (
    <div className="flex items-center justify-center mt-20 opacity-10 pointer-events-none">
      <img
        src="/film-strip-roll-free-vector.webp"
        className="w-80"
        alt="film strip"
      />
    </div>
  );
};
