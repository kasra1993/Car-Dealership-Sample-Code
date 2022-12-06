import CalculatoreCustomerWeb from "../../../components/common/web/calculator/calculator";
import SpecialCarsCustomerWeb from "../../../components/layout/forms/specialcars";
import Head from "next/head";
import FormDescription from "../../../components/layout/forms/form_description";
import EformsHeader from "../../../components/common/layout/header/eform_header";
import { FaCalculator, FaWindowClose } from "react-icons/fa";
import { findScript } from "../../../utils/common/html_script";
import { CDN_BASE_URL } from "../../../constant/base";
import ContactInfo from "../../../components/common/web/contactinfo";

const FinancialCalculatorPage = (props) => {
  const { domain, dealerData } = props;
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
        <meta
          name="description"
          content={`Fill out the application form for car loan. Tell us your needs, budget and other necessary information for car financing in ${dealerData?.business_city?.city}, ${dealerData?.business_city?.Province?.province}.`}
        />
        <meta
          name="keywords"
          content={`used cars ${dealerData?.business_city?.city}, car dealerships ${dealerData?.business_city?.city}, ford dealership ${dealerData?.business_city?.city}, used car dealerships ${dealerData?.business_city?.city}, cars for sale in ${dealerData?.business_city?.city}, used cars ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, used car dealers ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, second hand cars ${dealerData?.business_city?.city}, cheap cars for sale in ${dealerData?.business_city?.city}, cars for sale in ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, used pickup trucks for sale in ${dealerData?.business_city?.city}, cars in ${dealerData?.business_city?.city}, auto traders ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, autotrader ${dealerData?.business_city?.Province?.province} ${dealerData?.business_city?.city}, ${dealerData?.business_city?.city} mercedes benz dealer, mercedes dealer ${dealerData?.business_city?.city}, used trucks ${dealerData?.business_city?.city}, car for sale by owner ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, honda dealership ${dealerData?.business_city?.city}`}
        />

        <title>
          {`Car Loan Application ${dealerData?.business_city?.city}, ${
            dealerData?.business_city?.Province?.province
          } | Car Finance
          Application Form |${
            dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name
          }`}
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

      <div className="p-0 m-0 w-100 px-2" style={{ position: "relative" }}>
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
          <div className="p-0 m-0 row w-100 header_title_position">
            <div className="p-0 m-0 col-10 col-md-6"></div>
            <div className="p-0 m-0 col-1 col-md-3 form_head_background"></div>
          </div>
        </div>
        <div className="p-0 m-0 py-5 w-100 row justify-content-center align-items-start">
          <div className="p-0 m-0 py-5 col-12 col-xl-10 d-flex flex-wrap justify-content-center align-items-start">
            <div className="p-0 m-0 px-1 px-md-3  col-12 col-lg-7 pb-5">
              <CalculatoreCustomerWeb />
            </div>
            <div className="m-0 p-0 col-12 col-lg-5">
              <ContactInfo data={dealerData} />
            </div>
            {/* <div className="p-0 m-0 pt-3 col-12 col-lg-4 px-3">
            {typeof otherFormik === "undefined" && (
              <SpecialCarsCustomerWeb data={dealerData?.specialData} />
            )}
          </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
export async function getServerSideProps(ctx) {
  const domain = ctx.req.headers.host;
  return {
    props: {
      domain,
    },
  };
}
export default FinancialCalculatorPage;
