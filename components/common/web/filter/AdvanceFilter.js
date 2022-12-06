import { useFormik } from "formik";
import { useEffect, useState } from "react";
import Select from "react-select";
import {
  reactSelectAdvanceSearchColorStyle,
  reactSelectStyleAdvanceSearch,
} from "../../../../constant/advance_search";
import { useGetVehiclesBaseOnFilter } from "../../../../hooks/vehicles/useGetVehiclesBaseOnFilter";
import {
  reactFilterSelectInputStyle,
  reactSelectInputStyle,
} from "../../../../utils/common/react_select_styles";
import { FaSearch } from "react-icons/fa";

import SelectBox from "../../../layout/forms/select_box";
import MultiRangeSlider from "./MultiRangeSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Thumbs, Autoplay, Pagination } from "swiper";
import { useInventoryFilterFormik } from "../../../../hooks/context/useInventoryFilterFormik";
import ComponentHeader from "../../layout/header/component_header";
import { calculateYear } from "../../../../utils/common/calculate_year";
import { calculateOdometers } from "../../../../utils/common/calculate_odometer";
import { calculatePrice } from "../../../../utils/common/calculate_price";
SwiperCore.use([Navigation, Thumbs, Autoplay, Pagination]);
const AdvanceFilter = (props) => {
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
    vehiclesData,
    isClassic,
    vehicles,
    kmMax,
    kmMin,
    miMax,
    miMin,
  } = props;
  const [odometerType, setOdometerType] = useState(2);
  const [kmOdometer, setKmOdometer] = useState();
  const [miOdometer, setMiOdometer] = useState();
  useEffect(() => {
    odometerType === 2
      ? setKmOdometer(calculateOdometers(kmMin, kmMax))
      : setMiOdometer(calculateOdometers(miMin, miMax));
  }, [odometerType]);
  const [years] = useState(calculateYear);
  const [odometers] = useState(calculateOdometers(minOdometer, maxOdometer));
  const [prices] = useState(calculatePrice(minPrice, maxPrice));
  const formik = useInventoryFilterFormik();
  const { bodyStyle, color, drive_type_list, transmission, vehicleModel } =
    advanceSearchData;
  const cureentYear = new Date().getFullYear();
  const makes = vehicleModel ? Object.entries(vehicleModel) : [];
  const engineOptions = [
    { value: 2, label: "2 Cylinder" },
    { value: 4, label: "4 Cylinder" },
    { value: 6, label: "6 Cylinder" },
    { value: 8, label: "8 Cylinder" },
    { value: 10, label: "10 Cylinder" },
    { value: 12, label: "12 Cylinder" },
    { value: "Electric", label: "Electric" },
  ];
  const fuelTypeOptions = [
    { value: "Gasoline", label: "Gasoline" },
    { value: "Electric", label: "Electric" },
    { value: "Hybrid", label: "Hybrid" },
    { value: "Other", label: "Other" },
  ];
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
    <>
      <div className="p-0 m-0 row w-100 px-lg-5 px-xl-3  pt-3 px-5 pb-1">
        <h6>
          <FaSearch color="#333" />
          Search
        </h6>
      </div>

      <form
        className="p-0 m-0 row w-100 inventory_fomr__container px-md-5 px-lg-0 px-xl-0 pb-3"
        onSubmit={formik.handleSubmit}
      >
        {/* <div
          style={{ position: "relative", zIndex: "0" }}
          className="p-0 m-0 col-12 col-md-4 px-2  my-4"
        > */}

        <div className="d-flex flex-column col-12   col-lg-3 p-2 m-0 justify-content-start align-items-center">
          <div className="p-0 m-0 row w-100  p-2 ">
            <SelectBox
              style={reactFilterSelectInputStyle}
              options={makeOptions}
              name={"make"}
              placeholder={"Any Make"}
              formik={formik}
              className="w-100 bg-select_box"
              onChange={(e) => {
                formik.setFieldValue("make", e?.value);
                const modelOption = e?.models?.map((model) => ({
                  value: model,
                  label: model,
                }));
                setModelOptions(modelOption);
              }}
            />
          </div>
          <div className="row w-100  p-0  p-2 m-0">
            <SelectBox
              style={reactFilterSelectInputStyle}
              options={modelOptions}
              name={"model"}
              placeholder={"Any Model"}
              formik={formik}
              className="w-100 bg-select_box"
            />
          </div>
          <div className="row w-100 p-0  p-2 m-0">
            <SelectBox
              style={reactFilterSelectInputStyle}
              options={bodyStyleOption}
              name={"body_style"}
              placeholder={"Any Body Style"}
              formik={formik}
              className="w-100 bg-select_box"
            />
          </div>
        </div>

        <div className="col-12 d-flex flex-column col-lg-4 p-2 m-0 justify-content-start align-items-center">
          <div className="w-100 row p-0 m-0 ">
            <div className="p-0 m-0 col-6 p-2">
              <SelectBox
                style={reactFilterSelectInputStyle}
                options={years}
                name="year_start"
                placeholder={"Min Year"}
                formik={formik}
                className="w-100"
              />
            </div>

            <div className="p-0 m-0 col-6 p-2">
              <SelectBox
                style={reactFilterSelectInputStyle}
                options={years}
                name={"year_end"}
                placeholder={"Max Year"}
                formik={formik}
                className="w-100"
              />
            </div>
          </div>
          <div className="w-100 p-0 m-0 row">
            <div className="p-0 m-0 col-6 p-2">
              <SelectBox
                style={reactFilterSelectInputStyle}
                options={prices}
                name={"price_low"}
                placeholder={"Min price"}
                formik={formik}
                className="w-100"
              />
            </div>
            <div className="p-0 m-0 col-6 p-2">
              <SelectBox
                style={reactFilterSelectInputStyle}
                options={prices}
                name={"price_high"}
                placeholder={"Max price"}
                formik={formik}
                className="w-100"
              />
            </div>
          </div>
          <div className="w-100 row p-0 m-0 ">
            <div className="p-0 m-0 col-6 p-2 ">
              <SelectBox
                style={reactFilterSelectInputStyle}
                options={odometerType === 1 ? miOdometer : kmOdometer}
                name={"odometer_low"}
                placeholder={"Min Odometer"}
                formik={formik}
                className="w-100 "
              />
            </div>
            <div className="p-0 m-0 col-6 mt-2 row">
              <SelectBox
                style={reactFilterSelectInputStyle}
                options={odometerType === 1 ? miOdometer : kmOdometer}
                name={"odometer_high"}
                placeholder={"Max Odometer"}
                formik={formik}
                className="col-9 col-lg-11 mr-2 mr-lg-0"
              />
              <div className="p-0 m-0 col-2 col-lg-1  ">
                <div className="form-check d-flex">
                  <input
                    className="form-check-input"
                    checked={formik.values.odometer_type === 2 ? true : false}
                    value={formik.values.odometer_type === 2 ? true : false}
                    type="radio"
                    name="odometer_type"
                    id="odometer_type1"
                    onChange={() => {
                      setOdometerType(2);
                      formik.setFieldValue("odometer_type", 2);
                    }}
                  />
                  <label
                    className="form-check-label"
                    for="odometer_type1"
                    style={{ color: "#333", fontSize: "11px" }}
                  >
                    KM
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    checked={formik.values.odometer_type === 1 ? true : false}
                    value={formik.values.odometer_type === 1 ? true : false}
                    type="radio"
                    name="odometer_type"
                    id="odometer_type2"
                    onChange={() => {
                      setOdometerType(1);
                      formik.setFieldValue("odometer_type", 1);
                    }}
                  />
                  <label
                    className="form-check-label"
                    for="odometer_type2"
                    style={{ color: "#333", fontSize: "11px" }}
                  >
                    MI
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-12 d-flex flex-column    col-lg-3 p-2 m-0 justify-content-start align-items-center">
          <div className="row w-100 p-0  p-2 m-0">
            <SelectBox
              style={reactFilterSelectInputStyle}
              options={engineOptions}
              name={"engine_cylinders"}
              placeholder={"Any Engine"}
              formik={formik}
              className="w-100"
            />
          </div>

          <div div className="row w-100 p-0  p-2 m-0">
            <SelectBox
              style={reactFilterSelectInputStyle}
              options={transmitionOption}
              name={"transmission"}
              placeholder={"Any Transmission"}
              formik={formik}
              className="w-100"
            />
          </div>

          <div className="row w-100 p-0  p-2 m-0">
            <SelectBox
              style={reactFilterSelectInputStyle}
              options={fuelTypeOptions}
              name={"fuel_type"}
              placeholder={"Any Fuel Type"}
              formik={formik}
              className="w-100"
            />
          </div>
        </div>
        <div className=" col-12 d-flex flex-column    col-lg-2 p-2 m-0 justify-content-start align-items-center">
          <div className="p-0 m-0 row p-lg-2 px-2 px-lg-0  w-100">
            <SelectBox
              style={reactFilterSelectInputStyle}
              options={colorOption}
              name={"Exterior_color"}
              placeholder={"Any Color"}
              formik={formik}
              className="w-100"
            />
          </div>

          {/* <div className="row p-0 m-0 justify-content-end w-100"> */}
          <div className="p-0 m-0 w-100 row p-2">
            <button
              onClick={() => {
                formik.resetForm();
              }}
              type="button"
              className="btn gold_button_4 w-100 "
            >
              Reset
            </button>
          </div>
          <div className="p-0 m-0 w-100 row p-2 ">
            <button
              type="submit"
              className="btn gold_button w-100 d-flex align-items-center justify-content-center"
            >
              <FaSearch color="#333" />
              Search
            </button>
          </div>
        </div>

        {/* </div> */}
        {/* <MultiRangeSlider
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
          /> */}
        {/* </div> */}
        {/* <div
          style={{ position: "relative", zIndex: "0" }}
          className="p-0 m-0 col-12 col-md-4 px-2  my-4"
        >
          <MultiRangeSlider
            min={isClassic ? 0 : 1970}
            max={isClassic ? 1970 : cureentYear}
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
          style={{ position: "relative", zIndex: "0" }}
          className="p-0 m-0 col-12 col-md-4 px-2  my-4"
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
        </div> */}
      </form>
    </>
  );
};
export default AdvanceFilter;
