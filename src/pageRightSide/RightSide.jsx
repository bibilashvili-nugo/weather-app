import React, { useState, useEffect } from 'react';


const API_KEY = 'qfqb4mH8tbAcAUEgSNeNvVk6g4z1Rj0G';

const API_URL = `https://api.tomorrow.io/v4/weather/forecast?location=batumi&apikey=${API_KEY}`;

const formatDate = (dateString) => {
  const options = { weekday: 'long', day: 'numeric', month: 'long' };
  const date = new Date(dateString);
  
 
  return new Intl.DateTimeFormat('ka-GE', options).format(date);
};

const RightSide = () => {
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchForecastData = async () => {
      try {
        const response = await fetch(API_URL, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
          }
        });

        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Full API Response:', data);

        const dailyData = data?.timelines?.daily ?? [];
        setForecast(dailyData);
      } catch (error) {
        setError(`Error fetching data: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchForecastData();
  }, []);

  if (loading) {
    return <div className="text-center text-lg text-gray-600">Loading forecast data...</div>;
  }

  if (error) {
    return <div className="text-center text-lg text-red-600">Error: {error}</div>;
  }

  if (forecast.length === 0) {
    return <div className="text-center text-lg text-gray-600">No forecast data available.</div>;
  }

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Weather Forecast for Batumi</h1>
      {forecast.map((day, index) => (
        <div key={index} className="mb-4 p-4 bg-white rounded-lg shadow-sm border border-gray-200 text-center">
          <div className="mb-2">
            <h2 className="text-xl font-medium text-gray-700">{formatDate(day.time).split(', ')[1]}</h2>
            <p className="text-gray-600">{formatDate(day.time).split(', ')[0]}</p>
          </div>
          <div className="mb-2">
            <img
              src={`/weatherIcons/filled sun.svg`} 
              alt="Weather Icon"
              className="w-12 h-12 mx-auto"
            />
          </div>
          <div className="flex justify-center gap-2">
            <p className="text-gray-600">
              <span className="font-semibold">{Math.round(day.values?.temperatureMax) ?? 'N/A'}°C</span>
            </p>
            <span className="text-gray-600">|</span>
            <p className="text-gray-600">
              <span className="font-semibold">{Math.round(day.values?.temperatureMin) ?? 'N/A'}°C</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RightSide;
