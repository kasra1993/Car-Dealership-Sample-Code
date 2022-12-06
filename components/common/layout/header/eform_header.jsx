import HomeTitle from "../../../layout/home/home_header_title";

const EformsHeader = ({ title = "", className = "" }) => {
  return (
    <div
      className={`p-0 m-0  pt-sm-5 eform_form_header_div__conatiner  text-left text-uppercase ${className}`}
    >
      {title}
      {/* <img
        src="/icons/home/Group 24.png"
        className="p-0 m-0 ml-2 d-none d-md-inline"
      /> */}
    </div>
  );
};

export default EformsHeader;
