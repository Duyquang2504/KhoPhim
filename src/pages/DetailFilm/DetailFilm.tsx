"use client";

import { getDetailFilm } from "@/src/service/moviesApi";
import { useEffect, useState } from "react";
import { MovieData } from "../../types/entities/Movie";
import Contentfilm from "../../feature/DetailFilm/components/Contentfilm";
import PlayListFilm from "../../feature/DetailFilm/components/PlayListFilm/PlayListFilm";
import BannerHome from "@/src/components/BannerHome";
// import Actor from "./components/Actor";
import { ImCrying } from "react-icons/im";
import LoadingPage from "@/src/components/LoadingPage";

interface CardMoviesProps {
  slug: string;
}

export default function DetailFilm({ slug }: CardMoviesProps) {
  const [detailFilm, setDetailFilm] = useState<MovieData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDetailFilm(slug).then((data) => {
      setTimeout(() => {
        setDetailFilm(data);
        setLoading(false);
      }, 1500);
    });
  }, [slug]);
  console.log(!detailFilm?.thumb_url);

  if (loading) {
    return <LoadingPage />;
  }

  if (!detailFilm || !detailFilm.thumb_url) {
    return (
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
        <div className="flex text-gray-500 text-[25px] gap-2">
          <ImCrying size={30} />
          ÔI! PHIM BỊ LỖI RỒI
        </div>
      </div>
    );
  }

  return (
    <div className=" flex flex-col ">
      <div
        className="absolute inset-0 w-full h-[50%] lg:h-full bg-top bg-cover bg-no-repeat "
        style={{ backgroundImage: `url(${detailFilm.thumb_url})` }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle,#00000040_20%,#0e0f1a_100%)]" />

      <div
        className="absolute flex flex-col lg:flex-row  w-full h-full  lg:h-full translate-y-[250px]  lg:translate-y-[450px] lg:px-5 
        bg-linear-to-t
   from-[#191b24]
    via-[#191b24]
    to-[#191b248e 
    
    "
      >
        <Contentfilm detailFilm={detailFilm} />
        <PlayListFilm detailFilm={detailFilm} />
      </div>
    </div>
  );
}
