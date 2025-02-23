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
      <div className="relative w-40 md:w-48 cursor-pointer">
        <img
          src={`https://image.tmdb.org/t/p/w500${posterPath}`}
          alt={title}
          className="rounded-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-75 text-white p-2 rounded-lg opacity-0 hover:opacity-100">
          <h3 className="text-sm font-bold">{title}</h3>
          <p className="text-xs">{overview.slice(0, 80)}...</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
