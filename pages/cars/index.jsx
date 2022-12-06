import AdvanceFilter from "../../components/common/web/filter/AdvanceFilter";
import Cars from "../../components/common/web/Cars";
import { httpRequest } from "../../apis";
import { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import InventoryFilterContext from "../../context/inventoryFilterContext";
import InventorySortVehicles from "../../components/common/web/inventory/inventory_sort";
import Search from "../../components/layout/home/slider/search";
import { useGetVehiclesBaseOnFilter } from "../../hooks/vehicles/useGetVehiclesBaseOnFilter";

export default function Inventory(props) {
  const { query } = useRouter();
  const {
    domain,
    advanceSearchData,
    vehiclesData,
    dealerData,
    vehicleDataForSearch,
  } = props;
  const [vehicles, setVehiclesData] = useState(() => vehiclesData);
  const [posts, setPosts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const {
    // data: vehiclesData,
    isLoading,
    mutate,
  } = useGetVehiclesBaseOnFilter(
    {
      onSuccessFunction: (data) => {
        setVehiclesData(data);
      },
    },
    domain
  );
  const currentYear = new Date().getFullYear();
  const body = {
    // url: domain,
    year_start: "0", //query?.is_classic === "1" ? "0" : "1970",
    year_end: currentYear, //query?.is_classic === "1" ? "1970" : currentYear,
    price_low: advanceSearchData?.minPrice,
    price_high: advanceSearchData?.maxPrice,
    odometer_low: advanceSearchData?.minOdometer,
    odometer_high: advanceSearchData?.maxOdometer,
    make: "",
    model: "",
    transmission: "",
    body_style: "",
    drive_train: "",
    doors: "",
    interior_color: "",
    Exterior_color: "",
  };
  useEffect(() => {
    query?.make || query?.model || query?.Minyear || query?.Maxyear
      ? undefined
      : mutate(body);
  }, []);

  return (
    <>
      {/* <Head>
        <title>
          Used Car {dealerData?.business_city?.city}{" "}
          {dealerData?.business_city?.Province?.Country?.country} inventory |{" "}
          {dealerData?.bussiness_name}{" "}
        </title>
        <meta
          name="description"
          content={`In ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.Country?.country}, you can online search your car from the comprehensive car inventory on the ${dealerData?.bussiness_name} site and buy it at the best price.`}
        />
        <meta name="keywords" content="car inventory" />
      </Head> */}
      <Head>
        <title>
          {dealerData?.business_city?.city},
          {dealerData?.business_city?.Province?.province} Used Car Dealer|New
          and Used Car For Sale|{dealerData?.bussiness_name}
        </title>

        <link
          rel="icon"
          type="image/x-icon"
          href={`https://hillzimage.blob.core.windows.net1/${dealerData?.logo_url}`}
        ></link>
      </Head>
      <InventoryFilterContext
        domain={domain}
        advanceSearchData={advanceSearchData}
        setVehiclesData={setVehiclesData}
        minOdometer={advanceSearchData?.minOdometer}
        maxOdometer={advanceSearchData?.maxOdometer}
        kmMax={advanceSearchData?.kmMax}
        kmMin={advanceSearchData?.kmMin}
        miMin={advanceSearchData?.miMin}
        miMax={advanceSearchData?.miMax}
        minPrice={advanceSearchData?.minPrice}
        maxPrice={advanceSearchData?.maxPrice}
        makeParam={query?.make}
        dealerData={dealerData}
        makeBodystyle={query?.bodystyle}
        setPosts={setPosts}
      >
        <div className="row justify-content-center p-0 m-0 w-100 ">
          <div className="col-xl-10 col-md-11 col-12 p-0 m-0 ">
            <div className="p-0 m-0 w-100 row justify-content-center px-md-4 px-lg-0 px-xl-5 ">
              <div className="p-0 m-0 p-3 py-lg-4 px-lg-0 col-12">
                <div className="w-100 p-0 m-0 advance__search__div--position d-block ">
                  <AdvanceFilter
                    domain={domain}
                    advanceSearchData={advanceSearchData}
                    setVehiclesData={setVehiclesData}
                    minOdometer={advanceSearchData?.minOdometer}
                    maxOdometer={advanceSearchData?.maxOdometer}
                    kmMax={advanceSearchData?.kmMax}
                    kmMin={advanceSearchData?.kmMin}
                    miMin={advanceSearchData?.miMin}
                    miMax={advanceSearchData?.miMax}
                    minPrice={advanceSearchData?.minPrice}
                    maxPrice={advanceSearchData?.maxPrice}
                    makeBodystyle={query?.bodystyle}
                    vehicles={vehicles.length}
                  />
                  {/* <InventorySortVehicles vehiclesData={vehicles} /> */}
                  {/* <AdvanceFilterr
                  domain={domain}
                  advanceSearchData={advanceSearchData}
                  setVehiclesData={setVehiclesData}
                  minOdometer={advanceSearchData?.minOdometer}
                  maxOdometer={advanceSearchData?.maxOdometer}
                  minPrice={advanceSearchData?.minPrice}
                  maxPrice={advanceSearchData?.maxPrice}
                /> */}
                </div>
              </div>
              <div className="col-12 p-0 m-0">
                <div className="p-0 m-0 pt-3 d-flex justify-content-end w-100 ">
                  <InventorySortVehicles
                    // vehiclesData={vehicles}
                    vehiclesData={posts}
                    advanceSearchData={advanceSearchData}
                  />
                </div>
                <div className="w-100 d-flex flex-column p-0 m-0 inventory_patern ">
                  <Cars
                    dealerData={dealerData}
                    mobileRenderComponent={
                      <AdvanceFilter
                        domain={domain}
                        advanceSearchData={advanceSearchData}
                        setVehiclesData={setVehiclesData}
                        minOdometer={advanceSearchData?.minOdometer}
                        maxOdometer={advanceSearchData?.maxOdometer}
                        kmMax={advanceSearchData?.kmMax}
                        kmMin={advanceSearchData?.kmMin}
                        miMin={advanceSearchData?.miMin}
                        miMax={advanceSearchData?.miMax}
                        minPrice={advanceSearchData?.minPrice}
                        maxPrice={advanceSearchData?.maxPrice}
                      />
                    }
                    vehiclesData={vehicles}
                    hasMore={hasMore}
                    setHasMore={setHasMore}
                    domain={domain}
                    // body={body}
                    advanceSearchData={advanceSearchData}
                    posts={posts}
                    setPosts={setPosts}
                    query={query}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </InventoryFilterContext>
    </>
  );
}
export async function getServerSideProps(ctx) {
  const domain = ctx.req.headers.host;
  const currentYear = new Date().getFullYear();
  const { data: vehicleDataForSearch, status: vehicleDataForSearchStatus } =
    await httpRequest("GET", `/api/dealership/vehicles/all/${domain}`, {}, {});
  const { data: advanceSearchData, status: advanceSearchStatus } =
    await httpRequest(
      "GET",
      `/api/dealership/advance/search/vehicles/get/${domain}`,
      {},
      {},
      false
    );
  const body = {
    year_start: "1970",
    year_end: currentYear,
    price_low: advanceSearchData?.minPrice,
    price_high: advanceSearchData?.maxPrice,
    odometer_low: advanceSearchData?.minOdometer,
    odometer_high: advanceSearchData?.maxOdometer,
    make: "",
    model: "",
    transmission: "",
    body_style: "",
    drive_train: "",
    doors: "",
    interior_color: "",
    Exterior_color: "",
  };
  const query = ctx.query;
  if (
    (query?.make && query?.make !== "") ||
    (query?.model && query?.model !== "") ||
    (query?.Minyear && query?.Minyear !== "") ||
    (query?.Maxyear && query?.Maxyear !== "")
  ) {
    body.year_start = query.Minyear || "1970";
    body.year_end = query.Maxyear || currentYear;
    body.make = query.make;
    body.model = query.model;
    const { status: vehiclesStatus, data: vehiclesData } = await httpRequest(
      "POST",
      `/api/dealership/advance/search/vehicles/${domain}`,
      body,
      {},
      false
    );
    if (vehiclesStatus !== 200 || advanceSearchStatus !== 200) {
      return {
        notFound: true,
      };
    } else {
      return {
        props: {
          domain,
          advanceSearchData,
          vehiclesData,
        },
      };
    }
  } else if (query?.is_it_special) {
    body.is_it_special = query?.is_it_special || null;
    const { status: vehiclesStatus, data: vehiclesData } = await httpRequest(
      "POST",
      `/api/dealership/advance/search/vehicles/${domain}`,
      body,
      {},
      false
    );
    if (vehiclesStatus !== 200 || advanceSearchStatus !== 200) {
      return {
        notFound: true,
      };
    } else {
      return {
        props: {
          domain,
          advanceSearchData,
          vehiclesData,
        },
      };
    }
  } else {
    const { status: vehiclesStatus, data: vehiclesData } = await httpRequest(
      "POST",
      `/api/dealership/advance/search/vehicles/${domain}`,
      body,
      {},
      false
    );
    if (vehiclesStatus !== 200 || advanceSearchStatus !== 200) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        domain,
        advanceSearchData,
        vehiclesData,
        vehicleDataForSearch,
      },
    };
  }
}
