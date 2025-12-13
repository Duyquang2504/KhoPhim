import { useState, useEffect } from "react";
import Image from "next/image";

export default function LoadingPage() {
  return (
    <div className="inset-0 absolute bg-[#232736] z-20 h-full">
      <div className="flex items-center justify-center h-full gap-2 blink">
        <Image
          src="/film-reel-bridge-svgrepo-com.svg"
          alt="logo"
          width={60}
          height={60}
          className="xl:w-[100px] xl:h-[100px]"
        />
        <div>
          <h1 className="text-[20px] xl:text-[40px] text-white font-bold">
            KHOPHIM
          </h1>
          <p className="text-gray-400 text-[8px] xl:text-[25px]">
            Xả Stress - Chất Lượng
          </p>
        </div>
      </div>
    </div>
  );
}
