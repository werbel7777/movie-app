export const Logo = () => {
  return (
    <div className="pointer-events-none flex items-center gap-3">
      <svg
        className="h-12 w-12 md:h-14 md:w-14"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="4"
          y="4"
          width="40"
          height="40"
          rx="12"
          fill="#0f172a"
          stroke="#334155"
          strokeWidth="2"
        />
        <path
          d="M20 16L32 24L20 32V16Z"
          fill="#7dd3fc"
        />
        <path
          d="M14 36H34"
          stroke="#38bdf8"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M16 12H32"
          stroke="#475569"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      <div className="text-4xl font-semibold tracking-wide md:text-5xl">
        <span className="text-white">Movie</span>
        <span className="text-sky-300">Searcher</span>
      </div>
    </div>
  );
};
