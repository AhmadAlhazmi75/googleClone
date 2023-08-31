import Image from "next/image";
import Link from "next/link";
import { TbGridDots } from "react-icons/tb";
import SearchBox from "./SearchBox";
import { RiSettings3Line } from "react-icons/ri";
import SearchHeaderOptions from "./SearchHeaderOptions";
function SearchHeader() {
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center justify-between">
        <Link href="/">
          <Image
            width={120}
            height={40}
            className=""
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt="Google Logo"
          />
        </Link>
        <div className="flex-1">
          <SearchBox />
        </div>
        <div className="md:inline-flex space-x-2 hidden">
          <RiSettings3Line className="header-icon" />
          <TbGridDots className="header-icon" />
        </div>
        <button className="bg-blue-500 ml-2 text-white rounded-md px-6 py-2 font-md hover:brightness-105 hover:shadow-md transition-all duration-300">
          Sign in
        </button>
      </div>
      <SearchHeaderOptions />
    </header>
  );
}

export default SearchHeader;
