import type { paths, components } from "@/gen/schema";

export type TopRatedMovieResponse =
  paths["/3/movie/top_rated"]["get"]["responses"]["200"]["content"]["application/json"];

export type TopRatedTVShowResponse =
  paths["/3/tv/top_rated"]["get"]["responses"]["200"]["content"]["application/json"];

export type MovieResponse =
  paths["/3/movie/{movie_id}"]["get"]["responses"]["200"]["content"]["application/json"];

export type TVShowResponse =
  paths["/3/tv/{series_id}"]["get"]["responses"]["200"]["content"]["application/json"];

export type SearchResult =
  paths["/3/search/multi"]["get"]["responses"]["200"]["content"]["application/json"];
