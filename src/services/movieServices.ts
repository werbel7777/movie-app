import axios from "axios";
import type { AxiosResponse } from "axios";
import type { MovieResponse } from "../types/types";
const baseUrl =
  "https://api.themoviedb.org/3/search/movie?api_key=3869c6619ebd5eadb7028dcddad8ac45&query=";

const getAll = (query: string): Promise<AxiosResponse<MovieResponse>> => {
  if (query) {
    const request = axios.get(baseUrl + query);
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
export default { getAll };
