"use-client";
import { useState } from "react";
import { FaHeart, FaPlay } from "react-icons/fa";
import { IoIosSend, IoMdAdd } from "react-icons/io";
import { MdAdd } from "react-icons/md";
import { RiAddLargeFill } from "react-icons/ri";
import EpisodesFilm from "./components/EpisodesFilm";
import GalleryFilm from "./components/GalleryFilm";
import ActorsFilm from "./components/ActorsFilm";

export default function PlayListFilm() {
  const tabs = ["Tập phim", "Gallery", "Diễn viên"];
  const [type, setType] = useState("Tập phim");
  const [openInfoOnMobile, setOpenInfoOnMobile] = useState(false);
  const handelOpenInfo = () => {
    setOpenInfoOnMobile((prev) => !prev);
  };
  return (
    <div
      className="flex flex-col gap-8 w-full lg:w-[70%] lg:rounded-tr-3xl px-8 lg:rounded-tl-[50px] 
 
    lg:bg-linear-to-t
    lg:from-[#191b24]
    lg:via-[#191b24]
    lg:to-[#191b248e]"
    >
      <div className="flex items-center lg:justify-center  pt-10 pb-5 gap-10">
        <div
          onClick={handelOpenInfo}
          className="flex items-center gap-3 bg-linear-to-r from-[#ffd773] to-[#ffecbb] p-4 px-8 rounded-3xl text-[16px] font-bold shadow-[0_0_6px_#ffd773ad] cursor-pointer transition-all duration-200 ease-out hover:shadow-[0_0_15px_#ffd773]"
        >
          <FaPlay />
          <p>Xem ngay</p>
        </div>
        <div className="flex items-center gap-10 text-[12px] font-bold">
          <div className=" flex flex-col justify-center items-center text-[#ffff] gap-2 p-3  cursor-pointer  group hover:bg-[#1e1f28] rounded-2xl">
            <FaHeart
              size={20}
              className="font-bold  group-hover:text-[#ffd773]"
            />
            <p>Yêu thích</p>
          </div>
          <div className="flex flex-col justify-center items-center text-[#ffff] gap-2 p-3 cursor-pointer group  hover:bg-[#1e1f28] rounded-2xl">
            <RiAddLargeFill
              size={20}
              className="font-bold group-hover:text-[#ffd773] "
            />
            <p>Thêm vào</p>
          </div>
          <div className="flex flex-col justify-center items-center text-[#ffff] gap-2 p-3 cursor-pointer group hover:bg-[#1e1f28] rounded-2xl">
            <IoIosSend
              size={20}
              className="font-bold group-hover:text-[#ffd773] "
            />
            <p>Chia sẻ</p>
          </div>
        </div>
      </div>
      <div className="flex gap-10 items-center  border-b-1 border-b-[#514b4b29] ">
        {tabs.map((tab) => (
          <div
            key={tab}
            className={`pb-2 border-b-1 transition-all duration-100 ease-linear cursor-pointer ${
              type === tab
                ? "text-[#ffd773] border-[#ffd773]"
                : "text-white border-transparent"
            }`}
            onClick={() => setType(tab)}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className="py-3  ">
        {type === "Tập phim" && <EpisodesFilm />}
        {type === "Gallery" && <GalleryFilm />}
        {type === "Diễn viên" && <ActorsFilm />}
      </div>
    </div>
  );
}
