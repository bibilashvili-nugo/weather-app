import { useState } from "react";
import LeftSide from "../pageLeftSide/LeftSide";
import RightSide from "../pageRightSide/RightSide";
import { weatherPropTypes } from "../propTypesDefinitions";

const Home = ({ weather }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  console.log(weather, "weather from home");
  return (

    <div className="flex w-full p-4 gap-4 ">
      <LeftSide weather={weather} />

      <RightSide />
    </div>
  );
};
Home.propTypes = {
  weather: weatherPropTypes.isRequired,
};

export default Home;
