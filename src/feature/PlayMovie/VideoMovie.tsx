import { resetSeriesFilm } from "@/src/redux/features/PlayMovieSlice";
import { useAppSelector } from "@/src/redux/store";
import { useParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export default function VideoMovie() {
  const { slug } = useParams<{ slug: string }>();
  console.log("🚀 ~ VideoMovie ~ slug:", slug);
  const dispatch = useDispatch();
  const seriesFilm = useAppSelector((state) => state.playMovie.seriesFilm);

  useEffect(() => {
    if (seriesFilm.movieSlug !== slug) {
      dispatch(resetSeriesFilm());
    }
  }, [slug, seriesFilm.movieSlug]);

  return (
    <div className="aspect-video  w-full">
      {seriesFilm.link_embed ? (
        <iframe
          src={seriesFilm.link_embed}
          allowFullScreen
          className=" rounded-xl  w-full h-full"
          allow="auto "
        />
      ) : (
        <div className="h-[500px] flex items-center justify-center text-white">
          Chọn tập để xem
        </div>
      )}
    </div>
  );
}
{
}
