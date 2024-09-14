// import { kelvinToCelsius } from "../utils/toTemperature";
// import ContentContainerShape from "./ContentContainerShape";
// import PropTypes from "prop-types";

// export default function Temp_min({ weather }) {
//   const visibilityData = {
//     label: { label: "Min temp", text: "24px", font: "400" },
//     temperature: {
//       value:
//         weather && weather.temp_min
//           ? `${kelvinToCelsius(weather.temp_min).toFixed(0)} °C`
//           : "N/A",
//       text: "55px",
//       font: "400",
//     },
//     paddingX: "33px",
//     paddingY: "50px",
//   };
//   return (
//     <div className="w-full p-2">
//       <ContentContainerShape data={visibilityData} />
//     </div>
//   );
// }

// Temp_min.propTypes = {
//   weather: PropTypes.shape({
//     temp_min: PropTypes.number,
//   }),
// };
