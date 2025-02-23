import {
  MovieResponse,
  SearchResult,
  TopRatedMovieResponse,
  TopRatedTVShowResponse,
  TVShowResponse,
} from "@/types/api";
import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const tmdb = axios.create({
  baseURL: BASE_URL,
  params: { api_key: API_KEY },
});

export const getTopRatedMovies = async () => {
  const res = await tmdb.get<TopRatedMovieResponse>("/movie/top_rated");
  return res.data.results;
};

export const getTopRatedTVShows = async () => {
  const res = await tmdb.get<TopRatedTVShowResponse>("/tv/top_rated");
  return res.data.results;
};

export const searchMulti = async (query: string) => {
  const res = await tmdb.get<SearchResult>("/search/multi", {
    params: { query },
  });
  return res.data.results;
};

export const getTVDetails = async (id: string) => {
  const res = await tmdb.get<TVShowResponse>(`/tv/${id}`);
  return res.data;
};

export const getMovieDetails = async (id: string) => {
  const res = await tmdb.get<MovieResponse>(`/movie/${id}`);
  return res.data;
};
