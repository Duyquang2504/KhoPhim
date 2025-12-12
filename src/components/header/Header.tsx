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
      } text-white font-bold fixed w-full top-0 left-0 z-10  `}
    >
      {openSearch ? (
        <div className=" p-4 flex gap-2 items-center w-full ">
          <SearchBar />
          <IoMdClose
            size={25}
            className="text-red-600"
            onClick={handelToggelSearch}
          />
        </div>
      ) : (
        <>
          <div className="  px-4 py-2 flex gap-10 items-center w-full ">
            <div
              onClick={handelToggelModal}
              className={`cursor-pointer transform transition-all duration-1000 ease-in-out block xl:hidden ${
                openModal ? "scale-120" : "scale-100"
              } `}
            >
              {openModal ? (
                <IoMdClose size={25} className="text-red-600" />
              ) : (
                <FiAlignLeft size={25} />
              )}
            </div>

            <div className="flex items-center ">
              <Link href="/" className="flex items-center gap-2 ">
                <Image
                  src="/film-reel-bridge-svgrepo-com.svg"
                  alt="logo"
                  width={36}
                  height={36}
                />
                <div className="">
                  <h1 className="text-[20px]">KHOPHIM</h1>
                  <p className="text-gray-400 text-[12px]">
                    Xả stress - Chất lượng
                  </p>
                </div>
              </Link>
            </div>
            <div className="hidden xl:flex bg-[#ffffff1a] px-5 py-3  items-center gap-3 rounded-md text-[14px]  w-[50%] focus-within:border focus-within:border-[#ffff]">
              <FaSearch size={18} className="text-[#858790]" />
              <input
                placeholder="Tìm kiếm phim"
                className="outline-none w-full "
              />
            </div>

            {openModal && <HeaderDropdown />}
          </div>
          <div className="hidden xl:flex gap-6 pr-30 justify-end w-full">
            <div className="text-white text-[13px] font-medium py-2 cursor-pointer hover:text-amber-200">
              Sắp Chiếu
            </div>
            <div className="text-white text-[13px] font-medium py-2 cursor-pointer hover:text-amber-200">
              Phổ Biến
            </div>
            <div className="text-white text-[13px] font-medium py-2 cursor-pointer hover:text-amber-200">
              Năm
            </div>
            <div className="text-white text-[13px] font-medium py-2 cursor-pointer hover:text-amber-200 flex">
              Thể Loại
              <FaCaretDown size={20} />
            </div>
            <div className="text-white text-[13px] font-medium py-2 cursor-pointer hover:text-amber-200 flex">
              Quốc Gia
              <FaCaretDown size={20} />
            </div>
          </div>
          <div onClick={handelToggelSearch} className="pr-4 xl:hidden">
            <FaSearch />
          </div>
        </>
      )}
    </div>
  );
}
