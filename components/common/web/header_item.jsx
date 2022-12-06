import React from "react";

const HeaderIcon = (props) => {
  const { icon, text } = props;
  return (
    <div className=" col-sm-12 col-md-4 d-flex flex-row  justify-content-center   align-items-center p-0 pt-2 pb-2 m-0  ">
      <img className="header_icon_size" src={icon} />
      <div className="header_title_size text-white">{text}</div>
    </div>
  );
};

export default HeaderIcon;
