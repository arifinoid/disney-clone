import { getTVDetails } from "@/lib/tmdb";

export default async function TVDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const tv = await getTVDetails(id);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{tv.name}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w780${tv.backdrop_path}`}
        className="w-full rounded-lg mt-4"
      />
      <p className="mt-4">{tv.overview}</p>
    </div>
  );
}
