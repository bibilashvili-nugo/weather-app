import { MdSearch } from "react-icons/md";
import LanguageSelector from "../language_selector/Language_selector";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-7">
      <div className="flex-1 pr-7 relative">
        <div className="relative flex justify-between items-center">
          <MdSearch className="absolute left-4 text-black text-xl" />
          <input
            type="text"
            placeholder="მოძებნე ქალაქი"
            className="w-[393px] h-[60px] pl-12 pr-4 rounded-full bg-[#FF9500] text-white placeholder-black focus:outline-none focus:ring-0"
          />
          <LanguageSelector />
        </div>
      </div>
    </header>
  );
};

export default Header;