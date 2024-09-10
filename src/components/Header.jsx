import { FaSearch } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";

import MetricChanger from "./MetricChanger";

const Header = () => {
  return (
    <header className="sticky top-0 pl-14 pr-14 pt-14 pb-6 bg-[rgba(0,0,0,0.5)] flex items-center justify-between w-full">
      <div className="relative ">
        <FaSearch
          className="absolute left-6 top-1/2 transform -translate-y-1/2"
          color="#000"
        />

        <input
          type="text"
          placeholder="მოძებნე ქალაქი"
          className="pl-14 py-[18px] pr-[128px] border-none rounded-[64px] w-full bg-[#FF9500] placeholder:text-[#000]"
        />
      </div>

      <div className="flex items-start gap-2">
        <CiGlobe size={32} color="white" />

        {/* es cvlis celsius fahrenheitis states da mere gadavwyvitot dafetchvisas shevcvalot tu chvuelebrivad davfetchot da ubralod gamoviangarishot */}
        <MetricChanger />
      </div>
    </header>
  );
};

export default Header;
