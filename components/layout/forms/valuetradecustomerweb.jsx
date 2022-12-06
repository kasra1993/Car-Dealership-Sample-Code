import { useFormik } from "formik";
import { useState } from "react";
import { useRouter } from "next/router";
import { VALUE_YOURTRADE_VALIDATION } from "../../../constant/formik/validation";
import {
  DIREVE_TYPE,
  INITIAL_VALUES,
} from "../../../constant/value-your-trade/value_your_trade";
import { useGetSpecialCars } from "../../../hooks/vehicles/useGetSpecialCars";

import {
  colorOption,
  handleFinancialValueyourtrade,
  onSubmit,
} from "../../../utils/value-your-trade/value_your_trade.utils";
import { toast } from "react-toastify";
import Select from "react-select";
import { calculateYear } from "../../../utils/common/calculate_year";
import { reactSelectInputStyle } from "../../../utils/common/react_select_styles";
import EFormsHeaderComponent from "./e_forms_header";
import { reactSelectColorStyle } from "../../../utils/common/react_select";
import Loading from "../../common/web/loading/loading";
import PersonalInfo from "./personalinfo";
import SpecialCarsCustomerWeb from "./specialcars";
import EFormsHeaderSection from "../../common/web/eform-header/eforms_header_section";
import CategoryTitle from "../../common/layout/header/category_title";
import EformsHeader from "../../common/layout/header/eform_header";
import EformsConatctInfo from "../../common/web/eforms/eforms_contact_info";
import FinanceSearchForVehicle from "./financing/finance_search_for_vehicle";
import { findScript } from "../../../utils/common/html_script";
import ContactInfo from "../../../components/common/web/contactinfo";

const ValuetradeCustomerWeb = (props) => {
  const {
    domain,
    colors,
    dealerData,
    specialCars,
    onClose,
    transmitionData,
    transmitionLoading,
    transmitionFetching,
    bodyStylesData,
    bodyStylesIsLoadig,
    bodyStylesIsFetching,
    vehicleDataForSearch,
  } = props;
  const [isLoading, setLoading] = useState(false);
  const { otherFormik = undefined } = props;
  const [years] = useState(calculateYear);
  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: () => VALUE_YOURTRADE_VALIDATION(),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      const { data, message, status } = await onSubmit(values, domain);

      setLoading(false);
      if (status === 201) {
        //reusable for financial component to set frk value your trade id
        if (typeof otherFormik !== "undefined") {
          const frk_valueYourTrade_id = await data?.ValueYourTrade?.id;
          otherFormik.setFieldValue(
            "frk_valueYourTrade_id",
            frk_valueYourTrade_id
          );
        }
        toast.success(message);
        resetForm();
        if (onClose && typeof otherFormik !== "undefined") {
          onClose();
        }
      } else {
        toast.error(message);
      }
    },
  });
  const router = useRouter();
  return (
    <>
      <div className="p-0 m-0 w-100 row justify-content-start px-3 px-lg-0">
        <div
          className=" p-0 m-0 d-flex col-lg-8  col-11 mt-4 px-0 px-md-3  px-lg-0"
          style={{ position: "relative" }}
        >
          {/* <div className="p-0 m-0 row w-100 ">
    {dealerData?.contactUs_image_url && (
      <div className="p-0 m-0 col-12">
        {" "}
        <img
          src={CDN_BASE_URL + dealerData?.contactUs_image_url}
          className="w-100 h-100 p-0 m-0"
        />
      </div>
    )}
  </div> */}

          <EformsHeader
            title="Appraise My Trade"
            className="privacy_title pl-lg-5"
          />
        </div>

        <div className="p-0 m-0 pb-5 w-100 row d-flex justify-content-start align-items-start">
          <div
            className={`p-0 m-0 px-1 px-md-3 px-lg-5 ${
              typeof otherFormik === "undefined" ? "col-12 col-lg-7" : "col-12"
            }`}
          >
            <form
              onSubmit={formik.handleSubmit}
              className={` m-0 row w-100  ${
                typeof otherFormik === "undefined"
                  ? "eforms_form__container"
                  : ""
              } `}
            >
              <div className="p-0 pt-3 m-0 w-100 d-flex justify-content-left align-items-center forms_title">
                <h4>Personal Information</h4>
              </div>
              <PersonalInfo formik={formik} otherFormik={otherFormik} />
              {typeof otherFormik === "undefined" && (
                <div className="p-0 pt-3 m-0 w-100 d-flex justify-content-left align-items-center forms_title">
                  <h4>Vehicle Information</h4>
                </div>
              )}
              <div className="col-12 p-0 m-0 ">
                <div className="row p-0 m-0  ">
                  <div className="form-group col-sm-6 p-0 m-0 mt-2 p-1">
                    <label className="font-size-text" for="make">
                      Make
                    </label>
                    <input
                      name="make"
                      className="form-control  eforms_input_container"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.make}
                    />
                  </div>

                  <div className="form-group col-sm-6 p-0 m-0 mt-2 p-1">
                    <label className="font-size-text" for="model">
                      Model
                    </label>
                    <input
                      name="model"
                      className="form-control  eforms_input_container"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.model}
                    />
                  </div>
                  <div className="form-group col-sm-6 p-0 m-0 mt-2 p-1">
                    <label className="font-size-text" for="model">
                      Year
                    </label>
                    <Select
                      name=""
                      className="form-select w-100 eforms_input_select_container"
                      options={years}
                      styles={reactSelectInputStyle}
                      value={years?.filter(
                        (year) => year?.value === formik.values.year
                      )}
                      onChange={(e) => {
                        formik.setFieldValue("year", e?.value);
                      }}
                    />
                    {formik.errors.year && formik.touched.year && (
                      <p className="text-danger">{formik.errors.year}</p>
                    )}
                  </div>

                  <div className="form-group col-sm-6 p-0 m-0 mt-2 p-1">
                    <label className="font-size-text" for="trim">
                      Trim
                    </label>
                    <input
                      name="trim"
                      className="form-control  eforms_input_container"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.trim}
                    />
                    {formik.errors.trim && formik.touched.trim && (
                      <p className="text-danger">{formik.errors.trim}</p>
                    )}
                  </div>
                  <div className="form-group col-sm-6 p-0 m-0 mt-2 p-1">
                    {bodyStylesIsLoadig || bodyStylesIsFetching ? (
                      <Loading />
                    ) : (
                      <>
                        <label className="font-size-text" for="bodyStyle">
                          Body Style
                        </label>

                        <Select
                          name="bodyStyle"
                          className="form-select w-100 eforms_input_select_container"
                          value={bodyStylesData?.filter(
                            (option) => option.value === formik.values.bodyStyle
                          )}
                          options={bodyStylesData}
                          styles={reactSelectInputStyle}
                          onChange={(e) => {
                            formik.setFieldValue("bodyStyle", e?.value);
                          }}
                        />
                      </>
                    )}
                  </div>
                  <div className="form-group col-sm-6 p-0 m-0 mt-2 p-1">
                    {transmitionLoading || transmitionFetching ? (
                      <Loading />
                    ) : (
                      <>
                        <label className="font-size-text" for="transmission">
                          Transmission
                        </label>
                        <Select
                          name="transmission"
                          className="form-select w-100 eforms_input_select_container"
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
                      </>
                    )}
                    {formik.errors.transmission &&
                      formik.touched.transmission && (
                        <p className="text-danger">
                          {formik.errors.transmission}
                        </p>
                      )}
                  </div>
                  <div className="form-group col-sm-6 p-0 m-0 mt-2 p-1">
                    <label className="font-size-text" for="driveLine">
                      Drivetrain
                    </label>
                    <Select
                      name="driveLine"
                      className="form-select w-100 eforms_input_select_container"
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
                  <div className="form-group d-flex col-sm-6 col-12 p-0 m-0 mt-2 p-1">
                    <div className="p-0 m-0 w-100">
                      <label className="font-size-text" for="temp_odometer">
                        Odometer
                      </label>
                      <input
                        name="temp_odometer"
                        className="form-control eforms_input_container"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.temp_odometer}
                      />
                      {formik.errors.temp_odometer &&
                        formik.touched.temp_odometer && (
                          <small className="text-danger">
                            {formik.errors.temp_odometer}
                          </small>
                        )}
                    </div>
                    <div className="p-0 px-2 m-0 d-flex flex-column justify-content-end">
                      <div className="form-check">
                        <input
                          className="form-check-input "
                          checked={
                            formik.values.temp_odometer_type === 1
                              ? true
                              : false
                          }
                          value={
                            formik.values.temp_odometer_type === 1
                              ? true
                              : false
                          }
                          type="radio"
                          name="odometer_type"
                          id="odometer_type1"
                          onChange={() =>
                            formik.setFieldValue("temp_odometer_type", 1)
                          }
                        />
                        <label
                          className="form-check-label text-dark"
                          for="odometer_type1"
                        >
                          KM
                        </label>
                      </div>

                      <div className="form-check">
                        <input
                          className="form-check-input"
                          checked={
                            formik.values.temp_odometer_type === 2
                              ? true
                              : false
                          }
                          value={
                            formik.values.temp_odometer_type === 2
                              ? true
                              : false
                          }
                          type="radio"
                          name="odometer_type"
                          id="odometer_type2"
                          onChange={() =>
                            formik.setFieldValue("temp_odometer_type", 2)
                          }
                        />
                        <label
                          className="form-check-label text-dark"
                          for="odometer_type2"
                        >
                          MI
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* <div className="form-group col-sm-6 p-0 m-0 mt-2 mb-2 p-1">
                <label for=""></label>
                <input
                    name="vehicle_miles"
                    className="form-control  eforms_input_container"
                    placeholder="Vehicle miles"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.vehicle_miles}
                  />
                  {formik.errors.vehicle_miles && formik.touched.vehicle_miles && (
                    <p className="text-danger">{formik.errors.vehicle_miles}</p>
                  )}
                </div> */}

                  <div className="form-group col-sm-6 p-0 m-0 mt-2 p-1">
                    <label className="font-size-text" for="vin_number">
                      Vin
                    </label>
                    <input
                      name="vin_number"
                      className="form-control  eforms_input_container"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.vin_number}
                    />
                  </div>
                  <div className="form-group col-sm-6 p-0 m-0 mt-2 p-1">
                    <label className="font-size-text" for="">
                      Exterior color
                    </label>
                    <Select
                      className="form-select w-100 border"
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
                  <div className="form-group col-sm-6 p-0 m-0 mt-2 p-1">
                    <label className="font-size-text" for="">
                      Interior color
                    </label>
                    <Select
                      className="form-select w-100 border"
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
                  <div className="form-group col-12 col-md-12 p-0 m-0 mt-2 p-1">
                    <label className="font-size-text" for="additional_info">
                      Additional Info
                    </label>
                    <textarea
                      rows="6"
                      name="additional_info"
                      className="form-control eforms_textarea_container"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.additional_info}
                    />
                  </div>
                  <div className="text-dark p-0 pt-3 m-0 w-100 d-flex justify-content-left align-items-center forms_title ml-2">
                    Choose Your Vehicle
                  </div>
                  <div className="p-1 m-0 w-100">
                    <FinanceSearchForVehicle
                      vehicleDataForSearch={vehicleDataForSearch}
                      formik={formik}
                    />
                  </div>
                </div>
                <div className="p-1 m-0 col-12 col-md-6">
                  <div className="p-0 m-0">
                    {isLoading ? (
                      <Loading />
                    ) : (
                      <button
                        type="submit"
                        className=" btn gold_button w-100 "
                        onClick={(e) => {
                          e.preventDefault();
                          handleFinancialValueyourtrade(
                            formik,
                            `${router?.pathname}`,
                            true
                          );
                        }}
                      >
                        <span className="p-0 m-0">Submit</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </form>
          </div>
          {/*  
          <div className="m-0 p-0 col-12 col-lg-5 pr-3 contact-form">
           
          </div> */}

          <div className="m-0 p-0 col-12 col-lg-5 pr-3 contact-form">
            {typeof otherFormik === "undefined" && (
              <ContactInfo data={dealerData} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ValuetradeCustomerWeb;
