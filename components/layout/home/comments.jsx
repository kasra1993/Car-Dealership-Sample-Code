import React, { useRef } from "react";
import Icon from "../../common/web/CustomizeIcon/Icon";
import { BsPersonFill } from "react-icons/bs";
import Carts from "../../common/web/carts/carts";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { GOOGLE_REVIEW } from "../../../constant/home/home";
import HomeTitle from "./home_header_title";

const Comments = ({ comment, rate, username, image }) => {
  const prevref = useRef(null);
  const nextref = useRef(null);
  return (
    <div className="main-primary comments">
      <div className={`pb-3 align-items-center`}>
        <div className="p-0 m-0 w-100 d-flex justify-content-left py-2">
          <h2>Google Reviews</h2>
        </div>
      </div>
      <p className="main-paragraph">
        {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do */}
      </p>
      <div className="p-0 m-0 w-100">
        <Swiper
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            480: {
              slidesPerView: 2,
            },
            720: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
          }}
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
          autoplay={{
            delay: 5000,
          }}
        >
          {GOOGLE_REVIEW?.map((review) => {
            return (
              <>
                <SwiperSlide
                  key={`googleReviewa${review?.id}`}
                  className="p-0 m-0"
                >
                  <Carts
                    type="CART_COMMENT"
                    title={review?.description}
                    avatar={<Icon type="DARK" icon={<BsPersonFill />} />}
                    username={review?.name}
                  />
                </SwiperSlide>
              </>
            );
          })}
          {/* <div className="p-0 m-0 d-flex align-items-center justify-content-center">
            <div ref={prevref} className="next_btn">
              <BsChevronLeft />
            </div>
            <div ref={nextref} className="prev_btn">
              <BsChevronRight />
            </div>
          </div> */}
        </Swiper>
      </div>
    </div>
  );
};

export default Comments;
