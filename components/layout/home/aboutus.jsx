import Link from "next/link";
import { findScript } from "../../../utils/common/html_script";

import { FaTags, FaWpforms, FaCar, FaComments } from "react-icons/fa";

const HomeAboutUs = (props) => {
  const { dealerData } = props;
  return (
    <div
      className="row p-0 m-0 w-100 px-md-0 justify-content-center py-4 home_minivans_caontainer"
      style={{ background: "linear-gradient(188deg,#262626 0%,#000000 100%)" }}
    >
      <div className="p-0 m-0 text-uppercase pt-5 pb-4 special-title text-white">
        WHY CHOOSE US
      </div>
      <div className="p-0 m-0 p-4 col-12 d-flex justify-content-start align-items-start">
        <div className="p-0 m-0 row w-100">
          <div className="py-3 px-4 m-0 col-12 col-sm-6 col-lg-3 d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex justify-content-center align-items-center icon_style">
              <FaTags color="#fff" size="34px" />
            </div>
            <div className="p-0 m-0 py-2 about_title">Financing Made Easy</div>
            <div className="p-0 m-0 about_text text-justify">
              Our stress-free finance department that can find financial
              solutions to save you money.
            </div>
          </div>
          <div className="py-3 px-4 m-0 col-12 col-sm-6 col-lg-3 d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex justify-content-center align-items-center icon_style">
              <FaCar color="#fff" size="34px" />
            </div>

            <div className="p-0 m-0 py-2 about_title">Wide Range and Brand</div>
            <div className="p-0 m-0 about_text text-justify">
              With a robust selection of popular vehicles on hand, as well as
              leading vehicles from BMW and Ford.
            </div>
          </div>
          <div className="py-3 px-4 m-0 col-12 col-sm-6 col-lg-3 d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex justify-content-center align-items-center icon_style">
              <FaComments color="#fff" size="34px" />
            </div>
            <div className="p-0 m-0 py-2 about_title">Trusted by thousands</div>
            <div className="p-0 m-0 about_text text-justify">
              We have helped thousands of customers get into the vehicle of
              their choice.
            </div>
          </div>
          <div className="py-3 px-4 m-0 col-12 col-sm-6 col-lg-3 d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex justify-content-center align-items-center icon_style">
              <FaWpforms color="#fff" size="34px" />
            </div>
            <div className="p-0 m-0 py-2 about_title">
              Car Service & Maintenance
            </div>
            <div className="p-0 m-0 about_text text-justify">
              Our service department maintains your car to stay safe on the road
              for many more years.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutUs;
