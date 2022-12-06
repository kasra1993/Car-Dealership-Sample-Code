import React from "react";
import Link from "next/link";
import { useState } from "react";
import {
  FaCar,
  FaAngleDown,
  FaDollarSign,
  FaAlignJustify,
  FaLocationArrow,
  FaMap,
  FaPhone,
  FaWindowClose,
  FaFacebookF,
  FaComment,
  FaAlignRight,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
} from "react-icons/fa";
import NavLink from "./NavLink";
import { CDN_BASE_URL } from "../../../../constant/base";
import { phonenumberConvertor } from "../../../../utils/common/phone_number_converter";
import { useRouter } from "next/router";
import { Translate } from "../../../layout/home/translate";

const HeaderCustomerWeb = React.forwardRef((props, ref) => {
  const router = useRouter();
  const { data, dealerData } = props;
  const [showMobile, setShowMobile] = useState(false);
  const [parent, setParent] = useState(undefined);
  const style = {
    position: "relative",
    backgroundColor: "#222",
    // backgroundColor: router.pathname === "/" ? "transparent" : "#222",
    // position: router.pathname === "/" ? "absolute" : "relative",
  };
  return (
    <>
      <div
        className="p-0 m-0 row w-100 px-0 px-md-4 px-lg-5 d-flex justify-content-between align-items-center header_div__container"
        ref={ref}
        id="top"
        style={{ position: "relative", backgroundColor: "#292929" }}
      >
        {/* END OF MOBILE NAV ITEMS */}
        <div
          className="p-0 px-0   col-12 m-0 d-lg-none row"
          style={{ position: "relative" }}
        >
          <div
            className="w-100 row justify-content-between align-items-center p-0 m-0"
            style={{ backgroundColor: "#292929" }}
          >
            <div className="p-0 m-0 py-2 pt-4 col-8 ">
              {" "}
              <Link href="/">
                <a className="p-0 m-0 d-flex justify-content-start align-items-center header_logo_container">
                  <img
                    alt="LOGO"
                    src={`${CDN_BASE_URL}${data?.logo_url}`}
                    className="w-100"
                  />
                </a>
              </Link>
            </div>
            <div
              onClick={() => setShowMobile((prev) => !prev)}
              className="p-0 m-0 col-4 d-flex justify-content-end h-100 align-items-start p-3 "
              style={{ cursor: "pointer" }}
            >
              {showMobile ? (
                <div className="p-0 m-0 py-1 ">
                  <FaWindowClose color="#fff" size={28} />
                </div>
              ) : (
                <div className="p-0 m-0 py-1 border rounded px-3 py-2 ">
                  <FaAlignJustify
                    // className="svg_icons_sizing"
                    color="#555"
                    size={25}
                  />
                </div>
              )}
            </div>
          </div>
          <div
            className={`p-0 m-0 col-12 d-flex d-lg-none flex-column justify-content-start align-items-start mobile_menu_container ${
              showMobile && "mobile_menu_container_open py-2"
            }`}
          >
            <div className="p-0 m-0 w-100 text-left d-flex justify-content-start align-items-start px-4">
              <NavLink
                menuToggleSetter={setShowMobile}
                isMobile={true}
                disabledDesktopClass={true}
                type="1"
                title={"HOME"}
                href="/"
                className=" header_a__navlink header_a__navlink_mobile "
              />
            </div>

            <div className="p-0 m-0 d-flex w-100 justify-content-between align-items-start px-4">
              <NavLink
                menuToggleSetter={setShowMobile}
                parent={parent}
                parentId={0}
                setParent={setParent}
                isMobile={true}
                disabledDesktopClass={true}
                type="0"
                title={
                  <div className="p-0 m-0 d-flex w-100 justify-content-between">
                    <span>INVENTORY</span>
                    <i>
                      <FaAngleDown />
                    </i>
                  </div>
                }
                href="/cars"
                className=" header_a__navlink header_a__navlink_mobile "
                subLinks={[
                  {
                    href: "/cars",
                    title: "INVENTORY",
                  },
                  {
                    href: "/cars/Special-Inventory",
                    title: "FEATURED INVENTORY",
                  },
                  {
                    href: "/forms/car-finder",
                    title: "CAR FINDER",
                  },
                  {
                    href: "/forms/value-your-trade",
                    title: "APPRAISE MY TRADE",
                  },

                  // {
                  //   href: "/forms/service-appointment",
                  //   title: "BOOK AN APPOINTMENT",
                  // },
                  // {
                  //   href: "/forms/test-drive",
                  //   title: "BOOK A TEST DRIVE",
                  // },
                ]}
              />
            </div>
            {/* <div className="p-0 m-0 d-flex w-100 justify-content-between align-items-start px-4">
            <NavLink
              menuToggleSetter={setShowMobile}
              isMobile={true}
              disabledDesktopClass={true}
              type="1"
              title={"APPRAISE MY TRADE"}
              href="/forms/value-your-trade"
              className=" header_a__navlink header_a__navlink_mobile "
            />
          </div> */}
            <div className="p-0 m-0 d-flex w-100 justify-content-between align-items-start px-4">
              <NavLink
                menuToggleSetter={setShowMobile}
                parent={parent}
                parentId={1}
                setParent={setParent}
                isMobile={true}
                disabledDesktopClass={true}
                type="0"
                title={
                  <div className="p-0 m-0 d-flex w-100 justify-content-between">
                    <span>FINANCING</span>
                    <i>
                      <FaAngleDown />
                    </i>
                  </div>
                }
                href="/forms/finance"
                className=" header_a__navlink header_a__navlink_mobile "
                subLinks={[
                  {
                    href: "/forms/finance/department",
                    title: "FINANCING DEPARTMENT",
                  },
                  {
                    href: "/forms/finance",
                    title: "FINANCING APPLICATION",
                  },
                  {
                    href: "/forms/finance/calculator",
                    title: "FINANCING CALCULATOR",
                  },
                ]}
              />
            </div>
            {/* <div className="p-0 m-0 d-flex w-100 justify-content-between align-items-start px-4">
            <NavLink
              menuToggleSetter={setShowMobile}
              parent={parent}
              parentId={1}
              setParent={setParent}
              isMobile={true}
              disabledDesktopClass={true}
              type="0"
              title={
                <div className="p-0 m-0 d-flex w-100 justify-content-between">
                  <span>SERVICES</span>
                  <i>
                    <FaAngleDown />
                  </i>
                </div>
              }
              href="/forms/service-appointment"
              className=" header_a__navlink header_a__navlink_mobile "
              subLinks={[
                // {
                //   href: "/finance-department",
                //   title: "FINANCING DEPARTMENT",
                // },
                {
                  href: "/forms/service-appointment",
                  title: "BOOK AN APPOINTMENT",
                },
                // {
                //   href: "/forms/service-order-part",
                //   title: "ORDER PART",
                // },
              ]}
            />
          </div> */}
            <div className="p-0 m-0 d-flex w-100 justify-content-between align-items-start px-4">
              <NavLink
                menuToggleSetter={setShowMobile}
                parent={parent}
                parentId={2}
                setParent={setParent}
                isMobile={true}
                disabledDesktopClass={true}
                type="0"
                title={
                  // ""
                  <div className="p-0 m-0 d-flex w-100 justify-content-between">
                    <span>DEALERSHIP</span>
                    <i>
                      <FaAngleDown />
                    </i>
                  </div>
                }
                href="/about-us"
                className=" header_a__navlink header_a__navlink_mobile "
                subLinks={[
                  {
                    href: "/about-us",
                    title: "ABOUT US",
                  },
                  {
                    href: "/forms/contact-us",
                    title: "CONTACT US",
                  },
                  {
                    href: "/forms/book-appointment",
                    title: "BOOK APPOINTMENT",
                  },
                ]}
              />
            </div>
            <div className="p-0 m-0 d-flex w-100 justify-content-between align-items-start px-4">
              <NavLink
                menuToggleSetter={setShowMobile}
                isMobile={true}
                disabledDesktopClass={true}
                type="1"
                title={"DIRECTION"}
                href="/direction"
                className=" header_a__navlink header_a__navlink_mobile "
              />
            </div>
            <div className="p-0 m-0 d-flex w-100 justify-content-between align-items-start px-4">
              <NavLink
                menuToggleSetter={setShowMobile}
                isMobile={true}
                disabledDesktopClass={true}
                type="1"
                title={"TEXT US NOW"}
                href="/forms/text-us-now"
                className=" header_a__navlink header_a__navlink_mobile "
              />
            </div>
          </div>

          <div className="p-0 px-lg-5 m-0 w-100 py-2 row header_div__mobile_container  align-items-center justify-content-around mobile-nav-icons">
            {" "}
            <div className="p-0 m-0 col-3 d-flex justify-content-center ">
              <Link href="/cars">
                <a>
                  <FaCar
                    className="p-0 m-0 svg_icons_sizing"
                    style={{ color: "#fff" }}
                  />
                </a>
              </Link>
            </div>
            <div className="p-0 m-0 col-3 d-flex justify-content-center ">
              <Link href="https://www.google.com/maps/dir//5455+Steeles+Ave+W+North+York,+ON+M9L+1S7/@43.7673875,-79.5581239,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x882b3000f80d5f6d:0xa0d09d49b08cb683!2m2!1d-79.5581239!2d43.7673875">
                <a target="_blank" rel="noreferrer">
                  <FaMapMarkerAlt
                    className="p-0 m-0 svg_icons_sizing"
                    style={{ color: "#fff" }}
                  />{" "}
                </a>
              </Link>
            </div>
            <div className="p-0 m-0 col-3 d-flex justify-content-center">
              <Link
                // href="/about-us"
                href={phonenumberConvertor(props?.data?.business_phone)}
                rel="noopener noreferrer"
              >
                <a>
                  <FaPhone
                    className="p-0 m-0 svg_icons_sizing"
                    style={{ color: "#fff" }}
                  />
                </a>
              </Link>
            </div>
          </div>
          {/* END OF ADDRESS AND NUMBER  */}
        </div>
        {/* END OF LOGO AND ICON*/}
      </div>
      {/* END OF MOBILE  */}
      <div
        className="w-100 px-5 d-none d-lg-flex flex-wrap justify-content-between align-items-center logo_bg_container"
        // style={{ backgroundColor: "rgb(55, 40, 40)" }}
      >
        <div className="p-0 m-0 d-flex  justify-content-center align-items-center py-2 col-12 w-100 pl-5 ml-5 header-top-section">
          <div className=" p-0 m-0 d-none d-md-flex  justify-content-center align-items-center px-2 ">
            <Link href="/direction">
              <a>
                <FaMapMarkerAlt />
              </a>
            </Link>
            <Link href="/direction">
              <a>
                <span className="p-0 m-0 pl-2 d-none d-md-flex ">
                  {props?.data?.business_street}
                  {", "}
                  {props?.data?.business_city?.city}
                  {", "}

                  {props?.data?.business_city?.Province?.province === "Alberta"
                    ? "AB"
                    : props?.data?.business_city?.Province?.province}

                  {", "}
                  {props?.data?.business_postal}
                </span>
              </a>
            </Link>
          </div>
          <div
            className="p-0 m-0 px-2 d-none d-md-flex justify-content-start align-items-center"
            style={{ fontSize: "14px" }}
          >
            <a
              href={phonenumberConvertor(props?.data?.business_phone)}
              rel="noopener noreferrer"
              className="p-0 m-0 text-decoration-none text-white"
            >
              <FaPhone />
            </a>
            {/* <span> {props?.data?.business_phone}</span> */}
            <a
              href={phonenumberConvertor(props?.data?.business_phone)}
              rel="noopener noreferrer"
              className="p-0 m-0 text-decoration-none"
            >
              <span className="p-0 m-0 pl-2 d-none d-md-flex  text-white">
                {props?.data?.business_phone}
              </span>
            </a>
          </div>
          {/* <div className="p-0 m-0 google_translate_btn_positioning">
            <Translate />
          </div> */}
        </div>
      </div>
      <div
        className="d-none d-md-flex w-100 row p-0 m-0 justify-content-start align-items-start"
        style={{ position: router.pathname === "/" ? "absolute" : "relative" }}
      >
        <div className="col-12  d-none d-lg-flex justify-content-center align-items-center header_partlink p-0 m-0 w-100">
          <div className="p-0 m-0 col-3" style={{ zIndex: "5" }}>
            <Link href="/">
              <a className="p-0 m-0  d-flex justify-content-center align-items-center header_logo_container">
                <img
                  alt="LOGO"
                  src={`${CDN_BASE_URL}${data?.logo_url}`}
                  className="w-100"
                />
              </a>
            </Link>
          </div>
          <div className="d-flex  p-0 m-0 justify-content-center align-items-center col-8 navbar-desktop ">
            <NavLink
              type="1"
              title={"HOME"}
              href="/"
              className="col header_a__navlink "
            />
            <NavLink
              type="0"
              title={
                // "SHOWROOM"
                <>
                  <span>INVENTORY</span>
                  <i>
                    <FaAngleDown />
                  </i>
                </>
              }
              href=""
              className="col header_a__navlink "
              subLinks={[
                {
                  href: "/cars",
                  title: "INVENTORY",
                },
                {
                  href: "/cars/Special-Inventory",
                  title: "FEATURED INVENTORY",
                },
                {
                  href: "/forms/car-finder",
                  title: "CAR FINDER",
                },
                {
                  href: "/forms/value-your-trade",
                  title: "APPRAISE MY TRADE",
                },
                // {
                //   href: "/forms/test-drive",
                //   title: "BOOK A TEST DRIVE",
                // },
              ]}
            />
            {/* <NavLink
              type="1"
              title={"APPRAISE MY TRADE"}
              href="/forms/value-your-trade"
              className="col header_a__navlink "
            /> */}
            <NavLink
              type="0"
              title={
                <>
                  <span>FINANCING</span>
                  <i>
                    <FaAngleDown />
                  </i>
                </>
              }
              href=""
              className="col header_a__navlink "
              subLinks={[
                {
                  href: "/forms/finance/department",
                  title: "FINANCING DEPARTMENT",
                },
                {
                  href: "/forms/finance",
                  title: "FINANCING APPLICATION",
                },
                {
                  href: "/forms/finance/calculator",
                  title: "FINANCING CALCULATOR",
                },
              ]}
            />
            {/* <NavLink
              type="0"
              title={
                <>
                  <span>SERVICES</span>
                  <i>
                    <FaAngleDown />
                  </i>
                </>
              }
              href=""
              className="col header_a__navlink "
              subLinks={[
                {
                  href: "/forms/service-appointment",
                  title: "BOOK AN APPOINTMENT",
                },
                // {
                //   href: "/forms/service-order-part",
                //   title: "ORDER PART",
                // },
              ]}
            /> */}

            <NavLink
              type="0"
              title={
                // "DEALERSHIP"
                <>
                  <span>DEALERSHIP</span>
                  <i>
                    <FaAngleDown />
                  </i>
                </>
              }
              href=""
              className="col header_a__navlink "
              subLinks={[
                {
                  href: "/about-us",
                  title: "ABOUT US",
                },
                {
                  href: "/forms/contact-us",
                  title: "CONTACT US",
                },
                {
                  href: "/forms/book-appointment",
                  title: "BOOK APPOINTMENT",
                },
              ]}
            />

            <NavLink
              type="1"
              title={"DIRECTION"}
              href="/direction"
              className="col header_a__navlink "
            />
            <NavLink
              type="1"
              title={"TEXT US NOW"}
              href="/forms/text-us-now"
              className="col header_a__navlink "
            />
          </div>
        </div>
        {/* <div className="p-0 m-0 col-12  px-lg-5 d-flex justify-content-center align-items-center flex-row header_partlink">
          <div
            onClick={() => setShowMobile((prev) => !prev)}
            className="p-0 m-0 d-none d-md-flex d-lg-none justify-content-center"
          >
            {showMobile ? (
              <div className="p-0 m-0 py-1">
                <FaWindowClose color="#fff" size={28} />
              </div>
            ) : (
              <div className="p-0 m-0 py-1 ">
                <img src="/icons/common/menu.png" style={{ width: "47px" }} />
              </div>
            )}
          </div>
          <div className="d-none d-md-inline d-xl-none">
            <div className="p-0 m-0 d-flex flex-xl-column ">
              <div className="p-0 m-0 d-none d-md-flex  justify-content-start align-items-center pt-xl-3">
                <Link href="/direction">
                  <a>
                    <img
                      src="/icons/common/map.png"
                      className="p-0 px-1 m-0 address_img_container"
                    />
                  </a>
                </Link>
                <Link href="/direction">
                  <a>
                    <span className="p-0 m-0 d-none d-xl-flex address_text_container">
                      {props?.data?.business_street}
                      {", "}
                      {props?.data?.business_city?.city}
                      {", "}

                      {props?.data?.business_city?.Province?.province ===
                      "Alberta"
                        ? "AB"
                        : props?.data?.business_city?.Province?.province}

                      {", "}
                      {props?.data?.business_postal}
                    </span>
                  </a>
                </Link>
              </div>
              <div
                className="p-0 m-0 w-100 d-none d-md-flex justify-content-start align-items-center"
                style={{ fontSize: "14px", color: "#b7b7b7" }}
              >
                <a
                  href={phonenumberConvertor(props?.data?.business_phone)}
                  rel="noopener noreferrer"
                  className="p-0 m-0 text-decoration-none"
                >
                  <img
                    src="/icons/common/phone.png"
                    className="p-0 px-1 m-0 address_img_container"
                  />
                </a>
                <a
                  href={phonenumberConvertor(props?.data?.business_phone)}
                  rel="noopener noreferrer"
                  className="p-0 m-0 text-decoration-none"
                >
                  <span className="p-0 m-0 d-none d-xl-flex address_text_container">
                    {props?.data?.business_phone}
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="p-0 m-0 d-flex  justify-content-center align-items-center">
            {data?.twitter && (
              <Link href={`${data?.twitter}`}>
                <a className="p-0 px-1 m-0">
                  <img src="/icons/social/twitter.png" />
                </a>
              </Link>
            )}
            {data?.facebook && (
              <Link href={`${data?.facebook}`}>
                <a className="p-0 px-1 m-0">
                  <img src="/icons/social/facebook.png" />
                </a>
              </Link>
            )}
            {data?.instagram && (
              <Link href={`${data?.instagram}`}>
                <a className="p-0 px-1 m-0">
                  <img src="/icons/social/instagram.png" />
                </a>
              </Link>
            )}
          </div>
        </div> */}
        {/* <div className="p-0 m-0 col-2 header_partlink"></div> */}
      </div>
    </>
  );
});

export default HeaderCustomerWeb;
