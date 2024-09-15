import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./pages/Home";
import { useEffect, useState } from "react";

import "./i18n";
import getFormattedWeatherData from "./services/WeatherService";


const App = () => {
  const [weather, setWeather] = useState({});
  useEffect(() => {
    const getWeather = async () => {
      try {
        const data = await getFormattedWeatherData({ q: "tbilisi" });
        console.log(data, "axali");
        setWeather(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    getWeather();
  }, []);
  console.log(weather, "weather from app");
  return (

    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>

  
  );
};

export default App;
