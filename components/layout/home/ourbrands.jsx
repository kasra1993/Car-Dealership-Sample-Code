import React, { useRef } from "react";
import Link from "next/link";
import { CDN_BASE_URL } from "../../../constant/base";
import { Swiper, SwiperSlide } from "swiper/react";

const ourbrands = (props) => {
  const { brands, allbrands } = props;
  const prevref = useRef(null);
  const nextref = useRef(null);
  return (
    <div className="main-primary Brands w-100">
      <div className="m-0 pb-2 d-flex align-items-center justify-content-center text-center">
        <div className="py-0 m-0">
          <img src="/images/home/Path 65.png" className="d-inline" />
        </div>
        <h2 className="main-title px-2">Our Brands</h2>
        <div>
          <img src="/images/home/Path 64.png" className="d-inline" />
        </div>
      </div>
      <div className="section_brands">
        <Swiper
          className="p-0 m-0 w-100"
          // effect={"coverflow"}
          // coverflowEffect={{
          //   rotate: 0,
          //   stretch: 0,
          //   depth: 200,
          //   modifier: 1,
          //   // slideShadows: true,
          // }}
          initialSlide={Math.round(props?.brands?.length / 2) - 1}
          pagination={false}
          centeredSlides={false}
          spaceBetween={22}
          autoplay={{
            delay: 5000,
          }}
          breakpoints={{
            1200: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 3,
            },
            430: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          }}
        >
          {allbrands?.map((brand, index) => {
            return (
              <SwiperSlide key={`Brand${index}`}>
                <Link href={`/cars?make=${brand}`}>
                  <a>
                    <div className="p-2 m-0 mt-2 mt-lg-0 col-12">
                      <div className="p-0 m-0 w-100 our_brand_image_div__conatiner">
                        <img
                          src={
                            CDN_BASE_URL +
                            "/" +
                            "car-brands-closeup-images" +
                            "/" +
                            brand?.toLowerCase() +
                            ".png"
                          }
                          alt={brand}
                        />
                      </div>
                    </div>
                  </a>
                  {/* <div
                    style={{
                      width: "200px",
                      cursor: "pointer",
                      filter: "drop-shadow(0px 10px 5px rgba(0,0,0,0.1))",
                      clipPath:
                        "polygon(35% 0, 100% 0%, 100% 100%, 0 100%, 0 32%)",
                    }}
                    className="my-3 "
                  >
                    <div
                      style={{
                        position: "relative",
                        transform: "translate(1px,2px)",
                        height: "150px",
                        width: "200px",
                        backgroundColor: "white",
                        clipPath:
                          "polygon(35% 0, 100% 0%, 100% 100%, 0 100%, 0 32%)",
                      }}
                      className=" p-0 m-0 brand"
                    >
                      <div className="">
                        <img
                          src={`${CDN_BASE_URL}/car-brands-closeup-images/${brand?.toLowerCase()}.png`}
                          alt=""
                          className="brands_image_img"
                        />
                      </div>
                    </div>
                  </div> */}
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* <div className="d-flex justify-content-center">
          <div ref={prevref}>
            <button>
              <img src="/images/home/icon/Group 77.png" />
            </button>
          </div>
          <div ref={nextref}>
            <button>
              <img src="/images/home/icon/Group 78.png" />
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ourbrands;
