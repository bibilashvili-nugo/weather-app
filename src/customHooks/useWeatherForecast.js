// src/customHooks/useWeatherForecast.js
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchWeatherData = async (lat, lon, apiKey, cnt = 16) => {
  try {
    const { data } = await axios.get('https://api.openweathermap.org/data/2.5/forecast/daily', {
      params: {
        lat,
        lon,
        cnt,
        appid: apiKey,
        units: 'metric', // Use 'imperial' or 'standard' as needed
        mode: 'json',    // 'xml' if you need XML format
      }
    });
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const useWeatherForecast = (lat, lon, apiKey) => {
  return useQuery(['weatherForecast', lat, lon], () => fetchWeatherData(lat, lon, apiKey));
};
