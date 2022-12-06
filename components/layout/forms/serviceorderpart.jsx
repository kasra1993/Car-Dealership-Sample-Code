import { useFormik } from "formik";
import { useState } from "react";
import { ORDER_SERVICE_VALIDATION } from "../../../constant/formik/validation";
import { INITIAL_VALUES } from "../../../constant/order-service/order_service";
import {
  handleAddClick,
  handleInputChange,
  handleRemoveClick,
  onSubmit,
} from "../../../utils/order-service/order-service";
import { toast } from "react-toastify";
import { reactSelectInputStyle } from "../../../utils/common/react_select_styles";
import { calculateYear } from "../../../utils/common/calculate_year";
import Select from "react-select";
import EFormsHeaderComponent from "./e_forms_header";
import Loading from "../../common/web/loading/loading";
import PersonalInfo from "./personalinfo";
import SpecialCarsCustomerWeb from "./specialcars";
import EFormsHeaderSection from "../../common/web/eform-header/eforms_header_section";
import CategoryTitle from "../../common/layout/header/category_title";
import { FaPlusSquare, FaTrashAlt } from "react-icons/fa";
import EformsHeader from "../../common/layout/header/eform_header";
import { CDN_BASE_URL } from "../../../constant/base";

const ServiceOrderPartCustomerWeb = (props) => {
  const { domain, dealerData } = props;
  const { specialCars } = props;
  const [years] = useState(calculateYear);
  const [service, setService] = useState([{ part_name: "", comment: "" }]);
  const [isLoading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: () => ORDER_SERVICE_VALIDATION(),
    onSubmit: async (values, { resetForm }) => {
      if (
        service.length === 1 &&
        (service[0].part_name === "" || service[0].comment === "")
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
          setService([{ part_name: "", comment: "" }]);
          resetForm();
          return toast.success("successful");
        } else {
          return toast.error(message);
        }
      }
      return;
    },
  });

  return (
    <div className="p-0 m-0 w-100">
      <div className="p-0 m-0" style={{ position: "relative" }}>
        <div className="p-0 m-0 row w-100 ">
          {dealerData?.orderPart_image_url && (
            <div className="p-0 m-0 col-12">
              {" "}
              <img
                src={CDN_BASE_URL + dealerData?.orderPart_image_url}
                className="w-100 h-100 p-0 m-0 order_part_image_handler"
              />
            </div>
          )}
        </div>
        <div className="p-0 m-0 row w-100 header_title_position">
          <div className="p-0 m-0 col-1 col-md-3 form_head_background"></div>
          <div className="p-0 m-0 col-10 col-md-6">
            <EformsHeader title="Order Part" />
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
            <div className="p-4 m-0 mb-5 col-12 col-md-11 eforms_form_section_div__container">
              <div className="p-0 m-0 col-12">
                <div className="p-2 px-3 eforms_list_div__container">
                  <div className="p-0 m-0 d-flex w-100 justify-content-between align-items-center">
                    <div className="p-0 pt-3 m-0 w-100 d-flex justify-content-left align-items-center forms_title">
                      List
                    </div>
                    <button
                      type="button"
                      className="p-0 m-0 bg-transparent border-0"
                      onClick={() => {
                        handleAddClick(service, setService);
                      }}
                    >
                      <FaPlusSquare
                        style={{ color: "#fff", width: "20px", height: "20px" }}
                      />
                    </button>
                  </div>
                  <div className="p-0 m-0 mt-3 row">
                    {service?.map((item, index) => (
                      <div key={index} className="p-0 m-0 mb-2 col-12">
                        <div className="p-0 m-0 row align-items-center eform_list_inputs_div__container">
                          <div className="p-0 m-0 col-10 col-md-11">
                            <div className="p-1 m-0 d-flex row ">
                              <div className="form-group col-sm-12 p-0 m-0">
                                <input
                                  name="part_name"
                                  value={item.part_name}
                                  className="form-control eforms_input_select_container eform_list_input_req__container bg-transparent"
                                  placeholder="Part name"
                                  onChange={(e) =>
                                    handleInputChange(
                                      e,
                                      index,
                                      service,
                                      setService,
                                      formik
                                    )
                                  }
                                />
                              </div>
                              <div className="form-group col-12 p-0 m-0">
                                <input
                                  name="requested_service"
                                  className="form-control eforms_input_select_container eform_list_input_req__container bg-transparent"
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
                              <div className="form-group col-12 p-0 m-0">
                                <input
                                  name="comment"
                                  className="form-control eforms_input_select_container eform_list_input_com__container bg-transparent"
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
                              <i className="eform_list_trash_icon__style">
                                <FaTrashAlt />
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
                Vehicle Information
              </div>
              <div className="p-0 px-4 m-0 row justify-content-start align-items-start ">
                <div className="form-group  col-12 col-md-6 p-0 m-0 mt-2 mb-2 p-1">
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
                <div className="form-group  col-12 col-md-6 p-0 m-0 mt-2 mb-2 p-1">
                  <label className="eforms_label">Model</label>
                  <input
                    name="model"
                    className="form-control p-3 eforms_input_container"
                    // placeholder="Model"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.model}
                  />
                </div>
                <div className="form-group  col-12 col-md-6 p-0 m-0 mt-2 mb-2 p-1">
                  <label className="eforms_label">Year</label>
                  <Select
                    name="year"
                    className="form-select w-100 eforms_input_select_container"
                    // placeholder="Year"
                    options={years}
                    styles={reactSelectInputStyle}
                    onChange={(e) => {
                      formik.setFieldValue("year", e?.value);
                    }}
                  />
                  {formik.errors.year && formik.touched.year && (
                    <p className="text-danger">{formik.errors.year}</p>
                  )}
                </div>{" "}
                <div className="form-group  col-12 col-md-6 p-0 m-0 mt-2 mb-2 p-1">
                  <label className="eforms_label">Order No</label>
                  <input
                    name="orderNo"
                    className="form-control eforms_input_container"
                    // placeholder="Order No"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.orderNo}
                  />
                </div>
                <div className="form-group  col-12 col-md-6 p-0 m-0 mt-2 mb-2 p-1">
                  <label className="eforms_label">Requested Date</label>
                  <input
                    type="date"
                    name="requested_date"
                    className="form-control eforms_input_container"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.requested_date}
                  />
                  {formik.errors.requested_date &&
                    formik.touched.requested_date && (
                      <p className="text-danger">
                        {formik.errors.requested_date}
                      </p>
                    )}
                </div>
                <div className="form-group col-12 p-0 m-0 mt-2 mb-2 p-1">
                  <label className="eforms_label">Your Comment ...</label>
                  <textarea
                    name="comment"
                    className="form-control eforms_textarea_container"
                    // placeholder="Your Comment ..."
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    rows="5"
                    value={formik.values.comment}
                  />
                </div>
              </div>
              <div className="px-0 px-4 m-0 col-12 ">
                <PersonalInfo formik={formik} type={2} />
              </div>
              <div className="p-0 m-0 col-12 d-flex row align-items-center justify-content-end">
                <div className="col-12 mt-4">
                  {isLoading ? (
                    <Loading />
                  ) : (
                    <button type="submit" className="btn red_button w-100 py-2">
                      Submit
                    </button>
                  )}
                </div>
              </div>
            </div>
          </form>
        </div>
        {/* <div className="p-0 m-0 pt-3 col-12 col-lg-4 px-3">
          <SpecialCarsCustomerWeb data={dealerData?.specialData} />
        </div> */}
      </div>
    </div>
  );
};

export default ServiceOrderPartCustomerWeb;
