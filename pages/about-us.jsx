import { CDN_BASE_URL } from "../constant/base";
import Head from "next/head";
import Link from "next/link";
import EformsConatctInfo from "../components/common/web/eforms/eforms_contact_info";
import { FaHeadphonesAlt } from "react-icons/fa";
import { urlObjectKeys } from "next/dist/next-server/lib/utils";

const About = (props) => {
  const { dealerData } = props;
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
          content={`Know about ${
            dealerData?.business_city?.city
          } based car dealer - ${
            dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name
          }. Read more about who we are and how our team helps you in purchasing used cars.`}
        />
        <meta
          name="keywords"
          content={`used cars ${dealerData?.business_city?.city}, car dealerships ${dealerData?.business_city?.city}, ford dealership ${dealerData?.business_city?.city}, used car dealerships ${dealerData?.business_city?.city}, cars for sale in ${dealerData?.business_city?.city}, used cars ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, used car dealers ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, second hand cars ${dealerData?.business_city?.city}, cheap cars for sale in ${dealerData?.business_city?.city}, cars for sale in ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, used pickup trucks for sale in ${dealerData?.business_city?.city}, cars in ${dealerData?.business_city?.city}, auto traders ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, autotrader ${dealerData?.business_city?.Province?.province} ${dealerData?.business_city?.city}, ${dealerData?.business_city?.city} mercedes benz dealer, mercedes dealer ${dealerData?.business_city?.city}, used trucks ${dealerData?.business_city?.city}, car for sale by owner ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, honda dealership ${dealerData?.business_city?.city}`}
        />

        <title>
          {`About ${
            dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name
          } - Used Car Dealer in ${dealerData?.business_city?.city} ,
          ${dealerData?.business_city?.Province?.province}`}
        </title>

        <link
          rel="icon"
          href={`https://hillzimage.blob.core.windows.net${dealerData?.logo_url}`}
        />
      </Head>
      {/* <Head>
        <title>Online car dealership | {dealerData?.bussiness_name} </title>
        <meta
          name="description"
          content={`${dealerData?.bussiness_name} site as an online car dealership in ${dealerData?.business_city?.city}
          ${dealerData?.business_city?.Province?.Country?.country}, provide buy, sell or trade-in value services with the best price and quality.`}
        />
        <meta name="keywords" content="online car dealership" />
      </Head> */}
      {/* <div className="d-flex p-0 m-0 py-5 row w-100 justify-content-center align-items-center p-2 p-md-5">
        <div className="p-0 m-0 col-12 d-flex flex-column justify-content-center align-items-center">
          {" "}
          <div className="p-0 m-0 text-center">
            <div className="p-0 m-0 featured_eforms text-uppercase">
              About Us
            </div>
          </div>
          <div
            className="p-0 py-2 m-0 aboutus_div__description row "
            dangerouslySetInnerHTML={{ __html: dealerData?.about_us }}
          />
        </div> */}
      {/* <div className="p-0 m-0 col-12 d-flex justify-content-center align-items-center pt-3">
          <img
            src={CDN_BASE_URL + dealerData?.aboutUs_image_url}
            className="p-0 m-0 w-100"
          />
        </div> */}

      {/* <div className="p-0 m-0 col-12 col-lg-4 bg_eforms_contactInfo">
          <div className="p-0 m-0 w-100 row justify-content-start align-items-center">
            <div className="p-0 py-3 m-0 col-12 text-left contact_us_part">
              <FaHeadphonesAlt className="mx-2" size={30} />
              <span className="">Contact US</span>
            </div>
            <div className="p-0 py-3 px-2 m-0 col-12">
              <EformsConatctInfo dealerData={dealerData} />
            </div>
          </div>
        </div> */}
      {/* </div> */}

      <div className=" d-flex p-0 m-0 row w-100 justify-content-center align-items-start p-2 p-md-5">
        <div className="col-lg-10 col-12 p-2 p-sm-3 p-md-3 p-lg-5 about__us__backgroundteam_bg">
          {" "}
          <div className="p-0 m-0 row justify-content-start align-items-start">
            <div className="p-0 pb-4 m-0 text-center">
              <div className="p-0 m-0 featured_eforms ">About Us</div>
            </div>
            <div
              className="p-0 py-2 m-0 aboutus_div__description row "
              dangerouslySetInnerHTML={{ __html: dealerData?.about_us }}
            />
          </div>
        </div>
        <div className="p-0 m-0 col-lg-10 col-12 px-md-5 pr-md-5 px-2 row">
          <div className="p-0 m-0 col-lg-6  col-12 d-flex flex-wrap ul_style justify-content-md-start justify-content-center align-items-start ">
            <img
              src="images/about-us/omvic.png"
              className="w-100 p-0 m-0  pt-2 image_about_us"
            />
            <p className="py-3 py-lg-0">
              We are an OMVIC licensed used car dealer. OMVIC is responsible for
              administering Ontario's Motor Vehicle Dealers Act, to ensure a
              fair, safe and informed marketplace in Ontario by protecting the
              rights of consumers, enhancing industry professionalism and
              ensuring fair, honest and open competition for registered motor
              vehicle dealers.
            </p>
          </div>
          <div className="p-0 m-0 col-lg-6  col-12 d-flex ul_style flex-wrap justify-content-md-start justify-content-center pl-md-5 px-2 align-items-start ">
            <img
              src="images/about-us/ucda.png"
              className="w-100 p-0 m-0 image_about_us_2 pt-2"
            />
            <p className="py-3">
              We are also a UCDA member dealer. UCDA members voluntarily agree
              to a Code of Ethics urging them to:
            </p>
            <ul className="ul_style px-4 py-3">
              <li>Disclose everything they know about the vehicle</li>
              <li>Present their vehicles fairly and accurately</li>
              <li>
                Ensure that customers fully understand the products and services
                being offered
              </li>
              <li>Deliver on all promises</li>
              <li>Deal with reasonable complaints promptly</li>
            </ul>
          </div>
        </div>
        {/* <div className="p-0 m-0 col-12 col-lg-4 bg_eforms_contactInfo">
          <div className="p-0 m-0 w-100 row justify-content-start align-items-center">
            <div className="p-0 py-3 m-0 col-12 text-left contact_us_part">
              <FaHeadphonesAlt className="mx-2" size={30} />
              <span className="">Contact US</span>
            </div>
            <div className="p-0 py-3 px-2 m-0 col-12">
              <EformsConatctInfo dealerData={dealerData} />
            </div>
          </div>
        </div> */}
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

export default About;
