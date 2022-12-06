import React, { useState } from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { INITIAL_VALUES } from "../../../constant/fainancial/fainancial";
import ValueTradeFormFinansial from "../../../components/layout/forms/financing/tradeInfinancial";
import CarFinderVehicleFinancial from "../../../components/layout/forms/financing/car-finder-financial";
import DesiredVehiclee from "../../../components/layout/forms/financing/desiredvehicle";
import PersonalInfo from "../../../components/layout/forms/personalinfo";
import { onSubmit } from "../../../utils/fainancial/fainancial";
import { FINANCIAL_VALIDATION_SCHEMA } from "../../../constant/formik/validation";
import Loading from "../../../components/common/web/loading/loading";
import { httpRequest } from "../../../apis";
import EFormsHeaderSection from "../../../components/common/web/eform-header/eforms_header_section";
import FinancialCurrntAddress from "../../../components/layout/forms/financing/finance_current_address";
import FinancialCurrentEmployment from "../../../components/layout/forms/financing/finance_current_employment";
import FinancialPreviousEmployment from "../../../components/layout/forms/financing/finance_previous_employment";
import FinancialOtherInformation from "../../../components/layout/forms/financing/finance_other_information";
import Head from "next/head";
import EformsConatctInfo from "../../../components/common/web/eforms/eforms_contact_info";
import EformsHeader from "../../../components/common/layout/header/eform_header";
import FinanceSearchForVehicle from "../../../components/layout/forms/financing/finance_search_for_vehicle";
import { useRouter } from "next/router";
import { CDN_BASE_URL } from "../../../constant/base";
import Link from "next/link";
import { findScript } from "../../../utils/common/html_script";

const Fainancial = (props) => {
  const { domain, advanceSearchData, dealerData, vehicleDataForSearch } = props;
  const [isLoading, setLoading] = useState(false);
  const { query } = useRouter();
  const [confirm, setConfirm] = useState(false);
  const [desiredModal, setDesiredModal] = React.useState(false);
  const [valueYourTrade, setValueYourTrade] = React.useState(false);
  const [carFinder, setCarFinder] = React.useState(false);
  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: () => FINANCIAL_VALIDATION_SCHEMA(),
    onSubmit: async (values, { resetForm }) => {
      if (confirm) {
        setLoading(true);
        const { data, status, message } = await onSubmit(values, domain);
        setLoading(false);
        if (status === 201) {
          resetForm();
          return toast.success(message);
        } else if (status === 401) {
          showPersonal(true);
          return toast.error(message);
        } else {
          return toast.error(message);
        }
      } else {
        toast.error("You must confirm the agreement");
      }
    },
    enableReinitialize: true,
  });

  return (
    <>
      <Head>
        <meta
          property="og:image"
          content={`https://hillzimage.blob.core.windows.net${dealerData?.tab_logo_url}`}
        />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
        <meta
          name="description"
          content={`Apply for car loan in ${dealerData?.business_city?.city}, ${
            dealerData?.business_city?.Province?.province
          } with ${
            dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name
          }! Contact us today for Car Financing related queries. We like to assist you.`}
        />
        <meta
          name="keywords"
          content={`used cars ${dealerData?.business_city?.city}, car dealerships ${dealerData?.business_city?.city}, ford dealership ${dealerData?.business_city?.city}, used car dealerships ${dealerData?.business_city?.city}, cars for sale in ${dealerData?.business_city?.city}, used cars ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, used car dealers ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, second hand cars ${dealerData?.business_city?.city}, cheap cars for sale in ${dealerData?.business_city?.city}, cars for sale in ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, used pickup trucks for sale in ${dealerData?.business_city?.city}, cars in ${dealerData?.business_city?.city}, auto traders ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, autotrader ${dealerData?.business_city?.Province?.province} ${dealerData?.business_city?.city}, ${dealerData?.business_city?.city} mercedes benz dealer, mercedes dealer ${dealerData?.business_city?.city}, used trucks ${dealerData?.business_city?.city}, car for sale by owner ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, honda dealership ${dealerData?.business_city?.city}`}
        />
        <meta
          name="description"
          content={`Fill out the application form for car loan. Tell us your needs, budget and other necessary information for car financing in ${dealerData?.business_city?.city}, ${dealerData?.business_city?.Province?.province}.`}
        />

        <title>
          {`  Used Car Financing | Used Car Loans ${
            dealerData?.business_city?.city
          }
          , ${dealerData?.business_city?.Province?.province}| $
          ${dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name}`}
        </title>
        <title>
          {`  Car Loan Application ${dealerData?.business_city?.city}, 
          ${dealerData?.business_city?.Province?.province} | Car Finance
          Application Form | 
          ${dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name}
        {" "}`}
        </title>

        <link
          rel="icon"
          href={`https://hillzimage.blob.core.windows.net${dealerData?.logo_url}`}
        />
      </Head>

      <DesiredVehiclee
        show={desiredModal}
        onClose={() => setDesiredModal(false)}
        formik={formik}
        domain={domain}
        advanceSearchData={advanceSearchData}
      />
      <ValueTradeFormFinansial
        show={valueYourTrade}
        onClose={() => setValueYourTrade(false)}
        formik={formik}
        domain={domain}
        vehicleDataForSearch={vehicleDataForSearch}
      />
      <CarFinderVehicleFinancial
        show={carFinder}
        onClose={() => setCarFinder(false)}
        formik={formik}
        domain={domain}
      />
      <div className="p-0 m-0 w-100 " style={{ position: "relative" }}>
        <div className="p-0 m-0" style={{ position: "relative" }}>
          {/* <div className="p-0 m-0 row w-100 ">
            {dealerData?.financial_image_url && (
              <div className="p-0 m-0 col-12">
                {" "}
                <img
                  src={CDN_BASE_URL + dealerData?.financial_image_url}
                  className="w-100 h-100 p-0 m-0"
                />
              </div>
            )}
          </div> */}
          <div className="p-0 m-0 row w-100 row justify-content-center">
            <div className="p-0 m-0 d-flex col-md-10 col-11 mt-4 px-lg-3 px-1 px-lg-0 py-4">
              <EformsHeader title="Apply For Credit" />
            </div>
          </div>
        </div>
        <div className="p-0 m-0 pb-5 w-100 row d-flex justify-content-center align-items-start">
          <div className="p-0 m-0  px-md-3 px-lg-5 col-11 col-lg-7 col-md-10 finance_title">
            <div className="d-flex px-1 px-lg-3 flex-column">
              <div
                className="p-0 m-0 finance-text"
                dangerouslySetInnerHTML={{
                  __html: findScript(dealerData?.financial_desc),
                }}
              />
            </div>
            <form
              onSubmit={formik.handleSubmit}
              className="p-0 m-0 row w-100  px-1 "
            >
              <div className="p-0 m-0 mb-3 mb-lg-2 col-12">
                <div className="p-0 pt-3 m-0 w-100 d-flex justify-content-left align-items-center forms_title">
                  <h4>Personal Information</h4>
                </div>
                <PersonalInfo formik={formik} complete />
              </div>
              <div className="p-0 m-0 mb-3 mb-lg-2 col-12">
                <div className="p-0 pt-3 m-0 w-100 d-flex justify-content-left align-items-center forms_title">
                  <h4>Current Address</h4>
                </div>
                <FinancialCurrntAddress formik={formik} />
              </div>
              <div className="p-0 m-0 mb-3 mb-lg-2 col-12">
                <div className="p-0 pt-3 m-0 w-100 d-flex justify-content-left align-items-center forms_title">
                  <h4>Current Employment</h4>
                </div>
                <FinancialCurrentEmployment className="pr-4" formik={formik} />
              </div>
              <div className="p-0 m-0 mb-3 mb-lg-2 col-12">
                <div className="p-0 pt-3 m-0 w-100 d-flex justify-content-left align-items-center forms_title">
                  <h4>Previous Employment</h4>
                </div>
                <FinancialPreviousEmployment formik={formik} />
              </div>
              <div className="p-0 m-0 mb-3 mb-lg-2 col-12">
                <div className="p-0 pt-3 m-0 w-100 d-flex justify-content-left align-items-center forms_title">
                  <h4>Other information</h4>
                </div>
                <FinancialOtherInformation formik={formik} />
              </div>
              <div className="p-0 pr-2 py-2 pb-5 m-0 row">
                {query?.selected_vehicle &&
                query?.selected_vehicle !== null &&
                query?.selected_vehicle !== "" ? (
                  <div className="p-1 px-2 col-12 text-white">
                    <h4>You Choosed a Vehicle</h4>
                  </div>
                ) : (
                  <>
                    <div className="p-0 pt-3 m-0 w-100 d-flex justify-content-left align-items-center forms_title">
                      <h4>Choose Your Vehicle</h4>
                    </div>
                    <div className="p-1 m-0 w-100">
                      <FinanceSearchForVehicle
                        vehicleDataForSearch={vehicleDataForSearch}
                        formik={formik}
                      />
                    </div>
                    {/* <div className="p-1 py-2 m-0 col-12" /> */}

                    <div className="p-1 py-1 py-sm-0 px-sm-1 m-0 col-12 col-sm-4">
                      <button
                        type="button"
                        onClick={() => setDesiredModal(true)}
                        className={`btn ${
                          formik.values.frk_desire_MidVclDS_id
                            ? "gold_button_2 financial_button__modal_button_selected"
                            : "gold_button_2"
                        }  w-100`}
                      >
                        <span className="p-0 m-0 text-center">
                          {formik.values.frk_desire_MidVclDS_id
                            ? "Vehicle selected"
                            : "Advance Search"}
                        </span>
                      </button>
                    </div>
                  </>
                )}
                <div className="p-1 py-1 py-sm-0 px-sm-1 m-0 col-12 col-sm-4">
                  <button
                    type="button"
                    onClick={() => setValueYourTrade(true)}
                    className={`btn ${
                      formik.values.frk_valueYourTrade_id
                        ? "gold_button_2 financial_button__modal_button_selected"
                        : "gold_button_2"
                    }  w-100`}
                  >
                    <span className="p-0 m-0 text-center">
                      {formik.values.frk_valueYourTrade_id
                        ? "Appraise My Trade selected"
                        : "Appraise My Trade"}
                    </span>
                  </button>
                </div>
                <div className="p-1 py-1 py-sm-0 px-sm-1 m-0 col-12 col-sm-4">
                  <button
                    type="button"
                    onClick={() => setCarFinder(true)}
                    className={`btn ${
                      formik.values.frk_carFinder_id
                        ? "gold_button_2 financial_button__modal_button_selected"
                        : "gold_button_2"
                    }  w-100`}
                  >
                    <span className="p-0 m-0 text-center">
                      {formik.values.frk_carFinder_id
                        ? "Car finder selected"
                        : "Car finder"}
                    </span>
                  </button>
                </div>
                <div className="p-0 m-0 mt-3 col-12">
                  <div className="p-0 m-0 w-100 d-flex">
                    <input
                      type="checkbox"
                      name="confirm"
                      id="confirm"
                      className="m-0 mt-1"
                      onChange={(e) => {
                        setConfirm(e.target.checked);
                      }}
                    />
                    <span
                      className="p-0 m-0 px-2 "
                      style={{
                        textAlign: "justify",
                      }}
                    >
                      I agree that by submitting this application, I authorize
                      and give this dealership, as well as any potential
                      financing source this dealership presents this application
                      to, my consent to obtain my credit report from any credit
                      reporting agency used to complete an investigation of my
                      credit.
                    </span>
                  </div>
                </div>
                <div className="p-1 m-0 mt-3 col-4 col-md-3 col-sm-5 px-2">
                  {isLoading ? (
                    <Loading />
                  ) : (
                    <button type="submit" className="btn gold_button_2 w-100">
                      <span className="p-0 m-0">Submit</span>
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
          <div className="p-0 m-0 pt-3 col-11 col-lg-4 px-3 col-md-10 finance_title d-flex flex-column">
            <h4>Online Credit Application</h4>
            <span className="p-0 m-0 py-3 ">
              Need help filling out your application? We would be happy to help
              you.
            </span>
            <Link href="/forms/contact-us">
              <a className="p-0 m-0 row col-5 col-md-4 col-sm-5">
                <button type="submit" className="btn gold_button w-100  ">
                  Contact Us
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Fainancial;

export async function getServerSideProps(ctx) {
  const domain = ctx.req.headers.host;
  const { data: advanceSearchData, status: advanceSearchDataStatus } =
    await httpRequest(
      "GET",
      `/api/dealership/advance/search/vehicles/get/${domain}`,
      null,
      {},
      false
    );
  const { data: vehicleDataForSearch, status: vehicleDataForSearchStatus } =
    await httpRequest("GET", `/api/dealership/vehicles/all/${domain}`, {}, {});
  if (+vehicleDataForSearchStatus === 200 && +advanceSearchDataStatus === 200) {
    return {
      props: {
        domain,
        advanceSearchData,
        vehicleDataForSearch,
      },
    };
  } else {
    return {
      notFound: true,
    };
  }
}
