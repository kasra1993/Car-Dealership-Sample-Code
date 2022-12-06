import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { INITIAL_VALUES } from "../../../constant/service-appointment/service_appointment";
import { SERVICE_APPOINTMENT_VALIDATION } from "../../../constant/formik/validation";
import {
  handleAddClick,
  handleInputChange,
  handleRemoveClick,
  onSubmit,
} from "../../../utils/service-appointment/service_appointment";
import SpecialCarsCustomerWeb from "./specialcars";
import PersonalInfo from "./personalinfo";
import Select from "react-select";
import { reactSelectInputStyle } from "../../../utils/common/react_select_styles";
import { calculateYear } from "../../../utils/common/calculate_year";
import Loading from "../../common/web/loading/loading";
import CategoryTitle from "../../common/layout/header/category_title";
import {
  FaFax,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPlus,
  FaTrashAlt,
} from "react-icons/fa";
import FormDescription from "./form_description";
import EformsHeader from "../../common/layout/header/eform_header";
import { findScript } from "../../../utils/common/html_script";
import { CDN_BASE_URL } from "../../../constant/base";
import HouresOperation from "../../common/layout/footer/houresoperation";
import { phonenumberConvertor } from "../../../utils/common/phone_number_converter";
import Link from "next/link";
import ContactInfo from "../../common/web/contactinfo";

const ServiceAppintmentCustomerWeb = (props) => {
  const { specialCars, domain, dealerData } = props;
  const [isLoading, setLoading] = useState(false);
  const [years] = useState(calculateYear);
  useEffect(() => {
    calculateYear();
  }, []);
  const [service, setService] = useState([
    { requested_service: "", comment: "" },
  ]);

  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: () => SERVICE_APPOINTMENT_VALIDATION(),
    onSubmit: async (values, { resetForm }) => {
      if (
        service.length === 1 &&
        (service[0].requested_service === "" || service[0].comment === "")
      ) {
        formik.setFieldError("services", "Select atleast one service");
      } else {
        setLoading(true);
        const { data, status, message } = await onSubmit(
          values,
          service,
          domain
        );
        setLoading(false);
        if (status === 201) {
          toast.success("successful");
          setService([{ requested_service: "", comment: "" }]);
          resetForm();
        } else {
          toast.error(message);
        }
      }
      return;
    },
  });

  return (
    <div className="p-0 m-0 w-100">
      <div className="p-0 m-0" style={{ position: "relative" }}>
        {/* <div className="p-0 m-0 row w-100 ">
          {dealerData?.serviceApointment_image_url && (
            <div className="p-0 m-0 col-12">
              {" "}
              <img
                src={CDN_BASE_URL + dealerData?.serviceApointment_image_url}
                className="w-100 h-100 p-0 m-0"
              />
            </div>
          )}
        </div> */}
        <div className="p-0 m-0 row w-100 justify-content-start">
          <div className="p-0 m-0 d-flex   col-11 mt-4 px-md-4 px-0">
            <EformsHeader title="Book An Appointment" />
          </div>
        </div>
      </div>

      <div className="p-0 m-0 pb-5 w-100 row d-flex justify-content-center align-items-start">
        <div
          className={`p-0 m-0 px-1 px-md-3 px-lg-5 ${
            typeof otherFormik === "undefined" ? "col-12 col-lg-8" : "col-12"
          }`}
        >
          <form
            onSubmit={formik.handleSubmit}
            className="p-0 m-0 row w-100  px-3"
          >
            <div className="p-md-4 p-0 m-0 col-12 col-md-12 eforms_form_section_div__container finance_title">
              <div className="d-flex row justify-content-start align-items-start text-start col-12">
                {/* <EformsHeader title="Vehicle Information" /> */}
              </div>

              <div className="p-0 pt-3 m-0 w-100 d-flex justify-content-left align-items-center forms_title ">
                <h4>Vehicle Information</h4>
              </div>
              <div className="p-0 m-0 row justify-content-start align-items-center">
                <div className="form-group  col-12 col-md-6 p-0 m-0 pr-md-2 pr-0 mt-2 mb-2 p-1">
                  <label className="eforms_label">Make</label>
                  <input
                    name="make"
                    className="form-control eforms_input_container"
                    // placeholder="Make"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.make}
                  />
                </div>
                <div className="form-group  col-12 col-md-6 p-0 m-0 pl-md-2 pl-0 mt-2 mb-2 p-1">
                  <label className="eforms_label">Model</label>
                  <input
                    name="model"
                    className="form-control eforms_input_container"
                    // placeholder="Model"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.model}
                  />
                </div>
                <div className="form-group  col-12 col-md-6 p-0 pr-md-2 pr-0 m-0 mt-2 mb-2 p-1">
                  <label className="eforms_label">Year</label>
                  <Select
                    name="year"
                    className="form-select w-100 eforms_input_select_container"
                    placeholder=""
                    options={years}
                    styles={reactSelectInputStyle}
                    onChange={(e) => {
                      formik.setFieldValue("year", e?.value);
                    }}
                  />
                  {formik.errors.year && formik.touched.year && (
                    <p className="text-danger">{formik.errors.year}</p>
                  )}
                </div>
                <div className="form-group  col-12 col-md-6 p-0 m-0 mt-2 pl-md-2 prl0 mb-2 p-1">
                  <label className="eforms_label">Trim</label>
                  <input
                    name="trim"
                    className="form-control p-3 eforms_input_container"
                    // placeholder="Trim"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.trim}
                  />
                </div>{" "}
                <div className="form-group  col-12 col-md-6 p-0 m-0 mt-2 mb-2 pr-md-2 pr-0 p-1">
                  <label className="eforms_label">Date</label>
                  <input
                    type="date"
                    name="requested_date"
                    className="form-control p-3 eforms_input_select_container "
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.requested_date}
                  />
                </div>{" "}
                {formik.errors.requested_date &&
                  formik.touched.requested_date && (
                    <p className="text-danger text-left col-12">
                      {formik.errors.requested_date}
                    </p>
                  )}
                <div className="form-group col-12 col-md-12 p-0 m-0 mt-2 mb-2 pl-md-l pr-0 p-1">
                  <label className="eforms_label">Message</label>
                  <textarea
                    name="comments"
                    className="form-control eforms_textarea_container"
                    // placeholder="Message..."
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    rows="6"
                    value={formik.values.comments}
                  />
                </div>
              </div>
              <div className="p-0 pt-3 m-0 w-100 d-flex justify-content-left align-items-center forms_title">
                <h4>Requested Service(s)</h4>
              </div>

              <div className="p-0 m-0 col-12">
                <div className="p-0 m-0 eforms_list_div__container">
                  <div className="p-0 m-0 d-flex w-100 justify-content-between align-items-center text-white">
                    <CategoryTitle title="List" className="" type={2} />
                    <button
                      type="button"
                      className="p-0 m-0 bg-transparent border-0"
                      onClick={() => {
                        handleAddClick(service, setService);
                      }}
                    >
                      <FaPlus />
                    </button>
                  </div>
                  <div className="p-0 m-0 row">
                    {service?.map((item, index) => (
                      <div key={index} className="p-0 m-0 mb-2 col-12">
                        <div className="p-0 m-0 row align-items-center eform_list_inputs_div__container">
                          <div className="p-0 col-12 col-md-12">
                            <div className="p-1 m-0 d-flex row ">
                              <div className="form-group  col-12 col-md-6 p-0 m-0 mt-2 mb-2 pr-md-2 pr-0 p-0">
                                <input
                                  name="requested_service"
                                  className="form-control p-3 eforms_input_select_container"
                                  placeholder="Request Service"
                                  onBlur={formik.handleBlur}
                                  onChange={(e) =>
                                    handleInputChange(
                                      e,
                                      index,
                                      service,
                                      setService,
                                      formik
                                    )
                                  }
                                  value={item.requested_service}
                                />
                              </div>
                              <div className="form-group  col-12 col-md-6 p-0 m-0 pl-md-2 pl-0 mt-2 mb-2 p-0">
                                <input
                                  name="comment"
                                  className="form-control p-3 eforms_input_select_container"
                                  placeholder="Comment Service"
                                  onBlur={formik.handleBlur}
                                  onChange={(e) =>
                                    handleInputChange(
                                      e,
                                      index,
                                      service,
                                      setService,
                                      formik
                                    )
                                  }
                                  value={item.comment}
                                />
                                {formik.errors.services && (
                                  <p className="p-0 mt-1 mb-3 ml-3 text-danger">
                                    at least one service
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="text-center p-0 m-0 col-2 col-md-1">
                            <button
                              style={{ boxShadow: "none" }}
                              type="button"
                              className="btn p-0 m-0"
                              onClick={() => {
                                handleRemoveClick(index, service, setService);
                              }}
                            >
                              <i className="">
                                <FaTrashAlt color="#fff" />
                              </i>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-0 pt-3 m-0 w-100 d-flex justify-content-left align-items-center forms_title">
                <h4>Personal Info & Appointment</h4>
              </div>
              <div className="p-0 m-0 col-12 col-md-12 eforms_form_section_div__container">
                <PersonalInfo formik={formik} type={2} />
              </div>
              <div className="p-0 m-0 mt-4 col-12 d-flex row align-items-center justify-content-start">
                <div className="col-12 p-0 m-0 col-5 col-md-3 ">
                  {isLoading ? (
                    <Loading />
                  ) : (
                    <button
                      type="submit"
                      className="btn w-100 py-2 gold_button_2"
                    >
                      Book Service Now
                    </button>
                  )}
                </div>
              </div>
            </div>
          </form>
        </div>

        <ContactInfo data={dealerData} />
        <div className="m-0 p-0 col-8 col-lg-5 pr-3">
          <ContactInfo data={dealerData} />
        </div>

        {/* <div className="p-0 m-0 pt-3 col-12 col-lg-4 px-3">
          {typeof otherFormik === "undefined" && (
            <SpecialCarsCustomerWeb data={dealerData?.specialData} />
          )}
        </div> */}
      </div>
    </div>
  );
};

export default ServiceAppintmentCustomerWeb;
