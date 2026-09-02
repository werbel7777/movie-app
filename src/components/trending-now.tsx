export const SectionTitle = ({ children }: { children: string }) => {
  return (
    <div className="mb-3 flex items-end justify-between gap-4">
      <div>
        <p className="mb-1 text-xs font-semibold uppercase text-sky-300/80">
          This week
        </p>
        <h2 className="text-2xl font-semibold text-white md:text-3xl">
          {children}
        </h2>
      </div>
    </div>
  );
};
