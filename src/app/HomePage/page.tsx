"use client";
import Image from "next/image";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Header from "@/src/components/header/Header";
import BannerHome from "@/src/components/BannerHome";
import MoviesSection from "@/src/components/MoviesSection";

const sections = [
  { title: "Phim Mới Cập Nhật", category: "phim-moi-cap-nhat" },
  // { title: "Phim Chiếu Rạp", category: "phim-chieu-rap" },
  { title: "Phim Hoạt Hình", category: "hoat-hinh" },

  { title: "Phim Lẻ", category: "phim-le" },
  { title: "Phim Bộ", category: "phim-bo" },
];

export default function HomePage() {
  return (
    <div className="bg-[#191b24] relative">
      {/* <div
        className={`absolute top-0 left-0 h-full w-[350px] bg-red-500 z-50 translate-x-[0px]`}
      // ></div> */}

      <div className="flex flex-col gap-5">
        <BannerHome category="phim-moi-cap-nhat" />
        <div className="mx-5 p-5 flex flex-col  bg-[#232736] rounded-lg ">
          {sections.map((section) => (
            <div key={section.category} className="mb-3">
              <h1 className="text-xl mb-4 text-amber-200">{section.title}</h1>
              <MoviesSection
                title={section.title}
                category={section.category}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
