import Link from "next/link";
import { FaCaretDown, FaShoppingCart } from "react-icons/fa";

export default function HeaderDropdown() {
  const titles = [
    { name: "Sắp Chiếu", href: "/explore/UpcomingMovies" },
    {
      name: "Phổ Biến",
      href: "./explore/PopularMovies",
    },
    {
      name: (
        <>
          Thể Loại
          <FaCaretDown size={20} />
        </>
      ),
      href: "./explore/PopularMovies",
    },
  ];
  const titles2 = [
    { name: "Năm", href: "/explore/UpcomingMovies" },
    {
      name: "Phổ Biến",
      href: "./explore/PopularMovies",
    },
    {
      name: (
        <>
          Quốc Gia
          <FaCaretDown size={20} />
        </>
      ),
      href: "./explore/PopularMovies",
    },
  ];
  return (
    <div
      className="flex flex-col gap-5 bg-[#313249] absolute top-[75%] px-3 pt-[20px] pb-[40px]
        w-[75%] md:w-[50%]  rounded-2xl "
    >
      <div className="flex gap-2 py-2 px-4 text-[14px] border-amber-200 border-[1px] rounded-lg items-center justify-center  hover:bg-[#fbc35c]">
        <FaShoppingCart size={20} />
        <h1>Kho Phim Chất Lượng</h1>
      </div>

      <div className="flex items-center gap-10 px-3 text-[14px] justify-evenly">
        <div>
          <ul className="flex  flex-col gap-2 ">
            {titles.map((title, index) => (
              <li key={index} className="hover:text-amber-200 ">
                <Link
                  href={title.href ?? "/"}
                  className="flex items-center gap-1"
                >
                  {title.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className="flex  flex-col gap-2">
            {titles2.map((title, index) => (
              <li key={index} className="hover:text-amber-200">
                <Link
                  href={title.href ?? "/"}
                  className="flex items-center gap-1 "
                >
                  {title.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
