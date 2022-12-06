import { findScript } from "../../../utils/common/html_script";
import EformsHeader from "../../common/layout/header/eform_header";

const Dscription = (props) => {
  return (
    <div className="p-0  w-100">
      <div
        className="d-flex row col-12 justify-content-start justify-content-md-start align-items-start text-start p-0 m-0 background_color-dscription mt-5"
        style={{ backgroundColor: "transparent" }}
      >
        <h4 className="" style={{ color: "#000" }}>
          <b>Description</b>{" "}
        </h4>
        {/* <EformsHeader title="Description" className="pb-3" /> */}

        <div
          className=" col-12 col-lg-11 m-0 py-2 p-0 DetaileProductCustomrWeb-description-text text-dark"
          dangerouslySetInnerHTML={{
            __html: findScript(props?.data?.comment),
          }}
        />
      </div>
    </div>
  );
};

export default Dscription;
