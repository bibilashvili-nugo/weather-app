import React, { useState } from "react";
import LeftSide from "../pageLeftSide/LeftSide";

const Home = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  return (
    <div className="flex p-4 gap-4 ">
      <LeftSide />

      <div className="flex-1 bg-white shadow-lg rounded-lg p-4">
        <div className="flex items-center justify-between mb-4 relative">
          <h4 className="text-xl font-semibold">კვირის ამინდი</h4>
          <div className="relative">
            <i className="fas fa-calendar-alt text-gray-600 text-2xl cursor-pointer"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
