"use client";

import { useEffect, useState } from "react";
import { getTopRatedMovies, getTopRatedTVShows } from "@/lib/tmdb";
import MovieCard from "@/components/MovieCard";

export default function Home() {
  const [movies, setMovies] = useState<any[]>([]);
  const [tvShows, setTvShows] = useState<any[]>([]);

  useEffect(() => {
    getTopRatedMovies().then(setMovies);
    getTopRatedTVShows().then(setTvShows);
  }, []);

  return (
    <div className="p-4 text-white">
      <h1 className="text-2xl font-bold mb-4">Top Rated Movies</h1>
      <div className="flex space-x-4 overflow-x-auto">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            overview={movie.overview}
            posterPath={movie.poster_path}
          />
        ))}
      </div>

      <h1 className="text-2xl font-bold mt-8 mb-4">Top Rated TV Shows</h1>
      <div className="flex space-x-4 overflow-x-auto">
        {tvShows.map((tv) => (
          <MovieCard
            key={tv.id}
            title={tv.name}
            overview={tv.overview}
            posterPath={tv.poster_path}
          />
        ))}
      </div>
    </div>
  );
}
