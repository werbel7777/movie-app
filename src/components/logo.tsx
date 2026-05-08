export const Logo = () => {
  return (
    <div className="flex items-center gap-4">
      <svg
        className="w-16 h-14 md:w-20 md:h-16"
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
          fill="white"
          stroke="#0f172a"
          strokeWidth="4"
        />

        <path
          d="M12 20L18 8H58L52 20H12Z"
          fill="#2563eb"
          stroke="#0f172a"
          strokeWidth="4"
          strokeLinejoin="round"
        />

        <path d="M23 8L18 20" stroke="white" strokeWidth="4" />
        <path d="M38 8L33 20" stroke="white" strokeWidth="4" />
        <path d="M53 8L48 20" stroke="white" strokeWidth="4" />

        <path
          d="M19 31H35"
          stroke="#0f172a"
          strokeWidth="4"
          strokeLinecap="round"
        />

        <path
          d="M19 39H31"
          stroke="#0f172a"
          strokeWidth="4"
          strokeLinecap="round"
        />

        <circle
          cx="48"
          cy="36"
          r="11"
          fill="white"
          stroke="#2563eb"
          strokeWidth="5"
        />

        <path
          d="M56 44L66 54"
          stroke="#2563eb"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>

      <div className="text-3xl md:text-4xl font-semibold tracking-wide">
        <span className="text-white drop-shadow-[0_2px_8px_black]">movie</span>{" "}
        <span className="text-blue-200 drop-shadow-[0_2px_8px_black]">
          searcher
        </span>
      </div>
    </div>
  );
};
