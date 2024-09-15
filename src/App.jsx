import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import "./i18n";
import getFormattedWeatherData from "./services/WeatherService";
import { useCurrentLocation } from "./customHooks/useCurrentLocation";


const App = () => {
  const [weather, setWeather] = useState({});
  const { fetchLocationDetails, address } = useCurrentLocation();
  const [query, setQuery] = useState({ q: "tbilisi" });

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const data = await getFormattedWeatherData(query);
        setWeather(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    // if (address) {
    fetchWeatherData();
    // }
  }, [address]);

  useEffect(() => {
    fetchLocationDetails();
  }, [fetchLocationDetails]);

  console.log(weather, "weather from app");

  return (

    
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Router>
    

  
  );
};

export default App;
