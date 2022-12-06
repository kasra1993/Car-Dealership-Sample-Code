import HomeTitle from "../components/layout/home/home_header_title";
import { GoogleReviewData } from "../data/google_review_data";
import { FaHeadphonesAlt, FaStar } from "react-icons/fa";
import EformsConatctInfo from "../components/common/web/eforms/eforms_contact_info";
import Head from "next/head";
import FormDescription from "../components/layout/forms/form_description";

const ReviewPage = (props) => {
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
          content={`Know about ${
            dealerData?.business_city?.city
          } based car dealer - ${
            dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name
          } Group. Read more about who we are and how our team helps you in purchasing used cars.`}
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
          {`About ${
            dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name
          } Group- Used Car Dealer in ${dealerData?.business_city?.city} ,
          ${dealerData?.business_city?.Province?.province}`}
        </title>

        <link
          rel="icon"
          href={`https://hillzimage.blob.core.windows.net${dealerData?.logo_url}`}
        />
      </Head>
      <div className="p-0 m-0  bg-white d-flex justify-content-center ">
        <div className="p-0 m-0 col-11 col-lg-10 row d-flex justify-content-center align-items-start">
          <div className="p-0 m-0 pt-4 col-12 col-lg-7">
            <FormDescription title="REVIEWS" description="" className="pl-4" />
            {GoogleReviewData?.map((review, index) => {
              return (
                <div className="px-4 p-0 m-0 w-100 py-3 d-flex flex-row justify-content-center row">
                  <div className="p-0 m-0 row col-12  justify-content-center align-items-center">
                    <div className="p-0 m-0 col-12 col-sm-4 d-flex flex-column justify-content-center align-items-center">
                      <img
                        src="/icons/home/google-review.png"
                        className="p-0 m-0 w-100 col-2"
                      />
                      <div className="m-0 p-0 name_style_review">
                        {review?.full_name}
                      </div>

                      <div className="p-0 m-0 d-flex justify-content-center align-items-center py-2 ">
                        <div className="p-0 m-0 w-100 d-flex flex-row text-center">
                          {Array(+review?.rate)
                            ?.fill("")
                            ?.map(() => {
                              return (
                                <FaStar
                                  color="gold"
                                  size="20"
                                  className="mx-1 p-0 m-0"
                                />
                              );
                            })}
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-8 text-left p-5 m-0 text_limit_google_review-desc_page">
                      {" "}
                      <i>{review?.desc}</i>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="p-0 m-0 col-12 col-lg-5 bg_eforms_contactInfo">
            <div className="p-0 m-0 w-100 row justify-content-start align-items-center">
              <div className="p-0 py-3 m-0 col-12 text-left contact_us_part">
                <FaHeadphonesAlt className="mx-2" size={30} />
                <span className="">Contact US</span>
              </div>
              <div className="p-0 py-3 px-2 m-0 col-12">
                <EformsConatctInfo dealerData={dealerData} />
              </div>
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

export default ReviewPage;
