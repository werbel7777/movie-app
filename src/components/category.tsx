import type { Category as CategoryType } from "../types/types";
import { Link } from "react-router-dom";

type CategoryProps = {
  category: CategoryType;
};

export const Category = ({ category }: CategoryProps) => {
  return (
    <Link
      to={`/categories/${category.id}`}
      className="flex h-64 w-44 shrink-0 items-center justify-center rounded bg-white/20 p-4 text-center text-lg font-semibold text-white shadow-md transition hover:bg-white/40"
    >
      {category.name}
    </Link>
  );
};
