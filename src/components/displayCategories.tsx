import { Category } from "./category";
import type { Category as CategoryType } from "../types/types";
import { useEffect, useRef, useState } from "react";
import service from "../services/movieServices";
import { SectionTitle } from "./trending-now";

type CategoryPoster = {
  movieId: number;
  posterPath: string;
};

type CategoryPosters = Record<number, CategoryPoster[]>;

export const DisplayCategories = ({
  categories,
  query,
}: {
  categories: CategoryType[];
  query: string;
}) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [categoryPosters, setCategoryPosters] = useState<CategoryPosters>({});
  const [activePosterIndex, setActivePosterIndex] = useState(0);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  useEffect(() => {
    if (!categories.length) return;

    const requests = categories.map((category) =>
      service.getMovieByCategory(category.id),
    );

    Promise.all(requests).then((responses) => {
      const posters = responses.reduce<CategoryPosters>(
        (posterList, response, index) => {
          const categoryId = categories[index].id;
          const categoryMoviePosters: CategoryPoster[] = [];
          const usedCategoryMovieIds = new Set<number>();
          const usedCategoryPosterPaths = new Set<string>();

          response.data.results.forEach((movie) => {
            if (
              categoryMoviePosters.length === 5 ||
              !movie.poster_path ||
              usedCategoryMovieIds.has(movie.id) ||
              usedCategoryPosterPaths.has(movie.poster_path)
            ) {
              return;
            }

            usedCategoryMovieIds.add(movie.id);
            usedCategoryPosterPaths.add(movie.poster_path);
            categoryMoviePosters.push({
              movieId: movie.id,
              posterPath: movie.poster_path,
            });
          });

          return {
            ...posterList,
            [categoryId]: categoryMoviePosters,
          };
        },
        {},
      );

      setCategoryPosters(posters);
    });
  }, [categories]);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActivePosterIndex((currentIndex) => currentIndex + 1);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, []);

  if (query) return null;
  if (!categories.length) return null;

  const visibleMovieIds = new Set<number>();
  const visiblePosterPaths = new Set<string>();

  const getVisiblePosterPath = (posters: CategoryPoster[]) => {
    if (!posters.length) return undefined;

    for (let i = 0; i < posters.length; i += 1) {
      const poster = posters[(activePosterIndex + i) % posters.length];

      if (
        !visibleMovieIds.has(poster.movieId) &&
        !visiblePosterPaths.has(poster.posterPath)
      ) {
        visibleMovieIds.add(poster.movieId);
        visiblePosterPaths.add(poster.posterPath);
        return poster.posterPath;
      }
    }

    return undefined;
  };

  return (
    <section className="mt-10 overflow-hidden rounded-xl border border-white/10 bg-white/[0.04]">
      <div className="border-b border-white/10 px-4 py-3">
        <SectionTitle>Categories</SectionTitle>
      </div>
      <div className="relative">
        <button
          className="absolute inset-y-0 left-0 z-10 hidden w-12 items-center justify-center bg-slate-950/60 text-2xl font-semibold text-slate-300 backdrop-blur transition hover:bg-slate-900/90 hover:text-white lg:flex"
          onClick={scrollLeft}
        >
          &lt;
        </button>
        <div
          ref={scrollRef}
          className="hide-scrollbar flex gap-3 overflow-x-auto p-3 sm:gap-4 sm:p-4"
        >
          {categories.map((category) => (
            <Category
              key={category.id}
              category={category}
              posterPath={getVisiblePosterPath(
                categoryPosters[category.id] ?? [],
              )}
            ></Category>
          ))}
        </div>
        <button
          className="absolute inset-y-0 right-0 z-10 hidden w-12 items-center justify-center bg-slate-950/60 text-2xl font-semibold text-slate-300 backdrop-blur transition hover:bg-slate-900/90 hover:text-white lg:flex"
          onClick={scrollRight}
        >
          &gt;
        </button>
      </div>
    </section>
  );
};
