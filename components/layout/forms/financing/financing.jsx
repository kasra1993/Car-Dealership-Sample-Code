import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Thumbs, Autoplay } from "swiper";
import { FormikConsumer, useFormik } from "formik";
import { toast } from "react-toastify";
import Head from "next/head";
import { useRouter } from "next/router";
import { useRef } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import {
  getBodyStyle,
  onSubmit,
} from "../../../../utils/fainancial/fainancial";
import {
  CURRENT_ADDRESS,
  INITIAL_VALUES,
  USER_CURRADDR_DURATION_YEAR,
  USER_EMPLOYMENT_OPTIONS,
  USER_EMP_DURATION_YEAR,
  USER_PLEASE_RATE_YOUR_CREDIT_OPTIONS,
} from "../../../../constant/fainancial/fainancial";
import { FINANCIAL_VALIDATION_SCHEMA } from "../../../../constant/formik/validation";
import PersonalInfo from "../personalinfo";
import FinancialCurrntAddress from "./finance_current_address";
import { useGetAllCitiesWithDetail } from "../../../../hooks/city/useGetAllCitiesWithDetail";
import Pagination from "react-bootstrap/Pagination";
import { reactSelectInputStyle } from "../../../../utils/common/react_select_styles";
import FinancialCurrentEmployment from "./finance_current_employment";
import FinancialCurrentAddress from "./finance_current_address";

SwiperCore.use([Navigation, Thumbs, Autoplay]);

const Financing = (props) => {
  const {
    domain,
    advanceSearchData,
    dealerData,
    vehicleDataForSearch,
    homepath,
  } = props;
  const router = useRouter();
  const { options: cityOptions } = useGetAllCitiesWithDetail();
  const { query } = useRouter();
  const [isLoading, setLoading] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [bodyStyleId, setBodyStyleId] = useState();
  const [currentStep, setCurrentStep] = useState(1);

  const [income, setIncome] = useState();
  const [budget, setBudget] = useState();
  const [credit, setCredit] = useState();
  const [employOption, setEmployOption] = useState();
  const [deurationYear, setDeurationYear] = useState();
  const [deurationCurrYear, setDeurationCurrYear] = useState();
  const [currAddressYear, setCurrAddressYear] = useState();
  const [state, setState] = useState();
  // const [state, setState] = useState(
  //   (typeof window !== "undefined" &&
  //     JSON.parse(localStorage.getItem("financial"))) ||
  //     {}
  // );
  const nextHandling = () => {
    if (currentStep >= 1 && currentStep !== 10) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setCurrentStep(currentStep);
    }
  };
  const backHandling = () => {
    if (currentStep === 1) {
      setCurrentStep(1);
    } else {
      setCurrentStep((prev) => prev - 1);
    }
  };
  const styles = getBodyStyle().data;

  const image_array = [
    {
      id: 6,
      name: "Truck",
      src: "/images/eforms/truck.jpg",
      style: "Truck_style",
    },
    {
      id: 7,
      name: "SUV",
      src: "/images/eforms/suv.jpg",
      style: "SUV_style",
    },
    {
      id: 8,
      name: "Car",
      src: "/images/eforms/car.jpg",
      style: "Sedan_style",
    },
    {
      id: 9,
      name: "Van",
      src: "/images/eforms/van.jpg",
      style: "VAN_style",
    },
  ];
  const cars = dealerData?.bodyStyle?.filter((element) => {
    return (
      element.name === "VAN" ||
      element.name === "SUV" ||
      element.name === "Truck" ||
      element.name === "Sedan"
    );
  });
  const [activeindex, setActiveIndex] = useState(0);
  const slideImage = {
    width: "350",
    opacity: "0.5",
  };
  const activeImage = {
    width: "350",
    transform: "scale(2,2)",
  };
  const formik = useFormik({
    initialValues: INITIAL_VALUES(query),
    validationSchema: () => FINANCIAL_VALIDATION_SCHEMA(),
    //  () => ({}),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      const { data, status, message } = await onSubmit(
        values,
        domain,
        bodyStyleId,
        budget,
        credit,
        employOption,
        deurationYear,
        deurationCurrYear,
        currAddressYear
      );
      setLoading(false);
      if (status === 201) {
        resetForm();
        return toast.success(message);
      } else if (status === 200) {
        resetForm();
        return toast.success(message);
      } else if (status === 401) {
        showPersonal(true);
        return toast.error(message);
      } else {
        return toast.error(message);
      }
    },
    enableReinitialize: true,
  });
  const OnClick = (page) => {
    if (currentStep === page) {
    } else {
      setCurrentStep(page);
    }
  };

  // useEffect(() => {
  //   if (state) {
  //     localStorage.setItem("financial", JSON.stringify(state));
  //   }
  // }, [state]);
  const handleChange = (step, stepname) => {
    setState((prev) => ({
      ...prev,
      [stepname]: step,
    }));
  };
  const prevref = useRef(null);
  const nextref = useRef(null);

  return (
    <>
      {/* <Head>
        <title>
          {dealerData?.business_city?.city}{" "}
          {dealerData?.business_city?.Province?.Country?.country} Financing
          Application ( Online Car Loan Application ) |{" "}
          {dealerData?.bussiness_name}
        </title>
        <meta
          name="description"
          content={`Use the ${dealerData?.bussiness_name} site to apply for a new or used car loan online or refinance your existing auto loan.`}
        />
        <meta name="keywords" content="online car loan application" />
      </Head> */}
      <div className="p-0 pt-0 m-0 w-100">
        <div className="p-0 px-1 px-md-3 px-lg-5 m-0 w-100 row d-row">
          <div className="p-0 pb-3 m-0 col-12 col-lg-12 col-xl-12">
            <form
              onSubmit={formik.handleSubmit}
              className="p-0 p-sm-2 p-sm-4 m-0 row w-100 finance_form_container"
            >
              <div className="d-flex justify-content-center flex-wrap w-100  py-5">
                {currentStep === 1 && (
                  <>
                    <div className="col-12 text-center mb-5 w-100 d-flex  flex-column justify-content-center align-items-center">
                      <h4 style={{ color: "#48932b" }}>
                        <b>Step One: Select a vehicle</b>
                      </h4>
                    </div>
                    <Swiper
                      breakpoints={{
                        300: {
                          slidesPerView: 1,
                        },
                        600: {
                          slidesPerView: 2,
                        },
                        720: {
                          slidesPerView: 4,
                        },
                      }}
                      // initialSlide={Math.round(image_array.length / 2) - 1}
                      // centeredSlides
                      onInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevref.current;
                        swiper.params.navigation.nextEl = nextref.current;
                        swiper.navigation.update();
                      }}
                      onSlideChange={(props) => {
                        setActiveIndex(props.activeIndex);
                      }}
                      style={{
                        "--swiper-navigation-color": "#000",
                        "--swiper-pagination-color": "#fff",
                        position: "relative",
                      }}
                      navigation={{
                        prevEl: prevref.current ? prevref.current : ".prev",
                        nextEl: nextref.current ? nextref.current : ".next",
                        disabledClass: "swiper-button-prev,swiper-button-next",
                      }}
                      className="p-0 m-0 row mySwiper2"
                      // navigation={true}

                      autoplay={{
                        delay: 5000,
                        // disableOnInteraction: false,
                      }}
                      // loop={true}
                    >
                      {image_array.map((item, index) => (
                        <>
                          <SwiperSlide>
                            <div className="p-0 m-0 w-100 row align-items-center justify-content-center ">
                              <div className="p-0 m-0 col-12 col-lg-12  d-flex flex-column align-items-center justify-content-center">
                                <button
                                  className="finance_button px-4 py-5"
                                  onClick={() => {
                                    setBodyStyleId(item.id);
                                    // OnClick(2);
                                    handleChange(item.id, "car");
                                  }}
                                >
                                  <div style={{ width: "150px" }}>
                                    <img src={item.src} className="w-100" />
                                  </div>
                                </button>
                                <div className="py-2 text-center">
                                  {" "}
                                  {item.name}
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        </>
                      ))}
                    </Swiper>

                    {/* <div className="p-0 pt-5 pt-sm-0 m-0 row w-100 justify-content-center align-items-center">
                      <div
                        className={`p-0 p-sm-3 m-1 ${
                          activeindex === 0 ? "active_car" : "nonActive_car"
                        }`}
                      >
                        <button
                          type="button"
                          autoFocus={true}
                          className="finance_button px-4 py-5"
                        >
                          <div style={{ width: "150px" }}>
                            <img
                              src="/images/eforms/truck.jpg"
                              className="w-100"
                            />
                          </div>
                        </button>
                        <div className="py-2 text-center"> TRUCK</div>
                      </div>
                      <div
                        className={`p-0 p-sm-3 m-1 ${
                          activeindex === 1 ? "active_car" : "nonActive_car"
                        }`}
                      >
                        <button className="finance_button px-4 py-5">
                          <div style={{ width: "150px" }}>
                            <img
                              src="/images/eforms/suv.jpg"
                              className="w-100"
                            />
                          </div>
                        </button>
                        <div className="py-2 text-center"> SUV</div>
                      </div>
                      <div
                        className={`p-0 p-sm-3 m-1 ${
                          activeindex === 2 ? "active_car" : "nonActive_car"
                        }`}
                      >
                        <button className="finance_button px-4 py-5">
                          <div style={{ width: "150px" }}>
                            <img
                              src="/images/eforms/car.jpg"
                              className="w-100"
                            />
                          </div>
                        </button>
                        <div className="py-2 text-center"> Car</div>
                      </div>
                      <div
                        className={`p-0 p-sm-3 m-1 ${
                          activeindex === 3 ? "active_car" : "nonActive_car"
                        }`}
                      >
                        <button className="finance_button px-4 py-5">
                          <div style={{ width: "150px" }}>
                            <img
                              src="/images/eforms/van.jpg"
                              className="w-100"
                            />
                          </div>
                        </button>
                        <div className="py-2 text-center"> Van</div>
                      </div>
                    </div> */}
                  </>
                )}
                {currentStep === 2 && (
                  <>
                    <div className="p-0 m-0 w-100 row justify-content-center align-items-center">
                      <div className="p-0 m-0 col-12 col-md-7 finance_wizard_size">
                        <div className="col-12 text-center mb-4 w-100">
                          <h4 style={{ color: "#48932b" }}>
                            <b> Step Two: Contact Information</b>
                          </h4>
                        </div>
                        <div className="p-0 m-0 mb-3 mb-lg-2 col-12">
                          <div className="p-0 m-0 row w-100">
                            <div
                              className={`form-group col-12 col-sm-6 p-0 m-0 mt-2 mb-2 p-1`}
                            >
                              <label>First Name</label>
                              <input
                                name="firstName"
                                className="form-control  eforms_input_container"
                                placeholder=""
                                onChange={(e) => {
                                  formik.handleChange(e);
                                  handleChange(e.target.value, "firstname");
                                }}
                                onBlur={formik.handleBlur}
                                value={formik.values.firstName}
                              />
                              {formik.errors.firstName &&
                                formik.touched.firstName && (
                                  <small className="text-danger">
                                    {formik.errors.firstName}
                                  </small>
                                )}
                            </div>
                            <div
                              className={`form-group col-12 col-sm-6 p-0 m-0 mt-2 mb-2 p-1`}
                            >
                              <label>Last Name</label>
                              <input
                                name="lastName"
                                className="form-control eforms_input_container"
                                placeholder=""
                                onChange={(e) => {
                                  formik.handleChange(e);
                                  handleChange(e.target.value, "lastname");
                                }}
                                onBlur={formik.handleBlur}
                                value={formik.values.lastName}
                              />
                              {formik.errors.lastName &&
                                formik.touched.lastName && (
                                  <small className="text-danger">
                                    {formik.errors.lastName}
                                  </small>
                                )}
                            </div>
                            <div
                              className={`form-group col-12 col-sm-6 p-0 m-0 mt-2 mb-2 p-1`}
                            >
                              <label>Email</label>
                              <input
                                name="email"
                                className="form-control eforms_input_container"
                                placeholder=""
                                onChange={(e) => {
                                  formik.handleChange(e);
                                  handleChange(e.target.value, "email");
                                }}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                              />
                              {formik.errors.email && formik.touched.email && (
                                <small className="text-danger">
                                  {formik.errors.email}
                                </small>
                              )}
                            </div>
                            <div
                              className={`form-group col-12 col-sm-6 p-0 m-0 mt-2 mb-2 p-1`}
                            >
                              <label>Phone</label>
                              <input
                                name="phone"
                                className="form-control eforms_input_container"
                                placeholder=""
                                onChange={(e) => {
                                  formik.handleChange(e);
                                  handleChange(e.target.value, "phone");
                                }}
                                onBlur={formik.handleBlur}
                                value={formik.values.phone}
                              />
                              {formik.errors.phone && formik.touched.phone && (
                                <small className="text-danger">
                                  {formik.errors.phone}
                                </small>
                              )}
                            </div>
                            <>
                              <div
                                className={`form-group col-12 col-sm-6 p-0 m-0 mt-2 mb-2 p-1`}
                              >
                                <lable>Date Of Birth</lable>
                                <input
                                  type="text"
                                  onFocus={(e) => (e.target.type = "date")}
                                  name="user_birthday"
                                  className="form-control eforms_input_container"
                                  placeholder=""
                                  onChange={(e) => {
                                    formik.handleChange(e);
                                    handleChange(e.target.value, "birth");
                                  }}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.user_birthday}
                                />
                              </div>
                            </>
                          </div>
                          {/* <PersonalInfo formik={formik} complete /> */}
                          <div className="d-flex justify-content-center">
                            <button
                              // type="submit"
                              className="btn mr-1 w-50 w-md-50 red_button text-center"
                              // onClick={() => {
                              //   typeof window !== "undefined" &&
                              //     localStorage.removeItem("financial");
                              // }}
                              onClick={backHandling}
                            >
                              Previous
                            </button>
                            <button
                              // type="submit"
                              className="btn w-50 w-md-50 red_button text-center"
                              // onClick={() => {
                              //   typeof window !== "undefined" &&
                              //     localStorage.removeItem("financial");
                              // }}
                              onClick={nextHandling}
                              disabled={
                                !(
                                  formik.values.phone &&
                                  formik.values.firstName &&
                                  formik.values.lastName &&
                                  formik.values.email &&
                                  formik.values.user_birthday
                                )
                              }
                            >
                              Next
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                {currentStep === 3 && (
                  <>
                    <div className="p-0 m-0 w-100 row justify-content-center align-items-center">
                      <div className="p-0 m-0 col-12 col-md-7 finance_wizard_size">
                        <div className="col-12 text-center mb-4 w-100">
                          <h4 style={{ color: "#48932b" }}>
                            <b>Step Three: Employment Information</b>
                          </h4>
                        </div>
                        <FinancialCurrentEmployment formik={formik} />
                        <div className="d-flex justify-content-center">
                          <button
                            className="btn mr-1 w-50 w-md-50 red_button text-center"
                            onClick={backHandling}
                          >
                            Previous
                          </button>
                          <button
                            className="btn w-50 w-md-50 red_button text-center"
                            onClick={nextHandling}
                            disabled={
                              !(
                                formik.values.user_curr_employer &&
                                formik.values.user_curr_emp_occupation &&
                                formik.values.user_curr_emp_Duration_year &&
                                formik.values.user_curr_emp_income
                              )
                            }
                          >
                            Next
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {currentStep === 4 && (
                  <>
                    <div className="p-0 m-0 w-100 row justify-content-center align-items-center">
                      <div className="p-0 m-0 col-12 col-md-7 finance_wizard_size">
                        <div className="col-12 text-center mb-4 w-100">
                          <h4 style={{ color: "#48932b" }}>
                            <b> Step Four: Residential Information</b>
                          </h4>
                        </div>
                        <FinancialCurrentAddress formik={formik} />
                        <div className="d-flex justify-content-center">
                          <button
                            className="btn mr-1 w-50 w-md-50 red_button text-center"
                            onClick={backHandling}
                          >
                            Previous
                          </button>
                          <button
                            type="submit"
                            className="btn w-50 w-md-50 red_button text-center"
                            disabled={
                              !(
                                formik.values.user_currAddr &&
                                formik.values.user_currAddr_postalcode &&
                                formik.values.province &&
                                formik.values.user_currAddr_Duration_year &&
                                formik.values.user_currAddr_home_status &&
                                formik.values.user_currAddr_monthly_payment
                              )
                            }
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div
                className="p-0 pt-4 m-0 d-flex justify-content-center"
                style={{ width: "100%" }}
              >
                {currentStep === 1 ? (
                  <div className="p-1 m-0 mt-3 col-8 col-md-4 text-center">
                    <button
                      className="btn red_button w-100"
                      onClick={() => {
                        OnClick(2);
                      }}
                    >
                      Next
                    </button>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Financing;
