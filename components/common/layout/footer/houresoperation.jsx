import { FaClock } from "react-icons/fa";
const HouresOperation = (props) => {
  return (
    <>
      <h5
        className="d-flex f row justify-content-start align-items-center text-start col-12  p-0 m-0 mb-2 mx-1 direction_h5__text "
        style={{ color: "#000" }}
      >
        <FaClock color="#282829" size={14} />
        <strong className="px-2">Business Hours</strong>
      </h5>
      {/* {props?.timeWorke?.map((time) => {
        return ( */}
      <div className="p-0 m-0 d-flex flex-column row align-items-center justify-content-center col-12">
        <div className="col-md-12 col-sm-12 col-12 p-0 m-0">
          <div className="contact_information_container-style p-2 m-0 d-flex flex-column">
            <div className="p-0 m-0 d-flex flex-column justify-content-center">
              <div className="p-0 m-0 d-flex flex-wrap justify-content-start align-items-center col-12 border-bottom-contactinfo">
                <div className="p-0 m-0 d-flex flex-wrap justify-content-start align-items-center col-12  border-right-contactinfo py-2">
                  <div className="p-0 px-2 m-0 w-100 d-flex  align-items-center justify-content-between">
                    <h6 className="p-0 m-0 direction_h5__text">
                      MONDAY &nbsp;
                    </h6>
                    <h6 className="p-0 m-0 direction_h5__text pr-4">
                      {props?.timeWorke[0]?.startAt +
                        " - " +
                        props?.timeWorke[0]?.endAt}
                    </h6>
                  </div>
                </div>
                <div className="p-0 m-0 d-none d-md-flex flex-row justify-content-start align-items-center col-12 ">
                  <div className="p-0 px-2 m-0 w-100 d-flex  align-items-center justify-content-between">
                    <h6 className="p-0 m-0 direction_h5__text">
                      TUESDAY &nbsp;
                    </h6>
                    <h6 className="p-0 m-0 direction_h5__text pr-4">
                      {props?.timeWorke[1]?.startAt +
                        " - " +
                        props?.timeWorke[1]?.endAt}
                    </h6>
                  </div>
                </div>
              </div>
              <div className="p-0 m-0 d-flex d-md-none flex-wrap justify-content-start align-items-center col-12 border-bottom-contactinfo">
                <div className="p-0 m-0 d-flex flex-wrap justify-content-start align-items-center col-12  py-2">
                  <div className="p-0 px-2 m-0 w-100 d-flex  align-items-center justify-content-between">
                    <h6 className="p-0 m-0 direction_h5__text">
                      TUESDAY &nbsp;
                    </h6>
                    <h6 className="p-0 m-0 direction_h5__text pr-4">
                      {props?.timeWorke[1]?.startAt +
                        " - " +
                        props?.timeWorke[1]?.endAt}
                    </h6>
                  </div>
                </div>
              </div>
              <div className="p-0 m-0 d-flex flex-wrap justify-content-start align-items-center col-12 border-bottom-contactinfo">
                <div className="p-0 m-0 d-flex flex-wrap justify-content-start align-items-center col-12  border-right-contactinfo  py-2">
                  <div className="p-0 px-2 m-0 w-100 d-flex  align-items-center justify-content-between">
                    <h6 className="p-0 m-0 direction_h5__text">
                      WEDNESDAY &nbsp;
                    </h6>
                    <h6 className="p-0 m-0 direction_h5__text pr-4">
                      {props?.timeWorke[2]?.startAt +
                        " - " +
                        props?.timeWorke[2]?.endAt}
                    </h6>
                  </div>
                </div>
                <div className="p-0 m-0 d-none d-md-flex flex-wrap justify-content-start align-items-center col-12 ">
                  <div className="p-0 px-2 m-0 w-100 d-flex  align-items-center justify-content-between">
                    <h6 className="p-0 m-0 direction_h5__text">
                      THURSDAY &nbsp;
                    </h6>
                    <h6 className="p-0 m-0 direction_h5__text pr-4">
                      {props?.timeWorke[3]?.startAt +
                        " - " +
                        props?.timeWorke[3]?.endAt}
                    </h6>
                  </div>
                </div>
              </div>
              <div className="p-0 m-0 d-flex d-sm-none flex-wrap justify-content-start align-items-center col-12 border-bottom-contactinfo">
                <div className="p-0 m-0 d-flex flex-wrap justify-content-start align-items-center col-12   py-2 py-0">
                  <div className="p-0 px-2 m-0 w-100 d-flex  align-items-center justify-content-between">
                    <h6 className="p-0 m-0 direction_h5__text">
                      THURSDAY &nbsp;
                    </h6>
                    <h6 className="p-0 m-0 direction_h5__text pr-4">
                      {props?.timeWorke[3]?.startAt +
                        " - " +
                        props?.timeWorke[3]?.endAt}
                    </h6>
                  </div>
                </div>
              </div>
              <div className="p-0 m-0 d-flex flex-wrap justify-content-start align-items-center col-12 border-bottom-contactinfo">
                <div className="p-0 m-0 d-flex flex-wrap justify-content-start align-items-center col-12  border-right-contactinfo py-2">
                  <div className="p-0 px-2 m-0 w-100 d-flex  align-items-center justify-content-between">
                    <h6 className="p-0 m-0 direction_h5__text">
                      FRIDAY &nbsp;
                    </h6>
                    <h6 className="p-0 m-0 direction_h5__text pr-4">
                      {props?.timeWorke[4]?.startAt +
                        " - " +
                        props?.timeWorke[4]?.endAt}
                    </h6>
                  </div>
                </div>
                <div className="p-0 m-0 d-none d-md-flex flex-wrap justify-content-start align-items-center col-12 ">
                  <div className="p-0 px-2 m-0 w-100 d-flex  align-items-center justify-content-between">
                    <h6 className="p-0 m-0 direction_h5__text">
                      SATURDAY &nbsp;
                    </h6>
                    <h6 className="p-0 m-0 direction_h5__text pr-4">
                      {props?.timeWorke[5]?.startAt +
                        " - " +
                        props?.timeWorke[5]?.endAt}
                    </h6>
                  </div>
                </div>
              </div>
              <div className="p-0 m-0 d-flex d-md-none flex-wrap justify-content-start align-items-center col-12 border-bottom-contactinfo">
                <div className="p-0 m-0 d-flex flex-wrap justify-content-start align-items-center col-12   py-2 py-0">
                  <div className="p-0 px-2 m-0 w-100 d-flex  align-items-center justify-content-between">
                    <h6 className="p-0 m-0 direction_h5__text">
                      SATURDAY &nbsp;
                    </h6>
                    <h6 className="p-0 m-0 direction_h5__text pr-4">
                      {props?.timeWorke[5]?.startAt +
                        " - " +
                        props?.timeWorke[5]?.endAt}
                    </h6>
                  </div>
                </div>
              </div>
              <div className="p-0 m-0 d-flex flex-wrap justify-content-start align-items-center col-12">
                <div className="p-0 m-0 d-flex flex-wrap justify-content-start align-items-center col-12  border-right-contactinfo py-2 ">
                  <div className="p-0 px-2 m-0 w-100 d-flex align-items-center justify-content-between">
                    <h6 className="p-0 m-0 direction_h5__text">
                      SUNDAY &nbsp;
                    </h6>
                    <h6 className="p-0 m-0 direction_h5__text pr-4">
                      {props?.timeWorke[6]?.startAt +
                        " - " +
                        props?.timeWorke[6]?.endAt}
                    </h6>
                  </div>
                </div>
                <div className="p-0 m-0 d-flex flex-wrao justify-content-start align-items-center col-12 "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HouresOperation;
