import type { Category as CategoryType } from "../types/types";
import { Link } from "react-router-dom";

type CategoryProps = {
  category: CategoryType;
};

export const Category = ({ category }: CategoryProps) => {
  return (
    <Link
      to={`/categories/${category.id}`}
      className="group flex h-56 w-44 shrink-0 items-end overflow-hidden rounded-lg bg-white/[0.06] p-4 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.09]"
    >
      <span className="text-lg font-semibold leading-tight text-white transition group-hover:text-sky-100">
        {category.name}
      </span>
    </Link>
  );
};
