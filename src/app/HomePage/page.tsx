"use client";
import Image from "next/image";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Header from "@/src/components/header/Header";
import MoviesSection from "@/src/components/MoviesSection";
import BannerHome from "@/src/components/BannerHome";
const sections = [
  {
    title: "Phim Mới Cập Nhật",
    category: "phim-moi-cap-nhat",
    bg_color: "bg-[linear-gradient(235deg,#FFFFFF_30%,#674196_130%)]",
  },
  {
    title: "Phim Hoạt Hình",
    category: "hoat-hinh",
    bg_color: "bg-[linear-gradient(235deg,#FFFFFF_30%,#f7a10b_130%)]",
  },

  {
    title: "Phim Lẻ",
    category: "phim-le",
    bg_color: "bg-[linear-gradient(235deg,#FFFFFF_30%,#00d1ff_130%)]",
  },
  {
    title: "Phim Bộ",
    category: "phim-bo",
    bg_color: "bg-[linear-gradient(235deg,#FFFFFF_30%,#ff0099_130%)]",
  },
];

export default function HomePage() {
  return (
    <div className="bg-[#191b24]  xl:max-w-full">
      <div className="flex flex-col gap-6">
        <BannerHome />
        <div className="mx-5 p-5  bg-[#232736] rounded-lg overflow-hidden  ">
          {sections.map((section, index) => (
            <div className="xl:flex xl:items-center gap-5 " key={index}>
              <div key={section.category} className="mb-3 pr-5 xl:grow ">
                <h1
                  className={`text-[21px] xl:text-[30px] font-bold mb-4 bg-clip-text text-transparent ${section.bg_color} xl:wrap-break-words xl:w-[150px] `}
                >
                  {section.title}
                </h1>
              </div>
              <div className=" xl:grow-2 overflow-hidden">
                <MoviesSection
                  title={section.title}
                  category={section.category}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
