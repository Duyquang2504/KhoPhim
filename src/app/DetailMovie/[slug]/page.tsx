import DetailFilm from "@/src/pages/DetailFilm/DetailFilm";
import { getDetailFilm } from "@/src/service/moviesApi";

interface Params {
  params: Promise<{
    slug: string;
  }>;
}

export default async function DetailMoviePage({ params }: Params) {
  const { slug } = await params;

  return <DetailFilm slug={slug} />;
}
