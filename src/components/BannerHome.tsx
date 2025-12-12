"use client";

import "../app/animation.css";
import { IoMdPlayCircle } from "react-icons/io";
import { PiFilmSlateFill } from "react-icons/pi";
import { useEffect, useState, useRef } from "react";
import { Movie } from "../utils/movie";
import { getNewMovies } from "../service/moviesApi";
import { useGetNewMoviesQuery } from "../service/movie.service";

export default function BannerHome() {
  const { data } = useGetNewMoviesQuery();

  const [randomMovies, setRandomMovies] = useState<Movie[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<any>(null);

  // ✅ Gọi API khi BannerHome mount hoặc khi category thay đổi
  useEffect(() => {
    if (!data?.items) return;
    setRandomMovies(data?.items.slice(0, 4));
    setCurrentIndex(0);
  }, [data?.items]);

  // ✅ Auto chuyển slide mỗi 3.5 giây
  useEffect(() => {
    if (randomMovies.length <= 1) return;

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % randomMovies.length);
    }, 3500);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [randomMovies]);

  // ✅ Khi click thumbnail
  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % randomMovies.length);
      }, 3500);
    }
  };

  const currentMovie = randomMovies[currentIndex];

  return (
    <div className="relative w-full h-[350px] lg:h-screen overflow-hidden top-0">
      {/* Ảnh nền chính */}
      {currentMovie ? (
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-500 ease-out  "
          style={{ backgroundImage: `url(${currentMovie.thumb_url})` }}
        />
      ) : (
        // ✅ Hiển thị nền xám khi đang loading
        <div className="absolute inset-0 bg-[#232736] animate-pulse" />
      )}

      {/* Lớp phủ tối */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.3)_50%,rgba(0,0,0,0.8)_80%,#000_100%)]"></div>

      {/* Nội dung phim */}
      {currentMovie && (
        <div className="absolute top-[65%] lg:top-1/2 left-[5%] lg:left-10 -translate-y-1/2 text-white w-[90%] lg:w-[60%] flex flex-col gap-1 lg:gap-4 slide-in">
          <h1 className=" break-words text-center text-wrap text-[20px] lg:text-[36px] lg:text-left  font-bold leading-tight">
            {currentMovie.name}
          </h1>
          <p className="text-center text-[14px] lg:text-[20px] lg:text-left  text-amber-200 line-clamp-4">
            {currentMovie.origin_name}
          </p>

          <div className="flex gap-4 justify-center lg:justify-start">
            <a
              href={currentMovie.slug}
              className="flex items-center gap-2  py-1 px-2 lg:py-3 lg:px-5 border border-[#fdb838] lg:bg-[#fdb838] rounded-2xl hover:shadow-[0_0_20px_5px_#fdb838] transition-shadow"
            >
              <IoMdPlayCircle className="w-5 h-5  lg:w-8 lg:h-8" />
              <p className="font-bold text-[12px] lg:text-sm">Xem Phim</p>
            </a>

            <a
              href={currentMovie.slug}
              className="flex items-center gap-2 py-1 px-2 lg:py-3 lg:px-5 border border-[#fdb838] lg:bg-[#fdb838] rounded-2xl hover:shadow-[0_0_20px_5px_#fdb838] transition-shadow"
            >
              <PiFilmSlateFill className="w-5 h-5  lg:w-8 lg:h-8" />
              <p className="font-bold text-[12px] lg:text-sm">Xem Trailer</p>
            </a>
          </div>
        </div>
      )}

      {/* Thumbnail nhỏ */}
      {randomMovies.length > 1 && (
        <div className="absolute  left-1/2 -translate-x-1/2 bottom-1  lg:bottom-4 lg:left-auto lg:right-6 lg:translate-x-0  flex gap-3">
          {randomMovies.map((movie, index) => (
            <img
              key={movie._id}
              src={movie.thumb_url}
              onClick={() => handleThumbnailClick(index)}
              className={` w-[35px] h-[35px] lg:w-20 lg:h-[45px] object-cover rounded-full lg:rounded-md cursor-pointer border-2 transition-all duration-300
                ${
                  index === currentIndex
                    ? "border-[#fdb838] scale-110 shadow-[0_0_15px_2px_#fdb838]"
                    : "border-transparent opacity-70 hover:opacity-100 hover:scale-105"
                }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
