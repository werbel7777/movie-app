import { Category } from "./category";
import type { Category as CategoryType } from "../types/types";
import { useRef } from "react";

export const DisplayCategories = ({
  categories,
  query,
}: {
  categories: CategoryType[];
  query: string;
}) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };
  if (query) return null;
  if (!categories.length) return null;
  return (
    <div className="relative mt-10">
      <button
        className="absolute inset-y-0 left-0 z-10 flex w-12 items-center justify-center rounded-l-xl bg-slate-950/60 text-2xl font-semibold text-slate-300 backdrop-blur transition hover:bg-slate-900/90 hover:text-white"
        onClick={scrollLeft}
      >
        &lt;
      </button>
      <div
        ref={scrollRef}
        className="hide-scrollbar flex gap-4 overflow-x-auto rounded-xl border border-white/10 bg-white/[0.04] p-4"
      >
        {categories.map((category) => (
          <Category key={category.id} category={category}></Category>
        ))}
      </div>
      <button
        className="absolute inset-y-0 right-0 z-10 flex w-12 items-center justify-center rounded-r-xl bg-slate-950/60 text-2xl font-semibold text-slate-300 backdrop-blur transition hover:bg-slate-900/90 hover:text-white"
        onClick={scrollRight}
      >
        &gt;
      </button>
    </div>
  );
};
