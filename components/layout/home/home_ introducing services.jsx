import React from "react";
import Link from "next/link";
import { FaCoins } from "react-icons/fa";
import { BsTools } from "react-icons/bs";
import Icon from "../../common/web/CustomizeIcon/Icon";
import HomeTitle from "./home_header_title";
import { findScript } from "../../../utils/common/html_script";
const HomeIntroducingServices = (props) => {
  const { dealerData } = props;
  return (
    <div className="py-5 section_services">
      <div className="px-4">
        <div className="service__ pr-5">
          <HomeTitle title={`Apply For Financing`} />
          <div className="content">
            <div
              className="main-paragraph"
              dangerouslySetInnerHTML={{
                __html: findScript(dealerData?.financial_desc),
              }}
            />
            {/* <p>
              Our finance experts are here to guide you through the financing
              process and help you get into your new vehicle.if you’re ready to
              start the financing process, you can fill out our secure finance
              application online.
            </p> */}
            <div className="p-0 m-0 w-100 d-flex justify-content-end">
              <Link href="/forms/finance">
                <a className="button_primary text-decoration-none home_button_div w-25">
                  <span>Apply Now</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="service_image">
        <div className="service_image_image">
          <div className="texture_first">
            <img src="./images/home/texture-image.svg" />
          </div>
          <div className="car"></div> */}
      {/* <img className={style.car} src={'car-1.jpg'}/> */}
      {/* <div className="texture_last">
            <img src="./images/home/texture-image.svg" />
          </div>
        </div>
      </div> */}
      <div className="pr-5">
        <div className="service__ pl-5">
          <HomeTitle title={`Schedule Services`} />
          <div className="content">
            <div
              className="main-paragraph"
              dangerouslySetInnerHTML={{
                __html: findScript(dealerData?.serviceApointment_desc),
              }}
            />
            <div className="p-0 m-0 w-100 d-flex justify-content-end">
              <Link href="/forms/service-appointment">
                <a className="button_primary text-decoration-none home_button_div w-25">
                  <span>Book Now</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeIntroducingServices;
