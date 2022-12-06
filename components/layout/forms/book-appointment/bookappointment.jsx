import React, { useState } from "react";
import { CDN_BASE_URL } from "../../../../constant/base";
import { FaFacebookF, FaFax, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

import { useFormik } from "formik";
import { toast } from "react-toastify";
import Select from "react-select";
import { reactSelectInputStyle } from "../../../../utils/common/react_select_styles";
import PersonalInfo from "../personalinfo";
import SpecialCarsCustomerWeb from "../specialcars";
import { onSubmit } from "../../../../utils/book-appointment/book_appointment";
import Loading from "../../../common/web/loading/loading";
import { BOOKAPPOINMENT_INITIAL_VALUES } from "../../../../constant/bookappointment/bookappointment";
import { BOOK_APPOINTMENT_VALIDATION_SCHEMA } from "../../../../constant/formik/validation";
import EFormsHeaderSection from "../../../common/web/eform-header/eforms_header_section";
import CategoryTitle from "../../../common/layout/header/category_title";
import EformsHeader from "../../../common/layout/header/eform_header";
import EformsConatctInfo from "../../../common/web/eforms/eforms_contact_info";
import { findScript } from "../../../../utils/common/html_script";
import HeaderEforms from "../../../common/web/eform-header/header_eforms";
import Link from "next/link";
import { phonenumberConvertor } from "../../../../utils/common/phone_number_converter";
import FooterTitle from "../../../common/layout/footer/footer_title";
import HouresOperation from "../../../common/layout/footer/houresoperation";
import ContactInfo from "../../../common/web/contactinfo";

const BookAppointmentCustomerWeb = (props) => {
  const { specialCars, dealerData, domain } = props;
  const [isLoading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: BOOKAPPOINMENT_INITIAL_VALUES,
    validationSchema: BOOK_APPOINTMENT_VALIDATION_SCHEMA,
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      const { data, status, message } = await onSubmit(domain, values);
      setLoading(false);
      if (status === 201) {
        toast.success("successful");
        resetForm();
      } else {
        toast.error(message);
      }
    },
  });
  return (
    <div className="p-0 m-0 w-100 pt-5">
      <div className="p-0 m-0" style={{ position: "relative" }}>
        {/* <div className="p-0 m-0 row w-100 ">
          {dealerData?.bookApointment_image_url && (
            <div className="p-0 m-0 col-12">
              {" "}
              <img
                src={CDN_BASE_URL + dealerData?.bookApointment_image_url}
                className="w-100 h-100 p-0 m-0"
              />
            </div>
          )}
        </div> */}
        <div className="p-0 m-0 row w-100 justify-content-start pl-lg-5 ml-3">
          <EformsHeader title="Book Appointment" />
        </div>
      </div>

      <div className="p-0 m-0 pb-5 w-100 row d-flex justify-content-start align-items-start finance_title">
        <div
          className={`p-0 m-0 px-1  px-lg-5 ${
            typeof otherFormik === "undefined"
              ? "col-12 col-lg-7 col-md-11"
              : "col-12"
          }`}
        >
          {" "}
          <form
            onSubmit={formik.handleSubmit}
            className="p-0 m-0 row w-100  px-3"
          >
            <div className="p-0 pt-3 m-0 w-100 d-flex justify-content-left align-items-center forms_title">
              <h4>Personal Information</h4>
            </div>

            <PersonalInfo formik={formik} />
            <div className="p-0 pt-3 m-0 w-100 d-flex justify-content-left align-items-center forms_title">
              <h4>Contact Information</h4>
            </div>
            <div className="form-group col-12 col-md-6  d-flex justify-content-center p-0 m-0 mt-2 p-1">
              <div className="w-100 col-12 p-0 pr-md-2 pr-0 m-0">
                <div className=" w-100  p-0 m-0">
                  <label className="eforms_label">Method of contact</label>
                  <Select
                    name="type"
                    className="form-select eforms_input_select_container"
                    // placeholder="Method of contact"
                    options={[
                      { label: "cell phone", value: 1 },
                      { label: "work phone", value: 2 },
                      { label: "home phone", value: 3 },
                      { label: "email", value: 4 },
                    ]}
                    styles={reactSelectInputStyle}
                    onChange={(e) => {
                      formik.setFieldValue("method_of_contact", +e.value);
                    }}
                  />
                </div>
              </div>
              {formik.errors.method_of_contact &&
                formik.touched.method_of_contact && (
                  <small className="text-danger">
                    {formik.errors.method_of_contact}
                  </small>
                )}
            </div>
            <div className="form-group col-12 col-md-6  d-flex justify-content-center p-0 m-0 mt-2 p-1">
              <div className="w-100 col-12 p-0 m-0 pl-md-2 pl-0">
                <div className=" w-100  p-0 m-0">
                  <label className="eforms_label">Request date</label>
                  <input
                    type="date"
                    name="requested_date"
                    id="requested_date"
                    className="form-control eforms_input_container"
                    {...formik.getFieldProps("requested_date")}
                  />
                </div>
              </div>
              {formik.errors.requested_date &&
                formik.touched.requested_date && (
                  <small className="text-danger">
                    {formik.errors.requested_date}
                  </small>
                )}
            </div>

            <div className="form-group col-12 d-flex justify-content-center p-0 m-0 mt-2 p-1">
              <div className="w-100 col-12 p-0 m-0 pr-md-2 pr-0">
                <div className=" w-100  p-0 m-0">
                  <label className="eforms_label">Additional...</label>
                  <textarea
                    id="comment"
                    name="comment"
                    className="form-control eforms_textarea_container"
                    // placeholder="Additional..."
                    rows="4"
                    cols="50"
                    {...formik.getFieldProps("comment")}
                  />
                </div>
              </div>
              {formik.errors.comment && formik.touched.comment && (
                <small className="text-danger">{formik.errors.comment}</small>
              )}
            </div>

            <div className="p-0 m-0 row w-100 text-start justify-content-start align-items-start">
              <div className="p-1 m-0 col-12 d-flex justify-content-start align-items-start">
                <div className="p-0 m-0 w-100 d-flex justify-content-center align-items-center col-4 col-md-3 col-sm-5">
                  {isLoading ? (
                    <Loading />
                  ) : (
                    <button type="submit" className="btn w-100 gold_button">
                      Submit
                    </button>
                  )}
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="m-0 p-0 col-12 col-sm-8 col-lg-5 pr-3">
          <ContactInfo data={dealerData} />
        </div>

        {/* <div
          className="p-0 m-0   col-lg-4 col-md-8 col-11 pl-xl-5 pl-2  px-3 text-start text_title"
          style={{ color: "black" }}
        >
          <h4 className="py-2">Contact Information</h4>
          <div className=" p-0 m-0  d-flex py-2  justlfy-content-center align-items-center ">
            <FaPhoneAlt color="#282829" size={14} className="" /> &nbsp;
            <strong>Phone:</strong>
            <a
              href={phonenumberConvertor(dealerData?.business_phone)}
              rel="noopener noreferrer"
              className="p-0 m-0 text-decoration-none px-2 "
              style={{ color: "#000" }}
            >
              {dealerData?.business_phone}
            </a>
          </div>
          <div className=" p-0 m-0  d-flex py-2  justlfy-content-center align-items-center ">
            <FaPhoneAlt color="#282829" size={14} className="" />
            &nbsp;
            <strong>Phone:</strong>
            <a
              href={phonenumberConvertor(dealerData?.business_phone2)}
              rel="noopener noreferrer"
              className="p-0 m-0 text-decoration-none px-2 "
              style={{ color: "#000" }}
            >
              {dealerData?.business_phone2}
            </a>
          </div>
          <div className=" p-0 m-0  d-flex py-2  justlfy-content-center align-items-center ">
            <FaFax color="#282829" size={14} className="" />
            &nbsp;
            <strong>Fax:</strong>
            <a
              rel="noopener noreferrer"
              className="p-0 m-0 text-decoration-none px-2 "
              style={{ color: "#000" }}
            >
              {dealerData?.business_fax}
            </a>
          </div>
          <div className=" p-0 m-0  d-flex flex-column py-2 pb-4  justlfy-content-start align-items-start ">
            <div className="p-0 m-0 d-flex">
              <FaMapMarkerAlt className="" size={14} />
              &nbsp;
              <strong className="d-block">Address</strong>
            </div>

            <p className="p-0 m-0  p-2  d-block  ">
              <span>
                {dealerData?.business_street}
                {", "}
                {dealerData?.business_city?.city}
                {", "}
                {dealerData?.business_city?.Province?.province ===
                "British Columbia"
                  ? "BC"
                  : dealerData?.business_city?.Province?.province}
                {", "}
                {dealerData?.business_postal}
              </span>
            </p>
          </div>

          <div
            className="p-0 m-0 privacy_title text-start"
            style={{ color: "black" }}
          >
            <HouresOperation timeWorke={dealerData?.timeWork} />
          </div>
          <div className="p-0 m-0  d-flex py-2 px-3  justlfy-content-center align-items-center">
            <Link href="/direction">
              <a>
                <button type="submit" className="btn gold_button w-100">
                  Get Direction
                </button>
              </a>
            </Link>
          </div>
        </div> */}
        {/* <div className="p-0 m-0 pt-3 col-12 col-lg-4 px-3">
          {typeof otherFormik === "undefined" && (
            <SpecialCarsCustomerWeb data={dealerData?.specialData} />
          )}
        </div> */}
      </div>
    </div>
  );
};
export default BookAppointmentCustomerWeb;
