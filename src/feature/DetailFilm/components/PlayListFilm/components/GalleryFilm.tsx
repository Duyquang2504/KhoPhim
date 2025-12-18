import { MovieData } from "@/src/types/entities/Movie";

interface ContentfilmProps {
  detailFilm: MovieData;
}
export default function GalleryFilm({ detailFilm }: ContentfilmProps) {
  const embedTrailer = detailFilm.trailer_url.replace("watch?v=", "embed/");
  return (
    <div>
      <h1 className="text-white">Thư viện ảnh</h1>
      <img src={detailFilm.poster_url} />
      <img src={detailFilm.thumb_url} />
      <iframe
        src={embedTrailer}
        className="w-full aspect-video rounded-lg"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
