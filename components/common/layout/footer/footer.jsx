import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaCaretDown,
  FaChevronUp,
} from "react-icons/fa";
import OperationHoures from "./operationhouers";
import { phonenumberConvertor } from "../../../../utils/common/phone_number_converter";
import HomeLocation from "../../../layout/home/home_location";
import FooterTitle from "./footer_title";
import { CDN_BASE_URL } from "../../../../constant/base";
import { findScript } from "../../../../utils/common/html_script";

const FooterCustomerWeb = React.forwardRef((props, ref) => {
  const { data, timeWorke } = props;
  const router = useRouter();
  const [seeMore, setSeeMore] = useState(false);
  const currentYear = new Date().getFullYear();
  const scrollTop = () => {
    ref.current.scrollIntoView(true);
  };
  return (
    <div
      className="p-0 m-0 row w-100 pt-3"
      style={{ position: "relative", backgroundColor: "#111" }}
    >
      <div className="p-0 m-0 col-12 col-xl-11 mx-xl-auto  px-3 py-3 row ">
        <div className="p-0 m-0 row col-12 col-lg-6 col-xl-3 ">
          <div className="p-0 m-0  pr-2 col-12 pb-3">
            <h3 className="p-0 m-0 pb-2 footer_title_container text-white w-100 border-bottom border-white ">
              ABOUT US
            </h3>

            <div
              className="p-0 m-0 text-white footer_about-us-text-limit text-justify footer_desc_container text_limit_footer-desc"
              dangerouslySetInnerHTML={{
                __html: findScript(data?.about_us),
              }}
            />
            <div className="p-0 m-0 py-3 ">
              <Link href="/about-us">
                <a className="m-0 footer_desc_container text-white border p-2 footer-read-more-btn">
                  Read More
                </a>
              </Link>
              <div className="d-flex footer-images pt-3 justify-content-around">
                <img src="/images/footer/logo-omvic.png" alt="OMVIC" />
                <img src="/images/footer/logo-ucda.png" alt="UCDA" />
              </div>
            </div>
          </div>
        </div>

        <div className="p-0 m-0 col-12 col-lg-6 col-xl-3  px-lg-2  py-md-3 py-lg-0">
          {/* <div className="footer_circle-left" /> */}
          <h3 className="p-0 m-0 pb-2 footer_title_container text-left text-white border-bottom border-white mb-3">
            BUSINESS HOURS
          </h3>
          {/* <div className="footer_circle-right" /> */}
          <OperationHoures timeWorke={data?.timeWork} />
        </div>
        <div className="p-0 m-0 col-12 col-lg-6 col-xl-3 pl-lg-3 py-md-3 py-lg-0 ">
          {" "}
          <div className="p-0 m-0  d-flex flex-column justify-content-lg-between col-12 w-100">
            <div className="col-12 w-100 m-0 p-0 py-4 py-lg-0">
              <div className="p-0 m-0 d-flex flex-column justify-content-start align-items-start col-12 w-100 pb-3">
                <h3 className="p-0 m-0 pb-2 footer_title_container text-left text-white w-100 border-bottom border-white">
                  OUR CONTACTS
                </h3>
              </div>
              <div className=" p-0 m-0 py-1 d-flex footer_desc_container justify-content-between align-items-between ">
                <Link href="/direction">
                  <a>
                    {" "}
                    <FaMapMarkerAlt color="#fff" className="" />
                    <span className="p-0 m-0 px-2 " style={{ color: "#fff" }}>
                      {data?.business_street}
                      {", "}
                      {data?.business_city?.city}
                      {", "}
                      {data?.business_city?.Province?.province === "Alberta"
                        ? "Ab"
                        : data?.business_city?.Province?.province}
                      {", "}
                      {data?.business_postal}
                    </span>
                  </a>
                </Link>
              </div>
              <div className=" p-0 m-0 d-flex py-1 footer_desc_container justlfy-content-center align-items-center ">
                <FaPhone color="#fff" className="" />
                <a
                  href={phonenumberConvertor(data?.business_phone)}
                  rel="noopener noreferrer"
                  className="p-0 m-0 text-decoration-none px-2 "
                  style={{ color: "#fff" }}
                >
                  {data?.business_phone}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="p-0 m-0 col-12 col-lg-6 col-xl-3  px-lg-2  py-md-3 py-lg-0">
          {/* <div className="footer_circle-left" /> */}
          <h3 className="p-0 m-0 pb-2 footer_title_container text-left text-white border-bottom border-white">
            Connect with us
          </h3>
          <div className=" p-0 m-0 d-flex align-items-center justify-content-between mt-3">
            <div className="p-0 m-0 d-flex col-6">
              {data?.twitter !== null && (
                <Link href={`${data?.twitter}`}>
                  <a className="p-0 px-1 m-0" target="_blank">
                    <FaTwitter color="#fff" className="" />
                  </a>
                </Link>
              )}
              {data?.facebook !== null && (
                <Link href={`${data?.facebook}`}>
                  <a className="p-0 px-1 m-0" target="_blank">
                    <FaFacebookF color="#fff" />
                  </a>
                </Link>
              )}
              {data?.instagram !== null && (
                <Link href={`${data?.instagram}`}>
                  <a className="p-0 px-1 m-0" target="_blank">
                    <FaInstagram color="#fff" />
                  </a>
                </Link>
              )}
              {/* <Link href="https://pf.kakao.com/_xbyIxexl/chat">
                <a className="p-0 m-0">
                  <FaComment color="#be1e2d" />
                </a>
              </Link> */}
            </div>
            {/* {data?.facebook !== null && (
                    <div className="p-0 m-0 px-2">
                      <a href={data?.facebook}>
                        <i className="p-0 m-0">
                          <FaFacebookF size={27} color="#e9bd1d" />
                        </i>
                      </a>
                    </div>
                  )}
                  {data?.instagram !== null && (
                    <div className="p-0 m-0 px-2">
                      <a href={data?.instagram}>
                        <i className="p-0 m-0">
                          <FaInstagram size={27} color="#be1e2d" />
                        </i>
                      </a>
                    </div>
                  )} */}
          </div>
        </div>
      </div>

      <div
        className="p-0 m-0 py-2 w-100 col-12"
        style={{ backgroundColor: "#000", position: "relative" }}
      >
        <div className="p-0 m-0 d-flex flex-column flex-md-row align-items-center justify-content-center">
          <div className="p-0 px-3 m-0 footer_txt_border">
            <Link href="/">
              <a>
                <p
                  style={{ fontSize: "13px", color: "#fff" }}
                  className="p-0 m-0"
                >
                  &copy; {currentYear}{" "}
                  {data?.dba ? data?.dba : data?.bussiness_name}
                </p>
              </a>
            </Link>
          </div>
          <div className="p-0 m-0 powerBy_border">
            <div className="p-0 m-0 w-100 d-flex align-items-center justify-content-center">
              <a
                href="https://www.hillzdealer.com"
                className="p-0 px-1 m-0 py-1 text-decoration-none d-flex align-items-center"
                style={{
                  zIndex: 100,
                }}
              >
                <div
                  className="p-0 m-0 mx-2 my-1 my-md-0"
                  style={{
                    color: "#fff",
                    zIndex: 2,
                  }}
                >
                  <p style={{ fontSize: "13px" }} className="p-0 m-0">
                    Powered by
                  </p>
                </div>
                <img
                  src="/images/hillz_big_logo.png"
                  alt="Hillz Logo"
                  style={{
                    height: "30px",
                    width: "30px",
                  }}
                />

                <div
                  className="p-0 m-0 mx-2"
                  style={{
                    color: "#fff",
                    zIndex: 2,
                  }}
                >
                  <p style={{ fontSize: "13px" }} className="p-0 m-0">
                    HillzDealer
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="p-0 m-0 px-3 text-white footer_txt_border">
            <Link href="/privacy">
              <a className="" style={{ color: "#fff" }}>
                <p style={{ fontSize: "13px" }} className="p-0 m-0">
                  Privacy & Policy
                </p>
              </a>
            </Link>
          </div>
        </div>
        <a href="#top" className="p-2 m-0 link_to_top_btn">
          <FaChevronUp />
        </a>
      </div>
    </div>
  );
});
export default FooterCustomerWeb;
