import { useState, useEffect } from "react";

export default function CurrentDay() {
  const [weatherData, setWeatherData] = useState({
    city: "Loading...",
    description: "Loading...",
    temperature: "Loading...",
    date: new Date(),
  });
  const [error, setError] = useState(null);

  const apiKey = "qfqb4mH8tbAcAUEgSNeNvVk6g4z1Rj0G";

  useEffect(() => {
    const fetchLocationAndWeather = async () => {
      try {
        navigator.geolocation.getCurrentPosition(
          async (pos) => {
            const { latitude, longitude } = pos.coords;
            console.log("Latitude:", latitude, "Longitude:", longitude);

            const locationUrl = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;
            const locationResponse = await fetch(locationUrl);

            if (!locationResponse.ok) {
              throw new Error("Error fetching location details.");
            }

            const locationData = await locationResponse.json();
            const city =
              locationData.address.city ||
              locationData.address.town ||
              locationData.address.village ||
              "Unknown";

            const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
            const weatherResponse = await fetch(weatherUrl);

            if (!weatherResponse.ok) {
              throw new Error("Error fetching weather data.");
            }

            const weather = await weatherResponse.json();
            const description = weather.weather[0].description;
            const temperature = Math.round(weather.main.temp);

            setWeatherData({
              city,
              description,
              temperature,
              date: new Date(),
            });
          },
          (error) => {
            setError("Error fetching location: " + error.message);
          }
        );
      } catch (error) {
        setError("Error fetching data: " + error.message);
      }
    };

    fetchLocationAndWeather();
  }, []);

  const formattedDate = weatherData.date.toLocaleDateString("ka-GE", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return (
    <div className="bg-[#00000066] w-[500px] md:w-[400px] xl:w-[755px] text-[#FFFFFF] px-[52px] py-[35px] rounded-[8px]">
      {error ? (
        <p>{error}</p>
      ) : (
        <div>
          <div className="flex justify-between">
            <span className="md:text-[40px] text-[35px] font-[510]">
              {weatherData.city}
            </span>
            <span className="md:text-[24px] text-[20px] font-[400] capitalize">
              {weatherData.description}
            </span>
          </div>
          <div className="flex items-center h-[70px] justify-between">
            <span className="md:text-[24px] text-[20px] font-[400]">
              {formattedDate}
            </span>
            <span className="text-[72px] font-[400]">
              {weatherData.temperature}°
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
