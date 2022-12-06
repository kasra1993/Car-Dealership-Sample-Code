import React, { useState } from "react";
import { useFormik } from "formik";
import { CDN_BASE_URL } from "../../../../constant/base";
import { findScript } from "../../../../utils/common/html_script";
import { FaFacebookF } from "react-icons/fa";

import {
  DIREVE_TYPE,
  INITIAL_VALUES,
  SEARCH_PERIOD,
} from "../../../../constant/car-finder/car_finder";
import { CAR_FINDER_VALIDATION } from "../../../../constant/formik/validation";
import {
  handleFinancialCarfinder,
  onSubmit,
} from "../../../../utils/car-finder/car_finder";
import { toast } from "react-toastify";
import Select from "react-select";
import { calculateYear } from "../../../../utils/common/calculate_year";
import { reactSelectInputStyle } from "../../../../utils/common/react_select_styles";
import SpecialCarsCustomerWeb from "../specialcars";
import PersonalInfo from "../personalinfo";
import { colorOption } from "../../../../utils/value-your-trade/value_your_trade.utils";
import { reactSelectColorStyle } from "../../../../utils/common/react_select";
import Loading from "../../../common/web/loading/loading";
import EFormsHeaderSection from "../../../common/web/eform-header/eforms_header_section";
import CategoryTitle from "../../../common/layout/header/category_title";
import EformsConatctInfo from "../../../common/web/eforms/eforms_contact_info";
import EformsHeader from "../../../common/layout/header/eform_header";
import { useRouter } from "next/router";
import Link from "next/link";
import { phonenumberConvertor } from "../../../../utils/common/phone_number_converter";
import FooterTitle from "../../../common/layout/footer/footer_title";
import ContactInfo from "../../../common/web/contactinfo";
const CarFinderForm = (props) => {
  const {
    domain,
    colors,
    otherFormik,
    dealerData,
    specialCars,
    onClose,
    transmitionData,
    transmitionLoading,
    transmitionFetching,
    bodyStylesData,
    bodyStylesIsLoadig,
    bodyStylesIsFetching,
  } = props;
  const [isLoading, setLoading] = useState(false);
  const [years] = useState(calculateYear);
  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: () => CAR_FINDER_VALIDATION(),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      const { data, status, message } = await onSubmit(values, domain);
      setLoading(false);
      if (typeof otherFormik !== "undefined") {
        const frk_carFinder_id = await data?.CarFinder?.id;
        otherFormik.setFieldValue("frk_carFinder_id", +frk_carFinder_id);
      }
      if (status === 201) {
        toast.success("succesfull");
        resetForm();
        if (onClose && typeof otherFormik !== "undefined") {
          onClose();
        }
      } else {
        return toast.error(message);
      }
    },
    enableReinitialize: true,
  });
  const router = useRouter();

  return (
    <div className="p-0 m-0 w-100 mt-4">
      {typeof otherFormik === "undefined" && (
        <div className="p-0 m-0" style={{ position: "relative" }}>
          {/* <div className="p-0 m-0 row w-100 ">
            {dealerData?.carFinder_image_url && (
              <div className="p-0 m-0 col-12">
                {" "}
                <img
                  src={CDN_BASE_URL + dealerData?.carFinder_image_url}
                  className="w-100 h-100 p-0 m-0"
                />
              </div>
            )}
          </div> */}
          <div className="p-0 m-0 row w-100 justify-content-start pl-lg-5 pl-2  ml-3 ">
            <EformsHeader title="Car Finder" />
          </div>
        </div>
      )}

      <div className="p-0 m-0 pb-5 w-100 row d-flex justify-content-start align-items-start finance_title">
        <div
          className={`p-0 m-0 px-1 px-md-3 px-lg-5 ${
            typeof otherFormik === "undefined" ? "col-12 col-lg-7" : "col-12"
          }`}
        >
          <form
            onSubmit={formik.handleSubmit}
            className={`p-0 m-0 row w-100  px-3 ${
              typeof otherFormik === "undefined" ? "" : ""
            } `}
          >
            <div className="p-0 pt-3 m-0 w-100 d-flex justify-content-left align-items-center forms_title">
              <h4>Personal Information</h4>
            </div>

            <PersonalInfo formik={formik} otherFormik={otherFormik} />
            <div className="p-0 m-0 col-12">
              <div className="p-0 pt-3 m-0 w-100 d-flex justify-content-left align-items-center forms_title">
                <h4>Vehicle Information</h4>
              </div>
            </div>

            <div className="form-group col-12 col-md-6 d-flex justify-content-center p-0 m-0 mt-2 p-1 pr-md-2 pr-0">
              <div className="w-100 col-12 p-0 m-0">
                <div className=" w-100  p-0 m-0">
                  <label className="eforms_label">Make</label>
                  <input
                    name="make"
                    className="form-control  eforms_input_container"
                    // placeholder="Make"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.make}
                  />
                </div>
              </div>
            </div>
            <div className="form-group col-12 col-md-6 d-flex justify-content-center p-0 m-0 mt-2 p-1 pl-md-2 pl-0 ">
              <div className="w-100 col-12 p-0 m-0">
                <div className=" w-100  p-0 m-0">
                  <label className="eforms_label">Model</label>
                  <input
                    name="model"
                    className="form-control  eforms_input_container"
                    // placeholder="Model"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.model}
                  />
                </div>
              </div>
            </div>
            <div className="form-group col-12 col-md-6 d-flex justify-content-center p-0 m-0 mt-2 p-1 pr-md-2 pr-0">
              <div className="w-100 col-12 p-0 m-0">
                <div className=" w-100  p-0 m-0">
                  <label className="eforms_label">Year</label>
                  <Select
                    name="year"
                    className="form-select w-100 eforms_input_select_container"
                    // placeholder="Year"
                    options={years}
                    styles={reactSelectInputStyle}
                    value={years?.filter(
                      (year) => year?.value === formik.values.year
                    )}
                    onChange={(e) => {
                      formik.setFieldValue("year", e?.value);
                    }}
                  />
                </div>
              </div>
              {formik.errors.year && formik.touched.year && (
                <p className="text-danger">{formik.errors.year}</p>
              )}
            </div>
            <div className="form-group col-12 col-md-6 d-flex justify-content-center p-0 m-0 mt-2 p-1 pl-md-2 pl-0">
              <div className="w-100 col-12 p-0 m-0">
                <div className=" w-100  p-0 m-0">
                  <label className="eforms_label">Trim</label>

                  <input
                    name="trim"
                    className="form-control  eforms_input_container"
                    // placeholder="Trim"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.trim}
                  />
                </div>
              </div>

              {formik.errors.trim && formik.touched.trim && (
                <p className="text-danger">{formik.errors.trim}</p>
              )}
            </div>

            <div className="form-group col-12 col-md-6 d-flex justify-content-center p-0 m-0 mt-2 p-1 pr-md-2 pr-0">
              {bodyStylesIsLoadig || bodyStylesIsFetching ? (
                <Loading />
              ) : (
                <>
                  <div className="w-100 col-12 p-0 m-0">
                    <div className=" w-100  p-0 m-0">
                      <label className="eforms_label">Body Style</label>
                      <Select
                        name="bodyStyle"
                        className="form-select w-100 eforms_input_select_container"
                        // placeholder="Body Style"
                        value={bodyStylesData?.filter(
                          (option) => option.value === formik.values.bodyStyle
                        )}
                        options={bodyStylesData}
                        styles={reactSelectInputStyle}
                        onChange={(e) => {
                          formik.setFieldValue("bodyStyle", e?.value);
                        }}
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="form-group col-12 col-md-6 d-flex justify-content-center p-0 m-0 mt-2 p-1 pl-md-2 pl-0">
              {transmitionLoading || transmitionFetching ? (
                <Loading />
              ) : (
                <>
                  <div className="w-100 col-12 p-0 m-0">
                    <div className=" w-100  p-0 m-0">
                      <label className="eforms_label">Transmission</label>
                      <Select
                        name="transmission"
                        className="form-select w-100 eforms_input_select_container"
                        // placeholder="Transmission"
                        value={transmitionData?.filter(
                          (option) =>
                            option.value === formik.values.transmission
                        )}
                        options={transmitionData}
                        styles={reactSelectInputStyle}
                        onChange={(e) => {
                          formik.setFieldValue("transmission", e?.value);
                        }}
                      />
                    </div>
                  </div>
                </>
              )}
              {formik.errors.transmission && formik.touched.transmission && (
                <p className="text-danger">{formik.errors.transmission}</p>
              )}
            </div>
            <div className="form-group col-12 col-md-6 d-flex justify-content-center p-0 m-0 mt-2 p-1 pr-md-2 pr-0">
              <div className="w-100 col-12 p-0 m-0">
                <div className=" w-100  p-0 m-0">
                  <label className="eforms_label">Drivetrain</label>
                  <Select
                    name="driveLine"
                    className="form-select w-100 eforms_input_select_container"
                    // placeholder="Drivetrain"
                    value={DIREVE_TYPE?.filter(
                      (option) => option.value === formik.values.driveLine
                    )}
                    options={DIREVE_TYPE}
                    styles={reactSelectInputStyle}
                    onChange={(e) => {
                      formik.setFieldValue("driveLine", e?.value);
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="form-group col-12 col-md-6 d-flex justify-content-center align-items-end p-0 m-0 mt-2 p-1 pl-md-2 pl-0">
              <div className="p-0 m-0 w-100">
                <div className="w-100 col-12 p-0 m-0">
                  <div className=" w-100  p-0 m-0">
                    <label className="eforms_label">Odometer</label>
                    <input
                      name="temp_odometer"
                      className="form-control eforms_input_container"
                      // placeholder="Odometer"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.temp_odometer}
                    />
                  </div>
                </div>

                {formik.errors.temp_odometer &&
                  formik.touched.temp_odometer && (
                    <small className="text-danger">
                      {formik.errors.temp_odometer}
                    </small>
                  )}
              </div>
              <div className="p-0 px-2 m-0">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    checked={
                      formik.values.temp_odometer_type === 1 ? true : false
                    }
                    value={
                      formik.values.temp_odometer_type === 1 ? true : false
                    }
                    type="radio"
                    name="odometer_type"
                    id="odometer_type1"
                    onChange={() =>
                      formik.setFieldValue("temp_odometer_type", 1)
                    }
                  />
                  <label
                    className="form-check-label"
                    for="odometer_type1"
                    style={{ color: "#333" }}
                  >
                    KM
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    checked={
                      formik.values.temp_odometer_type === 2 ? true : false
                    }
                    value={
                      formik.values.temp_odometer_type === 2 ? true : false
                    }
                    type="radio"
                    name="odometer_type"
                    id="odometer_type2"
                    onChange={() =>
                      formik.setFieldValue("temp_odometer_type", 2)
                    }
                  />
                  <label
                    className="form-check-label"
                    for="odometer_type2"
                    style={{ color: "#333" }}
                  >
                    MI
                  </label>
                </div>
              </div>
            </div>

            <div className="form-group col-12 col-md-6 d-flex justify-content-center p-0 m-0 mt-2 p-1 pr-md-2 pr-0">
              <div className="w-100 col-12 p-0 m-0">
                <div className=" w-100  p-0 m-0">
                  <label className="eforms_label">Exterior color</label>

                  <Select
                    className="form-select w-100  eforms_input_select_container"
                    // placeholder="Exterior color"
                    options={colorOption(colors)}
                    styles={reactSelectColorStyle}
                    value={colorOption(colors)?.filter(
                      (color) =>
                        color?.colorObject?.id ===
                        formik.values.frk_exterior_color
                    )}
                    onChange={(e) => {
                      formik.setFieldValue(
                        "frk_exterior_color",
                        e?.colorObject?.id
                      );
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="form-group col-12 col-md-6 d-flex justify-content-center p-0 m-0 mt-2 p-1 pl-md-2 pl-0">
              <div className="w-100 col-12 p-0 m-0">
                <div className=" w-100  p-0 m-0">
                  <label className="eforms_label">Interior color</label>
                  <Select
                    className="form-select w-100 eforms_input_select_container"
                    // placeholder="Interior color"
                    options={colorOption(colors)}
                    styles={reactSelectColorStyle}
                    value={colorOption(colors)?.filter(
                      (color) =>
                        color?.colorObject?.id ===
                        formik.values.frk_interior_color
                    )}
                    onChange={(e) => {
                      formik.setFieldValue(
                        "frk_interior_color",
                        e?.colorObject?.id
                      );
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="form-group col-12 col-md-6 d-flex justify-content-center p-0 m-0 mt-2 p-1 pr-md-2 pr-1">
              <div className="w-100 col-12 p-0 m-0">
                <div className=" w-100  p-0 m-0">
                  <label className="eforms_label">Search Period</label>
                  <Select
                    name="searchPeriod"
                    className="form-select w-100 eforms_input_select_container"
                    // placeholder="Search Period"
                    value={SEARCH_PERIOD?.filter(
                      (sp) => sp?.value === formik.values.searchPeriod
                    )}
                    options={SEARCH_PERIOD}
                    styles={reactSelectInputStyle}
                    onChange={(e) => {
                      formik.setFieldValue("searchPeriod", e?.value);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="form-group col-12 d-flex justify-content-center p-0 m-0 mt-2 p-1">
              <div className="w-100 col-12 p-0 m-0">
                <div className=" w-100  p-0 m-0">
                  <label className="eforms_label">Additional Info</label>
                  <textarea
                    rows="6"
                    name="additional_info"
                    className="form-control eforms_textarea_container"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    // placeholder="Additional Info"
                    value={formik.values.additional_info}
                  />
                </div>
              </div>
            </div>

            <div className="p-0 m-0 row w-100 text-start justify-content-start align-items-start">
              <div className="p-1 m-0 col-12 d-flex justify-content-start align-items-start">
                <div className="p-0 m-0 w-100 d-flex justify-content-center align-items-center col-4 col-md-3 col-sm-5">
                  {isLoading ? (
                    <Loading />
                  ) : (
                    <button
                      type="submit"
                      className="btn w-100 gold_button_2 "
                      onClick={(e) => {
                        e.preventDefault();
                        handleFinancialCarfinder(
                          formik,
                          `${router?.pathname}`,
                          true
                        );
                      }}
                    >
                      Submit
                    </button>
                  )}
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="m-0 p-0 col-12 col-sm-10 col-lg-5 pr-3">
          {typeof otherFormik === "undefined" && (
            <ContactInfo data={dealerData} />
          )}
        </div>

        {/* <div className="p-0 m-0 pt-3 col-12 col-lg-4 px-3">
          {typeof otherFormik === "undefined" && (
            <SpecialCarsCustomerWeb data={specialCars} />
          )}
        </div> */}
      </div>
    </div>
  );
};

export default CarFinderForm;
