import { PrivacyDesc } from "../utils/common/privacy_data";
import HomeTitle from "../components/layout/home/home_header_title";
import Head from "next/head";
import {
  FaClock,
  FaEnvelope,
  FaMapMarked,
  FaMapMarker,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { phonenumberConvertor } from "../utils/common/phone_number_converter";
const PrivacyPage = (props) => {
  const { dealerData } = props;
  return (
    <>
      <Head>
        <title>
          Online car dealership |{" "}
          {dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name}
        </title>
        <meta
          name="description"
          content={`${
            dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name
          } site as an online car dealership in ${
            dealerData?.business_city?.city
          } ${
            dealerData?.business_city?.Province?.Country?.country
          }, provide buy, sell or trade-in value services with the best price and quality.`}
        />
        <meta name="keywords" content="online car dealership" />
        <meta
          property="og:image"
          content={`https://hillzimage.blob.core.windows.net${dealerData?.tab_logo_url}`}
        />
        <link
          rel="icon"
          href={`https://hillzimage.blob.core.windows.net${dealerData?.logo_url}`}
        />
      </Head>
      <div className="p-0 m-0 py-5 px-4 row w-100 flex-column justify-content-start align-items-start">
        <div className="p-0 m-0 privacy_title text-left">PRIVACY & POLICY</div>

        <div
          className="p-0 m-0 row w-100 p-4"
          style={{ backgroundColor: "#1E1E1E" }}
        >
          <PrivacyDesc
            bussinessName={dealerData?.bussiness_name}
            className="privacy_text"
          />
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

export default PrivacyPage;
