import { useAppSelector } from "@/src/redux/store";
import Image from "next/image";

export default function ActorsFilm() {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w300_and_h450_face";
  const actor = useAppSelector((state) => state.detailFilm.credits);
  console.log("🚀 ~ ActorsFilm ~ actor:", actor);
  const top5Actors = actor?.cast.slice(0, 8);
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
          <div className="absolute bottom-0 w-full z-5 bg-linear-to-t from-[#00000083] to-[#01010118] text-white p-3">
            <div className="flex flex-col items-center gap-1">
              <p className="text-sm font-semibold">Tên diễn viên</p>
              <p className="text-xs opacity-80">Tên diễn viên</p>
            </div>
          </div>
        </div>
      ))}
    </div>

    // <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

    //   <div className="relative rounded-xl overflow-hidden bg-[#949090]">
    //     <img src="/anonymus.svg" className="aspect-[3/4] object-cover block" />

    //     <div className="absolute bottom-0 w-full z-5 bg-linear-to-t from-[#00000083] to-[#01010118] text-white p-3">
    //       <div className="flex flex-col items-center gap-1">
    //         <p className="text-sm font-semibold">Tên diễn viên</p>
    //         <p className="text-xs opacity-80">Tên diễn viên</p>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="relative rounded-xl overflow-hidden bg-[#949090]">
    //     <img src="/anonymus.svg" className="aspect-[3/4] object-cover block" />

    //     <div className="absolute bottom-0 w-full z-5 bg-linear-to-t from-[#00000083] to-[#01010118] text-white p-3">
    //       <div className="flex flex-col items-center gap-1">
    //         <p className="text-sm font-semibold">Tên diễn viên</p>
    //         <p className="text-xs opacity-80">Tên diễn viên</p>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="relative rounded-xl overflow-hidden bg-[#949090]">
    //     <img src="/anonymus.svg" className="aspect-[3/4] object-cover block" />

    //     <div className="absolute bottom-0 w-full z-5 bg-linear-to-t from-[#00000083] to-[#01010118] text-white p-3">
    //       <div className="flex flex-col items-center gap-1">
    //         <p className="text-sm font-semibold">Tên diễn viên</p>
    //         <p className="text-xs opacity-80">Tên diễn viên</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
