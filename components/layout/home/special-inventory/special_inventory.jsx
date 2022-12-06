import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Thumbs, Autoplay } from "swiper";
import { dashRemoverForSlug } from "../../../../utils/common/dash_remover";
import EachSpecialInHomePage from "./special-inventory-home-component";
import {
  FaAngleLeft,
  FaAngleRight,
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
} from "react-icons/fa";
import SpecialInventoryCars from "./specialinventory_cars";
SwiperCore.use([Pagination, Thumbs, Autoplay]);
const SpecialInventorySlider = (props) => {
  const { specialCars, bodyStyleData, transmissionData } = props;
  const prevref = useRef(null);
  const nextref = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="p-0 pb-5 px-4 m-0 row justify-content-center align-items-center special_cars_pag w-100 py-5">
      <div
        className="p-0 col-12 m-0 home_special_swiper-container"
        style={{ overflow: "hidden" }}
      >
        <div className="p-0 m-0 w-100 d-flex flex-wrap flex-column justify-content-center align-items-center">
          <div className="p-0 m-0 title_our_brands text-center text-white mb-5">
            FEATURED VEHICLES
          </div>
        </div>
        <Swiper
          onSlideChange={(props) => {
            setActiveIndex(props.activeIndex);
          }}
          // spaceBetween="0px"
          effect={"coverflow"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 400,
            modifier: 1,
            slideShadows: false,
          }}
          className=" row w-100 mt-2"
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
            position: "relative",
            padding: 0,
            margin: 0,
          }}
          initialSlide={Math.round(specialCars?.length / 2) - 1}
          navigation={{
            prevEl: prevref.current ? prevref.current : ".prev",
            nextEl: nextref.current ? nextref.current : ".next",
            disabledClass: "swiper-button-prev,swiper-button-next",
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevref.current;
            swiper.params.navigation.nextEl = nextref.current;
            swiper.navigation.update();
          }}
          pagination={false}
          autoplay={{
            delay: 3000,
          }}
          // breakpoints={{
          //   1200: {
          //     slidesPerView: 3,
          //   },
          //   768: {
          //     slidesPerView: 2,
          //   },
          //   360: {
          //     slidesPerView: 1,
          //   },
          // }}
          // style={
          //   {
          //     "--swiper-pagination-color": "red",
          //   }
          // }

          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          // pagination={true}
          // onInit={(swiper) => {
          //   swiper.params.navigation.prevEl = prevref.current;
          //   swiper.params.navigation.nextEl = nextref.current;
          //   swiper.navigation.update();
          // }}
          // centeredSlides
          // autoplay={{
          //   delay: 3000,
          // }}
          // effect="coverflow"
          // coverflowEffect={{
          //   rotate: 0,
          //   stretch: 80,
          //   depth: 200,
          //   modifier: 1,
          //   slideShadows: false,
          // }}
          // // initialSlide={Math.round(specialCars?.length / 2) - 1}
          // onSlideChange={(props) => setActiveIndex(props.activeIndex)}
          // className="mySwiper2 p-0 d-flex row col-12 justify-content-center align-items-center text-center special_inventory_slider"
        >
          {specialCars?.map((vehicle, index) => {
            return (
              <>
                <SwiperSlide
                  key={`specialSlider${index}`}
                  className="p-0 m-0 px-2"
                >
                  <SpecialInventoryCars item={vehicle} index={index} />
                  {/* <EachSpecialInHomePage
                    vehicle={vehicle}
                    index={index}
                    activeIndex={activeIndex}
                  /> */}
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default SpecialInventorySlider;
