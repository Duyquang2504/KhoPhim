import DetailFilm from "@/src/pages/DetailFilm/DetailFilm";

interface Params {
  params: Promise<{
    slug: string;
  }>;
}

export default async function DetailMoviePage({ params }: Params) {
  const { slug } = await params;

  return <DetailFilm slug={slug} />;
}
