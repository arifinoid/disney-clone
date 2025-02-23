"use client";

import { useState, useEffect } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import MovieCard from "@/components/MovieCard";
import { searchMulti } from "@/lib/tmdb";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    if (!debouncedQuery) return setResults([]);

    searchMulti(debouncedQuery).then(setResults);
  }, [debouncedQuery]);

  return (
    <div className="p-4 text-white">
      <h1 className="text-2xl font-bold mb-4">Search</h1>
      <input
        type="text"
        placeholder="Search for movies or TV shows..."
        className="w-full p-2 rounded bg-gray-800 text-white mb-4"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="flex flex-wrap gap-4">
        {results.map((item) =>
          item.media_type === "movie" || item.media_type === "tv" ? (
            <MovieCard
              key={item.id}
              id={item.id}
              title={item.title || item.name}
              overview={item.overview}
              posterPath={item.poster_path}
              type={item.media_type}
            />
          ) : null,
        )}
      </div>
    </div>
  );
}
