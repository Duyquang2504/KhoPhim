"use client";

import Link from "next/link";
import SearchBar from "./components/SearchBar";
import { useEffect, useState } from "react";
import { FiAlignLeft } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { FaCaretDown, FaSearch, FaShoppingCart } from "react-icons/fa";
import logo from "@/public/film-reel-bridge-svgrepo-com (2).svg";
import HeaderDropdown from "./components/HeaderDropdown";
import Image from "next/image";

export default function Header() {
  const [scrollY, setscrollY] = useState(false);
  // Scroll Header
  useEffect(() => {
    const handleSroll = () => {
      if (window.scrollY > 50) {
        setscrollY(true);
      } else {
        setscrollY(false);
      }
    };
    window.addEventListener("scroll", handleSroll);
    return () => {
      window.removeEventListener("scroll", handleSroll);
    };
  }, []);
  //
  const [openModal, setOpenModal] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const handelToggelModal = () => {
    setOpenModal((prev) => !prev);
  };
  const handelToggelSearch = () => {
    setOpenSearch((prev) => !prev);
  };

  return (
    <div
      className={` flex justify-between items-center   transition-colors duration-500 ease-in-out ${
        scrollY ? `bg-[#191b24] ease-out ` : `bg-black/5 ease-in `
      } text-white font-bold fixed w-full top-0 left-0 z-10`}
    >
      {openSearch ? (
        <div className=" p-4 flex gap-2 items-center w-full">
          <SearchBar />
          <IoMdClose
            size={25}
            className="text-red-600"
            onClick={handelToggelSearch}
          />
        </div>
      ) : (
        <>
          <div className="  p-4 flex gap-3 items-center ">
            <div
              onClick={handelToggelModal}
              className={`cursor-pointer transform transition-all duration-1000 ease-in-out ${
                openModal ? "scale-120" : "scale-100"
              } `}
            >
              {openModal ? (
                <IoMdClose size={25} className="text-red-600" />
              ) : (
                <FiAlignLeft size={25} />
              )}
            </div>

            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/film-reel-bridge-svgrepo-com.svg"
                alt="logo"
                width={26}
                height={26}
              />
              <div>
                <h1 className="text-[16px]">KHOPHIM</h1>
                <p className="text-gray-400 text-[10px]">
                  Xả Stress - Chất Lượng
                </p>
              </div>
            </Link>
            {openModal && <HeaderDropdown />}
          </div>
          <div onClick={handelToggelSearch} className="pr-4">
            <FaSearch />
          </div>
        </>
      )}
    </div>
  );
}
