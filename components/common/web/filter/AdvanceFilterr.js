import { useFormik } from "formik";
import { useState } from "react";
import Select from "react-select";
import { FaFacebookF } from "react-icons/fa";

import {
  reactSelectAdvanceSearchColorStyle,
  reactSelectStyleAdvanceSearch,
} from "../../../../constant/advance_search";
import { useGetVehiclesBaseOnFilter } from "../../../../hooks/vehicles/useGetVehiclesBaseOnFilter";
import { reactSelectAdvanceSearchInputStyle } from "../../../../utils/common/react_select_styles";
import SelectBox from "../../../layout/forms/select_box";
import MultiRangeSlider from "./MultiRangeSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Thumbs, Autoplay, Pagination } from "swiper";
import { useInventoryFilterFormik } from "../../../../hooks/context/useInventoryFilterFormik";
import ComponentHeader from "../../layout/header/component_header";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Link from "next/link";
import { phonenumberConvertor } from "../../../../utils/common/phone_number_converter";
SwiperCore.use([Navigation, Thumbs, Autoplay, Pagination]);
const AdvanceFilterr = (props) => {
  const {
    domain,
    advanceSearchData,
    setVehiclesData,
    makeParam,
    minOdometer,
    maxOdometer,
    minPrice,
    maxPrice,
    setLoading,
    dealerData,
  } = props;
  const formik = useInventoryFilterFormik();
  const { bodyStyle, color, drive_type_list, transmission, vehicleModel } =
    advanceSearchData;
  const cureentYear = new Date().getFullYear();
  const makes = vehicleModel ? Object.entries(vehicleModel) : [];

  const getOptionsForMakeAndModel = (typeOfState) => {
    let makeOption = [];
    let modelOption = [];
    makes?.map((makeAndModel) => {
      makeOption.push({
        value: makeAndModel[0],
        label: makeAndModel[0],
        models: makeAndModel[1],
      });
      makeAndModel[1].map((model) => {
        modelOption.push({
          value: model,
          label: model,
        });
      });
    });
    if (typeOfState === "make") {
      return makeOption;
    } else if (typeOfState === "model") {
      return modelOption;
    } else {
      return [];
    }
  };
  const [makeOptions, setMakeOptions] = useState(() =>
    getOptionsForMakeAndModel("make")
  );
  const [modelOptions, setModelOptions] = useState(() =>
    getOptionsForMakeAndModel("model")
  );
  const driveTypeOption = drive_type_list?.map((driveType) => ({
    value: driveType,
    label: driveType,
  }));
  const doorsOption = [1, 2, 3, 4, 6, 8]?.map((doors) => ({
    value: doors,
    label: doors,
  }));
  const bodyStyleOption = bodyStyle?.map((bodyStyle) => ({
    value: bodyStyle?.name,
    label: bodyStyle?.name,
  }));
  const transmitionOption = transmission?.map((transmition) => ({
    value: transmition?.name,
    label: transmition?.name,
  }));
  const colorOption = color?.map((extriorColor) => ({
    value: extriorColor?.name,
    label: extriorColor?.name,
    colorObject: extriorColor,
  }));

  return (
    <div className=" d-none d-lg-flex justify-content-center p-0">
      <div className="col-10 p-0">
        <form
          className="p-0 m-0 pb-4  row  inventory_form__container w-100 align-items-center justify-content-center"
          onSubmit={formik.handleSubmit}
          // style={formStyle}
        >
          <div className="p-0 m-0 w-100 d-flex justify-content-center">
            <div className="p-0 m-0 row w-100 mt-4 justify-content-start">
              <div
                style={{ height: "60px" }}
                className=" my-3 col-12 col-md-3 px-3"
              >
                {/* <div
                  style={{
                    height: "60px",
                    position: "relative",
                    zIndex: "20",
                    boxShadow: "1px 1px 5px 1px #222222",
                    backgroundColor: "red",
                    clipPath:
                      "polygon(2% 29%,0 19%,0% 0%,100% 0,100% 19%,98% 27%,98% 71%,100% 82%,100% 100%,0 100%,0 83%,2% 71%)",
                  }}
                  className="p-0 px-1 w-100 m-0"
                  // style={{ height: "57px", width: "95%" }}
                >
                  <div
                    style={{
                      position: "relative",
                      transform: "translate(1px,2px)",
                      height: "57px",
                      boxShadow: "1px 1px 5px 1px #222222",
                      backgroundColor: "white",
                      clipPath:
                        " polygon(2% 20%, -2% 0%, 100% 0%, 99.5% 0%, 99.5% 10%, 97.7% 17%, 97.7% 70%, 99.5% 81%, 99.5% 90%, 2px 90%, 2px 79%, 2% 70%)",
                    }}
                    className="w-100 h-100 p-0 m-0"
                  > */}
                <SelectBox
                  style={reactSelectAdvanceSearchInputStyle}
                  options={makeOptions}
                  name={"make"}
                  placeholder={"Make"}
                  formik={formik}
                  className="col-12 my-3 py-2 w-100"
                />
              </div>
              {/* </div>
              </div> */}
              <div
                style={{ height: "60px" }}
                className=" my-3 col-12 col-md-3 px-3"
              >
                {/* <div
                  style={{
                    // height: "60px",
                    position: "relative",
                    zIndex: "20",
                    boxShadow: "1px 1px 5px 1px #222222",
                    backgroundColor: "red",
                    clipPath:
                      "polygon(2% 29%,0 19%,0% 0%,100% 0,100% 19%,98% 27%,98% 71%,100% 82%,100% 100%,0 100%,0 83%,2% 71%)",
                  }}
                  className="p-0 w-100 px-1 m-0"
                  // style={{ height: "57px", width: "95%" }}
                >
                  <div
                    style={{
                      position: "relative",
                      transform: "translate(1px,2px)",
                      height: "57px",
                      boxShadow: "1px 1px 5px 1px #222222",
                      backgroundColor: "white",
                      clipPath:
                        " polygon(2% 20%, -2% 0%, 100% 0%, 99.5% 0%, 99.5% 10%, 97.7% 17%, 97.7% 70%, 99.5% 81%, 99.5% 90%, 2px 90%, 2px 79%, 2% 70%)",
                    }}
                    className="w-100 h-100 p-0 m-0"
                  > */}
                <SelectBox
                  style={reactSelectAdvanceSearchInputStyle}
                  options={modelOptions}
                  name={"model"}
                  placeholder={"Model"}
                  formik={formik}
                  className="col-12 my-3 py-2"
                />
                {/* </div>
                </div> */}
              </div>
              <div
                style={{ height: "60px" }}
                className=" my-3 col-12 col-md-3 px-3"
              >
                {/* <div
                  style={{
                    // height: "60px",
                    position: "relative",
                    zIndex: "20",
                    boxShadow: "1px 1px 5px 1px #222222",
                    backgroundColor: "red",
                    clipPath:
                      "polygon(2% 29%,0 19%,0% 0%,100% 0,100% 19%,98% 27%,98% 71%,100% 82%,100% 100%,0 100%,0 83%,2% 71%)",
                  }}
                  className="p-0 w-100 px-1 m-0"
                  // style={{ height: "57px", width: "95%" }}
                >
                  <div
                    style={{
                      position: "relative",
                      transform: "translate(1px,2px)",
                      height: "57px",
                      boxShadow: "1px 1px 5px 1px #222222",
                      backgroundColor: "white",
                      clipPath:
                        " polygon(2% 20%, -2% 0%, 100% 0%, 99.5% 0%, 99.5% 10%, 97.7% 17%, 97.7% 70%, 99.5% 81%, 99.5% 90%, 2px 90%, 2px 79%, 2% 70%)",
                    }}
                    className="w-100 h-100 p-0 m-0"
                  > */}
                <SelectBox
                  style={reactSelectAdvanceSearchInputStyle}
                  options={driveTypeOption}
                  name={"drive_train"}
                  placeholder={"Drivetrain"}
                  formik={formik}
                  className="col-12 my-3 py-2"
                />
                {/* </div>
                </div> */}
              </div>
              <div
                style={{ height: "60px" }}
                className=" my-3 col-12 col-md-3 px-3"
              >
                {/* <div
                  style={{
                    // height: "60px",
                    position: "relative",
                    zIndex: "20",
                    boxShadow: "1px 1px 5px 1px #222222",
                    backgroundColor: "red",
                    clipPath:
                      "polygon(2% 29%,0 19%,0% 0%,100% 0,100% 19%,98% 27%,98% 71%,100% 82%,100% 100%,0 100%,0 83%,2% 71%)",
                  }}
                  className="p-0 w-100 px-1 m-0"
                  // style={{ height: "57px", width: "95%" }}
                >
                  <div
                    style={{
                      position: "relative",
                      transform: "translate(1px,2px)",
                      height: "57px",
                      boxShadow: "1px 1px 5px 1px #222222",
                      backgroundColor: "white",
                      clipPath:
                        " polygon(2% 20%, -2% 0%, 100% 0%, 99.5% 0%, 99.5% 10%, 97.7% 17%, 97.7% 70%, 99.5% 81%, 99.5% 90%, 2px 90%, 2px 79%, 2% 70%)",
                    }}
                    className="w-100 h-100 p-0 m-0"
                  > */}
                <SelectBox
                  style={reactSelectAdvanceSearchInputStyle}
                  options={doorsOption}
                  name={"doors"}
                  placeholder={"Doors"}
                  formik={formik}
                  className="col-12 my-3 py-2"
                />
                {/* </div>
                </div> */}
              </div>
              <div
                style={{ height: "60px" }}
                className=" my-3 col-12 col-md-3 px-3"
              >
                {/* <div
                  style={{
                    // height: "60px",
                    position: "relative",
                    zIndex: "10",
                    boxShadow: "1px 1px 5px 1px #222222",
                    backgroundColor: "red",
                    clipPath:
                      "polygon(2% 29%,0 19%,0% 0%,100% 0,100% 19%,98% 27%,98% 71%,100% 82%,100% 100%,0 100%,0 83%,2% 71%)",
                  }}
                  className="p-0 w-100 px-1 m-0"
                  // style={{ height: "57px", width: "95%" }}
                >
                  <div
                    style={{
                      position: "relative",
                      transform: "translate(1px,2px)",
                      height: "57px",
                      boxShadow: "1px 1px 5px 1px #222222",
                      backgroundColor: "white",
                      clipPath:
                        " polygon(2% 20%, -2% 0%, 100% 0%, 99.5% 0%, 99.5% 10%, 97.7% 17%, 97.7% 70%, 99.5% 81%, 99.5% 90%, 2px 90%, 2px 79%, 2% 70%)",
                    }}
                    className="w-100 h-100 p-0 m-0"
                  > */}
                <SelectBox
                  style={reactSelectAdvanceSearchInputStyle}
                  options={bodyStyleOption}
                  name={"body_style"}
                  placeholder={"Body Style"}
                  formik={formik}
                  className="col-12 my-3 py-2"
                />
                {/* </div>
                </div> */}
              </div>
              <div
                style={{ height: "60px" }}
                className=" my-3 col-12 col-md-3 px-3"
              >
                {/* <div
                  style={{
                    // height: "60px",
                    position: "relative",
                    zIndex: "10",
                    boxShadow: "1px 1px 5px 1px #222222",
                    backgroundColor: "red",
                    clipPath:
                      "polygon(2% 29%,0 19%,0% 0%,100% 0,100% 19%,98% 27%,98% 71%,100% 82%,100% 100%,0 100%,0 83%,2% 71%)",
                  }}
                  className="p-0 w-100 px-1 m-0"
                  // style={{ height: "57px", width: "95%" }}
                >
                  <div
                    style={{
                      position: "relative",
                      transform: "translate(1px,2px)",
                      height: "57px",
                      boxShadow: "1px 1px 5px 1px #222222",
                      backgroundColor: "white",
                      clipPath:
                        " polygon(2% 20%, -2% 0%, 100% 0%, 99.5% 0%, 99.5% 10%, 97.7% 17%, 97.7% 70%, 99.5% 81%, 99.5% 90%, 2px 90%, 2px 79%, 2% 70%)",
                    }}
                    className="w-100 h-100 p-0 m-0"
                  > */}
                <SelectBox
                  style={reactSelectAdvanceSearchInputStyle}
                  options={transmitionOption}
                  name={"transmission"}
                  placeholder={"Transmission"}
                  formik={formik}
                  className="col-12 my-3 py-2"
                />
                {/* </div>
                </div> */}
              </div>
              <div
                style={{ height: "60px" }}
                className=" my-3 col-12 col-md-3 px-3"
              >
                {/* <div
                  style={{
                    // height: "60px",
                    position: "relative",
                    zIndex: "10",
                    boxShadow: "1px 1px 5px 1px #222222",
                    backgroundColor: "red",
                    clipPath:
                      "polygon(2% 29%,0 19%,0% 0%,100% 0,100% 19%,98% 27%,98% 71%,100% 82%,100% 100%,0 100%,0 83%,2% 71%)",
                  }}
                  className="p-0 w-100 px-1 m-0"
                  // style={{ height: "57px", width: "95%" }}
                >
                  <div
                    style={{
                      position: "relative",
                      transform: "translate(1px,2px)",
                      height: "57px",
                      boxShadow: "1px 1px 5px 1px #222222",
                      backgroundColor: "white",
                      clipPath:
                        " polygon(2% 20%, -2% 0%, 100% 0%, 99.5% 0%, 99.5% 10%, 97.7% 17%, 97.7% 70%, 99.5% 81%, 99.5% 90%, 2px 90%, 2px 79%, 2% 70%)",
                    }}
                    className="w-100 h-100 p-0 m-0"
                  > */}
                <SelectBox
                  style={reactSelectAdvanceSearchColorStyle}
                  options={colorOption}
                  name={"Exterior_color"}
                  placeholder={"Exterior Color"}
                  formik={formik}
                  className="col-12 my-3 py-2 "
                />
                {/* </div>
                </div> */}
              </div>
              <div
                style={{ height: "60px" }}
                className=" my-3 col-12 col-md-3 px-3"
              >
                {/* <div
                  style={{
                    // height: "60px",
                    position: "relative",
                    zIndex: "10",
                    boxShadow: "1px 1px 5px 1px #222222",
                    backgroundColor: "red",
                    clipPath:
                      "polygon(2% 29%,0 19%,0% 0%,100% 0,100% 19%,98% 27%,98% 71%,100% 82%,100% 100%,0 100%,0 83%,2% 71%)",
                  }}
                  className="p-0 w-100 px-1 m-0"
                  // style={{ height: "57px", width: "95%" }}
                >
                  <div
                    style={{
                      position: "relative",
                      transform: "translate(1px,2px)",
                      height: "57px",
                      boxShadow: "1px 1px 5px 1px #222222",
                      backgroundColor: "white",
                      clipPath:
                        " polygon(2% 20%, -2% 0%, 100% 0%, 99.5% 0%, 99.5% 10%, 97.7% 17%, 97.7% 70%, 99.5% 81%, 99.5% 90%, 2px 90%, 2px 79%, 2% 70%)",
                    }}
                    className="w-100 h-100 p-0 m-0"
                  > */}
                <SelectBox
                  style={reactSelectAdvanceSearchColorStyle}
                  options={colorOption}
                  name={"interior_color"}
                  placeholder={"Interior Color"}
                  formik={formik}
                  className="col-12 my-3 py-2 "
                />
                {/* </div>
                </div> */}
              </div>
              <div className="col-12 d-flex justify-content-center">
                <div
                  style={{ position: "relative" }}
                  className="p-0 m-0 col-12 col-md-4 py-2 pb-4  my-4 px-2 my "
                >
                  <MultiRangeSlider
                    min={minOdometer}
                    max={maxOdometer}
                    text="Odometer:"
                    type="odometer"
                    names={["odometer_low", "odometer_high", "odometer_type"]}
                    step={1000}
                    onChange={({ min, max }) => {
                      formik.setFieldValue("odometer_low", min);
                      formik.setFieldValue("odometer_high", max);
                    }}
                    formik={formik}
                  />
                </div>
                <div
                  style={{ position: "relative" }}
                  className="p-0 m-0 col-12 col-md-4 py-2 pb-4  my-4 px-2 my"
                >
                  <MultiRangeSlider
                    min={1970}
                    max={cureentYear}
                    type="year"
                    text="year:"
                    formik={formik}
                    names={["year_start", "year_end"]}
                    onChange={({ min, max }) => {
                      formik.setFieldValue("year_start", min);
                      formik.setFieldValue("year_end", max);
                    }}
                  />
                </div>
                <div
                  style={{ position: "relative" }}
                  className="p-0 m-0 col-12 col-md-4 py-2 pb-4  my-4 px-2 my"
                >
                  <MultiRangeSlider
                    min={minPrice}
                    max={maxPrice}
                    text="Price:"
                    type="price"
                    symbol="$"
                    step={1000}
                    names={["price_low", "price_high"]}
                    formik={formik}
                    onChange={({ min, max }) => {
                      formik.setFieldValue("price_low", min);
                      formik.setFieldValue("price_high", max);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row p-0 m-0 mt-4 w-100">
            <div className="col-6 px-2">
              <button type="submit" className="btn red_button w-100">
                Search
              </button>
            </div>
            <div className="col-6 p-0 m-0 px-2">
              <div
                style={{
                  boxShadow: "1px 1px 5px 1px #222222",
                  backgroundColor: "red",
                  clipPath:
                    "polygon(2% 29%,0 19%,0% 0%,100% 0,100% 19%,98% 27%,98% 71%,100% 82%,100% 100%,0 100%,0 83%,2% 71%)",
                }}
                className="w-100 "
              >
                <div
                  style={{
                    position: "relative",
                    transform: "translate(1px,1px)",
                    height: "57px",
                    boxShadow: "1px 1px 5px 1px #222222",
                    backgroundColor: "white",
                    clipPath:
                      " polygon(2% 20%, -2% 0%, 100% 0%, 99.5% 0%, 99.5% 10%, 97.7% 17%, 97.7% 70%, 99.5% 81%, 99.5% 90%, 2px 90%, 2px 79%, 2% 70%)",
                  }}
                  className="w-100 h-100 p-0 m-0"
                >
                  <button
                    onClick={() => {
                      formik.resetForm();
                    }}
                    type="button"
                    className="btn inventory_white_button w-100"
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="mt-5 pt-5 col-2 d-flex flex-column justify-content-center align-items-end p-0">
        {dealerData?.facebook && (
          <div
            style={{
              cursor: "pointer",
              width: "100px",
              height: "50px",
              backgroundColor: "#e2b100",
            }}
            className="py-2 my-2"
          >
            <FaFacebookF color="#fff" className="mx-4" />
            <img src="/images/home/Line 23.png" />
          </div>
        )}
        {dealerData?.twitter && (
          <div
            style={{
              cursor: "pointer",
              width: "100px",
              height: "50px",
              backgroundColor: "#e2b100",
            }}
            className="py-2 my-2"
          >
            <img src="/images/home/twitter (5).png" className="px-4" />
            <img src="/images/home/Line 23.png" />
          </div>
        )}
        {dealerData?.instagram && (
          <div
            style={{
              cursor: "pointer",

              width: "100px",
              height: "50px",
              backgroundColor: "#e2b100",
            }}
            className="py-2 my-2"
          >
            <img src="/images/home/instagram (9).png" className="px-4" />
            <img src="/images/home/Line 23.png" />
          </div>
        )}
        {dealerData?.whatsapp && (
          <div
            style={{
              cursor: "pointer",

              width: "100px",
              height: "50px",
              backgroundColor: "#e2b100",
            }}
            className="py-2 my-2"
          >
            <img src="/images/home/whatsapp (4).png" className="px-4" />
            <img src="/images/home/Line 23.png" />
          </div>
        )}

        <div
          style={{
            cursor: "pointer",
            width: "100px",
            height: "50px",
            backgroundColor: "#e2b100",
          }}
          className="py-2 my-2"
        >
          <Link href="/direction">
            <>
              <img src="/images/home/geo-alt-fill (23).png" className="px-4" />
              <img src="/images/home/Line 23.png" />
            </>
          </Link>
        </div>
        <div
          style={{
            cursor: "pointer",
            width: "100px",
            height: "50px",
            backgroundColor: "#e2b100",
          }}
          className="py-2 my-2"
        >
          <a href={phonenumberConvertor(dealerData?.business_phone)}>
            {" "}
            <img src="/images/home/telephone-fill (17).png" className="px-4" />
            <img src="/images/home/Line 23.png" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default AdvanceFilterr;
