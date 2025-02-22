import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const tmdb = axios.create({
  baseURL: BASE_URL,
  params: { api_key: API_KEY },
});

export const getTopRatedMovies = async () => {
  const res = await tmdb.get("/movie/top_rated");
  return res.data.results;
};

export const getTopRatedTVShows = async () => {
  const res = await tmdb.get("/tv/top_rated");
  return res.data.results;
};
