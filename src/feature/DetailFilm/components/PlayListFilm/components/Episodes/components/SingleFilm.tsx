"use client";
import { setSingleFilm } from "@/src/redux/features/PlayMovieSlice";
import { useAppSelector } from "@/src/redux/store";
import { EpisodeServer, MovieData } from "@/src/types/entities/Movie";
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";

interface ContentfilmProps {
  detailFilm: MovieData;
  epiposidesFilm: EpisodeServer[];
}
export default function SingleFilm({
  detailFilm,
  epiposidesFilm,
}: ContentfilmProps) {
  const dispatch = useDispatch();
  const [type, setType] = useState("#Hà Nội (Vietsub)");
  const handleChangSingleFilm = (slug: string, link_embed: string) => {
    const singlefilm = {
      movieSlug: detailFilm?.slug,
      episodeSlug: slug,
      link_embed: link_embed,
    };

    dispatch(setSingleFilm(singlefilm));
    console.log("🚀 ~ handleChangSingleFilm ~ SingleFilm:", singlefilm);
  };
  const selectedEpisodeSlug = useAppSelector(
    (state) => state.playMovie.singleFilm.episodeSlug
  );

  console.log("selectedEpisodeSlug:", selectedEpisodeSlug);
  console.log(
    "server slugs:",
    epiposidesFilm?.flatMap((es) => es.server_data.map((s) => s.slug))
  );
  return (
    <div className="flex flex-col gap-8 ">
      <div className="flex  items-center gap-5">
        <div className="text-white text-[18px] font-bold ">Các bản chiếu</div>
      </div>
      <div className="flex flex-col lg:flex-row gap-4">
        {epiposidesFilm?.map((es, idx) => (
          <Link key={idx} href={`/PlayMovie/${detailFilm.slug}`}>
            {es.server_data.map((server, i) => (
              <div
                key={i}
                onClick={() =>
                  handleChangSingleFilm(server.slug, server.link_embed)
                }
                className={`relative w-full lg:w-[300px] h-[150px] rounded-2xl overflow-hidden transition-transform duration-200 ease-out
          hover:-translate-y-2 
            ${
              server.slug === selectedEpisodeSlug
                ? "border-2 border-[#ffd773]"
                : "border-none"
            }  
                  
          `}
              >
                <img
                  src={detailFilm.poster_url || "/anonymus.svg"}
                  alt=""
                  className="w-full h-full object-contain object-right"
                />

                <div
                  className={`absolute inset-0 bg-gradient-to-r p-2   ${
                    es.server_name === "#Hà Nội (Thuyết Minh)"
                      ? "from-[#297447] via-[#297447f4] via-60% to-transparent"
                      : "from-[#5e6070] via-[#5e6070f4] via-60% to-transparent"
                  }`}
                >
                  <div className="flex flex-col gap-2   pl-1 w-[90%] h-full justify-center ">
                    <div className="flex gap-1 items-center ">
                      <img
                        src={
                          es.server_name === "#Hà Nội (Vietsub)"
                            ? "/pd.svg"
                            : "/tm.svg"
                        }
                        className="w-[20px] h-[20px]"
                      />
                      <p className="text-[#fff] text-[12px] font-bold">
                        {es.server_name === "#Hà Nội (Vietsub)" && "Phụ đề"}
                        {es.server_name === "#Hà Nội (Thuyết Minh)" &&
                          "Thuyết minh"}
                      </p>
                    </div>
                    <div className="text-[#fff] text-[16px] ">
                      {detailFilm.name}
                    </div>
                    <div className="cursor-pointer  rounded-sm bg-white w-[40%]  p-2 text-center text-black font-bold text-[9px] ">
                      Xem bản này
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Link>
        ))}
      </div>
    </div>
  );
}

// <Link
//
//                 href={`/PlayMovie/${detailFilm.slug}`}

//                 className={`cursor-pointer  rounded-sm bg-white w-[40%] text-center ${
//                   server.slug === selectedEpisodeSlug
//                     ? "border-1 border-[#ffd773]"
//                     : "border-none"
//                 }`}
//               >
//
//               </Link>
