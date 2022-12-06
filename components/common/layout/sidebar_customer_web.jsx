import Link from "next/link";
import {
  FaHome,
  FaCar,
  FaInfoCircle,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebook,
  FaEnvelope,
  FaEdit,
} from "react-icons/fa";
import React, { useContext, useEffect } from "react";
const SidebarCustomerWeb = ({ data }) => {
  return (
    <div className="p-0 m-0  sidebar_menu_style d-none d-md-flex flex-column justify-content-center align-items-center">
      <div className="p-0 m-0 py-1 px-3  border-1 border-dark border-bottom">
        <Link href="/cars">
          <a
            className="p-0 px-3  m-0 d-flex w-100 justify-content-between align-items-center side_bar_menu_hover"
            style={{ backgroundColor: "#000" }}
          >
            <i className="p-0 m-0  py-2" style={{ backgroundColor: "#000" }}>
              <FaCar size={20} />
            </i>
            <p className=" pl-4 m-0  py-2" style={{ backgroundColor: "#000" }}>
              Inventory
            </p>
          </a>
        </Link>
      </div>
      <div className="p-0 m-0 py-1 px-3 border-bottom border-1 border-dark">
        <Link href="/forms/finance">
          <a
            className="p-0 px-3  m-0 d-flex w-100 justify-content-between align-items-center side_bar_menu_hover"
            style={{ backgroundColor: "#000" }}
          >
            <i className="p-0 m-0  py-2" style={{ backgroundColor: "#000" }}>
              <FaEdit size={20} />
            </i>
            <p className=" pl-4 m-0  py-2" style={{ backgroundColor: "#000" }}>
              <span>Finance&nbsp;application</span>
            </p>
          </a>
        </Link>
      </div>
      <div className="p-0 m-0 py-1 px-3 border-bottom border-1 border-dark">
        <Link href="/direction">
          <a
            className="p-0 px-3  m-0 d-flex w-100 justify-content-between align-items-center side_bar_menu_hover"
            style={{ backgroundColor: "#000" }}
          >
            <i className="p-0 m-0  py-2" style={{ backgroundColor: "#000" }}>
              <FaMapMarkerAlt size={20} />
            </i>
            <p className=" pl-4 m-0  py-2" style={{ backgroundColor: "#000" }}>
              Direction
            </p>
          </a>
        </Link>
      </div>

      <div className="p-0 m-0 py-1 px-3">
        <Link href="/forms/contact-us">
          <a
            className="p-0 px-3  m-0 d-flex w-100 justify-content-between align-items-center side_bar_menu_hover"
            style={{ backgroundColor: "#000" }}
          >
            <i className="p-0 m-0  py-2" style={{ backgroundColor: "#000" }}>
              <FaEnvelope size={20} />
            </i>
            <p className=" pl-4 m-0  py-2" style={{ backgroundColor: "#000" }}>
              <span>Contact&nbsp;Us</span>
            </p>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default SidebarCustomerWeb;
