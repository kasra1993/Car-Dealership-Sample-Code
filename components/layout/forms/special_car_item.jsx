import { useEffect, useState } from "react";
import Link from "next/link";
import { dashRemoverForSlug } from "../../../utils/common/dash_remover";
import { priceComma } from "../../../utils/common/price_odometer_handler";
import { CDN_BASE_URL } from "../../../constant/base";

export const SpecialCarItem = (props) => {
  const { car } = props;
  const [makeSlug, setMakeSlug] = useState({
    make: "",
    model: "",
  });
  useEffect(() => {
    setMakeSlug(() => ({
      make: dashRemoverForSlug(car?.Vehicle?.make),
      model: dashRemoverForSlug(car?.Vehicle?.model),
    }));
  }, []);
  return (
    <Link
      key={`specialVehicle${car?.id}`}
      href={`/cars/used/${car?.Vehicle?.model_year}-${makeSlug?.make}-${makeSlug?.model}-${car?.id}`}
    >
      <a
        className="p-0 px-2 m-0 mb-3 mb-lg-0 col-12 col-md-4 d-flex flex-column justify-content-ce"
        style={{ cursor: "pointer" }}
      >
        <div
          className="d-flex flex-column justify-content-center align-items-center m-3"
          style={{ backgroundColor: "#f5f5f5" }}
        >
          <div style={{ position: "relative" }}>
            <p
              className="cart-title mb-5 px-5 d-flex justify-content-center alighn-items-center"
              style={
                {
                  // height: "100vh",
                  // position: "absolute",
                  // transform: "translate(100%, 0%) rotate(180deg)",
                }
              }
            >
              {car?.Vehicle?.model_year + " " + car?.Vehicle?.make}
            </p>
            <img
              src={CDN_BASE_URL + car?.cover_image}
              alt=""
              className="cart_image w-100 h-100"
              style={{
                height: "300px",
                objectFit: "cover",
                clipPath:
                  "polygon(0 0, 18% 0, 24% 18%, 74% 18%, 81% 0, 100% 0, 100% 100%, 76% 100%, 70% 100%, 30% 100%, 20% 100%, 0 100%)",
              }}
            />
          </div>
          <div className="">
            <h2 className="m-0 text-center py-2" style={{ color: "#616161" }}>
              <b>
                {" "}
                {car?.Vehicle?.model_year +
                  " " +
                  car?.Vehicle?.make +
                  " " +
                  car?.Vehicle?.model}
              </b>
              <div>
                {" "}
                <b>{car?.Vehicle?.drive_type}</b>
              </div>
            </h2>
            <div className="text-center">
              <img src="/images/home/Line 21.png" />
            </div>
          </div>
          <div style={{ color: "#000" }} className="text-center">
            <p className="p-0 m-0">
              Odometer:
              <span>
                {priceComma(car?.odometer, 2)}{" "}
                {car?.odometer_type === 1 ? "MI" : "KM"}
              </span>
            </p>

            <img src="/images/home/Line 21.png" />
          </div>
          <div className="py-2" style={{ color: "red" }}>
            Price:${car?.sell_price}
          </div>
          <div className="mt-2">
            <Link
              href={`/cars/used/${car?.Vehicle?.model_year}-${makeSlug?.make}-${makeSlug?.model}-${car?.id}`}
            >
              <button className="cart-button py-3 px-5">View Detail</button>
            </Link>
          </div>
        </div>
        {/* <div className="col-12 ">
          <div className="p-0 m-0 d-flex align-items-center justify-content-center">
            <div className="p-0  m-0 special_cars_content__container d-flex flex-column align-items-center justify-content-start">
              <div className="p-0 m-0 d-flex align-items-center justify-content-center special_cars_img__container">
                {car?.cover_image !== null ? (
                  <img
                    className=""
                    src={`https://hillzimage.blob.core.windows.net${car?.cover_image}`}
                  />
                ) : (
                  <img
                    className=""
                    src="https://hillzimage.blob.core.windows.net/test/default-inventory-image-car-med.jpeg"
                  />
                )}
              </div>
              <div className="p-0 m-0 mt-3 special_cars_detail_div__style text-center">
                <span className="d-block p-0 m-0 special_cars_detail_span__style">
                  {car?.Vehicle?.model_year +
                    " " +
                    car?.Vehicle?.make +
                    " " +
                    car?.Vehicle?.model +
                    " " +
                    car?.Vehicle?.make}
                </span>
                <span>{"$" + priceComma(car?.special_price, 2)}</span>
              </div>
              <div className="home_patern pb-5 w-100 p-0 m-0">
                <img src="/images/home/Group64.png" className="w-100" />
              </div>
            </div>
          </div>
        </div> */}
      </a>
    </Link>
  );
};
export default SpecialCarItem;
