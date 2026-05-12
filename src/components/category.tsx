import type { Category as CategoryType } from "../types/types";

export const Category = ({ category }: { category: CategoryType }) => {
  return (
    <p className="flex h-64 w-44 shrink-0 items-center justify-center rounded bg-white/20 p-4 text-center text-lg font-semibold text-white shadow-md transition hover:bg-white/40">
      {category.name}
    </p>
  );
};
