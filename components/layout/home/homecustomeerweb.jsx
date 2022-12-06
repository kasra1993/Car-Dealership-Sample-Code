import Slider from "./slider/slider";
import SpecialInventorySlider from "./special-inventory/special_inventory";
import HomeAboutUs from "./aboutus";
import CoverFlowSlider from "./slider/cover_flow_slider";
import LinkTo from "../../../components/layout/home/link-to/linkto";
import Welcome from "./welcome";
import { GOOGLE_REVIEW } from "../../../constant/home/home";
import HomeAdvanceSearch from "./home_advance_search";
import Location from "../directions/location";
import Link from "next/link";

const HomeCustomeerWeb = (props) => {
  const {
    data,
    specialData,
    brands,
    vehicleDataForSearch,
    advanceSearchData,
    dealerData,
    allbrands,
  } = props;
  return (
    <>
      <div className="p-0 m-0 w-100 row">
        {/* <div className="m-0 p-0 col-12 "> */}
        <Slider
          slider={data?.data4}
          vehicleDataForSearch={vehicleDataForSearch}
          advanceSearchData={advanceSearchData}
          dealerData={dealerData}
        />
        {/* </div> */}
        <div
          className="p-lg-5 m-0 row w-100 "
          style={{
            backgroundColor: "#292929",
            position: "relative",
            zIndex: 5646,
          }}
        >
          <HomeAdvanceSearch
            advanceSearchData={advanceSearchData}
            className=""
          />
        </div>

        <LinkTo {...props} />
        <SpecialInventorySlider specialCars={specialData?.data} />
        <Welcome dealerData={dealerData} />
        <CoverFlowSlider
          dealerData={dealerData}
          hasButton={true}
          href=""
          buttonTittle={"Read More"}
          limit={true}
          defaultImage={true}
          data={GOOGLE_REVIEW}
        />
        <div className="w-100 m-0 p-0 text-center py-4 text-white d-flex justify-content-center align-items-center home-address-section ">
          <h5 className="address_text_container d-flex flex-column flex-sm-row">
            We are located at
            <Link href="/direction">
              <a>
                <span className="p-0 m-0 pl-2  d-md-flex address_text_container">
                  {props?.dealerData?.business_street}
                  {", "}
                  {props?.dealerData?.business_city?.city}
                  {", "}

                  {props?.dealerData?.business_city?.Province?.province ===
                  "Alberta"
                    ? "AB"
                    : props?.dealerData?.business_city?.Province?.province}

                  {", "}
                  {props?.dealerData?.business_postal}
                </span>
              </a>
            </Link>
          </h5>
        </div>
        <Location dealerData={dealerData} />
        {/* <SpecialInventorySlider
          dealerData={dealerData}
          specialCars={specialData?.data}
        /> */}

        {/* <HomeAboutUs dealerData={dealerData} /> */}
        {/* <ScrollNextsection /> */}
        {/* <OurBrandsHomePage brands={brands} allbrands={allbrands} /> */}
        {/* <HomeIntroducingServices dealerData={dealerData} /> */}
        {/* <div className="home_patern w-100 p-0 m-0">
        <img src="/images/home/Group64.png" className="w-100" />
      </div> */}
        {/* <HomeAdvanceSearch advanceSearchData={advanceSearchData} /> */}
        {/* <div className="home_patern pb-5 w-100 p-0 m-0">
        <img src="/images/home/Group64.png" className="w-100" />
      </div> */}
        {/* <div className="home_patern pt-5 w-100 p-0 m-0">
        <img src="/images/home/Group64.png" className="w-100" />
      </div> */}
        {/* <Comments />
      <div className="home_patern pb-5 w-100 p-0 m-0"></div> */}
      </div>
    </>
  );
};

export default HomeCustomeerWeb;
