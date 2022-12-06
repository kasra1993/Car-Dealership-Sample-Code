import Head from "next/head";
import { httpRequest } from "../apis";
import HomeCustomeerWeb from "../components/layout/home/homecustomeerweb";
const Home = (data) => {
  const {
    dealerData,
    specialData,
    brands,
    vehicleDataForSearch,
    advanceSearchData,
    allbrands,
  } = data;
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,maximum-scale=1.0"
        />
        <meta
          name="description"
          content={`${
            dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name
          } is the One Stop used car dealerData for all Makes and Models of both New and Used carsfor sale. We offer Car Loans on Low interest rates and assure you of quick and easy Car Loan approvals.`}
        />
        <meta
          name="keywords"
          content={`used cars${dealerData?.business_city?.city}, car dealerDatas${dealerData?.business_city?.city}, ford dealerData${dealerData?.business_city?.city}, used car dealerDatas${dealerData?.business_city?.city}, cars for sale in${dealerData?.business_city?.city}, used cars${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, used car dealers${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, second hand cars${dealerData?.business_city?.city}, cheap cars for sale in${dealerData?.business_city?.city}, cars for sale in${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, used pickup trucks for sale in${dealerData?.business_city?.city}, cars in${dealerData?.business_city?.city}, auto traders${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, autotrader ${dealerData?.business_city?.Province?.province}${dealerData?.business_city?.city},${dealerData?.business_city?.city} mercedes benz dealer, mercedes dealer${dealerData?.business_city?.city}, used trucks${dealerData?.business_city?.city}, car for sale by owner${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, honda dealerData${dealerData?.business_city?.city}`}
        />
        <title>
          {`${dealerData?.business_city?.city},${
            dealerData?.business_city?.Province?.province
          } Used Car Dealer | New and Used Car
          For Sale | 
          ${dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name}`}
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
      <HomeCustomeerWeb
        advanceSearchData={advanceSearchData}
        specialData={specialData}
        data={data}
        brands={brands}
        vehicleDataForSearch={vehicleDataForSearch}
        dealerData={dealerData}
        allbrands={allbrands}
      />
    </>
  );
};

export async function getServerSideProps(ctx) {
  const domain = ctx.req.headers.host;
  const { data: specialData, status: specialStatus } = await httpRequest(
    "GET",
    `/api/dealership/vehicles/${domain}/special`,
    {},
    {}
  );
  const { data: allbrands } = await httpRequest(
    "GET",
    `/api/vehicle/dealership/get/all/vehicles/${domain}`,
    {},
    {}
  );
  const { data: vehicleDataForSearch, status: vehicleDataForSearchStatus } =
    await httpRequest("GET", `/api/dealership/vehicles/all/${domain}`, {}, {});

  const { data: data4, status: webSliderStatus } = await httpRequest(
    "GET",
    `/api/dealerweb/websliders/${domain}`,
    {},
    {}
  );
  const { data: brands, status: brandStatus } = await httpRequest(
    "GET",
    `/api/vehicle/dealership/get/more/vehicles/${domain}`,
    {},
    {}
  );
  const { data: advanceSearchData, status: advanceSearchStatus } =
    await httpRequest(
      "GET",
      `/api/dealership/advance/search/vehicles/get/${domain}`,
      {},
      {},
      false
    );
  if (
    brandStatus === 200 &&
    specialStatus === 200 &&
    webSliderStatus === 200 &&
    vehicleDataForSearchStatus === 200 &&
    advanceSearchStatus === 200
  ) {
    return {
      props: {
        specialData,
        domain,
        brands,
        data4,
        vehicleDataForSearch,
        advanceSearchData,
        allbrands,
      },
    };
  }
  return {
    notFound: true,
  };
}
export default Home;
