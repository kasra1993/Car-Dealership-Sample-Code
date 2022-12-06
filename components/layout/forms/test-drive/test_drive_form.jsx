import { Formik, Form, Field, useFormik } from "formik";
import React, { useState } from "react";
import Select from "react-select";
import { useRouter } from "next/router";
// import { getToken } from "../../../utils/common/get_token";
import { toast } from "react-toastify";
// import SpecialCarsCustomerWeb from "./servicappointment/specialcars";
// import { useGetFooterData } from "../../../hooks/common/useGetFooterData";
// import { useGetSpecialCars } from "../../../hooks/vehicles/useGetSpecialCars";
import { onSubmit } from "../../../../utils/test-drive/test_drive";
import { TEST_DRIVE_VALIDATION } from "../../../../constant/formik/validation";
import {
  INITIAL_VALUES,
  METHOD_OF_CONTACT,
  USER_SALUTATION,
} from "../../../../constant/test-drive/test_drive";
import { useGetFooterData } from "../../../../hooks/common/useGetFooterData";
import { useGetSpecialCars } from "../../../../hooks/vehicles/useGetSpecialCars";
import EformsConatctInfo from "../../../common/web/eforms/eforms_contact_info";
import { FaHeadphonesAlt } from "react-icons/fa";
import SpecialCarsCustomerWeb from "../specialcars";
import FormDescription from "../form_description";
import PersonalInfo from "../personalinfo";
import FinanceSearchForVehicle from "../financing/finance_search_for_vehicle";
import { findScript } from "../../../../utils/common/html_script";
import { CDN_BASE_URL } from "../../../../constant/base";
import EformsHeader from "../../../common/layout/header/eform_header";
import { reactSelectInputStyle } from "../../../../utils/common/react_select_styles";
// import agent from "../api/agent";

const TestDriveFrom = (props) => {
  const { data, domain, vehicleDataForSearch, specialCars } = props;
  const {
    data: dealerData,
    isLoading: dealerIsLoadig,
    isFetching: dealerIsFetching,
    isError: dealerIsError,
    error: dealerError,
    isSuccess: dealerIsSuccess,
  } = useGetFooterData(domain);
  const {
    data: specialCarsData,
    isLoading: specialCarsIsLoadig,
    isFetching: specialCarsIsFetching,
    isError: specialCarsIsError,
    error: specialCarsError,
    isSuccess: specialCarsIsSuccess,
  } = useGetSpecialCars(domain);
  const router = useRouter();
  const [vehicle_id, setvehicle_id] = useState();
  //   const [isShowPersonal, setIsShowPersonal] = useState(() =>
  //     getToken() ? false : true
  //   );
  // const dealershId = data.frk_dealership_id;
  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: () => TEST_DRIVE_VALIDATION(),
    onSubmit: async (values, { resetForm }) => {
      const { data, status } = await onSubmit(values, domain, vehicle_id, "");
      if (+status === 201) {
        toast.success("successful");
        resetForm();
        return;
      } else {
        return toast.error("Failed");
      }
    },
  });
  const token = true;
  const [confirm, setConfirm] = React.useState(false);
  return (
    <div className="p-0 m-0 w-100">
      <div className="p-0 m-0" style={{ position: "relative" }}>
        <div className="p-0 m-0 row w-100 ">
          {dealerData?.testDrive_image_url && (
            <div className="p-0 m-0 col-12">
              {" "}
              <img
                src={CDN_BASE_URL + dealerData?.testDrive_image_url}
                className="w-100 h-100 p-0 m-0"
              />
            </div>
          )}
        </div>
        <div className="p-0 m-0 row w-100 header_title_position">
          <div className="p-0 m-0 col-1 col-md-3 form_head_background"></div>
          <div className="p-0 m-0 col-10 col-md-6">
            <EformsHeader title="Book A Test Drive" />
          </div>
          <div className="p-0 m-0 col-1 col-md-3 form_head_background"></div>
        </div>
      </div>

      <div className="p-0 m-0 py-5 w-100 row d-flex justify-content-center align-items-start">
        <div
          className={`p-0 m-0 px-1 px-md-3 px-lg-5 ${
            typeof otherFormik === "undefined" ? "col-12 col-lg-8" : "col-12"
          }`}
        >
          <form
            onSubmit={formik.handleSubmit}
            className="p-0 m-0 row w-100  px-3"
          >
            <div className="p-0 pt-3 m-0 w-100 d-flex justify-content-left align-items-center forms_title">
              Vehicle Information
            </div>
            <div className="p-1 m-0 w-100">
              <FinanceSearchForVehicle
                vehicleDataForSearch={vehicleDataForSearch}
                setvehicle_id={setvehicle_id}
                vehicle_id={vehicle_id}
                formik={formik}
              />
            </div>
            <div className="p-0 pt-3 m-0 w-100 d-flex justify-content-left align-items-center forms_title">
              Personal Information
            </div>
            <PersonalInfo formik={formik} />
            <div className="p-0 pt-3 m-0 w-100 d-flex justify-content-left align-items-center forms_title">
              Appointment Date & Time
            </div>
            <div className="p-0 m-0 w-100 row justify-content-start ">
              <div className="form-group col-12 col-md-6 d-flex justify-content-center p-0 m-0 mt-2 p-1">
                <div className="w-100 col-12 p-0 mx-3">
                  <div className=" w-100  p-0 m-0">
                    <label className="eforms_label">Requested Date</label>
                    <input
                      // placeholder="Requested Date"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.requested_date}
                      type="text"
                      name="requested_date"
                      className="form-control p-3 eforms_input_container"
                      onFocus={(e) => (e.target.type = "date")}
                    />
                  </div>
                  {formik.errors.requested_date &&
                    formik.touched.requested_date && (
                      <p className="text-danger">
                        {formik.errors.requested_date}
                      </p>
                    )}
                </div>
              </div>
              <div className="form-group col-12 col-md-6 d-flex justify-content-center p-0 m-0 mt-2 p-1">
                <div className="w-100 col-12 p-0 m-0">
                  <div className=" w-100  p-0 m-0">
                    <label className="eforms_label">User Salutation</label>

                    <Select
                      name="user_salutation"
                      className="form-select w-100 eforms_input_select_container"
                      // placeholder="Salutation"
                      options={USER_SALUTATION}
                      styles={reactSelectInputStyle}
                      onChange={(e) => {
                        formik.setFieldValue("user_salutation", e?.value);
                      }}
                    />
                    {/* <select
                      name="user_salutation"
                      className="form-select w-100 eforms_input_select_container"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.user_salutation}
                    >
                      <option value="">User Salutation</option>
                      {USER_SALUTATION?.map(({ value, label }, index) => (
                        <option key={`value${index}`} value={value}>
                          {label}
                        </option>
                      ))}
                    </select> */}
                  </div>
                  {formik.errors.user_salutation &&
                    formik.touched.user_salutation && (
                      <p className="text-danger">
                        {formik.errors.user_salutation}
                      </p>
                    )}
                </div>
              </div>
              <div className="form-group col-12 col-md-6 d-flex justify-content-center p-0 m-0 mt-2 p-1">
                <div className="w-100 col-12 p-0 m-0">
                  <div className=" w-100  p-0 m-0">
                    <label className="eforms_label">Method Of Contact</label>
                    <Select
                      name="method_of_contact"
                      className="form-select w-100 eforms_input_select_container"
                      // placeholder="Salutation"
                      options={METHOD_OF_CONTACT}
                      styles={reactSelectInputStyle}
                      onChange={(e) => {
                        formik.setFieldValue("method_of_contact", e?.value);
                      }}
                    />
                    {/* <select
                      name="method_of_contact"
                      className="form-select w-100 eforms_input_select_container"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.method_of_contact}
                    >
                      <option value="">Method Of Contact</option>
                      {METHOD_OF_CONTACT?.map(({ value, label }, index) => (
                        <option key={`value${index}`} value={value}>
                          {label}
                        </option>
                      ))}
                    </select> */}
                  </div>
                  {formik.errors.method_of_contact &&
                    formik.touched.method_of_contact && (
                      <p className="text-danger">
                        {formik.errors.method_of_contact}
                      </p>
                    )}
                </div>
              </div>
            </div>
            <div className="form-group col-12 d-flex justify-content-center p-0 m-0 mt-2 p-1">
              <div className="w-100 col-12 p-0 m-0">
                <div className=" w-100  p-0 m-0">
                  <label className="eforms_label">Message</label>
                  <textarea
                    rows="8"
                    name="comment"
                    className="form-control eforms_textarea_container"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    // placeholder="comment"
                    value={formik.values.comment}
                  />
                </div>
                {formik.errors.comment && formik.touched.comment && (
                  <small className="text-danger">{formik.errors.comment}</small>
                )}
              </div>
            </div>

            <div className="p-0 m-0 row w-100 text-center justify-content-start align-items-center">
              <div className="p-1 m-0 col-12 d-flex justify-content-start align-items-center">
                <div className="p-0 m-0 w-100 d-flex justify-content-start align-items-center">
                  {/* {isLoading ? (
                        <Loading />
                      ) : ( */}
                  <button type="submit" className="btn red_button w-100 py-2">
                    Send
                  </button>
                  {/* )} */}
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="p-0 m-0 pt-3 col-12 col-lg-4 px-3">
          <SpecialCarsCustomerWeb data={specialCars} />
        </div>
      </div>
    </div>
  );
};

export default TestDriveFrom;
