import axios from "axios";
const baseUrl =
  "https://api.themoviedb.org/3/search/movie?api_key=3869c6619ebd5eadb7028dcddad8ac45&query=";

const getAll = (query) => {
  if (query) {
    const request = axios.get(baseUrl + query);
    return request;
  } else {
    return Promise.resolve({ data: { results: [] } });
  }
};
export default { getAll };
