import { FaAngleDown, FaImdb, FaStar } from "react-icons/fa";
import { MovieData } from "../../../types/entities/Movie";
import { useState } from "react";
// import Actor from "./Actor";

interface ContentfilmProps {
  detailFilm: MovieData;
}
export default function Contentfilm({ detailFilm }: ContentfilmProps) {
  const [openInfoOnMobile, setOpenInfoOnMobile] = useState(false);
  const handelOpenInfo = () => {
    setOpenInfoOnMobile((prev) => !prev);
  };
  const getTime = () => {
    const parseTime = parseInt(detailFilm.time, 10);
    const Hour = Math.floor(parseTime / 60);
    const Mintue = parseTime % 60;
    const totalTime = `${Hour}h ${Mintue}m `;
    return totalTime;
  };

  console.log(
    "🚀 ~ Contentfilm ~ detailFilm Cate:",
    detailFilm.tmdb.vote_average
  );
  if (!detailFilm) {
    return <p className="bg-re">Không có dữ liệu phim</p>;
  }

  return (
    <div
      className=" 
    flex flex-col gap-3 text-[12px] px-5 lg:px-0
    lg:rounded-tl-3xl lg:rounded-tr-[50px]
    lg:p-5 lg:w-[30%]
    
        lg:bg-linear-to-t
    lg:from-[#191b24]
    lg:via-[#191b24]
    lg:to-[#191b248e]
   
  "
    >
      <div className="flex flex-col gap-2 p-5 items-center lg:items-start text-white  ">
        <img
          className="w-[150px] h-[220px] lg:w-[120px] lg:h-[180px] object-cover rounded-2xl  "
          src={detailFilm.poster_url}
        />
        <h1 className=" text-[25px] lg:text-[18px] font-bold">
          {detailFilm.name}
        </h1>
        <p className=" text-[14px] text-[#AAAA] lg:text-[#f2db81]">
          {detailFilm.name}
        </p>
        <div
          onClick={handelOpenInfo}
          className="flex items-center gap-1 text-[14px] font-bold leading-none text-[#f2db81] lg:hidden"
        >
          <h1>Thông tin phim</h1>
          <FaAngleDown className="text-[16px]" />
        </div>
      </div>

      <div
        className={`flex flex-col gap-4 p-5 lg:px-0 rounded-2xl bg-[#00000033] lg:bg-[#0000000] lg:rounde-none ${
          openInfoOnMobile ? "block" : "hidden"
        } lg:bl`}
      >
        <div className="flex flex-wrap gap-2  text-white   ">
          <div className="flex gap-2 items-center rounded-lg  p-2 bg-[#05060c] border border-amber-300">
            <FaStar className="text-amber-300" />

            {detailFilm.tmdb.vote_average.toFixed(1)}
          </div>
          <div className="rounded-lg p-2  bg-linear-to-tr  from-[#ffffff] to-amber-300 text-[#151515] font-bold">
            {detailFilm.quality}
          </div>

          <div className="rounded-lg p-2 bg-[#282b3a] border border-white">
            {detailFilm.year}
          </div>
          <div className="rounded-lg p-2 bg-[#282b3a] border border-white">
            {getTime()}
          </div>
        </div>
        <div className="flex flex-wrap gap-2  text-white  ">
          {detailFilm.category.map((cate) => (
            <div key={cate.id} className="rounded-lg p-2 bg-[#282b3a]">
              {cate.name}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-3 ">
          <div>
            <h1 className="text-white text-[14px] font-bold">Giới Thiệu: </h1>
            <p className="text-gray-300 text-[14px] ">{detailFilm.content}</p>
          </div>

          <div className="flex gap-2">
            <h1 className="text-white text-[14px] font-bold">Thời Lượng: </h1>
            <p className="text-gray-300 text-[14px] ">{getTime()}</p>
          </div>
          <div className="flex gap-2">
            <h1 className="text-white text-[14px] font-bold">Quốc Gia: </h1>
            {detailFilm.country.map((country) => (
              <p key={country.id} className="text-gray-300 text-[14px] ">
                {country.name}
              </p>
            ))}
          </div>
          <div className="flex gap-2">
            <h1 className="text-white text-[14px] font-bold">Đạo Diễn: </h1>
            <p className="text-gray-300 text-[14px] ">
              {detailFilm.director.join(", ")}
            </p>
          </div>
          <div className="flex gap-2">
            <h1 className="text-white text-[14px] font-bold">Diễn Viên: </h1>
            <p className="text-gray-300 text-[14px] ">
              {detailFilm.actor.join(", ")}
            </p>
          </div>
          {/* <Actor tmdbId={detailFilm.tmdb.id} /> */}
        </div>
      </div>
    </div>
  );
}
