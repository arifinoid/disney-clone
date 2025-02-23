import { getMovieDetails } from "@/lib/tmdb";

export default async function MovieDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const movie = await getMovieDetails(id);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
        className="w-full rounded-lg mt-4"
      />
      <p className="mt-4">{movie.overview}</p>
    </div>
  );
}
