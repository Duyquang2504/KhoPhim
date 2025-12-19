import { MovieData } from "@/src/types/entities/Movie";

interface ContentfilmProps {
  detailFilm: MovieData;
}
export default function GalleryFilm({ detailFilm }: ContentfilmProps) {
  const embedTrailer = detailFilm.trailer_url.replace("watch?v=", "embed/");
  return (
    <div className="flex flex-col items-center gap-6">
      {/* Trailer */}
      <iframe
        src={embedTrailer}
        className="w-[90%] lg:w-[70%] aspect-video rounded-lg"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />

      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 w-full">
        <div className="relative w-[70%] sm:w-[55%] lg:w-[30%] aspect-[3/4] rounded-lg overflow-hidden">
          <img
            src={detailFilm.poster_url}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <div className="relative w-[85%] sm:w-[70%] lg:w-[30%] aspect-[16/10] rounded-lg overflow-hidden">
          <img
            src={detailFilm.thumb_url}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
