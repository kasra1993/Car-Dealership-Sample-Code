import HomeTitle from "../../home/home_header_title";

const ConatacyUsInfoContainer = ({
  iconPath,
  firstParagraph = "",
  secondParagraph = "",
  className = "",
}) => {
  return (
    <div className={`p-0 px-1 mb-2 mb-md-0 m-0 col-12  ${className}`}>
      <div className="p-0 px-4 m-0 d-flex flex-column align-items-center justify-content-center contact_us_box_container">
        <div className="p-0 m-0 w-100 d-flex  justify-content-center align-items-center">
          <img
            src={`/images/contact-us/contact-us-${iconPath}`}
            alt="contact-us-icon"
            className="contact_us_img__icon"
          />
        </div>{" "}
        <h5 className=" mx-2 contact_us_box_text__header">
          {/* <HomeTitle title={firstParagraph} className="pl-4" /> */}
          <div className="p-0 m-0 d-flex flex-column align-items-center justify-content-center ">
            <h2 className=" d-flex  align-items-center justify-content-center ">
              {firstParagraph}
            </h2>
            <div className="home_patern w-50 p-0 m-0">
              <img src="/images/about-us/Rect.png" className="w-75 pl-5" />
            </div>
          </div>
        </h5>
        <p className="p-0 m-0 contact_us_box_text__content text-center">
          {secondParagraph}
        </p>
      </div>
    </div>
  );
};

export default ConatacyUsInfoContainer;
