import { findScript } from "../../../utils/common/html_script";
const Waranty = (props) => {
  return (
    <div className="p-0 pt-lg-5 pt-3">
      <div
        className="d-flex row col-12 justify-content-center justify-content-md-start align-items-start text-start p-0 m-0 background_color-dscription"
        style={{ backgroundColor: "transparent" }}
      >
        <EformsHeader title="Waranty" className="pb-3" />

        <div
          className="col-12 m-0 py-2 p-0 DetaileProductCustomrWeb-description-text"
          dangerouslySetInnerHTML={{
            __html: findScript(props?.data?.waranty),
          }}
        />
      </div>
    </div>
  );
};

export default Waranty;
