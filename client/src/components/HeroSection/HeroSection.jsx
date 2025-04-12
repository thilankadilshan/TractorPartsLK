import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./HeroSection.css";

// Import images from src/assets
import banner1 from "../../assets/hero1.png";
import banner2 from "../../assets/hero2.png";
import banner3 from "../../assets/hero3.png";
import banner4 from "../../assets/hero4.png";
import banner5 from "../../assets/hero5.png";

const banners = [banner1, banner2, banner3, banner4, banner5];

const HeroSection = () => {
  return (
    <div className="hero-container">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="hero-swiper"
      >
        {banners.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Banner ${index + 1}`}
              className="hero-image"
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;
