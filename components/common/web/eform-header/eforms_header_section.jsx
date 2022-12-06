import { CDN_BASE_URL } from "../../../../constant/base";
import { findScript } from "../../../../utils/common/html_script";
import HomeTitle from "../../../layout/home/home_header_title";
import CategoryTitle from "../../layout/header/category_title";

const EFormsHeaderSection = ({
  title = "",
  desc = "",
  image = "",
  showImage = true,
  className = "align-items-center",
  imagePosition = "center",
}) => {
  return (
    <div
      className={`p-0 m-0 w-100 h-100 d-flex flex-column  eforms_header_div__container ${className}`}
    >
      <div className="p-0 pl-md-2 m-0 mt-2 mt-md-0 w-100 eforms_header_image_texturee_circle">
        {/* <div className="p-0 m-0 mb-3 d-flex justify-content-center align-items-center">
          <span className="mx-2 text-center eforms_header_title__container">
           

          </span>
        </div> */}
        <div className="p-0 m-0 d-flex flex-column align-items-center justify-content-center ">
          {/* <h2 className=" d-flex  align-items-center justify-content-center ">
            {title}
          </h2> */}
          <div className="p-0 m-0 d-flex flex-column align-items-center justify-content-center ">
            <h2 className=" d-flex  align-items-center justify-content-center ">
              {title}
            </h2>
          </div>
          {/* <div className="home_patern w-25 p-0 m-0">
            <img src="/images/about-us/Rect.png" className="w-75 pl-5" />
          </div> */}
        </div>
        <div
          className="p-2 px-2 px-md-4 m-0 eforms_header_desc__container"
          dangerouslySetInnerHTML={{
            __html: findScript(desc),
          }}
        />
      </div>
      <div className="p-0 m-0 col-12 row justify-content-center justify-content-md-center align-items-center ">
        {showImage && (
          <div className="p-0 px-2 m-0 col-12    eforms_header_img__container">
            <img
              src={CDN_BASE_URL + image}
              alt={image}
              style={{
                objectPosition: imagePosition,
                left: 0,
              }}
            />
            {/* <div className="p-0 m-0 eforms_header_image_texture_img">
              <img src="/images/eforms/Path.png" alt="" />
            </div> */}
          </div>
        )}
      </div>

      {/* <div className="p-0 m-0 eforms_header_image_texture_circle_img">
        <img src="/images/common/e-forms/half-circle-eform-header.png" alt="" />
      </div> */}
    </div>
  );
};

export default EFormsHeaderSection;
