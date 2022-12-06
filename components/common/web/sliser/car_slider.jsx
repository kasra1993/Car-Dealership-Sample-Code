import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";

SwiperCore.use([Autoplay]);
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const CarSlider = ({ children }) => {
  return (
    <div className="w-100">
      <Swiper autoplay pagination={{ clickable: true }} slidesPerView={1}>
        {children}
      </Swiper>
    </div>
  );
};

export default CarSlider;
