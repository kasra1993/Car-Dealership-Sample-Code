import { QueryClient } from "react-query";
import { httpRequest } from "../apis/index";
import { dehydrate } from "react-query/hydration";
import Location from "../components/layout/directions/location";
import EFormsHeaderSection from "../components/common/web/eform-header/eforms_header_section";
import HouresOperation from "../components/common/layout/footer/houresoperation";
import Head from "next/head";
import { phonenumberConvertor } from "../utils/common/phone_number_converter";
import { FaPhoneAlt, FaFax, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";
import ContactInfo from "../components/common/web/contactinfo";
import EformsHeader from "../components/common/layout/header/eform_header";

const Direction = (props) => {
  const { dealerData } = props;

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
        <meta
          name="description"
          content={` ${
            dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name
          } is the One Stop used car dealership for all Makes and Models of both New and Used cars for sale. We offer Car Loans on Low interest rates and assure you of quick and easy Car Loan approvals.`}
        />
        <meta
          name="keywords"
          content={`used cars ${dealerData?.business_city?.city}, car dealerships ${dealerData?.business_city?.city}, ford dealership ${dealerData?.business_city?.city}, used car dealerships ${dealerData?.business_city?.city}, cars for sale in ${dealerData?.business_city?.city}, used cars ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, used car dealers ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, second hand cars ${dealerData?.business_city?.city}, cheap cars for sale in ${dealerData?.business_city?.city}, cars for sale in ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, used pickup trucks for sale in ${dealerData?.business_city?.city}, cars in ${dealerData?.business_city?.city}, auto traders ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, autotrader ${dealerData?.business_city?.Province?.province} ${dealerData?.business_city?.city}, ${dealerData?.business_city?.city} mercedes benz dealer, mercedes dealer ${dealerData?.business_city?.city}, used trucks ${dealerData?.business_city?.city}, car for sale by owner ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, honda dealership ${dealerData?.business_city?.city}`}
        />
        <meta
          property="og:image"
          content={`https://hillzimage.blob.core.windows.net${dealerData?.tab_logo_url}`}
        />
        <title>
          {` ${
            dealerData?.business_city?.city
          } Used Car Dealer | New and Used Car For Sale | 
         ${dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name}`}
        </title>

        <link
          rel="icon"
          href={`https://hillzimage.blob.core.windows.net${dealerData?.logo_url}`}
        />
      </Head>
      <div className="p-0 m-0 w-100 p-lg-5 p-3 row justify-content-center">
        <div className="p-0 m-0 d-flex col-lg-10 col-12 mt-4 pb-3 pb-lg-0 ">
          <EformsHeader title="Get Directions" />
        </div>
        <div className="p-0 m-0 row w-100 flex-wrap justify-content-start align-items-center">
          <div className="p-0 m-0 col-lg-7    privacy_title text-start">
            <Location direction dealerData={dealerData} />
          </div>
          <div className="m-0 p-0 col-12 col-sm-10 col-lg-5 pr-sm-3">
            <ContactInfo data={dealerData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Direction;
export async function getServerSideProps(ctx) {
  const domain = await ctx.req.headers.host;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("footer-data", () =>
    httpRequest("GET", `/api/dealership/single/by/url/${domain}`, {}, {}, true)
  );
  await queryClient.prefetchQuery("special-cars", () =>
    httpRequest(
      "GET",
      `/api/vehicle/dealership/mid/spicial/${domain}?offset=0&limit=3&order=id,DESC`,
      {},
      {},
      true
    )
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      domain,
    },
  };
}
