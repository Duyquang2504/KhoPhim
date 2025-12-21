import { Episode, EpisodeServer, MovieData } from "@/src/types/entities/Movie";
import Link from "next/link";
import { useState } from "react";
import { BiMessageAltDetail } from "react-icons/bi";
import { PiKeyboard } from "react-icons/pi";
interface ContentfilmProps {
  detailFilm: MovieData;
  epiposidesFilm: EpisodeServer[];
}
export default function SingleFilm({
  detailFilm,
  epiposidesFilm,
}: ContentfilmProps) {
  console.log("🚀 ~ SingleFilm ~ epiposides:", epiposidesFilm);

  const [type, setType] = useState("#Hà Nội (Vietsub)");

  return (
    <div className="flex flex-col gap-8 ">
      <div className="flex  items-center gap-5">
        <div className="text-white text-[18px] font-bold pr-4 border-r-2 border-r-[#ffd773] ">
          Các bản chiếu
        </div>

        {epiposidesFilm?.map((es, index) => {
          console.log("server_data: ", es.server_data);
          return (
            <div
              key={index}
              onClick={() => setType(es.server_name)}
              className={`flex items-center gap-3 text-[#ffff]  px-3 border-1 rounded-md cursor-pointer  ${
                type === es.server_name
                  ? "text-[#ffd773] border-[#ffd773]"
                  : "text-white border-transparent"
              } `}
            >
              <PiKeyboard />
              <p>
                {(es.server_name === "#Hà Nội (Vietsub)" && "Phụ đề") ||
                  (es.server_name === "#Hà Nội (Thuyết Minh)" && "Thuyết minh")}
              </p>
            </div>
          );
        })}
      </div>
      {epiposidesFilm
        ?.filter((es) => es.server_name === type)
        .map((es, idx) => (
          <div
            key={idx}
            className="relative w-[250px] h-[150px] rounded-2xl overflow-hidden transition-transform duration-200 ease-out
    hover:-translate-y-2"
          >
            <img
              src={detailFilm.poster_url || "/anonymus.svg"}
              alt=""
              className="w-full h-full object-contain object-right"
            />

            <div className="absolute inset-0 bg-gradient-to-r p-2  from-[#5e6070] via-[#5e6070f4] via-60% to-transparent">
              <div className="flex flex-col gap-2   pl-1 w-[90%] h-full justify-center ">
                <div className="flex gap-1 items-center ">
                  <img src="/pd.svg" className="w-[20px] h-[20px]" />
                  <p className="text-[#fff] text-[12px] font-bold">
                    {es.server_name === "#Hà Nội (Vietsub)" && "Phụ đề"}
                    {es.server_name === "#Hà Nội (Thuyết Minh)" &&
                      "Thuyết minh"}
                  </p>
                </div>
                <div className="text-[#fff] text-[16px] text-center">
                  {detailFilm.name}
                </div>
                {es.server_data.map((server, i) => (
                  <Link
                    key={i}
                    href={server.link_embed}
                    className="cursor-pointer  rounded-sm bg-white w-[40%] text-center"
                  >
                    <div
                      key={i}
                      className="line-clamp-1 p-1 text-[#000] font-bold text-[9px] cursor-pointer"
                    >
                      Xem bản này
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
