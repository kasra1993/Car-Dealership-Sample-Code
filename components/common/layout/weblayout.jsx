import React, { useRef } from "react";
import FooterCustomerWeb from "./footer/footer";
import HeaderCustomerWeb from "./header/header";
import SidebarCustomerWeb from "./sidebar_customer_web";
const Weblayout = (props) => {
  const { children, domain, dealerData, timeWork } = props;
  const headerRef = useRef();
  return (
    <div className="p-0 m-0 w-100 pages_div__conatiner">
      <HeaderCustomerWeb data={dealerData} ref={headerRef} />
      <div className="m-0 pages_under_header_div__conatiner pages_div__conatiner p-0 d-flex justify-content-center">
        {children}
      </div>
      <div className="p-0 m-0 sidebar_menu_positioning d-none d-md-flex">
        <SidebarCustomerWeb data={dealerData} />
      </div>
      <FooterCustomerWeb
        data={dealerData}
        ref={headerRef}
        timeWork={timeWork}
      />
    </div>
  );
};

export default Weblayout;
