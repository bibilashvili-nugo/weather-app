import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";

export default function TemprichaByHours({ hourlyData }) {
  const swiperRef = useRef(null);

  const handleReachEnd = () => {
    if (swiperRef.current) {
      swiperRef.current.navigation.disable();
    }
  };

  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;
    if (swiperInstance) {
      swiperInstance.on("reachEnd", handleReachEnd);
    }
    return () => {
      if (swiperInstance) {
        swiperInstance.off("reachEnd", handleReachEnd);
      }
    };
  }, []);

  return (
    <div
      style={{
        backdropFilter: "blur(1.7210965156555176px)",
        background: "rgba(181, 181, 181, 0.40)",
        overflow: "hidden",
      }}
      className="container mb-[53px] py-[28px] rounded-[14px] mx-auto p-4"
    >
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination]}
        slidesPerView={8}
        spaceBetween={10}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 5 },
          1024: { slidesPerView: 8 },
        }}
        slideToClickedSlide
        loop={false}
        className="swiper-container"
        style={{ overflow: "hidden" }}
      >
        {hourlyData.map((hour, index) => (
          <SwiperSlide
            key={index}
            className="p-4 flex gap-[10px] flex-col items-center"
          >
            <p className="text-[18px] text-[#D7D7D7] font-[400]">{hour.time}</p>
            <img className="w-[35px]  h-[35px]" src={hour.icon} alt="" />
            <p className="text-[24px]  text-[#D7D7D7] font-[400]">
              {hour.temp}°C
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
