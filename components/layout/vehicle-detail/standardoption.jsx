// import Accordion from "react-bootstrap/Accordion";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import AccordianToggleStandard from "./standardaccordian";

// import { Accordion } from "react-bootstrap";
const StandardOptions = (props) => {
  const [activeAccordian, setActiveAccordian] = useState(null);
  const [showOptions, setShowOptions] = useState(false);

  const handleAccrodianActive = (i) => {
    if (activeAccordian === i) {
      setActiveAccordian(null);
    } else {
      setActiveAccordian(i);
    }
  };
  const loopstandard =
    props?.data?.Vehicle?.standard &&
    Object.entries(props?.data?.Vehicle?.standard) &&
    Object.entries(props?.data?.Vehicle?.standard)
      ? Object.entries(props?.data?.Vehicle?.standard)
      : [];
  const lenght = loopstandard?.length;

  return (
    <div className="p-0 m-0 w-100    py-lg-3">
      <h3
        className="p-0 m-0 pt-3 pb-4 "
        style={{
          color: "252525",
          fontSize: "20px",
          fontFamily: " OpenSansBold",
        }}
      >
        Features & Options
      </h3>
      <div className="p-0 m-0 w-100 row">
        {props?.data?.data?.VehicleExtraFeatures?.map((f) => (
          <div className="p-0 m-0 col-6 col-sm-4 text-start py-2 detail_extra_feature_container">
            {f.feature_name}
          </div>
        ))}
      </div>

      {showOptions && (
        <div className="p-0 m-0 w-100 row">
          {loopstandard?.map((options) => (
            <>
              <h5 className="p-0 m-0 col-12 text-start py-2 font-weight-bold">
                {options[0]}
              </h5>
              <ul className="p-0 m-0 row w-100 pl-3 py-3">
                {options[1]?.map((option_detail) => (
                  <li
                    className="p-0 m-0 col-12"
                    style={{
                      fontWeight: 300,
                      fontSize: "16px",
                      color: "#484848",
                    }}
                  >
                    {option_detail}
                  </li>
                ))}
              </ul>
            </>
          ))}
        </div>
      )}

      {!showOptions ? (
        <div className="p-0 m-0 w-100 row justify-content-center pt-5 ">
          <button
            className="gold_button_5 p-0 m-0 detail_page_btn_options  px-3 py-2"
            onClick={() => setShowOptions((prev) => !prev)}
          >
            <i className="p-0 m-0 px-2">
              <FaArrowCircleRight />
            </i>
            View All Options
          </button>
        </div>
      ) : (
        <div className="p-0 m-0 w-100 row justify-content-center pt-5 ">
          <button
            className="gold_button_5 p-0 m-0 detail_page_btn_options py-2 px-3 "
            onClick={() => setShowOptions((prev) => !prev)}
          >
            Hide All Options
            <i className="p-0 m-0 px-2">
              <FaArrowCircleLeft />
            </i>
          </button>
        </div>
      )}

      {/* <Accordion className="card py-4 px-3">
        <div className="w-100 description_title align-items-center justify-content-center d-flex">
          <h4 className="py-1 pl-1 pr-4 d-flex justify-content-start align-items-start text-center">
            <span>
              <img src="/images/vehicle-detail/Rectangle 218.png" />
            </span>
            Options
            <span>
              <img src="/images/vehicle-detail/Rectangle 218.png" />
            </span>
          </h4>
        </div>
        <div className="d-flex row w-100 p-0 m-0">
          {loopstandard?.map((loopstandardDatas, i, array) => {
            const lenghtchilde = loopstandardDatas[1].length;
            return (
              <div className="col-12 col-md-6 p-1 m-0" style={{}}>
                <div className="d-flex options__style options_text_style row col-12 justify-content-center align-items-center text-center p-0 m-0 my-2">
                  <p className="d-flex row col-4 ml-2 px-2 mb-0 py-4 ">
                    {loopstandardDatas[0]}
                  </p>
                  <Accordion.Toggle
                    as={AccordianToggleStandard}
                    variant="link"
                    eventKey={i + 1}
                    className={`${
                      activeAccordian === i
                        ? "btn  p-0 m-0 d-flex row col-1 justify-content-end align-items-end text-end active_vehicle_option_accordian-open"
                        : ""
                    }`}
                    onClick={() => handleAccrodianActive(i)}
                  ></Accordion.Toggle>
                </div>
                <Accordion.Collapse eventKey={i + 1}>
                  <>
                    {loopstandardDatas[1]?.map((item, index) => {
                      return (
                        <p
                          className="px-lg-5 py-3 m-0 "
                          style={{
                            // borderBottom:
                            // lenghtchilde - 1 === index
                            //   ? ""
                            //   : "1px solid #E5E5E5",
                            color: "#E5E5E5",
                          }}
                        >
                          {item}
                        </p>
                      );
                    })}
                  </>
                </Accordion.Collapse>
              </div>
            );
          })}
        </div>
      </Accordion> */}
    </div>
  );
};

export default StandardOptions;
