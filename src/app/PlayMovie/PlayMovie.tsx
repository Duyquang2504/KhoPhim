"use client";

import EpisodesFilm from "@/src/feature/DetailFilm/components/PlayListFilm/components/Episodes/EpisodesFilm";
import VideoMovie from "@/src/feature/PlayMovie/VideoMovie";
import { Episode, EpisodeServer, MovieData } from "@/src/types/entities/Movie";
import { GrFormPrevious, GrPrevious } from "react-icons/gr";
import { useAppSelector } from "../hook";
import { useGetDetailMovieQuery } from "@/src/service/kkphim.service";
import { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import {
  setCredits,
  setDataDetailMovie,
  setEpisodes,
} from "@/src/redux/features/DetailFilmSlice";
import { FaStar } from "react-icons/fa";
import { MdNavigateNext } from "react-icons/md";
import ActorsFilm from "@/src/feature/DetailFilm/components/PlayListFilm/components/ActorsFilm";
import { useGetMovieCredistQuery } from "@/src/service/tmdb.service";
import {
  setSeriesFilm,
  resetSeriesFilm,
} from "@/src/redux/features/PlayMovieSlice";

interface PlayMovieProps {
  slug: string;
}

export default function PlayMovie({ slug }: PlayMovieProps) {
  const dispatch = useDispatch();
  const { data } = useGetDetailMovieQuery(slug);
  const getTime = () => {
    const parseTime = detailFilm?.time ? parseInt(detailFilm.time, 10) : 0;
    const Hour = Math.floor(parseTime / 60);
    const Mintue = parseTime % 60;
    const totalTime = `${Hour}h ${Mintue}m `;
    return totalTime;
  };

  const detailFilm = useMemo(() => {
    return data?.movie ?? null;
  }, [data]);

  const epiposidesFilm = useMemo(() => {
    return data?.episodes ?? [];
  }, [data?.episodes]);
  const movieId = detailFilm?.tmdb?.id;
  const type = detailFilm?.tmdb?.type;

  const { data: datatmdb } = useGetMovieCredistQuery(
    { movieId: Number(movieId!), type: type! },
    { skip: !movieId || !type }
  );
  const linkFilm = useAppSelector(
    (state) => state.playMovie.seriesFilm.link_embed
  );

  useEffect(() => {
    if (!epiposidesFilm?.length || !!linkFilm) return;

    const firstEp = epiposidesFilm?.[0]?.server_data?.[0];

    if (!firstEp) return;

    dispatch(
      setSeriesFilm({
        movieSlug: detailFilm?.slug ?? "",
        episodeSlug: firstEp.slug,
        link_embed: firstEp.link_embed,
      })
    );
  }, [epiposidesFilm, detailFilm, linkFilm]);

  useEffect(() => {
    if (datatmdb && detailFilm) {
      dispatch(setCredits(datatmdb));
      dispatch(setDataDetailMovie(detailFilm));
      dispatch(setEpisodes(epiposidesFilm));
    }
  }, [datatmdb, detailFilm, epiposidesFilm, dispatch]);

  return (
    <div className="mt-20  text-white flex flex-col gap-3">
      <div className="flex gap-3 items-center pl-4 lg:pl-10 order-2 lg:order-1 ">
        <div className=" p-1 border-1 border-white rounded-full">
          <GrFormPrevious size={18} className="text-white " />
        </div>
        <p>Xem Phim: </p>
      </div>
      <div className="px-1 lg:px-5 order-1 lg:order-2 ">
        <VideoMovie />
      </div>

      <div className=" p-8 w-full h-full order-2 lg:order-2 grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="col-span-2">
          <div className="flex flex-col gap-8">
            {/* -------- */}
            <div className=" hidden  md:flex gap-2 pb-8 border-b-1 border-b-[#5b5757] justify-between">
              <div className="flex gap-8  ">
                {/* ảnh */}
                <img
                  src={detailFilm?.thumb_url}
                  className="w-[100px] h-[150px] rounded-xl object-cover"
                />
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-2">
                    <h1 className="text-[20px] font-bold">
                      {detailFilm?.name}
                    </h1>
                    <p className="text-[14px] text-[#f2db81]">
                      {detailFilm?.origin_name}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-[10px]">
                    <div className=" flex items-center py-1 px-2 bg-[#05060c] border-amber-300 rounded-lg">
                      <FaStar className="text-amber-300" />
                      {detailFilm?.tmdb?.vote_average.toFixed(1)}
                    </div>
                    <div className="rounded-lg py-1 px-2 bg-linear-to-tr  from-[#ffffff] to-amber-300 text-[#151515] font-bold">
                      {detailFilm?.quality}
                    </div>
                    <div className="rounded-lg py-1 px-2 bg-[#282b3a] border border-white">
                      {detailFilm?.year}
                    </div>
                    <div className="rounded-lg py-1 px-2 bg-[#282b3a] border border-white">
                      {getTime()}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[10px]">
                    {detailFilm?.category?.map((cate, id) => (
                      <div
                        key={id}
                        className="rounded-lg py-1 px-2 bg-[#282b3a] "
                      >
                        {cate.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 w-[40%]">
                <div className="text-[10px] text-[#cccc] line-clamp-3 ">
                  {detailFilm?.content}
                </div>
                <div className="text-[12px] flex  gap-1 text-[#f2db81] leading-none">
                  <p>Thông tin phim</p>
                  <MdNavigateNext size={15} />
                </div>
              </div>
            </div>
            {/* -------- */}

            <EpisodesFilm
              detailFilm={data?.movie!}
              epiposidesFilm={data?.episodes!}
            />
          </div>
        </div>
        <div className="flex flex-col gap-3 h-full ">
          <h1 className="text-[20px] lg:pl-8">Diễn Viên</h1>
          <ActorsFilm variant="playmovie" />
        </div>
      </div>
    </div>
  );
}
