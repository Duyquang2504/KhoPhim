import { IoSearchOutline } from "react-icons/io5";
export default function SearchBar() {
  return (
    <div className="relative top-0 flex border-2 border-amber-50 items-center w-full  gap-1 px-3 font-medium   rounded-lg">
      <IoSearchOutline className="absolute left-2  text-white cursor-pointer" />
      <input
        type="text"
        placeholder="Nhập tên phim..."
        className=" placeholder-white  text-white w-full  pl-6 py-2   text-[12px] outline-none"
      />
    </div>
  );
}
