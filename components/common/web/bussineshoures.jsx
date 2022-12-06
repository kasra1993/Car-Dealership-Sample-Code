const BussinesHoures = (props) => {
  const { data } = props;
  return (
    <>
      <p className="d-flex row justify-content-center align-items-center text-center col-12 info-service-appointment-title p-0 m-0 ">
        Business Hours
      </p>
      <div className="p-0 m-0 d-flex row align-items-center justify-content-center col-12">
        <div className="col-md-12 col-sm-12 col-12 p-1 m-0">
          <div className="contact_information_container-style px-4 pt-4 mb-4 m-0 mt-sm-0 d-flex flex-column">
            <div className="d-flex flex-column justify-content-center">
              <div className="p-0 m-0 d-flex flex-row justify-content-start align-items-center col-12 border-bottom-contactinfo">
                <div className="p-0 m-0 d-flex flex-row justify-content-start align-items-center col-12 col-md-6 border-right-contactinfo  py-3 pr-3">
                  <h6 className="p-0 m-0  ml-1 mb-1 contactinfo-text">
                    Monday : 10:00 AM - 7:00PM
                  </h6>
                </div>
                <div className="p-0 m-0 d-none d-md-flex flex-row justify-content-start align-items-center col-12 col-md-6">
                  <h6 className="p-0 m-0  ml-1 mb-1 contactinfo-text">
                    Tuesday : 10:00 AM - 7:00PM
                  </h6>
                </div>
              </div>
              <div className="p-0 m-0 d-flex d-md-none flex-row justify-content-start align-items-center col-12 border-bottom-contactinfo">
                <div className="p-0 m-0 d-flex flex-row justify-content-start align-items-center col-12 col-md-6  py-3 py-0">
                  <h6 className="p-0 m-0  ml-1 mb-1 contactinfo-text">
                    Tuesday : 10:00 AM - 7:00PM
                  </h6>
                </div>
              </div>
              <div className="p-0 m-0 d-flex flex-row justify-content-start align-items-center col-12 border-bottom-contactinfo">
                <div className="p-0 m-0 d-flex flex-row justify-content-start align-items-center col-12 col-md-6 border-right-contactinfo  py-3 pr-3">
                  <h6 className="p-0 m-0  ml-1 mb-1 contactinfo-text">
                    Wednesday : 10:00AM-7:00PM
                  </h6>
                </div>
                <div className="p-0 m-0 d-none d-md-flex flex-row justify-content-start align-items-center col-12 col-md-6">
                  <h6 className="p-0 m-0  ml-1 mb-1 contactinfo-text">
                    Thursday 10:00 AM - 7:00PM
                  </h6>
                </div>
              </div>
              <div className="p-0 m-0 d-flex d-sm-none flex-row justify-content-start align-items-center col-12 border-bottom-contactinfo">
                <div className="p-0 m-0 d-flex flex-row justify-content-start align-items-center col-12 col-md-6  py-3 py-0">
                  <h6 className="p-0 m-0  ml-1 mb-1 contactinfo-text">
                    Thursday 10:00 AM - 7:00PM
                  </h6>
                </div>
              </div>
              <div className="p-0 m-0 d-flex flex-row justify-content-start align-items-center col-12 border-bottom-contactinfo">
                <div className="p-0 m-0 d-flex flex-row justify-content-start align-items-center col-12 col-md-6 border-right-contactinfo py-3 pr-3">
                  <h6 className="p-0 m-0  ml-1 mb-1 contactinfo-text">
                    Friday : 10:00 AM - 7:00PM
                  </h6>
                </div>
                <div className="p-0 m-0 d-none d-md-flex flex-row justify-content-start align-items-center col-12 col-md-6">
                  <h6 className="p-0 m-0  ml-1 mb-1 contactinfo-text">
                    Saterday: 10:00 AM - 7:00PM
                  </h6>
                </div>
              </div>
              <div className="p-0 m-0 d-flex d-md-none flex-row justify-content-start align-items-center col-12 border-bottom-contactinfo">
                <div className="p-0 m-0 d-flex flex-row justify-content-start align-items-center col-12 col-md-6  py-3 py-0">
                  <h6 className="p-0 m-0  ml-1 mb-1 contactinfo-text">
                    Saterday: 10:00 AM - 7:00PM
                  </h6>
                </div>
              </div>
              <div className="p-0 m-0 d-flex flex-row justify-content-start align-items-center col-12">
                <div className="p-0 m-0 d-flex flex-row justify-content-start align-items-center col-12 col-md-6 border-right-contactinfo pt-3 mb-3 pr-3">
                  <h6 className="p-0 m-0  ml-1 mb-1 contactinfo-text">
                    Sunday: By Appointment
                  </h6>
                </div>
                <div className="p-0 m-0 d-flex flex-row justify-content-start align-items-center col-12 col-md-6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BussinesHoures;
