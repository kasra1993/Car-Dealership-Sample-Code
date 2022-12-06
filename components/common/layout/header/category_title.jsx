import React from "react";
const CategoryTitle = ({ title, type = 1, className = "" }) => {
  return (
    <h4
      className={`p-0 m-0 ${
        type === 1 && "home_slider_right_side_h4__title text-white"
      } ${className}`}
    >
      {title}
    </h4>
  );
};
export default React.memo(CategoryTitle);
