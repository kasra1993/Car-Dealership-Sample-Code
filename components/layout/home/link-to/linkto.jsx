import React from "react";
import Link from "next/link";
import { CDN_BASE_URL } from "../../../../constant/base";
import {
  FaSearch,
  FaLongArrowAltRight,
  FaCalendar,
  FaEdit,
  FaDollarSign,
} from "react-icons/fa";
const LinkTo = (props) => {
  const { dealerData } = props;
  return (
    <div className="p-0 m-0 px-2 px-lg-5 py-1 py-lg-3 w-100 row justify-content-center align-items-center">
      <div className="p-0 m-0 col-12">
        <div className="p-0 m-0 w-100 row">
          <div className="p-2 m-0 col-12 col-lg-4 h-100">
            <Link href="/cars">
              <a>
                <div className="p-0 m-0 title_our_brands text-center">
                  VIEW{" "}
                  <span className="p-0 m-0 color-gold home-heading-size">
                    INVENTORY
                  </span>{" "}
                </div>
                <div className="p-3 link_border ">
                  <div className="circle"></div>
                  <div className="w-100">
                    <img
                      src="images/home/inventory.jpg"
                      className="w-100"
                      style={{ height: "220px", objectFit: "cover" }}
                    />
                  </div>
                  <div
                    className="text-center text-dark py-2 font-weight-bold"
                    style={{ height: "60px" }}
                  >
                    See our large pre-owned vehicle inventory
                  </div>
                </div>
              </a>
            </Link>
          </div>
          <div className="p-2 m-0 col-12 col-lg-4 h-100">
            <Link href="/forms/finance">
              <a>
                <div className="p-0 m-0 title_our_brands text-center">
                  SEE{" "}
                  <span className="p-0 m-0 color-gold home-heading-size">
                    FINANCE
                  </span>{" "}
                  OPTIONS
                </div>
                <div className="p-3 link_border ">
                  <div className="circle"></div>
                  <div className="w-100">
                    <img
                      src="/images/home/finance.jpg"
                      className="w-100"
                      style={{ height: "220px", objectFit: "cover" }}
                    />
                  </div>
                  <div
                    className="text-center text-dark font-weight-bold py-2"
                    style={{ height: "60px" }}
                  >
                    Apply for credit approval
                  </div>
                </div>
              </a>
            </Link>
          </div>
          <div className="p-2 m-0 col-12 col-lg-4 h-100">
            <Link href="/forms/contact-us">
              <a>
                <div className="p-0 m-0 title_our_brands text-center">
                  <span className="p-0 m-0 color-gold home-heading-size">
                    CONTACT{" "}
                  </span>
                  US
                </div>
                <div className="p-3 link_border ">
                  <div className="circle"></div>
                  <div className="w-100">
                    <img
                      src="images/home/contact.jpg"
                      className="w-100"
                      style={{
                        height: "220px",

                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div
                    className="text-center text-dark font-weight-bold py-2"
                    style={{ height: "60px" }}
                  >
                    Send us your questions and comments
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="p-0 m-0 col-12 py-4">
        <div className="p-0 m-0 col-12 title_our_brands ">
          AUTO ACCESSORIES IN WINNIPEG
        </div>
        <div className="text-white">
          CarBoyz Auto is Winnipeg’s new destination for auto accessories,
          automotive repairs and more. We’re dedicated to providing exceptional
          customer service and high-quality repairs. Our services include:
        </div>
        <div className="p-0 m-0 col-12 py-4 row">
          <div className="p-0 m-0 col-12 ">
            <div className="d-none d-md-flex w-100 row">
              <div className="p-2 col-6 m-0">
                <ul
                  className="text-white  m-0 p-2 "
                  style={{ backgroundColor: "#343434" }}
                >
                  <div className="row align-items-center p-0 m-0 col-12 ">
                    <li className="text-white pl-2">. Small engine parts</li>
                  </div>
                  <div className="row align-items-center p-0 m-0 col-12 ">
                    <li className="text-white pl-2">. Automotive repair </li>
                  </div>
                  <div className="row align-items-center p-0 m-0 col-12 ">
                    <li className="text-white pl-2">. Parts recycling </li>
                  </div>
                  <div className="row align-items-center p-0 m-0 col-12 ">
                    <li className="text-white pl-2">
                      . Light diesel truck parts{" "}
                    </li>
                  </div>
                </ul>
              </div>
              <div className="p-2 m-0 col-6">
                <ul
                  className="text-white m-0 p-2 "
                  style={{ backgroundColor: "#343434" }}
                >
                  <div className="row align-items-center p-0 m-0 col-12 ">
                    <li className="text-white pl-2">
                      . Light-duty diesel repairs{" "}
                    </li>
                  </div>
                  <div className="row align-items-center p-0 m-0 col-12 ">
                    <li className="text-white pl-2">. Maintenance </li>
                  </div>
                  <div className="row align-items-center p-0 m-0 col-12 ">
                    <li className="text-white pl-2">
                      . Auto accessories & add-ons{" "}
                    </li>
                  </div>
                  <div className="row align-items-center p-0 m-0 col-12 ">
                    <li className="text-white pl-2">. Scrap car recycling </li>
                  </div>
                </ul>
              </div>
            </div>
            <ul
              className="text-white col-12 m-0 p-2 row d-md-none"
              style={{ backgroundColor: "#343434" }}
            >
              <div className="row align-items-center p-0 m-0 col-12 col-md-6">
                <li className="text-white pl-2">. Small engine parts</li>
              </div>
              <div className="row align-items-center p-0 m-0 col-12 col-md-6">
                <li className="text-white pl-2">. Automotive repair </li>
              </div>
              <div className="row align-items-center p-0 m-0 col-12 col-md-6">
                <li className="text-white pl-2">. Parts recycling </li>
              </div>
              <div className="row align-items-center p-0 m-0 col-12 col-md-6">
                <li className="text-white pl-2">. Light diesel truck parts </li>
              </div>
              <div className="row align-items-center p-0 m-0 col-12 col-md-6">
                <li className="text-white pl-2">
                  . Light-duty diesel repairs{" "}
                </li>
              </div>
              <div className="row align-items-center p-0 m-0 col-12 col-md-6">
                <li className="text-white pl-2">. Maintenance </li>
              </div>
              <div className="row align-items-center p-0 m-0 col-12 col-md-6">
                <li className="text-white pl-2">
                  . Auto accessories & add-ons{" "}
                </li>
              </div>
              <div className="row align-items-center p-0 m-0 col-12 col-md-6">
                <li className="text-white pl-2">. Scrap car recycling </li>
              </div>
            </ul>
          </div>
        </div>
      </div> */}
    </div>
  );
};
export default LinkTo;
