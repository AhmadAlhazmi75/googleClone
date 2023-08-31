import CountryLookUp from "./CountryLookUp";

function Footer() {
  return (
    <footer className="absolute bottom-0  w-full text-sm text-gray-500 bg-[#f2f2f2]">
      <div className="border-b border-gray-300 px-8 py-3">
        <CountryLookUp />
      </div>
      <div className="px-8 py-3 space-y-7 sm:space-y-0  flex flex-col sm:flex-row justify-between items-center">
        <ul className="flex items-center space-x-6 ">
          <li className="link">About</li>
          <li className="link">Advertising</li>
          <li className="link">Buisness</li>
          <li className="link">How Search works</li>
        </ul>

        <ul className="flex items-center space-x-6 ">
          <li className="link">Privacy</li>
          <li className="link">Terms</li>
          <li className="link">Settings</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
