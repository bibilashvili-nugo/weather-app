// src/components/RightSide.jsx
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { FaCalendarAlt, FaTimes } from 'react-icons/fa'; // Import the calendar icon and close icon
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import the calendar styles

const RightSide = () => {
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCalendar, setShowCalendar] = useState(false); // State to manage calendar visibility
  const calendarRef = useRef(null); // Ref for calendar container
  const apiKey = 'e144a25b8217852f61fd0a63099d6c75';  
  const latitude = '44.34';
  const longitude = '10.99';

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
        );
        setForecast(response.data.list);
      } catch (error) {
        console.error('Error fetching the weather data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [apiKey, latitude, longitude]);

  useEffect(() => {
    // Close the calendar when clicking outside of it
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setShowCalendar(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Function to get extended daily temperatures
  const getExtendedDailyTemperatures = (data) => {
    const dailyTemps = {};
    
    data.forEach(item => {
      const date = new Date(item.dt * 1000).toDateString();
      if (!dailyTemps[date]) {
        dailyTemps[date] = { dayTemp: item.main.temp, nightTemp: item.main.temp };
      } else {
        if (item.main.temp > dailyTemps[date].dayTemp) {
          dailyTemps[date].dayTemp = item.main.temp;
        }
        if (item.main.temp < dailyTemps[date].nightTemp) {
          dailyTemps[date].nightTemp = item.main.temp;
        }
      }
    });

    // Convert dailyTemps object to an array and extend it to 30 days
    const dailyTempsArray = Object.keys(dailyTemps).map(date => ({
      date,
      dayTemp: dailyTemps[date].dayTemp,
      nightTemp: dailyTemps[date].nightTemp
    }));

    // Assuming 5 days of data, extend to 30 days
    while (dailyTempsArray.length < 30) {
      dailyTempsArray.push(...dailyTempsArray.slice(0, 30 - dailyTempsArray.length));
    }

    return dailyTempsArray;
  };

  const dailyTemperatures = getExtendedDailyTemperatures(forecast);

  return (
    <div className="relative p-4">
      <div className="flex flex-col">
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <div className="text-white">
            <h2 className="text-xl font-bold text-black mb-4">30-Day Forecast</h2>
            <ul className="list-none p-0 flex flex-wrap gap-4">
              {dailyTemperatures.map((day, index) => (
                <li 
                  key={index} 
                  className="w-[152px] h-[184px] bg-[#00000066] rounded-[12px] opacity-100 flex flex-col items-center justify-center p-2 border border-transparent"
                  style={{ flex: '1 0 30%', flexGrow: 1, flexShrink: 0 }} // Three cards per row, prevents shrinking
                >
                  <p className="text-lg font-semibold">{new Date(day.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long' })}</p>
                  <p className="text-md text-white">{new Date(day.date).toLocaleDateString('en-GB', { weekday: 'long' })}</p>
                  <img src="/weatherIcons/filled sun.svg" />
                  <p className="text-xl font-semibold mt-2">
                    {Math.round(day.dayTemp - 273.15)}° | {Math.round(day.nightTemp - 273.15)}°
                  </p>
                  <p className="flex gap-6 items-center justify-center">
                    <img className="w-8 h-8" src="/weatherIcons/daytemp.png" />
                    <img className="w-6 h-6" src="/weatherIcons/nighttemp.png" />
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {/* Calendar Icon and Calendar */}
      <div className="absolute top-4 right-4">
        <button 
          onClick={() => setShowCalendar(prev => !prev)} 
          className="text-black text-xl"
        >
          <FaCalendarAlt />
        </button>
        {showCalendar && (
          <div 
            ref={calendarRef}
            className="absolute top-10 right-0 mt-2 bg-[#00000066] p-2 rounded-[12px] z-10"
          >
            <button
              onClick={() => setShowCalendar(false)}
              className="absolute top-1 right-1 text-white text-lg"
            >
              <FaTimes />
            </button>
            <Calendar />
          </div>
        )}
      </div>
    </div>
  );
};

export default RightSide;


