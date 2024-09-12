import React, { useState } from 'react';


const Home = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  
  const weatherData = [
    { date: '15 September', temp: '29°C' },
    { date: '16 September', temp: '27°C' },
    { date: '17 September', temp: '25°C' },
    { date: '18 September', temp: '23°C' },
    { date: '19 September', temp: '22°C' },
    { date: '20 September', temp: '24°C' },
    { date: '21 September', temp: '26°C' }
  ];

 
  const hourlyData = [
    { hour: '08:00', temp: '20°C' },
    { hour: '12:00', temp: '25°C' },
    { hour: '16:00', temp: '27°C' },
    { hour: '20:00', temp: '23°C' }
  ];

  

  return (
    <div className="flex p-4 gap-4">
      <div className="flex-1 bg-white shadow-lg rounded-lg p-4">
        <h3 className="text-xl font-bold mb-4">დღის პროგნოზი</h3>
        <div className="flex items-center justify-between w-full h-[206px] mb-4 bg-[#B5B5B566] rounded-2xl p-12">
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold">ბათუმი</h2>
            <p className="text-sm text-gray-600">14 სექტემბერი, ორშაბათი</p>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-lg font-medium">მზიანი</p>
            <h2 className="text-4xl font-bold">31°</h2>
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-2">ამინდი საათების მიხედვით</h4>
          <div className="bg-[#B5B5B566] rounded-2xl p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
              {hourlyData.map((hour, index) => (
                <div
                  key={index}
                  className="bg-gray-100 shadow-md rounded-lg p-2 flex flex-col items-center"
                >
                  <p className="text-sm font-medium">{hour.hour}</p>
                  <h3 className="text-xl font-bold">{hour.temp}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

     
      <div className="flex-1 bg-white shadow-lg rounded-lg p-4">
        <div className="flex items-center justify-between mb-4 relative">
          <h4 className="text-xl font-semibold">კვირის ამინდი</h4>
          <div className="relative">
            <i
              className="fas fa-calendar-alt text-gray-600 text-2xl cursor-pointer"
             
            ></i>
           
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Home;