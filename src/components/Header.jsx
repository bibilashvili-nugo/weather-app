import React from 'react';
import { MdSearch } from 'react-icons/md';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-7 bg-gray-100">
      <div className="flex-1 pr-7 relative">
        <div className="relative flex items-center">
          <MdSearch className="absolute left-4 text-black text-xl" />
          <input
            type="text"
            placeholder="მოძებნე ქალაქი"
            className="w-[393px] h-[60px] pl-12 pr-4 rounded-full bg-[#FF9500] text-white placeholder-black focus:outline-none focus:ring-0"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
