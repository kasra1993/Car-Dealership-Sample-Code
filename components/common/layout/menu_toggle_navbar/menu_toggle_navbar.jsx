import React from "react";
import { useEffect, useState } from "react";
import { BsX, BsCaretDownFill } from "react-icons/bs";
import { FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import HomeButtom from "../../web/button/home_button";
const menu_toggle_navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [dropdown_1, setDropdown_1] = useState(false);
  const [dropdown_2, setDropdown_2] = useState(false);
  const [dropdown_3, setDropdown_3] = useState(false);
  const dropDownHandler = (i) => {
    if (i === 1) {
      setDropdown_1(true);
      setDropdown_2(false);
      setDropdown_3(false);
    }
    if (i === 2) {
      setDropdown_1(false);
      setDropdown_2(true);
      setDropdown_3(false);
    }
    if (i === 3) {
      setDropdown_1(false);
      setDropdown_2(false);
      setDropdown_3(true);
    }
  };
  const sidebarMenuHandler = () => {
    setOpenMenu(false);
    setDropdown_3(false);
    setDropdown_2(false);
    setDropdown_1(false);
  };

  return (
    <div className={openMenu === true ? "sidebar_menu active" : "sidebar_menu"}>
      <div className="close_sidebar_menu">
        <Button type="ACTION_BUTTON_LIGHT" icon={<BsX />} size="45px" />
      </div>
      <ul className="sidebar_menu__menu">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li className="nav" onClick={() => dropDownHandler(1)}>
          <span>Show Rooms</span>
          <BsCaretDownFill />
        </li>
        <ul
          className={
            dropdown_1 === true
              ? "navbar_dropdown1"
              : "navbar_dropdown1 inActive"
          }
        >
          <li>
            <Link href="/">Inventory</Link>
          </li>
          <li>
            <Link href="/">Appraise My Trade</Link>
          </li>
          <li>
            <Link href="/">Car Finder</Link>
          </li>
        </ul>
        <li className="nav" onClick={() => dropDownHandler(2)}>
          <span>Financing</span>
          <BsCaretDownFill />
        </li>
        <ul
          className={
            dropdown_2 === true
              ? "navbar_dropdown2"
              : "navbar_dropdown2 inActive"
          }
        >
          <li>
            <Link href="/">Financing Application</Link>
          </li>
          <li>
            Financing Calculator
            {/* <Link href="/">Financing C</Link> */}
          </li>
        </ul>
        <li className="nav" onClick={() => dropDownHandler(3)}>
          <span>Dealership</span>
          <BsCaretDownFill />
        </li>
        <ul
          className={
            dropdown_3 === true
              ? "navbar_dropdown3"
              : "navbar_dropdown3 inActive"
          }
        >
          <li>
            <Link href="/">About Us</Link>
          </li>
          <li>
            <Link href="/">Our Team</Link>
          </li>
          <li>
            <Link href="/">Contact Us</Link>
          </li>
          <li>
            <Link href="/">Book Appointment</Link>
          </li>
        </ul>
        <li>Direction</li>
        <li>Text Us Now</li>
      </ul>
      <div className="rowBtm_sidebar">
        <div className="search_sidebar">
          <Input type="INPUT_TEXT_LIGHT" err="" placeholder="search..." />
        </div>
        <ul className="socialmedia_sidebar">
          <li>
            <Link href="/">
              <div>
                <FaTwitter />
              </div>
            </Link>
          </li>
          <li>
            <Link href="/">
              <div>
                <FaInstagram />
              </div>
            </Link>
          </li>
          <li>
            <Link href="/">
              <div>
                <FaWhatsapp />
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default menu_toggle_navbar;
