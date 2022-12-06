import Link from "next/link";
const HomeCategories = (props) => {
  return (
    <div className="row p-0 m-0 w-100 home_div__categories_container my-5">
      <div className="col-12 col-md-6 col-lg-3 p-0 m-0 px-2 h-100 my-2 my-lg-2">
        <div className="home_div__categories h-100 d-flex flex-column justify-content-around align-items-center h-100">
          <div className="d-flex p-0 m-0 flex-column align-items-center">
            <img
              width="100%"
              style={{ maxWidth: 107 }}
              src="/images/home/car.png"
            />
            <h4 className="p-0 m-0 home_h4__categories_header_title pt-4">
              INVENTORY
            </h4>
          </div>
          <Link href="/cars">
            <a className=" yellow_button home_button__categories py-3 px-5 p-0 m-0 text-decoration-none">
              VIEW NOW
            </a>
          </Link>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-3 p-0 m-0 px-2 h-100 my-2 my-lg-2">
        <div className="home_div__categories h-100 d-flex flex-column justify-content-around align-items-center h-100">
          <div className="d-flex p-0 m-0 flex-column align-items-center">
            <img
              width="100%"
              style={{ maxWidth: 100 }}
              src="/images/home/car-park.png"
            />
            <h4 className="p-0 m-0 text-center home_h4__categories_header_title pt-4">
              VALUR YOUR TRADE
            </h4>
          </div>
          <Link href="/forms/value-your-trade">
            <a className=" yellow_button home_button__categories py-3 px-5 p-0 m-0 text-decoration-none">
              BROWSE NOW
            </a>
          </Link>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-3 p-0 m-0 px-2 h-100 my-2 my-lg-2">
        <div className="home_div__categories h-100 d-flex flex-column justify-content-around align-items-center h-100">
          <div className="d-flex p-0 m-0 flex-column align-items-center">
            <img
              width="100%"
              style={{ maxWidth: 100 }}
              src="/images/home/settings.png"
            />
            <h4 className="p-0 m-0 text-center home_h4__categories_header_title pt-4">
              SERVICE APPOINTMENT
            </h4>
          </div>
          <Link href="/forms/service-appointment">
            <a className="yellow_button home_button__categories py-3 px-5 p-0 m-0 text-decoration-none">
              BOOK NOW
            </a>
          </Link>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-3 p-0 m-0 px-2 h-100 my-2 my-lg-2">
        <div className="home_div__categories h-100 d-flex flex-column justify-content-around align-items-center h-100">
          <div className="d-flex p-0 m-0 flex-column align-items-center">
            <img
              width="100%"
              style={{ maxWidth: 76 }}
              src="/images/home/form.png"
            />
            <h4 className="p-0 m-0 home_h4__categories_header_title pt-4">
              FINANCING
            </h4>
          </div>
          <Link href="/forms/finance">
            <a className="yellow_button home_button__categories py-3 px-5 p-0 m-0 text-decoration-none">
              APPLY NOW
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCategories;
