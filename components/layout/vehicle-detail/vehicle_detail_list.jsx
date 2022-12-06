import { priceComma } from "../../../utils/common/price_odometer_handler";
import Link from "next/link";
import { useState } from "react";
import { CloseButton, Modal } from "react-bootstrap";
import CalculatoreCustomerWeb from "../../common/web/calculator/calculator";
import Location from "../directions/location";
import GetMoreInformation from "./get_more_information";

const VehicleDetailList = (props) => {
  const { vehicleData, dealerData, domain } = props;
  const showDetail = vehicleData?.vehicle_site_detail;
  const [location, setLocation] = useState();
  const [calculate, setCalculate] = useState();
  const [information, setInformation] = useState();
  const modallocationClose = () => {
    setLocation(false);
  };
  const modalcalculatorClose = () => {
    setCalculate(false);
  };
  const modalInformationClose = () => {
    setInformation(false);
  };
  return (
    <>
      <Modal
        onHide={modalcalculatorClose}
        show={calculate}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header
          style={{ color: "#000", backgroundColor: "#fff" }}
          className="vehicle_modal_header-style border-1"
        >
          <Modal.Title>Financing Calculator:</Modal.Title>
          <CloseButton
            style={{ color: "#000" }}
            onClick={() => {
              modalcalculatorClose();
            }}
          />
        </Modal.Header>
        <Modal.Body style={{ color: "#000", backgroundColor: "#fff" }}>
          <CalculatoreCustomerWeb data={props} />
        </Modal.Body>
      </Modal>
      <Modal
        show={location}
        onHide={modallocationClose}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header
          className="vehicle_modal_header-style border-1"
          style={{ color: "#000", backgroundColor: "#fff" }}
        >
          <Modal.Title>Location</Modal.Title>
          <CloseButton
            onClick={() => {
              modallocationClose();
            }}
          />
        </Modal.Header>
        <Modal.Body style={{ color: "#000", backgroundColor: "#fff" }}>
          <Link href="#" class="d-flex flex-md-column col-12">
            <div className="d-flex flex-md-column row col-12 justify-content-center align-items-center text-center">
              <h3 className="vehicle_modal_header-style border-1 col-12 d-flex flex-md-column row">
                {dealerData?.bussiness_name}
              </h3>
              <p className="d-flex flex-md-column row col-12 justify-content-start align-items-start text-start">
                {dealerData?.business_street} {" ,"}
                {dealerData?.business_postal}
              </p>
              <Location dealerData={dealerData} />
              <Link href="/direction">
                <button
                  style={{ borderRadius: "0", backgroundColor: "#D0660" }}
                  onClick={() => setLocation(true)}
                  className="btn red_button my-3 col-12 p-0 m-0 vehicle__btn--button btn"
                >
                  <p className="m-sm-0  m-0 py-3">Get Directions</p>
                </button>
              </Link>
            </div>
          </Link>
        </Modal.Body>
      </Modal>
      <Modal
        onHide={modalInformationClose}
        show={information}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header
          style={{ color: "#000", backgroundColor: "#fff" }}
          className="vehicle_modal_header-style border-1"
        >
          <Modal.Title>GET MORE INFORMATION</Modal.Title>
          <CloseButton
            onClick={() => {
              modalInformationClose();
            }}
          />
        </Modal.Header>
        <Modal.Body style={{ color: "#000", backgroundColor: "#fff" }}>
          <GetMoreInformation
            domain={domain}
            vehicleId={vehicleData?.id}
            modalInformationClose={modalInformationClose}
          />
        </Modal.Body>
      </Modal>
      <div className="detail_car_list_bg_img p-3 m-0 w-100 row justify-content-center align-items-center">
        <div className="p-0 m-0 col-12 m-0 detail_car_list_bg">
          <div className=" d-flex  justify-content-center">
            <div className=" w-100 row p-2 justify-content-center">
              <div className="p-0 m-0 w-100 row justify-content-between align-items-center car_detail_list">
                {showDetail?.model_year && (
                  <>
                    <div className="p-0 py-2 m-0 col-12  d-flex  align-items-center justify-content-between vehicle_single_detail_div__container">
                      <span className="p-0 m-0 col-6 justify-content-start align-items-start"><strong>Year</strong></span>
                      <span className="p-0 m-0 col-6 justify-content-start align-items-start">{props?.vehicleData?.Vehicle?.model_year}</span>
                    </div>
                  </>
                )}
                {showDetail?.passenger && (
                  <>
                    {" "}
                    <div className="p-0 py-2 m-0 col-12  d-flex align-items-center justify-content-between vehicle_single_detail_div__container">
                      <span className="p-0 m-0 col-6 justify-content-start align-items-start"><strong>Passengers</strong></span>
                      <span  className="p-0 m-0 col-6 justify-content-start align-items-start">{props?.vehicleData?.Vehicle?.passenger}</span>
                    </div>
                  </>
                )}
              </div>
              <div className="p-0 m-0 w-100 row justify-content-between align-items-center car_detail_list">
                {showDetail?.make && (
                  <>
                    <div className="p-0 py-2 m-0 col-12  d-flex align-items-center justify-content-between vehicle_single_detail_div__container">
                      <span className="p-0 m-0 col-6 justify-content-start align-items-start"><strong>Make</strong></span>
                      <span className="p-0 m-0 col-6 justify-content-start align-items-start">{props?.vehicleData?.Vehicle?.make}</span>
                    </div>
                  </>
                )}
                {showDetail?.fuel_type && (
                  <>
                    <div className="p-0 py-2 m-0 col-12  d-flex  align-items-center justify-content-between vehicle_single_detail_div__container">
                      <span className="p-0 m-0 col-6 justify-content-start align-items-start"><strong>Fuel Type</strong></span>
                      <span className="p-0 m-0 col-6 justify-content-start align-items-start">{props?.vehicleData?.Vehicle?.fuel_type}</span>
                    </div>
                  </>
                )}
              </div>
              <div className="p-0 m-0 w-100 row justify-content-between align-items-center car_detail_list">
                {showDetail?.model && (
                  <>
                    <div className="p-0 py-2 m-0 col-12  d-flex  align-items-center justify-content-between vehicle_single_detail_div__container">
                      <span className="p-0 m-0 col-6 justify-content-start align-items-start"><strong>Model</strong></span>
                      <span className="p-0 m-0 col-6 justify-content-start align-items-start">{props?.vehicleData?.Vehicle?.model}</span>
                    </div>
                  </>
                )}
                {showDetail?.city_fuel && (
                  <>
                    {" "}
                    <div className="p-0 py-2 m-0 col-12  d-flex align-items-center justify-content-between vehicle_single_detail_div__container">
                      <span className="p-0 m-0 col-6 justify-content-start align-items-start"><strong>City Fuel</strong></span>
                      <span className="p-0 m-0 col-6 justify-content-start align-items-start">
                        {props?.vehicleData?.Vehicle?.city_fuel}{" "}
                        {props?.vehicleData?.Vehicle?.fuel_unit}
                      </span>
                    </div>
                  </>
                )}
              </div>
              <div className="p-0 m-0 w-100 row justify-content-between align-items-center car_detail_list">
                {showDetail?.frk_titleStatus &&
                  props?.vehicleData?.TitleStatus?.name && (
                    <>
                      <div className="p-0 py-2 m-0 col-12  d-flex  align-items-center justify-content-between vehicle_single_detail_div__container">
                        <span className="p-0 m-0 col-6 justify-content-start align-items-start"><stong>Title Status</stong></span>
                        <span className="p-0 m-0 col-6 justify-content-start align-items-start">{props?.vehicleData?.TitleStatus?.name}</span>
                      </div>
                      <img
                        src="/images/inventory/Line 1.png"
                        className="w-100"
                      />
                    </>
                  )}
                {showDetail?.hwy_fuel && (
                  <>
                    {" "}
                    <div className="p-0 py-2 m-0 col-12 d-flex  align-items-center justify-content-between vehicle_single_detail_div__container">
                      <span className="p-0 m-0 col-6 justify-content-start align-items-start"><strong>Highway Fuel</strong></span>
                      <span className="p-0 m-0 col-6 justify-content-start align-items-start">
                        {props?.vehicleData?.Vehicle?.hwy_fuel}{" "}
                        {props?.vehicleData?.Vehicle?.fuel_unit}
                      </span>
                    </div>
                  </>
                )}
              </div>
              <div className="p-0 m-0 w-100 row justify-content-between align-items-center car_detail_list">
                {showDetail?.frk_bodyStyle && (
                  <>
                    {" "}
                    <div className="p-0 py-2 m-0 col-12  d-flex  align-items-center justify-content-between vehicle_single_detail_div__container">
                      <span className="p-0 m-0 col-6 justify-content-start align-items-start"><strong>Body Style</strong></span>
                      <span className="p-0 m-0 col-6 justify-content-start align-items-start">
                        {props?.vehicleData?.Vehicle?.BodyStyle?.name}
                      </span>
                    </div>
                  </>
                )}
                {showDetail?.stock_NO && (
                  <>
                    {" "}
                    <div className="p-0 py-2 m-0 col-12  d-flex  align-items-center justify-content-between vehicle_single_detail_div__container">
                      <span className="p-0 m-0 col-6 justify-content-start align-items-start"><strong>Stock Number</strong></span>
                      <span className="p-0 m-0 col-6 justify-content-start align-items-start">{props?.vehicleData?.stock_NO}</span>
                    </div>
                  </>
                )}
              </div>
              <div className="p-0 m-0 w-100 row justify-content-between align-items-center car_detail_list">
                {showDetail?.odometer && (
                  <>
                    {" "}
                    <div className="p-0 py-2 m-0 col-12  d-flex align-items-center justify-content-between vehicle_single_detail_div__container">
                      <span className="p-0 m-0 col-6 justify-content-start align-items-start"><strong>Odometer</strong></span>
                      <span className="p-0 m-0 col-6 justify-content-start align-items-start">
                        {priceComma(props?.vehicleData?.odometer, 2)}{" "}
                        {props?.vehicleData?.odometer_type === 1 ? "MI" : "KM"}
                      </span>
                    </div>
                  </>
                )}
                {showDetail?.vin_number && (
                  <>
                    {" "}
                    <div className="p-0 py-2 m-0 col-12 d-flex  align-items-center justify-content-between vehicle_single_detail_div__container">
                      <span className="p-0 m-0 col-6 justify-content-start align-items-start"><strong>Vin</strong></span>
                      <span className="p-0 m-0 col-6 justify-content-start align-items-start">{props?.vehicleData?.Vehicle?.vin_number}</span>
                    </div>
                  </>
                )}
              </div>
              <div className="p-0 m-0 w-100 row justify-content-between align-items-center car_detail_list">
                {showDetail?.transmission && (
                  <>
                    <div className="p-0 py-2 m-0 col-12  d-flex  align-items-center justify-content-between vehicle_single_detail_div__container">
                      <span className="p-0 m-0 col-6 justify-content-start align-items-start"><strong>Transmission</strong></span>
                      <span className="p-0 m-0 col-6 justify-content-start align-items-start">
                        {props?.vehicleData?.Vehicle?.Transmission?.name}
                      </span>
                    </div>
                  </>
                )}
                {showDetail?.engine_type && (
                  <>
                    {" "}
                    <div className="p-0 py-2 m-0 col-12  d-flex align-items-center justify-content-between vehicle_single_detail_div__container">
                      <span className="p-0 m-0 col-6 justify-content-start align-items-start"><strong>Engine</strong></span>
                      <span className="p-0 m-0 col-6 justify-content-start align-items-start">
                        {props?.vehicleData?.Vehicle?.engine_cylinders}
                      </span>
                    </div>
                  </>
                )}
              </div>
              <div className="p-0 m-0 w-100 row justify-content-between align-items-center car_detail_list">
                {showDetail?.frk_exterior_color && (
                  <>
                    <div className="p-0 py-2 m-0 col-12  d-flex  align-items-center justify-content-between vehicle_single_detail_div__container">
                      <span className="p-0 m-0 col-6 justify-content-start align-items-start"><strong>Exterior Color</strong></span>
                      <div className="p-0 m-0 d-flex align-items-start col-6 justify-content-start">
                        <div
                          className="p-0 m-0 mx-0 mx-md-2"
                          style={{
                            width: "20px",
                            height: "20px",
                            backgroundColor: `#${props?.vehicleData?.Vehicle?.exterior_color?.code}`,
                          }}
                        />
                        <span className="d-none d-md-inline">
                          {props?.vehicleData?.Vehicle?.exterior_color?.name}
                        </span>
                      </div>
                    </div>
                  </>
                )}
                {showDetail?.engine_size && (
                  <>
                    {" "}
                    <div className="p-0 py-2 m-0 col-12 d-flex  align-items-center justify-content-between vehicle_single_detail_div__container">
                      <span className="p-0 m-0 col-6 justify-content-start align-items-start"> <strong>Engine Size</strong></span>
                      <span className="p-0 m-0 col-6 justify-content-start align-items-start">{props?.vehicleData?.Vehicle?.engine_size}</span>
                    </div>
                  </>
                )}
              </div>
              <div className="p-0 m-0 w-100 row justify-content-between align-items-center car_detail_list">
                {showDetail?.frk_interior_color && (
                  <>
                    <div className="p-0 py-2 m-0 col-12 d-flex  align-items-center justify-content-between vehicle_single_detail_div__container">
                      <spa className="p-0 m-0 col-6 justify-content-start align-items-start"><strong>Interior Color</strong></spa>
                      <div className="p-0 m-0 d-flex align-items-start col-6 " >
                        <div
                          className="p-0 m-0 mx-0 mx-md-2"
                          style={{
                            width: "20px",
                            height: "20px",
                            backgroundColor: `#${props?.vehicleData?.Vehicle?.interior_color?.code}`,
                          }}
                        />
                        <span className="d-none d-md-inline">
                          {props?.vehicleData?.Vehicle?.interior_color?.name}
                        </span>
                      </div>
                    </div>
                  </>
                )}
                {showDetail?.drive_type && (
                  <div className="p-0 py-2 m-0 col-12 d-flex  align-items-center justify-content-between vehicle_single_detail_div__container">
                    <span  className="p-0 m-0 col-6 justify-content-start align-items-start"><strong>Drivetrain</strong></span>
                    <span className="p-0 m-0 col-6 justify-content-start align-items-start">{props?.vehicleData?.Vehicle?.drive_type}</span>
                  </div>
                )}
              </div>
              <div className="p-0 m-0 w-100 row justify-content-between align-items-center car_detail_list">
                {showDetail?.doors && (
                  <>
                    {" "}
                    <div className="p-0 py-2 m-0 col-12  d-flex  align-items-center justify-content-between vehicle_single_detail_div__container">
                      <span className="p-0 m-0 col-6 justify-content-start align-items-start"><strong>Doors</strong></span>
                      <span className="p-0 m-0 col-6 justify-content-start align-items-start">{props?.vehicleData?.Vehicle?.doors}</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VehicleDetailList;
