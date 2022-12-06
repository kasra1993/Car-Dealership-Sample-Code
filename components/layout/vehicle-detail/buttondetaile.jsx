import { useFormik } from "formik";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CloseButton, Modal } from "react-bootstrap";
import CalculatoreCustomerWeb from "../../common/web/calculator/calculator";
import * as Yup from "yup";
import {
  FaDollarSign,
  FaMapMarker,
  FaCalculator,
  FaMap,
  FaPhone,
  FaUniversity,
  FaCar,
  FaInfoCircle,
  FaPhoneAlt,
  FaMicrophoneAlt,
} from "react-icons/fa";
import { MdTextsms } from "react-icons/md";
import GetMoreInformation from "./get_more_information";
import NumberFormat from "react-number-format";
import { priceComma } from "../../../utils/common/price_odometer_handler";
import { phonenumberConvertor } from "../../../utils/common/phone_number_converter";

const ButtonDetaileProduct = (props) => {
  const { dealerData, domain, data, vehicleData } = props;
  const [confirm, setConfirm] = useState(false);
  const [loanTerm, setLoanTerm] = useState();
  const [intRate, setIntRate] = useState();
  const [downPayment, setDownPayment] = useState();
  const [tradeValue, setTradeValue] = useState();
  const [modal, setModal] = useState(false);
  const [location, setLocation] = useState();
  const [token, setToken] = useState("");
  const [results, setResults] = useState();
  const [information, setInformation] = useState();

  const [calculate, setCalculate] = useState();
  const calc = () => {
    let data = (
      (parseFloat(intRate) / 1200 +
        parseFloat(intRate) /
          1200 /
          (Math.pow(1 + parseFloat(intRate) / 1200, parseInt(loanTerm)) - 1)) *
      (parseInt(vehiclePrice) -
        (parseInt(downPayment) + parseInt(tradeValue) || 0))
    ).toFixed(2);
    setResults(data);
  };
  const getToken = () => {
    return localStorage.getItem("token");
  };
  useEffect(() => {
    setToken(getToken());
  }, []);

  const formik = useFormik({
    initialValues: {
      dealershld: 1,
      f_name: "",
      l_name: "",
      mobile: "",
      message: "",
      email: "",
      status: 1,
    },
    validationSchema: Yup.object({
      dealershld: Yup.number(),
      f_name: !token && Yup.string().required(),
      l_name: !token && Yup.string().required(),
      email: !token && Yup.string().email().required(),
      mobile: !token && Yup.number().required(),
      message: !token && Yup.string().required(),
    }),
    onSubmit: submitHandler,
  });

  async function submitHandler(values) {
    const token = getToken();
    const config = token
      ? {
          Headers: {
            Authorization: token,
          },
        }
      : undefined;

    try {
      const res = await agent.contactUs.post(values, config);
    } catch (err) {
      console.log(err);
    }
  }
  const showmodal = () => {
    setModal(true);
  };
  const modallocationClose = () => {
    setLocation(false);
  };
  const modalcalculatorClose = () => {
    setCalculate(false);
  };
  const modalCloseHandle = () => {
    setModal(false);
  };
  const modalInformationClose = () => {
    setInformation(false);
  };
  return (
    <>
      <Modal
        show={modal}
        onHide={modalCloseHandle}
        size="xl"
        onSubmit={formik.handleSubmit}
        onClick={formik.handleSubmit}
      >
        <Modal.Header
          style={{ color: "#2a2b2b" }}
          className="vehicle_modal_header-style border-1"
        >
          <Modal.Title>Request Information</Modal.Title>
          <CloseButton
            onClick={() => {
              modalCloseHandle();
            }}
          />
        </Modal.Header>
        <Modal.Body>
          {!token && (
            <div className="d-flex row justify-content-center align-items-center text-center col-12 m-0">
              <div className="col-12 col-md-6 p-0 pr-1">
                <input
                  style={{ borderColor: "#2a2b2b" }}
                  id="f_name"
                  name="f_name"
                  type="text"
                  className={`form-control  my-1 ${
                    formik.touched.f_name && formik.errors.f_name
                  } border-3`}
                  placeholder="Your First Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.f_name}
                />
              </div>
              <div className="col-12 col-md-6 my-1 p-0">
                <input
                  style={{ borderColor: "#2a2b2b" }}
                  id="l_name"
                  name="l_name"
                  type="text"
                  className={`form-control ${
                    formik.touched.l_name && formik.errors.l_name
                  } border-3`}
                  placeholder="Your Last Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.l_name}
                />
              </div>
            </div>
          )}
          {!token && (
            <div className="d-flex row justify-content-center align-items-center text-center col-12 m-0">
              <div className="col-12 col-md-6 my-1 p-0 pr-1">
                <input
                  id="email"
                  name="email"
                  type="text"
                  className={`form-control ${
                    formik.touched.email && formik.errors.email
                  } border-3`}
                  placeholder="Your Email"
                  style={{ borderColor: "#2a2b2b" }}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
              </div>
              <div className="col-12 col-md-6 my-1 p-0">
                {/* <NumberFormat
                  prefix="+"
                  format="+# (###) ###-####"
                  mask="_"
                  allowEmptyFormatting={false}
                  onValueChange={(e) => {
                    formik.setFieldValue("mobile", e.value);
                  }}
                  placeholder="Cell Phone Number"
                  onBlur={formik.handleBlur}
                  name="mobile"
                  id="mobile"
                  className={`form-control ${
                    formik.touched.mobile && formik.errors.mobile
                  } border-3`}
                  value={formik.values.mobile}
                /> */}
                <input
                  id="mobile"
                  name="mobile"
                  type="text"
                  style={{ borderColor: "#2a2b2b" }}
                  className={`form-control ${
                    formik.touched.mobile && formik.errors.mobile
                  } border-3`}
                  placeholder="Your mobile"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.mobile}
                />
              </div>
            </div>
          )}
          <div className="col-12">
            <textarea
              style={{ borderColor: "#2a2b2b" }}
              id="message"
              name="message"
              rows={6}
              className="form-control w-100 h-100 border-3"
              placeholder="Some Text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
            />
          </div>
          <div className="p-0 m-0 mt-4 col-12 d-flex row align-items-center justify-content-start">
            <div className="col-12 d-flex row align-items-center justify-content-start">
              <input
                type="checkbox"
                name="confirmation"
                checked={confirm}
                value={confirm}
                id="confirmation"
                className="col-1 d-flex align-items-center justify-content-end"
                onChange={() => {
                  setConfirm((prev) => {
                    if (prev === false) {
                      formik.setFieldError("confirm", false);
                    }
                    return !prev;
                  });
                }}
              />
              <label
                className="col-11 d-flex align-items-center justify-content-start pl-0 mb-0"
                style={{ wordWrap: "break-word", color: "#2a2b2b" }}
              >
                Disclaimer : By submitting this application , you authorize us
                to run your credit report.
              </label>
              {formik.errors.confirm && (
                <p className="p-0 mt-1 mb-3 ml-3 text-danger">Accept rules</p>
              )}
            </div>
            <div className="col-12 mt-4">
              <button
                type="submit"
                className="btn pl-4 pr-4 pt-1 pb-1 d-flex col-12 text-center align-items-center justify-content-center"
                style={{
                  backgroundColor: "#ce1431",
                  color: "#f6fbff",
                }}
                disabled={confirm ? false : true}
              >
                Submit
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal
        onHide={modalcalculatorClose}
        show={calculate}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {/* <Modal.Header
          style={{ color: "#2a2b2b", backgroundColor: "#f4f4f4" }}
          className="vehicle_modal_header-style border-1"
        >
          <Modal.Title>Calculate Your Auto Loan Payment:</Modal.Title>
        
        </Modal.Header> */}
        <Modal.Body style={{ color: "#2a2b2b", backgroundColor: "#f4f4f4" }}>
          <CloseButton
            onClick={() => {
              modalcalculatorClose();
            }}
          />
          <CalculatoreCustomerWeb data={props} />
        </Modal.Body>
      </Modal>
      <Modal
        show={location}
        onHide={modallocationClose}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="vehicle_modal_header-style border-1">
          <Modal.Title>Location</Modal.Title>
          <CloseButton
            onClick={() => {
              modallocationClose();
            }}
          />
        </Modal.Header>
        <Modal.Body>
          <Link href="#" class="d-flex col-12">
            <div className="d-flex row col-12 justify-content-center align-items-center text-center">
              <h3 className="vehicle_modal_header-style border-1 col-12 d-flex row">
                {dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name}
              </h3>
              <p className="d-flex row col-12 justify-content-start align-items-start text-start">
                {dealerData?.business_street} {" ,"}
                {dealerData?.business_postal}
              </p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5212.611852629698!2d-122.940964!3d49.213725!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548677d04a0aab7b%3A0x3f7c4310153e5735!2s7777%20Kingsway%2C%20Burnaby%2C%20BC%20V3N%203C9%2C%20Canada!5e0!3m2!1sen!2snl!4v1636896095556!5m2!1sen!2snl"
                frameborder="0"
                height="400"
                class="border-0 w-100 d-flex row col-12"
                aria-hidden="false"
                tabindex="0"
                width="100%"
                className={`mb-2`}
              ></iframe>
              <Link href="/direction">
                <button
                  type="submit"
                  className="btn pl-4 pr-4 pt-1 pb-1 d-flex col-12 text-center align-items-center justify-content-center eform_button__submit"
                >
                  <span className="p-0 m-0">Get Direction</span>
                </button>
              </Link>
            </div>
          </Link>
        </Modal.Body>
      </Modal>
      <Modal
        onHide={modalInformationClose}
        show={information}
        size="l"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header
          style={{ color: "#2a2b2b", backgroundColor: "#fff" }}
          className="vehicle_modal_header-style border-1"
        >
          <Modal.Title>GET MORE INFORMATION</Modal.Title>
          <CloseButton
            onClick={() => {
              modalInformationClose();
            }}
          />
        </Modal.Header>
        <Modal.Body style={{ color: "#2a2b2b", backgroundColor: "#fff" }}>
          <GetMoreInformation
            domain={domain}
            vehicleId={data?.id}
            modalInformationClose={modalInformationClose}
          />
        </Modal.Body>
      </Modal>

      <div className=" m-0 p-md-3  w-100 justify-content-center align-items-center cardetail_buttom_container">
        <div className="p-0 py-2 m-0 col-12  btn">
          <button
            style={{ borderRadius: "0" }}
            onClick={() => setInformation(true)}
            className="d-flex row justify-content-center align-items-center text-center w-100 p-0 m-0  btn  gold_button_5"
          >
            <FaInfoCircle />
            <span className="pl-2 p-2 m-sm-0 d-flex justify-content-center align-items-center text-center m-0">
              GET MORE INFORMATION
            </span>
          </button>
        </div>
        <div className="p-0 py-2 m-0 col-12  btn">
          <button
            style={{ borderRadius: "0" }}
            onClick={() => setCalculate(true)}
            className="d-flex row justify-content-center align-items-center text-center w-100 p-0 m-0  btn  gold_button_5"
          >
            <FaCalculator />
            <span className="pl-2 p-2 m-sm-0 d-flex justify-content-center align-items-center text-center m-0">
              PAYMENT CALCULATOR
            </span>
          </button>
        </div>
        <div
          className="p-0 py-2 m-0 col-12   btn"
          style={{ position: "relative" }}
        >
          <Link href={`/forms/finance?selected_vehicle=${data?.id}`}>
            <a>
              <button
                style={{ borderRadius: "0" }}
                className="d-flex row justify-content-center align-items-center text-center w-100 p-0 m-0  gold_button_5 btn"
              >
                <span className="pl-2 p-2 m-sm-0 d-flex justify-content-center align-items-center text-center m-0">
                  <FaDollarSign color="#fff" />
                  Apply For Financing
                </span>
              </button>
            </a>
          </Link>
        </div>
        {/* <div className="p-0 py-2 m-0 col-12  btn">
          <Link href={`/forms/test-drive`}>
            <a>
              <button
                style={{ borderRadius: "0" }}
                className="d-flex row justify-content-center align-items-center text-center w-100 p-0 m-0 gold_button_5 btn"
              >
                <span className="pl-2 p-2 m-sm-0 d-flex justify-content-center align-items-center text-center m-0">
                  Book A Test Drive
                </span>
              </button>
            </a>
          </Link>
        </div> */}
        {/* <div className="p-2 m-0  col-12  col-lg-3 btn">
          <button
            style={{ borderRadius: "0" }}
            onClick={() => setLocation(true)}
            className="d-flex row justify-content-center align-items-center text-center w-100 p-0 m-0 eform_button__submit btn"
          >
            <FaCalculator className="mr-md-4" style={{ fontSize: "25px" }} />
            <p className="pl-2 m-sm-0 d-flex justify-content-center align-items-center text-center m-0">
              Get Directions
            </p>
          </button>
        </div> */}
        {/* <div className="p-0 m-0 col-12 pb-2  btn">
          <Link href="/forms/value-your-trade">
            <a>
              <button
                style={{ borderRadius: "0" }}
                // onClick={() => setCalculate(true)}
                className="d-flex row justify-content-center align-items-center text-center p-0 m-0 w-100 btn  gold_button_5 "
              >
                <span className="pl-2 p-2 m-sm-0 d-flex justify-content-center align-items-center text-center m-0">
                  Appraise My Trade
                </span>
              </button>
            </a>
          </Link>
        </div> */}
        <div className="p-0 m-0 col-12  btn">
          <Link href="/direction">
            <a>
              <button
                style={{ borderRadius: "0" }}
                // onClick={() => setCalculate(true)}
                className="d-flex row justify-content-center align-items-center text-center p-0 m-0 w-100 btn  gold_button_5 "
              >
                <span className="pl-2 p-2 m-sm-0 d-flex justify-content-center align-items-center text-center m-0">
                  <FaMapMarker color="#fff" />
                  Get Directions
                </span>
              </button>
            </a>
          </Link>
        </div>

        <div className=" p-0 m-0  d-flex flex-column  py-4  justlfy-content-start align-items-start  ">
          <div className="p-0 m-0 d-flex justify-content-center align-items-center">
            <FaMapMarker className="" size={24} />
            &nbsp;
            <strong style={{ fontSize: "24px", fontFamily: "" }}>
              Location
            </strong>
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
          <div className=" p-0 m-0  d-flex py-2  justlfy-content-center align-items-center ">
            <FaPhoneAlt color="#282829" size={14} className="" /> &nbsp;
            <a
              href={phonenumberConvertor(dealerData?.business_phone)}
              rel="noopener noreferrer"
              className="p-0 m-0 text-decoration-none px-2 "
              style={{ color: "#000" }}
            >
              {dealerData?.business_phone}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ButtonDetaileProduct;
