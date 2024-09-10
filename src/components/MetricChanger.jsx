import { useDispatch, useSelector } from "react-redux";
import { toggleUnit } from "../redux/settingsSlice";

const MetricChanger = () => {
  const dispatch = useDispatch();

  const currentUnit = useSelector((state) => state.settings.unit);

  const handleToggleUnit = () => {
    dispatch(toggleUnit());
  };

  return (
    <div
      className="relative w-[60px] h-[32px] bg-[rgba(217,217,217,0.8)] rounded-full cursor-pointer flex items-center"
      onClick={handleToggleUnit}
    >
      {/* es aris celsiusi  */}
      <span
        className={`absolute left-2 z-10 text-[12px] font-semibold transition-all duration-300 ${
          currentUnit === "celsius" ? "text-white" : "text-black"
        }`}
      >
        °C
      </span>

      {/* es aris fahrenheiti */}
      <span
        className={`absolute right-2 z-10 text-[12px] font-semibold transition-all duration-300 ${
          currentUnit === "fahrenheit" ? "text-white" : "text-black"
        }`}
      >
        °F
      </span>

      {/* es aris shavi nawili romelic modzraobs romelic aris imis shesabamisad */}
      <div
        className={`absolute top-0 left-0 w-[32px] h-[32px] rounded-full bg-black transition-transform duration-300 ${
          currentUnit === "fahrenheit" ? "translate-x-[28px]" : ""
        }`}
      ></div>
    </div>
  );
};

export default MetricChanger;
