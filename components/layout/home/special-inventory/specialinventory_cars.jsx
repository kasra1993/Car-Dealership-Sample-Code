import { STATIC_COLOR } from "../../../../constant/home/home";
import Link from "next/link";
import { useEffect, useState } from "react";
import { dashRemoverForSlug } from "../../../../utils/common/dash_remover";
import { priceComma } from "../../../../utils/common/price_odometer_handler";

const SpecialInventoryCars = (props) => {
  const { item } = props;
  const [makeSlug, setMakeSlug] = useState({
    make: "",
    model: "",
  });
  useEffect(() => {
    setMakeSlug(() => ({
      make: dashRemoverForSlug(item?.Vehicle?.make),
      model: dashRemoverForSlug(item?.Vehicle?.model),
    }));
  }, []);
  return (
    <Link
      href={`/cars/used/${item?.Vehicle?.model_year}-${makeSlug?.make}-${makeSlug?.model}-${item?.id}`}
      // href="apple.com"
    >
      <a className="row d-flex flex-column h-100 p-0 py-2 m-0">
        <div
          className=" d-flex align-items-center jsutify-content-center "
          style={{ position: "relative" }}
        >
          <img
            src={`https://hillzimage.blob.core.windows.net${item?.cover_image}`}
            style={{ objectFit: "contain", width: "100%", height: "auto" }}
          />
          <div className="p-2 home_div__secial_slider_text_container d-flex flex-column justify-content-start align-items-start text-white my-2">
            {/* <h5> {item?.Vehicle?.make}</h5> */}
            <p>
              {item?.Vehicle?.model_year} {item?.Vehicle?.make}{" "}
              {item?.Vehicle?.model}
            </p>

            <h6 style={{ color: "#d1ad6d" }}>
              $
              {item?.special_price
                ? priceComma(item?.special_price, 2)
                : priceComma(item?.sell_price, 2)}
            </h6>
          </div>
        </div>
      </a>
    </Link>
  );
};
export default SpecialInventoryCars;
