import DetailFilm from "@/src/pages/DetailFilm/DetailFilm";
import { getDetailFilm } from "@/src/service/moviesApi";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const film = await getDetailFilm(slug);
  if (!film || !film.name) {
    return { title: "Ôi! Phim Lỗi Rồi..." };
  }
  return { title: film.name };
}

interface Params {
  params: Promise<{
    slug: string;
  }>;
}

export default async function DetailMoviePage({ params }: Params) {
  const { slug } = await params;

  return <DetailFilm slug={slug} />;
}
