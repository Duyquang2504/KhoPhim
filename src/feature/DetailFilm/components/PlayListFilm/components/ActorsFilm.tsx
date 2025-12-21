"use client";
import { useAppSelector } from "@/src/redux/store";
import Image from "next/image";

export default function ActorsFilm() {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w300_and_h450_face";
  const actor = useAppSelector((state) => state.detailFilm.credits);
  console.log("🚀 ~ ActorsFilm ~ actor:", actor);
  const top5Actors = actor?.cast.slice(0, 8);
  console.log("🚀 ~ ActorsFilm ~ top5Actors:", top5Actors);

  if (!actor) return <p>Không có diễn viên</p>;
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {top5Actors?.map((actor) => (
        <div
          key={actor.id}
          className="relative rounded-xl overflow-hidden bg-[#949090]"
        >
          <img
            src={
              actor.profile_path
                ? `${IMAGE_BASE_URL}${actor.profile_path}`
                : "/anonymus.svg"
            }
            className="aspect-[3/4] object-cover block"
          />
          <div className="absolute bottom-0 w-full z-5 bg-linear-to-t from-[#000000a9] to-[#01010100] text-white p-3">
            <div className="flex flex-col items-center gap-1">
              <p className="text-[12px] font-semibold">
                {actor.name || "Chưa cập nhật"}
              </p>
              <p className="text-[12px] opacity-80 text-[#F0ADB1]">
                {actor.character || "Chưa cập nhật"}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
