import DetailFilm from "../DetailFilm";

interface Params {
  params: Promise<{
    slug: string;
  }>;
}

export const dynamic = 'force-dynamic';

export default async function DetailMoviePage({ params }: Params) {
  const { slug } = await params;

  return <DetailFilm slug={slug} />;
}
