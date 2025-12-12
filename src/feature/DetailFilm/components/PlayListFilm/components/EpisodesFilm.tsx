export default function EpisodesFilm() {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-white text-[18px] font-bold">Các bản chiếu</h1>
      <div className="relative w-[250px] h-[150px] rounded-2xl overflow-hidden">
        <img
          src="https://phimimg.com/upload/vod/20251211-1/2a40b5cf98c8efe66ac8dd89684f6d56.jpg"
          alt=""
          className="w-full h-full object-contain object-right"
        />

        {/* Gradient che kín mọi đường gạch */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#5e6070] via-[#5e6070f4] via-60% to-transparent"></div>
      </div>
    </div>
  );
}
