import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./HeroSection.css";

// Import images for desktop and mobile
import banner1Desktop from "../../assets/hero1.png";
import banner2Desktop from "../../assets/hero2.png";
import banner3Desktop from "../../assets/hero3.png";
import banner4Desktop from "../../assets/hero4.png";
import banner5Desktop from "../../assets/hero5.png";

import banner1Mobile from "../../assets/hero1-m.png";
import banner2Mobile from "../../assets/hero2-m.png";
import banner3Mobile from "../../assets/hero3-m.png";
import banner4Mobile from "../../assets/hero4-m.png";
import banner5Mobile from "../../assets/hero5-m.png";

const banners = [
  { desktop: banner1Desktop, mobile: banner1Mobile },
  { desktop: banner2Desktop, mobile: banner2Mobile },
  { desktop: banner3Desktop, mobile: banner3Mobile },
  { desktop: banner4Desktop, mobile: banner4Mobile },
  { desktop: banner5Desktop, mobile: banner5Mobile },
];

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
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            {/* Desktop Image */}
            <img
              src={banner.desktop}
              alt={`Desktop Banner ${index + 1}`}
              className="hero-image desktop-banner"
              loading="lazy"
            />
            {/* Mobile Image */}
            <img
              src={banner.mobile}
              alt={`Mobile Banner ${index + 1}`}
              className="hero-image mobile-banner"
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;
