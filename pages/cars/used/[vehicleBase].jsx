import VehicleDetailList from "../../../components/layout/vehicle-detail/vehicle_detail_list";
import DetaileProductSliderCustomrWeb from "../../../components/layout/vehicle-detail/gallery_slider";
import { BASE_URL, CDN_BASE_URL } from "../../../constant/base";
import Head from "next/head";
import StandardOptions from "../../../components/layout/vehicle-detail/standardoption";
import ButtonDetaileProduct from "../../../components/layout/vehicle-detail/buttondetaile";
import Dscription from "../../../components/layout/vehicle-detail/Dscription";
import { priceComma } from "../../../utils/common/price_odometer_handler";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
const DetailProduct = (props) => {
  const { dealerData, domain, data2, data, vehicleData } = props;
  console.log(props);
  return (
    <>
      <Head>
        <meta
          property="og:site_name"
          value={dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name}
        />
        <title>{`${data?.Vehicle?.model_year} ${data?.Vehicle?.make} ${data?.Vehicle?.model}`}</title>
        <meta
          property="og:title"
          content={`${data?.Vehicle?.model_year} ${data?.Vehicle?.make} ${data?.Vehicle?.model}`}
          key=""
        />
        <meta
          property="og:url"
          content={`https://${dealerData?.business_website}/cars/used/${data?.Vehicle?.model_year}-${data?.Vehicle?.make}-${data?.Vehicle?.model}-${data?.id}`}
        />
        <meta
          name="image"
          property="og:image"
          content={
            data2[0]?.media_src
              ? `${CDN_BASE_URL}${data2[0]?.media_src}`
              : `${CDN_BASE_URL}${data?.cover_image}`
          }
        />
        <meta
          property="og:image:url"
          content={
            data2[0]?.media_src
              ? `${CDN_BASE_URL}${data2[0]?.media_src}`
              : `${CDN_BASE_URL}${data?.cover_image}`
          }
        />
        <meta property="og:image:width" content="700" />
        <meta property="og:image:height" content="500" />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:description" content="new car" />
        <meta property="og:price:currency" content="" />
        <meta property="og:locale" content="" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
        <meta
          name="description"
          content={`Find used cars, trucks and SUVs for sale in our inventory list at${
            dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name
          } Group. Contact us to learn more about our inventory in ${
            dealerData?.business_city?.city
          }, ${dealerData?.business_city?.Province?.province}.`}
        />
        <meta
          name="keywords"
          content={`used cars ${dealerData?.business_city?.city}, car dealerships ${dealerData?.business_city?.city}, ford dealership ${dealerData?.business_city?.city}, used car dealerships ${dealerData?.business_city?.city}, cars for sale in ${dealerData?.business_city?.city}, used cars ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, used car dealers ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, second hand cars ${dealerData?.business_city?.city}, cheap cars for sale in ${dealerData?.business_city?.city}, cars for sale in ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, used pickup trucks for sale in ${dealerData?.business_city?.city}, cars in ${dealerData?.business_city?.city}, auto traders ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, autotrader ${dealerData?.business_city?.Province?.province} ${dealerData?.business_city?.city}, ${dealerData?.business_city?.city} mercedes benz dealer, mercedes dealer ${dealerData?.business_city?.city}, used trucks ${dealerData?.business_city?.city}, car for sale by owner ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, honda dealership ${dealerData?.business_city?.city}`}
        />

        <title>
          {`  Used Cars Inventory ${dealerData?.business_city?.city}, ${
            dealerData?.business_city?.Province?.province
          } | List of Used
          Vehicles at ${
            dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name
          } Group`}
        </title>
        <meta
          name="title"
          property="og:title"
          content={`${data?.Vehicle?.model_year} ${data?.Vehicle?.make} ${data?.Vehicle?.model}`}
        />

        <link
          rel="icon"
          href={`https://hillzimage.blob.core.windows.net${dealerData?.logo_url}`}
        />
      </Head>
      {/* <Head>
        <title>
          {data?.Vehicle?.model_year} {data?.Vehicle?.make}{" "}
          {data?.Vehicle?.model} {data?.id} | used car for sale |{" "}
          {dealerData?.bussiness_name} car dealership in{" "}
          {dealerData?.business_city?.Province?.Country?.country} ({" "}
          {dealerData?.business_city?.Province?.province} )
        </title>
        <meta
          name="description"
          content={`Find used cars in ${
            dealerData?.bussiness_name
          } car Dealership  | ${data?.Vehicle?.model_year} ${
            data?.Vehicle?.make
          } ${data?.Vehicle?.model}  with best price ($${
            data?.special_price === 0
              ? data?.sell_price
              : data?.special_price
          }) + Car pictures + car features & options`}
        />
        <meta name="keywords" content="car search" />
      </Head> */}
      {/* <Head>
        <meta property="og:site_name" value="715 Auto" />
        <title>{`${data?.Vehicle?.model_year} ${data?.Vehicle?.make} ${data?.Vehicle?.model}`}</title>
        <meta
          property="og:title"
          content={`${data?.Vehicle?.model_year} ${data?.Vehicle?.make} ${data?.Vehicle?.model}`}
          key=""
        />
        <meta
          property="og:url"
          content={`https://${dealerData?.business_website}/cars/used/${data?.Vehicle?.model_year}-${data?.Vehicle?.make}-${data?.Vehicle?.model}-${data?.id}`}
        />

        <meta
          property="og:image"
          content={`https://hillzimage.blob.core.windows.net${data?.cover_image}`}
        />
        <meta
          property="og:image:url"
          content={`https://hillzimage.blob.core.windows.net${data?.cover_image}`}
        />
        <meta property="og:image:width" content="700" />
        <meta property="og:image:height" content="500" />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:description" content="new car" />
        <meta property="og:price:currency" content="" />
        <meta property="og:locale" content="" />
      </Head> */}
      <div className="car_detail_container col-lg-10 col-11 ">
        <div className="p-0 py-5 m-0 px-lg-5 px-3 w-100 d-flex flex-column flex-md-row justify-content-between align-items-start">
          <Link href="/cars">
            <a>
              <button
                type="submit"
                className="btn gold_button_6 w-100 justify-content-center d-flex align-items-center"
              >
                <FaArrowLeft color="#fff" />
                BACK TO INVENTORY
              </button>
            </a>
          </Link>
        </div>
        <div className="p-0 px-3 py-1 px-lg-5 m-0 w-100  justify-content-between align-items-start detail-price-title">
          <div className="p-0 m-0 col-12 col-xl-9">
            <h4 className="p-0 m-0 detail_header_title_sizing ">
              {data?.Vehicle?.model_year} {data?.Vehicle?.make}{" "}
              {data?.Vehicle?.model} {data?.Vehicle?.trim}
            </h4>
          </div>
          <div className="p-0 m-0 col-12  col-xl-3 mt-3 mt-lg-0">
            <p className="p-0 m-0 detail_price_container">
              <span className="col-12 row d-flex justify-content-start align-items-center DetaileProductCustomrWeb-price p-0 m-0">
                {!data?.vehicle_site_detail?.call_for_price
                  ? data?.special_price === 0
                    ? `Price: $ ${priceComma(data?.sell_price, 2)}`
                    : `$ ${priceComma(data?.special_price, 2)}`
                  : "Call For Price"}
              </span>
            </p>

            {data.Vehicle.carfax_link !== null &&
              data.Vehicle.carfax_link !== "" && (
                <>
                  <div className="col-12" />
                  <div className="p-0 m-0 col-8 pl-3">
                    <a
                      href={data.Vehicle.carfax_link}
                      target="_blank"
                      rel="noreferrer noopener"
                      // style={{cursor:"pointer"}}
                    >
                      <img
                        src="/images/inventory/carfaxcanada_icon.png"
                        alt=""
                        className="w-100"
                        style={{
                          height: "auto",
                          objectFit: "contain",
                        }}
                      />
                    </a>
                  </div>
                </>
              )}
          </div>
        </div>
        <div className="p-0 ">
          <div className="p-0 m-0 w-100 row pt-3 justify-content-center align-items-center">
            <div className="p-0 m-0 col-12">
              <div className="p-0 m-0 w-100 d-flex flex-column flex-lg-row pt-3">
                <div className="p-0 m-0 col-12 col-lg-7 px-md-2">
                  <DetaileProductSliderCustomrWeb
                    data={data?.data?.Vehicle?.standard}
                    data2={data2}
                    dealerData={dealerData}
                  />
                  <Dscription data={data} data2={data2} />
                  <div className="p-0 m-0 desc_wara_patern"></div>
                  {/* <Waranty data={data?.data} data2={data?.data2} /> */}
                  <div className="row justify-content-start align-items-center w-100 p-0 m-0 ">
                    <div className="d-flex flex-wrap  p-lg-5 col-12 m-0 py-5">
                      {/* {data?.waranty && <Waranty data={data} />} */}
                      <div className=" col-12  m-0  px-0 ">
                        {/* <EformsHeader title="Options" className="pb-3" /> */}

                        <StandardOptions data={data} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-0 m-0 col-12 col-lg-5">
                  <VehicleDetailList vehicleData={data} />
                  <ButtonDetaileProduct
                    domain={domain}
                    data={data?.data}
                    data2={data?.data2}
                    dealerData={dealerData}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-12 pt-3  row p-0 m-0"
            style={{ position: "relative" }}
          >
            <div className="p-0 m-0  col-12 ">
              <div className=" d-flex  justify-content-between p-0 align-items-center flex-wrap">
                {data?.Vehicle?.carfax_link !== null &&
                  data?.Vehicle?.carfax_link !== "" && (
                    <div className="col-6 p-0 m-0 py-2 carfax_inventory">
                      <a
                        className="p-0 m-0 w-100"
                        href={data?.Vehicle?.carfax_link}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <img
                          src="/images/inventory/carfaxcanada_icon.png"
                          alt=""
                          className="w-100"
                          style={{
                            height: "auto",
                            objectFit: "contain",
                          }}
                        />
                      </a>
                    </div>
                  )}
              </div>
            </div>

            {/* <div className="p-0 m-0  p-2  d-none d-md-block cardetail_phone_container">
                <div className="h-100">
                  <h5 className="">
                    <a
                      href={phonenumberConvertor(data?.business_phone)}
                      className="text-decoration-none "
                    >
                      <FaPhone color="#fff" /> {data?.business_phone}
                    </a>
                  </h5>
                </div>
              </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
export async function getServerSideProps(context) {
  const { req, params } = context;
  const host = req.headers.host;
  const res = await fetch(
    `${BASE_URL}/api/dealership/mid/vehicle/single/${host}/${params?.vehicleBase}`
  );
  const res2 = await fetch(
    `${BASE_URL}/api/vehicle/dealership/media/mid/all/${host}/${params?.vehicleBase}`
  );
  if (res.status === 200 && res2.status === 200) {
    const data = await res.json();
    const data2 = await res2.json();
    return { props: { data, data2 } };
  } else {
    return {
      notFound: true,
    };
  }
}
export default DetailProduct;
