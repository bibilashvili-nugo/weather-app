import { useQuery } from "@tanstack/react-query";

const API_KEY = "c3eaa28172292c30f8ef43e381957755";

const fetchWeatherData = async (lat, lon) => {
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  const response = await fetch(API_URL);

  if (response.status === 429) {
    throw new Error("Too many requests. Please try again later.");
  }

  if (!response.ok) {
    const errorData = await response.json();
    console.error("API Error:", errorData);
    throw new Error("Network response was not ok: " + errorData.message);
  }

  return response.json();
};

const getUserLocation = () => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Geolocation is not supported by this browser."));
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position.coords),
      (error) => reject(error)
    );
  });
};

const useWeather = () => {
  const {
    data: weather,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["weather"],
    queryFn: async () => {
      const coords = await getUserLocation();

      return fetchWeatherData(coords.latitude, coords.longitude);
    },
    enabled: true,
  });

  const kelvinToCelsius = (kelvin) => kelvin - 273.15;

  return {
    weather,
    error,
    isLoading,
    kelvinToCelsius,
  };
};

export default useWeather;
