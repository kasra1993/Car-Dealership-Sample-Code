import Head from "next/head";
import { useFormik } from "formik";
import { CONTACT_US_INITIAL_VALUE } from "../../constant/contact-us/contact_us";
import { CONTACT_US_VALIDATION_SCHEMA } from "../../constant/formik/validation";
import Loading from "../../components/common/web/loading/loading";
import { useState } from "react";
import { onSubmit } from "../../utils/contact-us/contact_us";
import { toast } from "react-toastify";
import { findScript } from "../../utils/common/html_script";

import {
  FaFacebookF,
  FaHeadphonesAlt,
  FaPhoneAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaFax,
  FaMapMarkerAlt,
} from "react-icons/fa";
import FormDescription from "../../components/layout/forms/form_description";
import EformsConatctInfo from "../../components/common/web/eforms/eforms_contact_info";
import NumberFormat from "react-number-format";
import { CDN_BASE_URL } from "../../constant/base";
import { phonenumberConvertor } from "../../utils/common/phone_number_converter";
import EformsHeader from "../../components/common/layout/header/eform_header";
import SpecialCarsCustomerWeb from "../../components/layout/forms/specialcars";
import HouresOperation from "../../components/common/layout/footer/houresoperation";
import Link from "next/link";
import ContactInfo from "../../components/common/web/contactinfo";

// import HeaderEforms from "../../components/common/web/eform-header/header_eforms";

export default function ContactUpPage(props) {
  const { dealerData, domain } = props;
  const [isLoading, setIsLoading] = useState(false);
  const formik = useFormik({
    initialValues: CONTACT_US_INITIAL_VALUE,
    validationSchema: CONTACT_US_VALIDATION_SCHEMA,
    onSubmit: async (values, { resetForm }) => {
      setIsLoading(true);
      const { data, message, status } = await onSubmit(values, domain);
      if (status === 201) {
        toast.success("Successful");
        resetForm();
        setIsLoading(false);
      } else {
        toast.error(message);
        setIsLoading(false);
      }
    },
  });
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
        <meta
          name="description"
          content={`${
            dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name
          } is located at ${dealerData?.business_street} ${
            dealerData?.business_city?.city
          }, ${dealerData?.business_city?.Province?.province} ,${
            dealerData?.business_postal
          }. Call us at: ${dealerData?.business_phone}`}
        />
        <meta
          name="keywords"
          content={`used cars ${dealerData?.business_city?.city}, car dealerships ${dealerData?.business_city?.city}, ford dealership ${dealerData?.business_city?.city}, used car dealerships ${dealerData?.business_city?.city}, cars for sale in ${dealerData?.business_city?.city}, used cars ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, used car dealers ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, second hand cars ${dealerData?.business_city?.city}, cheap cars for sale in ${dealerData?.business_city?.city}, cars for sale in ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, used pickup trucks for sale in ${dealerData?.business_city?.city}, cars in ${dealerData?.business_city?.city}, auto traders ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, autotrader ${dealerData?.business_city?.Province?.province} ${dealerData?.business_city?.city}, ${dealerData?.business_city?.city} mercedes benz dealer, mercedes dealer ${dealerData?.business_city?.city}, used trucks ${dealerData?.business_city?.city}, car for sale by owner ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, honda dealership ${dealerData?.business_city?.city}`}
        />

        <title>
          {`  Contact Information | ${
            dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name
          } | ${dealerData?.business_city?.city} used car
          dealer`}
        </title>

        <link
          rel="icon"
          href={`https://hillzimage.blob.core.windows.net${dealerData?.logo_url}`}
        />
        <meta
          property="og:image"
          content={`https://hillzimage.blob.core.windows.net${dealerData?.tab_logo_url}`}
        />
      </Head>
      <div className="p-0 m-0 w-100 row justify-content-start">
        <div className="p-0 m-0 pb-5 w-100 row d-flex justify-content-start align-items-center px-3 ">
          <div
            className={`p-0 m-0 px-1 px-md-3 px-lg-5 col-12 col-lg-7 ${
              typeof otherFormik === "undefined" ? "col-12 col-lg-7" : "col-12"
            }`}
          >
            <form
              onSubmit={formik.handleSubmit}
              className="p-0 m-0 row w-100 justify-content-center pt-3  "
            >
              <div className="p-0 pt-3 m-0 col-12 col-lg-8  d-flex  flex-column justify-content-start align-items-start forms_title">
                <EformsHeader title="Contact Us" className="privacy_title " />
                <div
                  className="text-dark"
                  dangerouslySetInnerHTML={{
                    __html: findScript(props?.dealerData?.contactus_desc),
                  }}
                ></div>
              </div>
              <div className="form-group col-lg-8 col-12 d-flex justify-content-center p-0 m-0 mt-2 p-1">
                <div className="w-100 col-12 p-0">
                  <div className=" w-100  p-0 m-0">
                    <div className="p-1 m-0    form-group col-12 d-flex flex-column justify-content-center">
                      <div className=" w-100  p-0 m-0">
                        <label className="p-0 m-0 label_style d-flex flex-wrap">
                          First Name
                        </label>
                        <input
                          id="f_name"
                          name="f_name"
                          type="text"
                          className="form-control eforms_input_container"
                          // placeholder="First Name"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.f_name}
                        />
                      </div>
                      {formik.errors.f_name && formik.touched.f_name && (
                        <div className="text-danger">
                          {formik.errors.f_name}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-group col-lg-8 col-12 d-flex justify-content-center p-0 m-0 mt-2 p-1">
                <div className="w-100 col-12 p-0">
                  <div className=" w-100  p-0 m-0">
                    <div className="p-1 m-0  form-group col-12 d-flex  flex-column justify-content-center">
                      <div className=" w-100  p-0 m-0">
                        <label className="p-0 m-0 label_style">Last Name</label>
                        <input
                          id="l_name"
                          name="l_name"
                          type="text"
                          className="form-control eforms_input_container"
                          // placeholder="Last Name"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.l_name}
                        />
                      </div>
                      {formik.errors.l_name && formik.touched.l_name && (
                        <div className="text-danger">
                          {formik.errors.l_name}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-group col-lg-8 col-12 d-flex justify-content-center p-0 m-0 mt-2 p-1">
                <div className="w-100 col-12 p-0">
                  <div className=" w-100  p-0 m-0">
                    <div className="p-1 m-0 form-group col-12 d-flex flex-column justify-content-center">
                      <div className=" w-100  p-0 m-0">
                        <label className="p-0 m-0 label_style">Email</label>
                        <input
                          id="email"
                          name="email"
                          type="text"
                          className="form-control eforms_input_container"
                          // placeholder="Email"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.email}
                        />
                      </div>
                      {formik.errors.email && formik.touched.email && (
                        <div className="text-danger">{formik.errors.email}</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-group col-lg-8 col-12 d-flex flex-wrap justify-content-center p-0 m-0 mt-2 p-1">
                <div className="w-100 col-12 p-0">
                  <div className=" w-100  p-0 m-0">
                    <div className="p-1 m-0  form-group col-12 d-flex flex-column justify-content-center">
                      <div className=" w-100  p-0 m-0">
                        <label className="p-0 m-0 label_style">Phone</label>
                        {/* <NumberFormat
                            prefix="+"
                            format="+# (###) ###-####"
                            mask="_"
                            allowEmptyFormatting={false}
                            onValueChange={(e) => {
                              formik.setFieldValue("mobile", e.value);
                            }}
                            // placeholder="Phone"
                            onBlur={formik.handleBlur}
                            name="mobile"
                            id="mobile"
                            className="form-control eforms_input_container"
                            value={formik.values.mobile}
                          /> */}
                        <input
                          id="mobile"
                          name="mobile"
                          type="text"
                          className="form-control eforms_input_container"
                          // placeholder="Mobile"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.mobile}
                        />
                      </div>
                      {formik.errors.mobile && formik.touched.mobile && (
                        <div className="text-danger">
                          {formik.errors.mobile}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-group col-lg-8 col-12 d-flex justify-content-center flex-column p-0 m-0 mt-2 p-1">
                <div className="w-100 col-12 p-0">
                  <div className=" w-100  p-0 m-0">
                    <div className="p-1 m-0 form-group col-12">
                      <label className="p-0 m-0 label_style">Message</label>
                      <textarea
                        id="message"
                        rows="6"
                        name="message"
                        className="form-control eforms_textarea_container w-100 h-100"
                        // placeholder="Message"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.message}
                      />
                      {formik.errors.message && formik.touched.message && (
                        <div className="text-danger">
                          {formik.errors.message}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-0 m-0 row col-lg-8 col-12 text-center justify-content-start align-items-center">
                <div className="p-1 m-0  d-flex justify-content-start align-items-center">
                  <div className="p-0 m-0 w-100 d-flex justify-content-start align-items-center">
                    {isLoading ? (
                      <Loading />
                    ) : (
                      <button
                        type="submit"
                        className="w-100 py-2 btn gold_button "
                      >
                        SUBMIT
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="m-0 p-0 col-12 col-sm-10 col-lg-5 pr-sm-3">
            <ContactInfo data={dealerData} />
          </div>

          {/* <div className="p-0 m-0 pt-3 col-12 col-lg-4 px-3">
            {typeof otherFormik === "undefined" && (
              <SpecialCarsCustomerWeb data={dealerData?.specialData} />
            )}
          </div> */}
        </div>
      </div>
    </>
  );
}
export async function getServerSideProps(ctx) {
  const domain = ctx.req.headers.host;
  return {
    props: {
      domain,
    },
  };
}
