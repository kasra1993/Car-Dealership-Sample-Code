import Link from "next/link";
import { useEffect, useState } from "react";
import { priceComma } from "../../../../utils/common/price_odometer_handler";
import { dashRemoverForSlug } from "../../../../utils/common/dash_remover";
import { CDN_BASE_URL } from "../../../../constant/base";
import { FaLongArrowAltRight } from "react-icons/fa";

const EachSpecialInHomePage = (props) => {
  const { vehicle, index } = props;
  const [makeSlug, setMakeSlug] = useState({
    make: "",
    model: "",
  });
  useEffect(() => {
    setMakeSlug(() => ({
      make: dashRemoverForSlug(vehicle?.Vehicle?.make),
      model: dashRemoverForSlug(vehicle?.Vehicle?.model),
    }));
  }, []);
  return (
    <Link
      href={`/cars/used/${vehicle?.Vehicle?.model_year}-${makeSlug?.make}-${makeSlug?.model}-${vehicle?.id}`}
    >
      <a>
        <div
          className="d-flex flex-column justify-content-center m-1"
          style={{ backgroundColor: "transparent" }}
        >
          <div className="p-0 m-0 special_inventory_image">
            <img src={CDN_BASE_URL + vehicle?.cover_image} width="100%" />
          </div>

          <div className="p-0 m-0 px-3">
            <div className="m-0 p-0 pt-3 text-center make_style">
              <div>
                {" "}
                {vehicle?.Vehicle?.model_year +
                  " " +
                  vehicle?.Vehicle?.make +
                  " " +
                  vehicle?.Vehicle?.model}
              </div>
            </div>
            {/* <div className="odo_style">
          <p className="p-0 m-0 py-2" style={{ color: "#000" }}>
            Odometer:
            <span>
              {" "}
              {priceComma(vehicle?.odometer, 2)}{" "}
              {vehicle?.odometer_type === 1 ? "MI" : "KM"}
            </span>
          </p>
        </div> */}
            <div className="p-0 m-0 price_style text-center">
              Price: ${priceComma(vehicle?.sell_price, 2)}
            </div>
          </div>

          {/* <div className="p-0 m-0 d-flex justify-content-center align-items-center">
            <span className="home_button_div d-flex justify-content-center align-items-center">
              <FaLongArrowAltRight color="#47A201" />
            </span>
          </div> */}
        </div>
      </a>
    </Link>
  );
};

export default EachSpecialInHomePage;
