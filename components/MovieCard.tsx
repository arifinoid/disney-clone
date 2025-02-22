import { useState } from "react";

interface MovieCardProps {
  title: string;
  overview: string;
  posterPath: string;
}

const MovieCard = ({ title, overview, posterPath }: MovieCardProps) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative w-40 md:w-48 cursor-pointer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        alt={title}
        className="rounded-lg"
      />
      {hover && (
        <div className="absolute inset-0 bg-black bg-opacity-75 text-white p-2 rounded-lg">
          <h3 className="text-sm font-bold">{title}</h3>
          <p className="text-xs">{overview.slice(0, 80)}...</p>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
