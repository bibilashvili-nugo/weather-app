// import PropTypes from "prop-types";
// import ContentContainerShape from "./ContentContainerShape";
// import { kelvinToCelsius } from "../utils/toTemperature";

// export default function Temp_max({ weather }) {
//   const tempmax = {
//     label: { label: "Max Temp", text: "24px", font: "400" },
//     temperature: {
//       value:
//         weather && weather.temp_max
//           ? `${kelvinToCelsius(weather.temp_max).toFixed(0)} °C`
//           : "N/A",

//       text: "55px",
//       font: "400",
//     },
//     paddingX: "33px",
//     paddingY: "50px",
//   };

//   return (
//     <div className="w-full p-2">
//       <ContentContainerShape data={tempmax} />
//     </div>
//   );
// }

// Temp_max.propTypes = {
//   weather: PropTypes.shape({
//     temp_max: PropTypes.number,
//   }),
// };
