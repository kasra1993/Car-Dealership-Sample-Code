import { useState } from "react";
import { useFormik } from "formik";
import { FaFacebookF, FaHeadphonesAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import { TEXT_US_NOW_INITIAL_VALUES } from "../../constant/text-us-now/text_us_now";
import { TEXT_US_NOW_VALIDATION } from "../../constant/formik/validation";
import { handleSubmit } from "../../utils/text-us-now/tet_us_now";
import Loading from "../../components/common/web/loading/loading";
import PersonalInfo from "../../components/layout/forms/personalinfo";
import SpecialCarsCustomerWeb from "../../components/layout/forms/specialcars";
import Head from "next/head";
import FormDescription from "../../components/layout/forms/form_description";
import EformsConatctInfo from "../../components/common/web/eforms/eforms_contact_info";
import { CDN_BASE_URL } from "../../constant/base";
import EformsHeader from "../../components/common/layout/header/eform_header";
import ContactInfo from "../../components/common/web/contactinfo";
export default function ContactUpPage(props) {
  const { domain, dealerData } = props;
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
          {`Text Us | ${
            dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name
          } | ${dealerData?.business_city?.city} used car dealer`}
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

      <div className="p-0 m-0 w-100 row justify-content-center px-2 px-md-0">
        <div className="p-0 m-0 pb-5 w-100 row d-flex justify-content-start align-items-center">
          <div
            className={`p-0 m-0  px-md-3 px-lg-5 ${
              typeof otherFormik === "undefined" ? "col-12 col-lg-7" : "col-12"
            }`}
          >
            <form
              onSubmit={formik.handleSubmit}
              className="p-0 m-0 row w-100   pt-5 pt-md-0"
            >
              <div>
                <EformsHeader title="Text Us Now" className="privacy_title " />
              </div>

              <div className="p-0 pt-3 m-0 w-100 d-flex justify-content-left align-items-center forms_title">
                Personal Information
              </div>
              <PersonalInfo formik={formik} textus />

              {/* <div className="p-0 m-0 col-12">
                  <FooterTitle title="Your Message" className="pt-4" />
                </div> */}

              <div className="form-group col-12 d-flex justify-content-center p-0 m-0 mt-2 p-1">
                <div className="w-100 col-12 m-0 p-0">
                  <div className=" w-100  p-0 m-0">
                    <label className="eforms_label">Message</label>
                    <textarea
                      rows="8"
                      name="message"
                      className="form-control eforms_textarea_container"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      // placeholder="Message"
                      value={formik.values.message}
                    />
                  </div>
                </div>
                {formik.errors.message && formik.touched.message && (
                  <small className="text-danger">{formik.errors.message}</small>
                )}
              </div>

              <div className="p-0 m-0 row w-100 text-center justify-content-start align-items-center">
                <div className="p-1 m-0 col-12 d-flex justify-content-start align-items-center">
                  <div className="p-0 m-0 w-100 d-flex justify-content-start align-items-center">
                    {isLoading ? (
                      <Loading />
                    ) : (
                      <button
                        type="submit"
                        className="w-100 py-2 btn gold_button"
                      >
                        Submit
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
