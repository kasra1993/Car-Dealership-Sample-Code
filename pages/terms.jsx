import { PrivacyDesc } from "../utils/common/privacy_data";
import HomeTitle from "../components/layout/home/home_header_title";
import Head from "next/head";
import Link from "next/link";
import {
  FaClock,
  FaEnvelope,
  FaMapMarked,
  FaMapMarker,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { phonenumberConvertor } from "../utils/common/phone_number_converter";
import { TermsDesc } from "../utils/common/terms_data";
const TermsPage = (props) => {
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
      <div
        className="p-0 m-0 py-5 px-4 row w-100 flex-column justify-content-start align-items-start"
        style={{ backgroundColor: "#48932b" }}
      >
        <div className="p-0 m-0 privacy_title text-left">
          TERMS & CONDITIONS
        </div>
        <div className="p-0 m-0 privacy_title_sub text-left">
          Updated: 2020-02-17
        </div>
      </div>
      <div className="p-0 m-0 row w-100 p-4">
        <TermsDesc
          bussinessName={dealerData?.bussiness_name}
          className="privacy_text"
        />
      </div>
      <div className="p-0 m-0 col-12 px-1 px-md-3 px-lg-5 py-2">
        <Link href="/forms/service-appointment">
          <a>
            <div className="p-0 m-0 green_button w-100 d-flex justify-content-center align-items-center">
              Book An Appointment
            </div>
          </a>
        </Link>
      </div>
      <div className="p-0 m-0 row w-100 contact_page_title justify-content-center align-items-center">
        <div className="p-0 m-0 d-none d-sm-block border_style mr-3" />
        CONTACT US
        <div className="p-0 m-0 d-none d-sm-block border_style ml-3" />
      </div>
      <div className="p-0 m-0 row w-100 px-2 px-md-5 py-3">
        <div className="p-2 m-0 col-12 col-lg-4 flip-card">
          <div className="p-0 m-0 flip-card-inner d-flex flex-column justify-content-center align-items-center">
            <div className="p-0 m-0 row w-100  flip-card-front flex-column justify-content-center align-items-center">
              <div className="p-0 m-0 d-flex justify-content-center align-items-center icon_border">
                <FaPhoneAlt color="#fff" size={24} />
              </div>
              <div className="p-0 m-0 contact_page_title">PHONE</div>
              <div className="p-0 m-0 contact_page_text">
                BC / AB / SK / MB / ON
              </div>
            </div>
            <div className="p-0 m-0 row w-100  flip-card-back flex-column justify-content-center align-items-center">
              <div className="p-0 m-0 contact_page_title_back">PHONE</div>
              <a
                href={phonenumberConvertor(dealerData?.business_phone)}
                rel="noopener noreferrer"
                className="p-0 m-0 text-decoration-none d-flex justify-content-center align-items-center"
              >
                <b className="p-0 m-0 text-white">
                  {dealerData?.business_phone}
                </b>
              </a>
            </div>
          </div>
        </div>

        <div className="p-2 m-0 col-12 col-lg-4 flip-card">
          <div className="p-0 m-0 flip-card-inner d-flex flex-column justify-content-center align-items-center">
            <div className="p-0 m-0 row w-100  flip-card-front flex-column justify-content-center align-items-center">
              <div className="p-0 m-0 d-flex justify-content-center align-items-center icon_border">
                <FaEnvelope color="#fff" size={24} />
              </div>
              <div className="p-0 m-0 contact_page_title">EMAIL</div>
              <div className="p-0 m-0 contact_page_text">A CLICK AWAY</div>
            </div>
            <div className="p-0 m-0 row w-100 flip-card-back flex-column justify-content-center align-items-center">
              <div className="p-0 m-0 contact_page_title_back">EMAIL</div>

              <b className="p-0 m-0 text-white">{dealerData?.owner_email}</b>
            </div>
          </div>
        </div>
        <div className="p-2 m-0 col-12 col-lg-4 flip-card">
          <div className="p-0 m-0 flip-card-inner d-flex flex-column justify-content-center align-items-center">
            <div className="p-0 m-0 row w-100  flip-card-front flex-column justify-content-center align-items-center">
              <div className="p-0 m-0 d-flex justify-content-center align-items-center icon_border">
                <FaClock color="#fff" size={24} />
              </div>
              <div className="p-0 m-0 contact_page_title">HOURS</div>
              <div className="p-0 m-0 contact_page_text">OF OPERATION</div>
            </div>
            <div className="p-0 m-0 row w-100  flip-card-back flex-column justify-content-center align-items-center">
              <div className="p-0 m-0 contact_page_title_back">HOURS</div>
              <b className="p-0 m-0 text-white">MON-FRI: 8AM-6PM </b>
              <b className="p-0 m-0 text-white">SAT: 8AM-5PM </b>
            </div>
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

export default TermsPage;
