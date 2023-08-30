import Link from "next/link";
import { TbGridDots } from "react-icons/tb";
function HomeHeader() {
  return (
    <header>
      <div className="flex justify-end space-x-4 items-center m-3 text-sm">
        <Link className="hover:underline" href="https/mail.google.com">
          Gmail
        </Link>
        <Link className="hover:underline" href="https://image.google.com">
          Images
        </Link>
        <TbGridDots className="bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2" />
        <button className="bg-blue-500 text-white px-6 py-2 rounded-md font-medium hover:brightness-105 hover:shadow-md transition-shadow duration-300">
          Sign in
        </button>
      </div>
    </header>
  );
}

export default HomeHeader;
