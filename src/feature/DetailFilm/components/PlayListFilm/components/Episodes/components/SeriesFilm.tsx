import { EpisodeServer, MovieData } from "@/src/types/entities/Movie";
import Link from "next/link";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { PiKeyboard } from "react-icons/pi";

interface ContentfilmProps {
  detailFilm: MovieData;
  epiposidesFilm: EpisodeServer[];
}
export default function SeriesFilm({
  detailFilm,
  epiposidesFilm,
}: ContentfilmProps) {
  const [type, setType] = useState("#Hà Nội (Vietsub)");
  return (
    <div className="flex flex-col gap-8 ">
      <div className="flex  items-center gap-5">
        <div className="text-white text-[18px] font-bold  pr-3 border-r-2 border-r-[#ffd773] ">
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
        ?.filter((name) => name.server_name === type)
        .map((name, id) => (
          <div
            key={id}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 "
          >
            {name.server_data.map((ep, id) => (
              <div className=" flex items-center gap-2 p-3 bg-[#343642] text-white text-center justify-center rounded-md text-[13px] hover:text-[#ffd773]">
                <FaPlay size={10} /> {ep.name}
              </div>
            ))}
          </div>
        ))}
    </div>
  );
}
