import PlayMovie from "../PlayMovie";

interface Params {
  params: Promise<{
    slug: string;
  }>;
}

export const dynamic = "force-dynamic";

export default async function PlayMoviePage({ params }: Params) {
  const { slug } = await params;

  return <PlayMovie slug={slug} />;
}
