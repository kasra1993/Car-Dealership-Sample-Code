const OperationHoures = (props) => {
  return (
    <>
      <div className="p-0 m-0 px-2">
        <div className=" m-0 p-0 d-flex row justify-content-start align-items-center col-12 border_radiuse-bussines houres_operation_scroll">
          <div className="d-flex p-0 py-1 flex-row justify-content-between align-items-center col-12 border-bottom-bussineshoures">
            <div>
              <p className="footer_h5__text">Monday</p>
            </div>
            <p className="p-0 m-0 footer_h5__text">
              {props?.timeWorke[0]?.startAt}{" "}
              {props?.timeWorke[0]?.holiday === 1 ? "" : "-"}{" "}
              {props?.timeWorke[0]?.endAt}
            </p>
          </div>
          <div className="d-flex p-0 py-1 flex-row justify-content-between align-items-center col-12 border-bottom-bussineshoures">
            <div>
              <p className="footer_h5__text">Tuesday</p>
            </div>
            <p className="p-0 m-0 footer_h5__text">
              {props?.timeWorke[1]?.startAt}{" "}
              {props?.timeWorke[1]?.holiday === 1 ? "" : "-"}{" "}
              {props?.timeWorke[1]?.endAt}
            </p>
          </div>
          <div className="d-flex p-0 py-1 flex-row justify-content-between align-items-center col-12 border-bottom-bussineshoures">
            <div>
              <p className="footer_h5__text">Wednesday</p>
            </div>
            <p className="p-0 m-0 footer_h5__text">
              {props?.timeWorke[2]?.startAt}{" "}
              {props?.timeWorke[2]?.holiday === 1 ? "" : "-"}{" "}
              {props?.timeWorke[2]?.endAt}
            </p>
          </div>
          <div className="d-flex p-0 py-1 flex-row justify-content-between align-items-center col-12 border-bottom-bussineshoures">
            <div>
              <p className="footer_h5__text">Thursday</p>
            </div>
            <p className="p-0 m-0 footer_h5__text">
              {props?.timeWorke[3]?.startAt}{" "}
              {props?.timeWorke[3]?.holiday === 1 ? "" : "-"}{" "}
              {props?.timeWorke[3]?.endAt}
            </p>
          </div>
          <div className="d-flex p-0 py-1 flex-row justify-content-between align-items-center col-12 border-bottom-bussineshoures">
            <div>
              <p className="footer_h5__text">Friday</p>
            </div>
            <p className="p-0 m-0 footer_h5__text">
              {props?.timeWorke[4]?.startAt}{" "}
              {props?.timeWorke[4]?.holiday === 1 ? "" : "-"}{" "}
              {props?.timeWorke[4]?.endAt}
            </p>
          </div>
          <div className="d-flex p-0 py-1 flex-row justify-content-between align-items-center col-12 border-bottom-bussineshoures">
            <div>
              <p className="footer_h5__text">Saturday</p>
            </div>
            <p className="p-0 m-0 footer_h5__text">
              {props?.timeWorke[5]?.startAt}{" "}
              {props?.timeWorke[5]?.holiday === 1 ? "" : "-"}{" "}
              {props?.timeWorke[5]?.endAt}
            </p>
          </div>
          <div className="d-flex p-0 py-1 d-flex justify-content-between align-items-center col-12 border-bottom-bussineshoures">
            <div>
              <p className="footer_h5__text col-3 m-0 p-0">Sunday</p>
            </div>
            <p className="p-0 m-0 footer_h5__text col-9 pl-5 d-flex justify-content-end">
              {props?.timeWorke[6]?.startAt}{" "}
              {props?.timeWorke[6]?.holiday === 1 ? "	By Appointment Only" : "-"}{" "}
              {props?.timeWorke[6]?.endAt}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OperationHoures;
