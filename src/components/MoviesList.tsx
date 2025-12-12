"use client";

import { useState } from "react";
import { Movie } from "../utils/movie";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";

interface MoviesListProps {
  title: string;
  movies: Movie[];
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 3,
    slidesToSlide: 1,
  },
};

export default function MoviesList({ title, movies }: MoviesListProps) {
  const [index, setIndex] = useState(0);
  const handleNext = () => {
    setIndex((prev) => (prev + 1) % movies.length);
  };

  return (
    <Carousel
      responsive={responsive}
      infinite={false}
      autoPlay={false}
      keyBoardControl
      containerClass="carousel-container"
      itemClass="px-3" // tạo khoảng cách đều giữa phim
      arrows
      renderButtonGroupOutside={true}
      showDots={false}
      className="text-amber-200 "
    >
      {movies?.map((movie) => (
        <div className=" flex flex-col " key={movie._id}>
          <Link href={`/DetailMovie/${movie.slug}`}>
            <div className="w-full aspect-2/3">
              <img
                src={
                  movie.thumb_url.startsWith("https://phimimg.com/")
                    ? movie.thumb_url
                    : `https://phimimg.com/${movie.thumb_url}`
                }
                className="w-full h-full object-cover rounded-3xl"
                alt={movie.name}
              />
            </div>
            <div className="p-3">
              <h2 className="font-bold text-center truncate">{movie.name}</h2>
              <p className="text-sm text-gray-400 text-center truncate">
                {movie.origin_name}
              </p>
              {/* <a href={`https://phimapi.com/phim/${movie.slug}`}>{movie.slug}</a> */}
            </div>
          </Link>
        </div>
      ))}
    </Carousel>
  );
}
