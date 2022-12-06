import { useFormik } from "formik";
import Link from "next/link";
import { useRef, useState } from "react";
import { FaCalculator, FaWindowClose } from "react-icons/fa";
import NumberFormat from "react-number-format";
import Select from "react-select";
import * as Yup from "yup";
import {
  reactSelectInputStyle,
  reactSelectInputStyleWhiteTheme,
} from "../../../../utils/common/react_select_styles";
import CategoryTitle from "../../layout/header/category_title";
import EformsHeader from "../../layout/header/eform_header";

const CalculatoreCustomerWeb = (props) => {
  const { sellPrice = undefined, modalMode } = props;
  const [results, setResults] = useState();
  const formik = useFormik({
    initialValues: {
      vehiclePrice: sellPrice ? +sellPrice : "",
      loanTerm: "",
      intRate: "",
      downPayment: "",
      tradeValue: "",
    },
    validationSchema: Yup.object({
      vehiclePrice: Yup.number("You must enter a number").required("Required"),
      loanTerm: Yup.mixed().required("Required").typeError("Required"),
      intRate: Yup.number("You must enter a number")
        .min(1, "must be more than 0")
        .max(100, "must be less than 100")
        .required("Required"),
    }),
    onSubmit: (values) => {
      const dowPay = isNaN(parseInt(values?.downPayment))
        ? 0
        : parseInt(values?.downPayment);
      const trdeVal = isNaN(parseInt(values?.tradeValue))
        ? 0
        : parseInt(values?.tradeValue);
      const totalDown = dowPay + trdeVal;
      let data = (
        (parseFloat(values?.intRate) / 1200 +
          parseFloat(values?.intRate) /
            1200 /
            (Math.pow(
              1 + parseFloat(values?.intRate) / 1200,
              parseInt(values?.loanTerm?.value)
            ) -
              1)) *
        (parseInt(values?.vehiclePrice) - (totalDown || 0))
      ).toFixed(2);
      setResults(data);
    },
  });
  const options = [
    {
      label: "12 Months",
      value: 12,
    },
    {
      label: "24 Months",
      value: 24,
    },
    {
      label: "36 Months",
      value: 36,
    },
    {
      label: "48 Months",
      value: 48,
    },
    {
      label: "60 Months",
      value: 60,
    },
    {
      label: "72 Months",
      value: 72,
    },
  ];

  return (
    <>
      <div></div>

      <div className="p-0 m-0 col-10  d-flex flex-column justify-content-center align-items-start calc_title">
        <h1 className="p-0 m-0  ">Payment Calculator</h1>
        <h4 className="p-0 m-0 py-3 ">
          Estimate your car loan payment with easy to use car loan calculator
        </h4>
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className="m-0 calc-form p-0 shadow-sm w-100 d-flex row align-items-start justify-content-start eforms_calculator_container"
      >
        <div className="col-12 m-0 p-0 calc-form-top d-flex  justify-content-between align-items-center eforms_calculator_header p-2">
          <div className="pt-1 d-flex justify-content-center align_items-center">
            <FaCalculator color="#252525" className="mt-1" />
            <b className="p-0 m-0 pl-1 ">Payment Calculator</b>
          </div>
          <div>
            {" "}
            <button
              className="btn text-center w-100"
              onClick={(e) => {
                e.preventDefault();
                formik.handleReset();
                setResults("");
              }}
              id="calculate"
            >
              <span className="p-0 m-0 ">
                <b className=" lable_style pr-2">Reset</b>
                <FaWindowClose color="#252525" />
              </span>
            </button>
          </div>
        </div>
        <div className="p-0 m-0 col-12 px-3  py-3  label_style_2">
          <div className="p-0 m-0 row w-100 justify-content-between">
            <div className="p-1 m-0 col-12 col-lg-5 m-2 ">
              <div className="p-0 m-0 form-group row  label_style_2">
                <label
                  for="vehiclePrice"
                  className="p-0 m-0 col-5 lable_style "
                >
                  Vehicle Price
                </label>
                <div className="col-lg-7 col-md-4 col-7 p-0 m-0 row">
                  <NumberFormat
                    onValueChange={(e) => {
                      formik.setFieldValue("vehiclePrice", e.floatValue);
                    }}
                    className="form-control eforms_input_container col-9"
                    id="vehiclePrice"
                    name="vehiclePrice"
                    // placeholder="Vehicle Price"
                    displayType={"number"}
                    thousandSeparator={true}
                    value={formik.values.vehiclePrice}
                    // prefix={"$ "}
                  />
                  <div className="col-3 p-0 m-0 d-flex justify-content-center align-items-center eforms_calculator_icons">
                    $
                  </div>
                </div>
                {formik.errors.vehiclePrice && (
                  <div
                    style={{
                      color: "#ce1431",
                    }}
                  >
                    {formik.errors.vehiclePrice}
                  </div>
                )}
              </div>
            </div>
            <div className="p-1 m-0 col-12 col-lg-5 m-2 ">
              <div className="p-0 m-0 form-group row ">
                <label for="downPayment" className="p-0 m-0 col-5 lable_style">
                  Down payment
                </label>
                <div className="col-lg-7 col-md-4 col-7 p-0 m-0 row">
                  <NumberFormat
                    onValueChange={(e) => {
                      formik.setFieldValue("downPayment", e.floatValue);
                    }}
                    className="form-control eforms_input_container col-9"
                    id="downPayment"
                    name="downPayment"
                    // placeholder="Down payment"
                    displayType={"number"}
                    thousandSeparator={true}
                    value={formik.values.downPayment}
                    prefix={"$ "}
                  />
                  <div className="col-3 p-0 m-0 d-flex justify-content-center align-items-center eforms_calculator_icons">
                    $
                  </div>
                </div>
                {formik.errors.downPayment && (
                  <div
                    style={{
                      color: "#ce1431",
                    }}
                  >
                    {formik.errors.downPayment}
                  </div>
                )}
              </div>
            </div>
            <div className="p-1 m-0 col-12 col-lg-5 m-2 ">
              <div className="p-0 m-0 form-group row">
                <label for="tradeValue" className="p-0 m-0 col-5 lable_style">
                  Your trade
                </label>
                <div className="col-lg-7 col-md-4 col-7 p-0 m-0 row">
                  <NumberFormat
                    onValueChange={(e) => {
                      formik.setFieldValue("tradeValue", e.floatValue);
                    }}
                    className="form-control eforms_input_container col-9"
                    id="tradeValue"
                    name="tradeValue"
                    // placeholder="Your trade"
                    displayType={"number"}
                    thousandSeparator={true}
                    value={formik.values.tradeValue}
                    // prefix={"$ "}
                  />
                  <div className="col-3 p-0 m-0 d-flex justify-content-center align-items-center eforms_calculator_icons">
                    $
                  </div>
                </div>
                {formik.errors.tradeValue && (
                  <div
                    style={{
                      color: "#ce1431",
                    }}
                  >
                    {formik.errors.tradeValue}
                  </div>
                )}
              </div>
            </div>

            <div className="p-1 m-0 col-12 col-lg-5 m-2 ">
              <div className="p-0 m-0 form-group row">
                <label for="loanTerm" className="p-0 m-0 col-5 lable_style">
                  Month Term
                </label>
                <Select
                  className="form-select w-100  eforms_input_select_container col-lg-7 col-md-4 col-7 p-0 m-0"
                  styles={reactSelectInputStyle}
                  options={options}
                  onChange={(e) => {
                    formik.setFieldValue("loanTerm", e);
                  }}
                  id="loanTerm"
                  name="loanTerm"
                  placeholder="36 Months"
                  value={formik.values.loanTerm}
                />

                {formik.errors.loanTerm && (
                  <div
                    style={{
                      color: "#252525",
                    }}
                  >
                    {formik.errors.loanTerm}
                  </div>
                )}
              </div>
            </div>
            <div className="p-1 m-0 col-12 col-lg-5 m-2 ">
              <div className="p-0 m-0 form-group row">
                <label for="loanTerm" className="p-0 m-0 col-5 lable_style">
                  Interest rate
                </label>
                <div className="col-lg-7 col-md-4 col-7 p-0 m-0 row">
                  <NumberFormat
                    onValueChange={(e) => {
                      formik.setFieldValue("intRate", e.floatValue);
                    }}
                    className="form-control eforms_input_container col-9"
                    id="intRate"
                    name="intRate"
                    // placeholder="Interest rate"
                    displayType={"number"}
                    value={formik.values.intRate}
                    onBlur={formik.handleBlur}
                    // prefix={"%"}
                    // maxLength={4}
                  />
                  <div className="col-3 p-0 m-0 d-flex justify-content-center align-items-center eforms_calculator_icons">
                    %
                  </div>
                </div>
                {formik.errors.intRate && formik.touched.intRate && (
                  <div
                    style={{
                      color: "#ce1431",
                    }}
                  >
                    {formik.errors.intRate}
                  </div>
                )}
              </div>
            </div>
            <div className="p-0 m-0 col-12 col-lg-5 m-2">
              <div className="p-0 m-0 row">
                <div className="p-1 m-0 col-12 row">
                  <p className="d-flex   col-7 p-0 m-0 ">Monthly Payment</p>
                  <div
                    className="col-5 p-0 m-0 d-flex align-items-center form-control "
                    style={{
                      backgroundColor: "#eee",
                      border: "none",
                      borderRadius: "0",
                    }}
                  >
                    <h5 className="d-flex row  p-0 m-0 justify-content-start align-items-start text-start">
                      <NumberFormat
                        value={results}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"$"}
                        renderText={(value, props) => (
                          <div {...props}>{value}</div>
                        )}
                      />
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-0 m-0 col-12 d-flex justify-content-center align-items-center">
              <div className="p-1 m-0 pt-2 col-12 col-lg-4">
                <button
                  type="submit"
                  className="btn gold_button_2  text-center w-100"
                >
                  <span className="p-0 m-0  ">Calculate Payment</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="text-center mt-5 ">
        <Link href="/forms/finance">
          <a className="p-3 gold_button_2  light-weight col-12 col-sm-6 col-md-5 col-lg-5">
            <span className="col-12 ">APPLY FOR FINANCING</span>
          </a>
        </Link>
      </div>
    </>
  );
};

export default CalculatoreCustomerWeb;
