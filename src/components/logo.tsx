export const Logo = () => {
  return (
    <div className="pointer-events-none flex items-center gap-4">
      <svg
        className="h-14 w-16 md:h-16 md:w-20"
        viewBox="0 0 72 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="10"
          y="20"
          width="42"
          height="28"
          rx="5"
          fill="#1e293b"
          stroke="#e2e8f0"
          strokeWidth="3"
        />

        <path
          d="M12 20L18 8H58L52 20H12Z"
          fill="#38bdf8"
          stroke="#e2e8f0"
          strokeWidth="3"
          strokeLinejoin="round"
        />

        <path d="M23 8L18 20" stroke="#0f172a" strokeWidth="3" />
        <path d="M38 8L33 20" stroke="#0f172a" strokeWidth="3" />
        <path d="M53 8L48 20" stroke="#0f172a" strokeWidth="3" />

        <path
          d="M19 31H35"
          stroke="#cbd5e1"
          strokeWidth="3"
          strokeLinecap="round"
        />

        <path
          d="M19 39H31"
          stroke="#cbd5e1"
          strokeWidth="3"
          strokeLinecap="round"
        />

        <circle
          cx="48"
          cy="36"
          r="11"
          fill="#0f172a"
          stroke="#38bdf8"
          strokeWidth="4"
        />

        <path
          d="M56 44L66 54"
          stroke="#38bdf8"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>

      <div className="text-3xl font-semibold tracking-wide md:text-4xl">
        <span className="text-white">movie</span>{" "}
        <span className="text-sky-300">
          searcher
        </span>
      </div>
    </div>
  );
};
