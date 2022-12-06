import React from "react";
import Link from "next/link";
import { findScript } from "../../../utils/common/html_script";
import { CDN_BASE_URL } from "../../../constant/base";

const Welcome = (props) => {
  const { dealerData } = props;
  return (
    <>
      <div
        className="p-0 m-0 py-2 row  px-md-5 justify-content-start  w-100 welcome_back pb-5"
        // style={{
        //   backgroundImage: `url(${CDN_BASE_URL}${dealerData?.welcome_image_url})`,
        // }}
      >
        <div
          className="p-0 m-0 px-lg-3 py-lg-5 col-12 h-100 "
          style={{ zIndex: "10" }}
        >
          <div className="px-4 py-lg-5 m-0 home_welcome-txt_container">
            <div className="px-1 pt-2 pt-md-3 pb-3 m-0 row w-100 align-items-center justify-content-start text-uppercase p-0 m-0 col-12 title_our_brands ">
              WELCOME TO&nbsp;
              {dealerData?.dba
                ? dealerData?.dba
                : dealerData?.bussiness_name}{" "}
            </div>
            <div
              className="px-1 pb-1 m-0 welcome_text text_div__container "
              dangerouslySetInnerHTML={{
                __html: findScript(dealerData?.welcome_note),
              }}
            />
            {/* <div className="p-2 p-md-3 m-0 text_div__container ">
              <Link href="/about-us">
                <a className="p-0 py-3 px-4 w-100 button_style_slider m-0 text-center">
                  Read More
                </a>
              </Link>
            </div> */}
          </div>
          <div className="px-4 py-lg-3 m-0 d-flex col-12 w-100  d-flex flex-column flex-lg-row ">
            <div className="credit-image col-12 col-lg-6 ">
              <img
                src={CDN_BASE_URL + dealerData?.welcome_image_url}
                className="p-0 m-0 w-100 home_welcome_img_style"
              />
            </div>
            <div className="credit-text col-12 col-lg-6 pt-3 pt-lg-0 ">
              <h2>Good Credit, Bad Credit, No Credit?</h2>
              <p className="pt-3 pb-5">
                No matter where you find yourself on the credit spectrum, even
                off of it, The King Auto is able to find a financing solution
                that you're sure to love. Hundreds with difficult credit
                situations have already counted on us to help them secure a loan
                to get that car or truck they needed. We'd love for you to be
                our next success story.
              </p>
              <Link href="/forms/finance">
                <a className="p-0 py-3  py-4 m-0 text-center  col-4 px-5 credit-btn text-dark gold_button_2 ">
                  Apply Online
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* <div
        className="row p-0 m-0 w-100 px-md-0 justify-content-center py-4 home_minivans_caontainer"
        style={{ backgroundColor: "#f7f7f7" }}
      >
        <div className="p-0 m-0 text-uppercase py-3 py-md-5 special-title">
          Search By Bodystyle
        </div>
        <div className="p-0 m-0 p-4 col-12 justify-content-center align-items-center">
          <div className="p-0 m-0 row w-100">
            <div className="p-2 m-0 col-6 col-md-4 col-lg-2">
              <Link href="/cars?bodystyle=Sedan">
                <a className="p-0 m-0 scale_hover_sistem">
                  <img
                    style={{ objectFit: "cover" }}
                    className="w-100"
                    src="/images/home/Sedans.png"
                    alt=""
                  />
                  <div className="p-0 m-0 w-100 text-center home-welcome_txt">
                    Sedan
                  </div>
                </a>
              </Link>
            </div>
            <div className="p-2 m-0 col-6 col-md-4 col-lg-2">
              <Link href="/cars?bodystyle=Coupe">
                <a className="p-0 m-0 scale_hover_sistem">
                  <img
                    style={{ objectFit: "cover" }}
                    className="w-100"
                    src="/images/home/Coupes.png"
                    alt=""
                  />
                  <div className="p-0 m-0 w-100 text-center home-welcome_txt coupe_text">
                    Coupe
                  </div>
                </a>
              </Link>
            </div>
            <div className="p-2 m-0 col-6 col-md-4 col-lg-2">
              <Link href="/cars?bodystyle=Convertible">
                <a className="p-0 m-0 scale_hover_sistem">
                  <img
                    style={{ objectFit: "cover" }}
                    className="w-100"
                    src="/images/home/Convertibles.png"
                    alt=""
                  />
                  <div className="p-0 m-0 w-100 text-center home-welcome_txt">
                    Convertible
                  </div>
                </a>
              </Link>
            </div>
            <div className="p-2 m-0 col-6 col-md-4 col-lg-2">
              <Link href="/cars?bodystyle=Suv">
                <a className="p-0 m-0 scale_hover_sistem">
                  <img
                    style={{ objectFit: "cover" }}
                    className="w-100"
                    src="/images/home/Suvs.png"
                    alt=""
                  />
                  <div className="p-0 m-0 w-100 text-center home-welcome_txt">
                    Suv
                  </div>
                </a>
              </Link>
            </div>
            <div className="p-2 m-0 col-6 col-md-4 col-lg-2">
              <Link href="/cars?bodystyle=VAN">
                <a className="p-0 m-0 scale_hover_sistem">
                  <img
                    style={{ objectFit: "cover" }}
                    className="w-100"
                    src="/images/home/Vans.png"
                    alt=""
                  />
                  <div className="p-0 m-0 w-100 text-center home-welcome_txt">
                    Minivan/Van
                  </div>
                </a>
              </Link>
            </div>
            <div className="p-2 m-0 col-6 col-md-4 col-lg-2">
              <Link href="/cars?bodystyle=Pickup">
                <a className="p-0 m-0 scale_hover_sistem">
                  <img
                    style={{ objectFit: "cover" }}
                    className="w-100"
                    src="/images/home/Commercial.png"
                    alt=""
                  />
                  <div className="p-0 m-0 w-100 text-center home-welcome_txt">
                    Truck/Commercial
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Welcome;
