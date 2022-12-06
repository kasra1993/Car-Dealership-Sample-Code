import { findScript } from "../../../utils/common/html_script";
import Link from "next/link";
import { priceComma } from "../../../utils/common/price_odometer_handler";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Thumbs, Autoplay, Pagination } from "swiper";
import { useState, useRef } from "react";
import {
  FaAngleLeft,
  FaAngleRight,
  FaExpand,
  FaTimes,
  FaCompress,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { BsImages } from "react-icons/bs";
import { CDN_BASE_URL } from "../../../constant/base";
SwiperCore.use([Navigation, Thumbs, Autoplay, Pagination]);
const DescriptionAndWarranty = (props) => {
  const {
    comment,
    waranty,
    sell_price,
    special_price,
    imagesData,
    vehicleData,
    dealerData,
    data,
    activeIndexSlider,
    setActiveIndexSlider,
  } = props;
  const soldImage = dealerData?.soldImg?.src;
  // console.log("nnn", soldImage);
  const nextRef = useRef();
  const prevRef = useRef();
  const [fullScreen, setFullScreen] = useState(false);
  const handleFullScreenClose = () => setFullScreen(false);
  const handleFullScreenOpen = () => setFullScreen(true);
  const [activeIndexRotate, setActiveIndexRotate] = useState(false);
  return (
    <div className="p-0 mx-0 d-flex flex-column w-100 justify-content-center align-items-center">
      <div
        className="p-0 m-0 d-flex row justify-content-center align-items-stretch text-start"
        style={{ position: "relative" }}
      >
        {data?.vehicle_status === 7 && (
          <img
            height="100px"
            width="100px"
            src={`https://hillzimage.blob.core.windows.net${soldImage}`}
            className="detail_soldImage-style"
          />
        )}
      </div>
      <div className="p-0 col-11 col-sm-9 col-md-6">
        <div className="m-0 p-0 pb-1 d-flex flex-column justify-content-center align-items-center">
          <p className="detail_model-title-small p-0 m-0">
            {vehicleData?.Vehicle?.model_year}
          </p>
          <p className="detail_model-title p-0 m-0">
            {vehicleData?.Vehicle?.make} {vehicleData?.Vehicle?.model}
          </p>
          <p className="detail_model-title-small p-0 m-0">
            ${priceComma(sell_price, 2)}{" "}
            {special_price === 0 && "+ Sales Taxes"}
          </p>

          {vehicleData?.Vehicle?.carfax_link !== null &&
            vehicleData?.Vehicle?.carfax_link !== "" && (
              <>
                {/* <div className="col-12" /> */}
                <div className="p-0 m-0 col-3 pl-3">
                  <a
                    href={vehicleData?.carfax_link}
                    target="_blank"
                    rel="noreferrer noopener"
                    // style={{cursor:"pointer"}}
                  >
                    <img
                      src="/images/inventory/carfaxcanada_icon.png"
                      alt=""
                      className="w-50"
                      style={{
                        height: "auto",
                        objectFit: "contain",
                      }}
                    />
                  </a>
                </div>
              </>
            )}
        </div>

        <div className="p-0 m-0 w-100 row justify-content-center">
          <p className="p-1 m-0 text-white col-12 col-md-6">
            <h3 className="m-0 p-0 mb-1">Description</h3>
            <div
              className="p-1 m-0 text-white detail_context_text vehicle_detail_html_div__container slider_welcome_html_content_div__container"
              dangerouslySetInnerHTML={{
                __html: findScript(comment),
              }}
            />
          </p>
          <p
            className={`p-0 m-0 mt-2 w-100 text-white col-12 col-md-6 ${
              waranty !== null ? "d-block" : "d-none"
            }`}
          >
            <h3 className="m-0 p-0 mb-1">Warranty</h3>
            <div
              className="p-1 m-0 text-white detail_context_text vehicle_detail_html_div__container slider_welcome_html_content_div__container"
              dangerouslySetInnerHTML={{
                __html: findScript(waranty),
              }}
            />
          </p>
        </div>
      </div>
      <div className="p-0 m-0 col-12">
        <div className="p-0 m-0 py-2 row px-4 justify-content-between w-100 align-items-center">
          <div className="p-0 m-0 col-1">
            <div
              className="p-0 m-0 gallery_slider_i_fullscreen__icon d-flex justify-content-center align-items-center"
              onClick={handleFullScreenOpen}
            >
              <i className="">
                <FaCompress color="#aaaaaa" size={25} />
              </i>
            </div>
          </div>
          <Swiper
            // activeIndex={activeIndex + 3}
            className="p-0 m-0 col-6"
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
              position: "relative",
              height: "100%",
              padding: 0,
              margin: 0,
            }}
            breakpoints={{
              1200: {
                slidesPerView: 7,
              },
              768: {
                slidesPerView: 7,
              },
              360: {
                slidesPerView: 3,
              },
            }}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.update();
            }}
            navigation={true}
            // pagination={false}
            autoplay={{
              delay: 5000,
            }}
            onActiveIndexChange={(e) => {
              setActiveIndexSlider(e?.activeIndex);
              setActiveIndexRotate(true);
            }}
            centeredSlides={true}
            // onBeforeSlideChangeStart={() => setActiveIndexRotate(false)}
          >
            {imagesData?.map((item, index) => {
              return (
                <SwiperSlide className="p-0 px-1 m-0">
                  {({ isActive }) => (
                    <div
                      className="p-0 m-0 d-flex justify-content-center align-items-center gallery_slider_image__div_container"
                      style={{ cursor: "pointer" }}
                    >
                      {isActive ? (
                        <div
                          className={`p-0 m-0 swiper-pagination-active d-flex justify-content-center align-items-center w-100 h-100 mt-3 ${
                            activeIndexRotate ? "swiper-pagination_rotate" : ""
                          }`}
                        >
                          {/* {setActiveIndexRotate(false)} */}
                          <img
                            src="/images/common/e-forms/Group510.png"
                            alt=""
                          />
                        </div>
                      ) : (
                        <img
                          onClick={() => setActiveIndexSlider(index)}
                          src={`${CDN_BASE_URL}${item?.media_src}`}
                        />
                      )}
                    </div>
                  )}
                </SwiperSlide>
              );
            })}
            {fullScreen && (
              <div
                className="p-0 m-0 gallery_slider_modal__div_container d-flex align-items-center justify-content-center"
                onClick={(e) => {
                  e.preventDefault();
                  handleFullScreenClose();
                }}
              >
                <img
                  src={`${CDN_BASE_URL}${imagesData[activeIndexSlider]?.media_src}`}
                  style={{
                    objectFit: "contain",
                    width: "90%",
                    height: "auto",
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                />
                <i
                  className="gallery_slider_i_close_fullscreen__icon"
                  onClick={handleFullScreenClose}
                >
                  <FaTimes size={34} />
                </i>
              </div>
            )}
            <button
              className={`gallery_slider_nav_button__style gallery_slider_prev_button__style ${
                fullScreen ? "d-inline" : "d-none"
              }`}
              ref={prevRef}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
            >
              <FaAngleLeft size={34} />
            </button>
            <button
              className={`gallery_slider_nav_button__style gallery_slider_next_button__style ${
                fullScreen ? "d-inline" : "d-none"
              }`}
              style={{ zIndex: "100000000" }}
              ref={nextRef}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
            >
              <FaAngleRight size={34} />
            </button>
          </Swiper>
          <div className="mt-5 pt-5 p-0 m-0 col-2">
            <div className="p-0 m-0 d-flex flex-column flex-md-row justify-content-around">
              {dealerData?.facebook && (
                <div className="p-0 m-0 gallery_slider_i_fullscreen__icon d-flex justify-content-center align-items-center">
                  <Link href={`${dealerData?.facebook}`}>
                    <a>
                      <FaFacebook color="#aaaaaa" size={25} />
                    </a>
                  </Link>
                </div>
              )}
              {dealerData?.youtube && (
                <div className="p-0 m-0 gallery_slider_i_fullscreen__icon d-flex justify-content-center align-items-center">
                  <Link href={`${dealerData?.youtube}`}>
                    <a className="">
                      <FaYoutube color="#aaaaaa" size={25} />
                    </a>
                  </Link>
                </div>
              )}
              {dealerData?.instagram && (
                <div className="p-0 m-0 gallery_slider_i_fullscreen__icon d-flex justify-content-center align-items-center">
                  <Link href={`${dealerData?.instagram}`}>
                    <a className="">
                      <FaInstagram color="#aaaaaa" size={25} />
                    </a>
                  </Link>
                </div>
              )}
              {dealerData?.twitter && (
                <div className="p-0 m-0 gallery_slider_i_fullscreen__icon d-flex justify-content-center align-items-center">
                  <Link href={`${dealerData?.twitter}`}>
                    <a className="">
                      <FaTwitter color="#aaaaaa" size={25} />
                    </a>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionAndWarranty;
