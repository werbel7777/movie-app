export const SectionTitle = ({ children }: { children: string }) => {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-1.5 h-8 rounded bg-blue-200 shadow-[0_0_12px_rgba(191,219,254,0.9)]" />

      <h2 className="text-2xl md:text-3xl font-semibold tracking-wide text-white drop-shadow-[0_2px_8px_black]">
        {children}
      </h2>
    </div>
  );
};
