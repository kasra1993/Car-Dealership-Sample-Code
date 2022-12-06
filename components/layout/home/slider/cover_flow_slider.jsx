import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper/core";
import { GoogleReviewData } from "../../../../data/google_review_data";
SwiperCore.use([Pagination]);
const GoogleReviewsHomePage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="py-1 py-md-2 m-0 px-md-3 px-lg-5 row w-100 p-0 m-0 background_style-googlereview googleReviews_pag pb-5 mb-5">
      <div className="w-100 pt-5 d-flex justify-content-center p-0 py-3 m-0 w-100 text-center">
        <h3 className="p-0 m-0 title_our_brands text-center">Google Reviews</h3>
        {/* <div className="d-block ">
          <img
            className="d-none d-md-inline pl-3"
            src="/images/home/right.png"
          />
        </div> */}
      </div>

      <Swiper
        className="p-0 m-0 w-100 py-5"
        // slidesPerView={2}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 2,
          },
          1050: {
            slidesPerView: 3,
          },
          // 992: {
          //   slidesPerView: 3,
          // },
        }}
        autoplay={{
          delay: 3000,
        }}
        onSlideChange={(props) => setActiveIndex(props.activeIndex)}
        pagination={true}
      >
        {GoogleReviewData?.map((review, index) => {
          return (
            <SwiperSlide
              key={`GOOGLE_REVIEW${index}`}
              style={{ height: "100%", width: "100%" }}
              className="px-2"
            >
              <div className="p-0 m-0  w-100 ">
                <div
                  className={`px-3  p-0 m-0 w-100 py-3 shadow d-flex flex-column justify-content-between swiperslide_content ${
                    activeIndex === index && "swiperslide_content-active"
                  }`}
                  style={{ position: "relative", overflow: "visible" }}
                >
                  <div className="p-0 m-0 w-100 ">
                    <div className="row p-0 m-0 d-flex justify-content-start align-items-center ">
                      <div className="d-flex justify-content-between col-12 p-0 m-0">
                        <h6 className="m-0 p-0 py-1 google_fullname">
                          {review?.full_name}
                        </h6>
                        <div className="p-0 m-0 mb-2 mb-sm-0 d-flex alige-items-center justify-content-center">
                          {Array(+review?.rate)
                            ?.fill("")
                            ?.map(() => (
                              <FaStar className="mx-1" color="#FDCC0D" />
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-left p-0 m-0 pt-3  text_limit_google_review-desc">
                    {review?.desc}
                  </p>
                  <div className="p-0 m-0 pt-3 d-flex flex-column  justify-content-start">
                    <a
                      style={{ textDecoration: "underline" }}
                      target="_blank"
                      rel="noreferrer noopener"
                      href="https://www.google.com/search?ie=UTF-8&client=ms-android-rogers-ca-revc&source=android-browser&q=discount+auto+credit+edmonton#wptab=s:H4sIAAAAAAAAAONgVuLVT9c3NEw3K8quyM4pesRowS3w8sc9YSn9SWtOXmPU5OIKzsgvd80rySypFJLmYoOyBKX4uVB18uxi4vfJT07MCcjPDEoty0wtL17EKpOSWZycX5pXopBYWpKvkFyUmpJZolAEkQYAONFa_X0AAAA"
                      className="p-0 m-0 text-decoration-none google_rev_btn "
                    >
                      READ MORE
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default GoogleReviewsHomePage;
