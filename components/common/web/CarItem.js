import Link from "next/link";
import { conditionStatus } from "../../../utils/inventory/inventory";
import {
  FaPhoneAlt,
  FaInfo,
  FaMapMarkerAlt,
  FaPhone,
  FaShoppingBag,
  FaShoppingBasket,
  FaShoppingCart,
  FaCamera,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import { dashRemoverForSlug } from "../../../utils/common/dash_remover";
import { priceComma } from "../../../utils/common/price_odometer_handler";
import CategoryTitle from "../layout/header/category_title";
import HexagonButton from "./buttons/hexagon_button";
import { phonenumberConvertor } from "../../../utils/common/phone_number_converter";
// const CarItem = ({ car, isFinancial, otherFormik, onClose, dealerData }) => {
import { CDN_BASE_URL } from "../../../constant/base";
const CarItem = ({ car, isFinancial, otherFormik, onClose, dealerData }) => {
  const soldImage = dealerData?.soldImg?.src;
  const [makeSlug, setMakeSlug] = useState({
    make: "",
    model: "",
  });
  const {
    stock_NO: stockNO,
    cover_image: coverImage,
    Vehicle,
    id,
    odometer,
    odometer_type,
    sell_price,
    special_price,
    vehicle_condition,
    model_year,
    make,
    model,
    vin_number,
    photoCount,
  } = car;
  const title = `${Vehicle?.model_year} ${Vehicle?.make} ${Vehicle?.model} ${Vehicle?.trim}`;
  const imgSrc =
    coverImage && coverImage !== null
      ? `https://hillzimage.blob.core.windows.net${coverImage}`
      : "https://hillzimage.blob.core.windows.net/test/default-inventory-image-car-med.jpeg";

  useEffect(() => {
    setMakeSlug(() => ({
      make: dashRemoverForSlug(Vehicle?.make),
      model: dashRemoverForSlug(Vehicle?.model),
    }));
  }, []);
  return (
    <div className="col-12 p-0 m-0 inventory_div__car_conatiner ">
      <div className=" w-100 row justify-content-start align-items-center pb-3 p-0 m-0">
        <div className="col-12 col-lg-4 p-0 m-0 px-md-2">
          <Link
            href={`/cars/used/${Vehicle?.model_year}-${makeSlug?.make}-${makeSlug?.model}-${id}`}
          >
            <a className="p-0 m-0 text-decoration-none">
              {" "}
              <img
                height="100%"
                width="100%"
                src={imgSrc}
                style={{ objectFit: "contain" }}
                className="inventory_div__car_iamge_conatiner_img"
              />
              <div className="p-0 m-0 w-100 bg-photo d-flex justify-content-center  py-1 align-items-center">
                {photoCount} &nbsp;
                <FaCamera color="#333" size={16} />
              </div>
              {car?.vehicle_status === 7 && (
                <img
                  height="50px"
                  width="280px"
                  src={`https://hillzimage.blob.core.windows.net${soldImage}`}
                  className="inventory_soldImage-style"
                />
              )}
            </a>
          </Link>
        </div>
        <div className="col-12 col-lg-8 inventory_table p-0 m-0">
          <div className=" d-flex justify-content-between align-items-center p-0 flex-wrap pt-2 w-100 px-2">
            <div className="col-12 p-0 m-0">
              <div className="p-0 m-0 w-100 d-flex flex-column flex-md-row  justify-content-md-between align-items-md-center">
                <Link
                  href={`/cars/used/${Vehicle?.model_year}-${makeSlug?.make}-${makeSlug?.model}-${id}`}
                >
                  <a
                    className="p-0 py-1 text-decoration-none text-start inventory_a__title 
                  "
                  >
                    <b> {title}</b>
                  </a>
                </Link>
                <div className="inventory_p__price d-flex flex-column justify-content-end p-0 m-0">
                  {!car?.vehicle_site_detail?.call_for_price ? (
                    <>
                      <p className={`p-0 m-0 inventory_p__price`}>
                        {" "}
                        $
                        <p
                          className={`d-inline ${
                            special_price !== 0 && "inventory_p__sellprice_line"
                          } `}
                        >
                          {priceComma(sell_price, 2)}
                        </p>
                      </p>
                      {special_price !== 0 && (
                        <div className="p-0 m-0">
                          <p className="p-0 m-0 inventory_p__car_special">
                            ${priceComma(special_price, 2)}
                          </p>
                        </div>
                      )}
                    </>
                  ) : (
                    <span className="p-0 m-0 car_item_p__price_text">
                      {" "}
                      Call for price!{" "}
                    </span>
                  )}
                </div>
              </div>
            </div>
            {Vehicle?.carfax_link !== null && Vehicle?.carfax_link !== "" && (
              <div className="p-0 m-0 carfax_inventory col-2">
                <a
                  className="p-0 m-0 w-100"
                  href={Vehicle?.carfax_link}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    src="/images/inventory/carfaxcanada_icon.png"
                    alt=""
                    className="w-100"
                    style={{
                      height: "auto",
                      objectFit: "contain",
                    }}
                  />
                </a>
              </div>
            )}
          </div>

          <div className="p-0 m-0 w-100 row ">
            <div className="d-flex flex-wrap  col-12 col-md-8 col-lg-12 col-xl-8  py-2 p-0 m-0 px-2 justify-content-between align-items-start change_1">
              <div className="p-0 m-0  col-sm-6 col-12  px-md-2">
                <div className=" col-12  p-0 m-0   ">
                  <div className="d-flex inventory_div__cell p-0 m-0 py-1">
                    <p className="p-0 m-0">Exterior Color:&nbsp;</p>
                    <p className="p-0 m-0">{Vehicle?.exterior_color?.name}</p>
                  </div>
                </div>
                <div className="col-12 p-0 m-0">
                  <div className="d-flex inventory_div__cell p-0 m-0 py-1">
                    <p className="p-0 m-0">Stock #:&nbsp;</p>
                    <p className="p-0 m-0">{stockNO}</p>
                  </div>
                </div>
                <div className=" col-12  p-0 m-0">
                  <div className="d-flex inventory_div__cell p-0 m-0 py-1">
                    <p className="p-0 m-0">Vin:&nbsp;</p>
                    <p className="p-0 m-0">{car?.Vehicle?.vin_number}</p>
                  </div>
                </div>
                <div className="col-12   p-0 m-0   ">
                  <div className="d-flex inventory_div__cell p-0 m-0 py-1">
                    <p className="p-0 m-0">Doors:&nbsp;</p>
                    <p className="p-0 m-0">{Vehicle?.doors}</p>
                  </div>
                </div>
                <div className="col-12   p-0 m-0   ">
                  <div className="d-flex inventory_div__cell p-0 m-0 py-1">
                    <p className="p-0 m-0">Odometer:&nbsp;</p>
                    <p className="p-0 m-0">
                      {priceComma(odometer, 2)}{" "}
                      {odometer_type === 1 ? "MI" : "KM"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6  p-0 m-0 pl-md-2">
                <div className=" col-12  p-0 m-0  ">
                  <div className="d-flex inventory_div__cell p-0 m-0 py-1">
                    <p className="p-0 m-0">Body Style:&nbsp;</p>
                    <p className="p-0 m-0">{Vehicle?.BodyStyle?.name}</p>
                  </div>
                </div>
                <div className=" col-12  p-0 m-0  ">
                  <div className="d-flex inventory_div__cell p-0 m-0 py-1">
                    <p className="p-0 m-0">Transmission:&nbsp;</p>
                    <p className="p-0 m-0">{Vehicle?.Transmission?.name}</p>
                  </div>
                </div>

                <div className=" col-12  p-0 m-0  ">
                  <div className="d-flex inventory_div__cell p-0 m-0 py-1">
                    <p className="p-0 m-0">Drivetrain:&nbsp;</p>
                    <p className="p-0 m-0">{Vehicle?.drive_type}</p>
                  </div>
                </div>
                <div className="col-12   p-0 m-0  ">
                  <div className="d-flex inventory_div__cell p-0 m-0 py-1">
                    <p className="p-0 m-0">Engine:&nbsp;</p>
                    <p className="p-0 m-0">{Vehicle?.engine_cylinders}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-0 m-0 px-2 px-md-0 col-12 col-md-4 col-lg-12 col-xl-4  d-flex flex-wrap align-self-start change_2 ">
              {typeof otherFormik === "undefined" ? (
                <>
                  <div className=" col-12 col-sm-4 col-md-12 col-lg-4 col-xl-12 d-flex flex-wrap  px-lg-2 p-0 m-0 align-self-start ">
                    <Link
                      href={`/cars/used/${Vehicle?.model_year}-${makeSlug?.make}-${makeSlug?.model}-${id}`}
                    >
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn gold_button_3 text-decoration-none p-0 m-0 w-100 d-flex justify-content-center align-items-center"
                      >
                        View Detail
                      </a>
                    </Link>
                  </div>
                  <div className=" d-flex col-lg-4 col-xl-12 col-md-12 col-sm-4 col-12  px-lg-2 p-0 m-0 align-self-start my-xl-2 my-lg-0 my-md-2 my-sm-0 my-2 px-sm-2 px-0 px-md-0 ">
                    <Link href={`/forms/finance?selected_vehicle=${id}`}>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn gold_button_3 text-decoration-none p-0 m-0    w-100 justify-content-center  align-items-center d-flex"
                      >
                        Apply for Financing
                      </a>
                    </Link>
                  </div>
                  <div className="d-flex col-lg-4 col-xl-12 col-md-12 col-sm-4 col-12 px-lg-2 p-0 m-0 align-self-start  ">
                    <Link href="/forms/value-your-trade">
                      <a className="btn gold_button_3 text-decoration-none p-0 m-0  w-100 justify-content-center d-flex align-items-center  ">
                        Appraise My Trade
                      </a>
                    </Link>
                  </div>
                </>
              ) : (
                <div className=" col-lg-4 col-xl-12 col-md-12 col-sm-4 col-12 p-0 m-0 mt-3  inventory-modal-btn">
                  <Link
                    href={`/cars/used/${Vehicle?.model_year}-${makeSlug?.make}-${makeSlug?.model}-${id}`}
                  >
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" gold_button_3 text-decoration-none p-0 m-0 w-100 d-flex justify-content-center align-items-center col-12"
                    >
                      View Detail
                    </a>
                  </Link>
                  <Link
                    href=""
                    onClick={() => {
                      if (onClose && typeof otherFormik !== "undefined") {
                        otherFormik.setFieldValue(
                          "frk_desire_MidVclDS_id",
                          +id
                        );
                        onClose();
                      }
                    }}
                  >
                    <a className="gold_button_3 text-decoration-none  col-12  p-0 m-0 px-0  py-1 mx-0 mx-sm-2 ">
                      <button
                        onClick={() => {
                          if (
                            otherFormik.values.frk_desire_MidVclDS_id !== id
                          ) {
                            otherFormik.setFieldValue(
                              "frk_desire_MidVclDS_id",
                              id
                            );
                          } else {
                            otherFormik.setFieldValue(
                              "frk_desire_MidVclDS_id",
                              ""
                            );
                          }
                        }}
                        // className={`btn w-100 btn-sm ${
                        //   otherFormik.values.frk_desire_MidVclDS_id === id &&
                        //   "btn-secondary"
                        // } `}

                        className="btn gold_button_3 text-decoration-none p-0 m-0 w-100 d-flex justify-content-center align-items-center "
                      >
                        Select For Finance
                      </button>
                    </a>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="p-0 m-0 pt-1 pt-md-2 pt-lg-3 w-100 row justify-content-center">
        <div className="p-0 m-0 col-11 col-md-10 col-lg-10 border-top border-secondary borde-2"></div>
      </div>
    </div>
  );
};

export default CarItem;
