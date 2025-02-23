import Link from "next/link";

interface MovieCardProps {
  id: number;
  title?: string;
  overview?: string;
  posterPath?: string;
  type: "movie" | "tv";
}

const MovieCard = ({
  id,
  title,
  overview,
  posterPath,
  type,
}: MovieCardProps) => {
  return (
    <Link href={`/${type}/${id}`}>
      <div className="relative w-48 cursor-pointer group">
        <img
          src={`https://image.tmdb.org/t/p/w500${posterPath}`}
          alt={title}
          className="rounded-lg transition-transform group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black bg-opacity-80 text-white p-3 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
          <h3 className="text-sm font-bold">{title}</h3>
          <p className="text-xs mt-1">{overview?.slice(0, 80)}...</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
