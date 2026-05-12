import axios from "axios";
import type { AxiosResponse } from "axios";
import type { MovieResponse } from "../types/types";
import type { Movie } from "../types/types";
import type { CategoriesResponse } from "../types/types";
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const getAll = (query: string): Promise<AxiosResponse<MovieResponse>> => {
  if (query) {
    const request = axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`,
    );
    return request;
  } else {
    return Promise.resolve({
      data: { page: 1, results: [], total_pages: 0, total_results: 0 },
      status: 200,
      statusText: "OK",
      headers: {},
      config: {},
    } as unknown as AxiosResponse<MovieResponse>);
  }
};

const getTrend = (): Promise<AxiosResponse<MovieResponse>> => {
  const request = axios.get<MovieResponse>(
    `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`,
  );
  return request;
};
const getDetails = (id: string): Promise<AxiosResponse<Movie>> => {
  const request = axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  return request;
};

const getCategories = (): Promise<AxiosResponse<CategoriesResponse>> => {
  const request = axios.get<CategoriesResponse>(
    `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`,
  );
  return request;
};
export default { getTrend, getAll, getDetails, getCategories };
