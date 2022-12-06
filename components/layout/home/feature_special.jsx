import React from "react";
import HomeButtom from "../../common/web/button/home_button";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Carts from "../../common/web/carts/carts";
const FeatureSpecial = () => {
  return (
    <>
      <section className="main-primary feature_special">
        <h2 className="main-title">Featured Specials</h2>
        <div className="line secondary"></div>
        <p className="main-paragraph">
          New and popular items at competitive prices.
        </p>
        <div className="d-flex justify-content-center curdoule_feature">
          <Carts
            type="CART_CURSOULE"
            price="$40000"
            title="2011 Mitsubishi Rvr AWD"
            kilometer="3000"
            img="/images/home/service-section.jpg"
          />
        </div>
        <div className="d-flex align-items-center">
          <div className="next_btn">
            <BsChevronLeft />
          </div>
          <div className="prev_btn">
            <BsChevronRight />
          </div>
        </div>
        <HomeButtom type="LINK_BUTTON_TEXT" text="All Products" href={"/"} />
      </section>
    </>
  );
};

export default FeatureSpecial;
