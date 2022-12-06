import { FaFax, FaMapMarker, FaPhoneAlt } from "react-icons/fa";
import { phonenumberConvertor } from "../../../utils/common/phone_number_converter";
import HouresOperation from "../layout/footer/houresoperation";
import Link from "next/link";

const ContactInfo = (props) => {
  const { data } = props;

  return (
    <div
      className="p-0 m-0  col-12 pl-xl-5 px-2 px-lg-2 px-md-4 text-start text_title py-4 "
      style={{ color: "black" }}
    >
      <h4 className="py-2">Contact Information</h4>
      <div className=" p-0 m-0  d-flex py-2  justlfy-content-center align-items-center ">
        <FaPhoneAlt color="#282829" size={14} className="" /> &nbsp;
        <strong>Phone:</strong>
        <a
          href={phonenumberConvertor(data?.business_phone)}
          rel="noopener noreferrer"
          className="p-0 m-0 text-decoration-none px-2 "
          style={{ color: "#000" }}
        >
          {data?.business_phone}
        </a>
      </div>
      {data?.business_phone2 && (
        <div className=" p-0 m-0  d-flex py-2  justlfy-content-center align-items-center ">
          <FaPhoneAlt color="#282829" size={14} className="" />
          &nbsp;
          <strong>Phone:</strong>
          <a
            href={phonenumberConvertor(data?.business_phone2)}
            rel="noopener noreferrer"
            className="p-0 m-0 text-decoration-none px-2 "
            style={{ color: "#000" }}
          >
            {data?.business_phone2}
          </a>
        </div>
      )}
      {data?.business_fax && (
        <div className=" p-0 m-0  d-flex py-2  justlfy-content-center align-items-center ">
          <FaFax color="#282829" size={14} className="" />
          &nbsp;
          <strong>Fax:</strong>
          <a
            rel="noopener noreferrer"
            className="p-0 m-0 text-decoration-none px-2 "
            style={{ color: "#000" }}
          >
            {data?.business_fax}
          </a>
        </div>
      )}

      <div className=" p-0 m-0  d-flex flex-column py-2 pb-4  justlfy-content-start align-items-start ">
        <div className="p-0 m-0 d-flex">
          <FaMapMarker className="" size={14} />
          &nbsp;
          <strong className="d-block">Address</strong>
        </div>

        <p className="p-0 m-0  p-2  d-block  ">
          <span>
            {data?.business_street}
            {", "}
            {data?.business_city?.city}
            {", "}
            {data?.business_city?.Province?.province === "British Columbia"
              ? "BC"
              : data?.business_city?.Province?.province}
            {", "}
            {data?.business_postal}
          </span>
        </p>
      </div>

      <div
        className="p-0 m-0 privacy_title text-start w-100 col-12 col-sm-8  col-lg-8"
        style={{ color: "black" }}
      >
        <HouresOperation timeWorke={data?.timeWork} />
      </div>
      <div className="p-0 m-0  d-flex py-2 px-3  justlfy-content-center align-items-center">
        <Link href="/direction">
          <a>
            <button type="submit" className="btn gold_button w-100">
              Get Direction
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ContactInfo;
