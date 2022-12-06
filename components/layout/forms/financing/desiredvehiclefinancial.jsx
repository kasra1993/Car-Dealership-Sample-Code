import { Modal } from "react-bootstrap";
import React, { useState, useEffect } from "react";
// import SellerAddMidNegotiate from "../advance-search/seller_add_mid_nego";
// import useGetAllVehicles from "../../../hooks/vehicles/useGetAllVehicles";
// import Loading from "../../common/web/loading/loading";
import useGetAllVehicles from "../../../../hooks/vehicles/useGetAllVehicles";
import Loading from "../../../common/web/loading/loading";
import { FaTimes } from "react-icons/fa";
import { QueryClientProvider, QueryClient } from "react-query";
// import Filter from "../../../common/web/Filter";
import AdvanceFilter from "../../../common/web/filter/AdvanceFilter";
// import Cars from "../../../../pages/inventory";
import Cars from "../../../common/web/Cars";
import { httpRequest } from "../../../../apis";
import { useGetVehiclesBaseOnFilter } from "../../../../hooks/vehicles/useGetVehiclesBaseOnFilter";
import InventoryFilterContext from "../../../../context/inventoryFilterContext";
import { useRouter } from "next/router";

// import AdvanceSearch from "../../advance-search/seller_negotiate_vehicle_advance_search";

const DesiredVehicleFinancial = (props) => {
  const { domain, otherFormik = undefined, advanceSearchData, onClose } = props;
  const [vehiclesData, setVehiclesData] = useState([]);
  const { query } = useRouter();
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
      <InventoryFilterContext
        domain={domain}
        advanceSearchData={advanceSearchData}
        setVehiclesData={setVehiclesData}
        minOdometer={advanceSearchData?.minOdometer}
        maxOdometer={advanceSearchData?.maxOdometer}
        minPrice={advanceSearchData?.minPrice}
        maxPrice={advanceSearchData?.maxPrice}
        setPosts={setPosts}
      >
        <div className="p-0 m-0 imp-background-image">
          {/* <Filter title={"Filter inventory"} /> */}
          <AdvanceFilter
            domain={domain}
            advanceSearchData={advanceSearchData}
            setVehiclesData={setVehiclesData}
            minOdometer={advanceSearchData?.minOdometer}
            maxOdometer={advanceSearchData?.maxOdometer}
            minPrice={advanceSearchData?.minPrice}
            maxPrice={advanceSearchData?.maxPrice}
          />
          <div className="p-0 m-0 mt-3">
            <div className="px-1 px-lg-5">
              <Cars
                otherFormik={otherFormik}
                isFinancial
                vehiclesData={vehiclesData}
                onClose={onClose}
                // vehiclesData={vehicles}
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
            {vehiclesData?.length === 0 && !isLoading && (
              <div
                className="p-0 m-0 d-flex justify-content-center align-items-center"
                style={{
                  color: "#f4f4f4",
                }}
              >
                There isn't any vehicle with this detail...
              </div>
            )}
          </div>
          {/* <FooterCustomerWeb /> */}
        </div>
      </InventoryFilterContext>
    </>
  );
};

export default DesiredVehicleFinancial;
