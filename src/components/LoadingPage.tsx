import { useState, useEffect } from "react";
import Image from "next/image";

export default function LoadingPage({ onFinish }: { onFinish: () => void }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 1500);
    const finishTimer = setTimeout(onFinish, 3000);
    return () => {
      clearTimeout(timer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div
      className={`inset-0 absolute bg-[#232736] z-20 ${
        fadeOut ? "fade-out-bg" : "fade-in-bg"
      }`}
    >
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center gap-2 scale-in">
        <Image
          src="/film-reel-bridge-svgrepo-com.svg"
          alt="logo"
          width={80}
          height={80}
          className="scale-in"
        />
        <div className="scale-in">
          <h1 className="text-[40px]  text-white font-bold">KHOPHIM</h1>
          <p className="text-gray-400 text-[25px]">Xả Stress - Chất Lượng</p>
        </div>
      </div>
    </div>
  );
}
