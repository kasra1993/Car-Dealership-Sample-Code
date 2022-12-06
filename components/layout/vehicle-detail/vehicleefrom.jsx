import { phonenumberConvertor } from "../../../utils/common/phone_number_converter";
import Link from "next/link";
import GetMoreInformation from "./get_more_information";
import EformsHeader from "../../common/layout/header/eform_header";
import EFormsHeaderSection from "../../common/web/eform-header/eforms_header_section";
import PersonalInfo from "../forms/financing/textus-personalInfo";
import CalculatoreCustomerWeb from "../../common/web/calculator/calculator";
import { useFormik } from "formik";
import { useState } from "react";
import { TEXT_US_NOW_INITIAL_VALUES } from "../../../constant/text-us-now/text_us_now";
import { TEXT_US_NOW_VALIDATION } from "../../../constant/formik/validation";
import { handleSubmit } from "../../../utils/text-us-now/tet_us_now";

const VehicleEfrom = (props) => {
  const { domain, dealerData, data } = props;
  const [isLoading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: TEXT_US_NOW_INITIAL_VALUES,
    validationSchema: () => TEXT_US_NOW_VALIDATION(),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      const { status, message, data } = await handleSubmit(values, domain);
      setLoading(false);
      if (status === 201) {
        toast.success("Successful");
        resetForm();
      } else {
        toast.error(message);
      }
    },
  });
  return (
    <div className="row p-0 m-0 w-100">
      <div className="p-0 m-0 col-12 col-sm-12 col-md-6">
        <div className="p-0 m-0 eforms_form_div_conatiner d-flex align-items-center justify-content-center">
          <div
            style={{
              width: "200px",

              filter: "drop-shadow(4px 6px 5px rgba(0,0,0,0.2))",
              clipPath:
                "polygon(0% 15%, 0 0, 15% 0%, 85% 0%, 100% 0, 100% 15%, 100% 100%, 81% 100%, 77% 82%, 26% 82%, 21% 100%, 0 100%)",
            }}
            className="w-100 my-3 col-12 mx-3"
          >
            <div
              style={{
                position: "relative",
                transform: "translate(1px,2px)",

                backgroundColor: "white",
                clipPath:
                  "polygon(0% 15%, 0 0, 15% 0%, 85% 0%, 100% 0, 100% 15%, 100% 99%, 87% 99%, 78% 81%, 24% 81%, 19% 99%, 0 99%)",
              }}
              className=" w-100  p-5 m-0"
            >
              <form
                onSubmit={formik.handleSubmit}
                className="p-0 m-0 my-3 my-md-0 row w-100 eforms_form__container row align-items-start justify-content-around"
              >
                <div className="p-5 m-0 mb-5 col-12 col-md-11 eforms_form_section_div__container">
                  <h2>
                    <b>Get More Information</b>

                    <img src="/images/home/Path 64.png" className="pl-2" />
                  </h2>

                  <PersonalInfo formik={formik} />

                  <div className="form-group col-sm-6 col-md-12 p-0 m-0 mt-2 mb-2 p-1">
                    <textarea
                      rows="3"
                      name="message"
                      className="form-control eforms_textarea_container"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder="Message"
                      value={formik.values.message}
                    />
                    {formik.errors.message && formik.touched.message && (
                      <small className="text-danger">
                        {formik.errors.message}
                      </small>
                    )}
                  </div>
                  <div className="p-1 m-0 col-12 d-flex justify-content-end">
                    <div className="p-0 m-0 col-4 d-flex justify-content-end">
                      {isLoading ? (
                        <Loading />
                      ) : (
                        <button
                          type="submit"
                          className="btn red_button px-5 py-2"
                        >
                          Submit
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="col-6 col-sm-12 col-md-6 d-none d-md-flex p-0 m-0 row justify-content-center align-items-center h-100 vehicleefrom__calculatore--div">
        <div className="p-0 m-0 col-12">
          <div className="p-0 m-0 py-4 row justify-content-center align-items-center">
            <div
              className="p-0 m-0 col-12 h-100 p-5"
              style={{ backgroundColor: "#fbfbfb" }}
            >
              <CalculatoreCustomerWeb
                sellPrice={data?.sell_price}
                data={props}
                type={2}
              />
            </div>
            {/* <div className="p-0 m-0 col-1 d-none d-lg-flex text-center justify-content-center">
              <img src="/images/vehicle-detail/Group549.png" alt="" />
            </div> */}
          </div>
        </div>
      </div>
      {/* <div className="p-0 m-0 py-5 row justify-content-center align-items-center h-100">
        <div className="p-0 m-0 py-5 col-12 col-sm-10">
          <div className="p-0 m-0 row justify-content-center align-items-center">
            <div className="p-0 m-0 col-12 col-md-7 h-100">
              <img
                className="p-0 m-0 w-100"
                src="/images/vehicle-detail/wallpapers.png"
                alt=""
                style={{ objectFit: "cover", height: "100%" }}
              />
            </div>
            <div className="p-0 m-0 col-1 d-none d-lg-flex text-center justify-content-center">
              <img src="/images/vehicle-detail/Group549.png" alt="" />
            </div>
            <div
              className="p-0 m-0 col-12 col-md-7 col-lg-4 h-100"
              style={{ backgroundColor: "#1f1f1f" }}
            >
              <GetMoreInformation domain={domain} vehicleId={data?.id} />
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="p-0 m-0 col-12 col-sm-5 col-lg-4 h-100">
          <div className="p-0 py-5 py-lg-0 m-0 w-100 h-100 row justify-content-center align-items-center">
            <div className="p-0 pb-5 m-0 col-12">
              <div className="p-0 m-0 w-100 px-2 text-center">
                <span className="p-0 m-0 mx-2">
                  Address:
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
              </div>
              <div className="p-0 m-0 w-100 px-2 text-center">
                <a
                  href={phonenumberConvertor(dealerData?.business_phone)}
                  rel="noopener noreferrer"
                  className="p-0 m-0 mx-2 text-white text-decoration-none"
                >
                  Phone:
                  {dealerData?.business_phone}
                </a>
              </div>
            </div>
            <div className="p-0 pt-5 m-0 col-12">
              <div className="p-0 m-0 w-100 row justify-content-center">
                <Link href={`/forms/finance?selected_vehicle=${data?.id}`}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none p-3 col-8 light__gray--btn text-center"
                  >
                    Applay For Financing
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div> */}
    </div>
  );
};

export default VehicleEfrom;
