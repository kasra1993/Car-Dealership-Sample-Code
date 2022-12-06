import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, {
  Navigation,
  Thumbs,
  Autoplay,
  Pagination,
  EffectFade,
} from "swiper";

import Link from "next/link";

SwiperCore.use([Navigation, Thumbs, Autoplay, Pagination, EffectFade]);
SwiperCore.use([EffectFade]);
const Slider = (props) => {
  const { vehicleDataForSearch, dealerData, advanceSearchData } = props;
  const prevref = useRef(null);
  const nextref = useRef(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <div className="p-0 m-0 w-100  " style={{ position: "relative" }}>
        {/* <div className="p-0 m-0 d-flex flex-column justify-content-center align-items-start home_txt_slider_position"> */}
        {/* <p className="p-0 m-0 welcome_text_title mb-0 justify-content-center align-items-center col-12">
            Luxury <br /> at the tip of your fingers !
          </p>
          <p className="p-0 py-3 m-0 welcome_text_desc">
            We have what you need !!!
          </p>
          <div className="m-0 p-0">
            <Link href="/cars">
              <a className=" m-0">
                <button className="home_btn_styles shadow">
                  <span>VIEW OUR INVENTORY</span>
                </button>
              </a>
            </Link>
          </div>*/}

        {/* <img
            className="p-0 m-0 w-100"
            src="/images/home/Group 2665.png"
            alt=""
          />
        </div> */}
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "red",
            position: "relative",
          }}
          progress={true}
          onProgressChange={function (swiper) {
            for (var i = 0; i < swiper.slides.length; i++) {
              var slide = swiper.slides[i];
              var progress = slide.progress;
              var translate = progress * swiper.width;
              var opacity = 1 - Math.min(Math.abs(progress), 1);
              slide.style.opacity = opacity;
              swiper.setTransform(
                slide,
                "translate3d(" + translate + "px,0,0)"
              );
            }
          }}
          onTouchStart={function (swiper) {
            for (var i = 0; i < swiper.slides.length; i++) {
              swiper.setTransition(swiper.slides[i], 0);
            }
          }}
          onSetWrapperTransition={function (swiper) {
            for (var i = 0; i < swiper.slides.length; i++) {
              swiper.setTransition(swiper.slides[i], swiper.params.speed);
            }
          }}
          loop={true}
          effect={"fade"}
          spaceBetween={1}
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
          thumbs={{ swiper: thumbsSwiper }}
          className="mySwiper2  pb-2 pb-md-0 w-100"
          autoplay={{
            delay: 5000,
          }}
          speed={1000}
          pagination={false}
        >
          {props?.slider?.rows?.map((row) => {
            return (
              <>
                <SwiperSlide
                  key={`homeSlider${row?.id}`}
                  className=""
                  style={{ zIndex: "0" }}
                >
                  <div
                    className=" w-100 home-image-container"
                    style={{ position: "relative" }}
                  >
                    <img
                      // style={{ height: "600px" }}
                      className="p-0 m-0 "
                      src={`https://hillzimage.blob.core.windows.net${row.image_name}`}
                    />
                  </div>
                </SwiperSlide>
              </>
            );
          })}
          {/* <div className="p-0 m-0 row w-100 justify-content-center align-items-center buttons_position">
            <div className="p-0 m-0 col-11 col-md-10 col-lg-8">
              <div className="p-0 m-0 row w-100 justify-content-center align-items-center">
                <div className="p-0 m-0 col-12 col-sm-4">
                  <Link href="/forms/finance">
                    <a>
                      {" "}
                      <div className=" m-0 p-2 button_style_slider_left d-flex justify-content-center align-items-center">
                        <div className="py-2 linkto_button d-flex align-items-start justify-content-start">
                          Get Approved
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
                <div className="p-0 m-0 col-12 col-sm-4">
                  <Link href="/forms/contact-us">
                    <a>
                      {" "}
                      <div className=" m-0 p-2 button_style_slider_middle d-flex justify-content-center align-items-center">
                        <div className="py-2 linkto_button d-flex align-items-start justify-content-start">
                          Contact Us
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
                <div className="p-0 m-0 col-12 col-sm-4">
                  <Link href="/cars">
                    <a>
                      {" "}
                      <div className=" m-0 p-2 button_style_slider_right d-flex justify-content-center align-items-center">
                        <div className="py-2 linkto_button d-flex align-items-start justify-content-start">
                          View Inventory
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div> */}
          <div className="p-0  p-3 m-0  slider_text_position text-center col-12 w-100 col-xl-10">
            <div className="flex-column d-flex justify-content-center  p-0 m-0 col-12 home-header-texts m-0 mb-lg-5">
              <div className="p-0 m-0 home_pooster_h5__text_sub">
                <h1 className=" mb-3 slider-heading">WE HAVE YOUR NEXT CAR</h1>
              </div>
              <p className="p-0 m-0 pl-0   home_pooster_p__text mb-5 ">
                GOOD OR BAD CREDIT WELCOME!
                {/* <br />
                divorced new to canada, self employed! */}
                {/* {item?.text3} */}
              </p>
            </div>
            <div className=" py-md-4 m-0 d-flex flex-column flex-lg-row justify-content-around col-12 mx-auto">
              <Link href="/cars">
                <a className="p-0  home-button  m-0 text-center  col-12 col-sm-10 col-md-8 col-lg-3 col-xl-3 mx-auto my-2 py-2 py-lg-2 ">
                  VIEW INVENTORY
                </a>
              </Link>
              <Link href="/forms/value-your-trade">
                <a className="p-0   home-button  m-0 text-center  col-12 col-sm-10 col-md-8 col-lg-4 col-xl-4 mx-auto my-2 py-2 py-lg-2">
                  TRADE-IN YOUR VEHICLE
                </a>
              </Link>
              <Link href="/forms/finance">
                <a className="p-0    home-button  m-0 text-center  col-12 col-sm-10 col-md-8 col-lg-3 col-xl-3 mx-auto my-2 py-2 py-lg-2">
                  GET APPROVED
                </a>
              </Link>
            </div>
          </div>
        </Swiper>

        {/* <div className="p-0 m-0 col-12 d-flex justify-content-center align-items-center home_slider_singlesearch">
          <Search {...vehicleDataForSearch} />
        </div> */}
      </div>
    </>
  );
};

export default Slider;
