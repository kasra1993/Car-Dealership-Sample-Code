import { FaFax, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import EformsTimeWork from "./eforms_time_work";
import { phonenumberConvertor } from "../../../../utils/common/phone_number_converter";
const EformsConatctInfo = (props) => {
  const { dealerData } = props;
  return (
    <div className="p-0 m-0 mb-4 w-100">
      <h2>Address</h2>
      <p className="p-0 m-0 pt-2">
        <FaMapMarkerAlt className=" mx-2" />
        <span style={{ color: "#777777", fontSize: "14px" }}>
          {dealerData?.business_street}
          {", "}
          {dealerData?.business_city?.city}
          {", "}
          {dealerData?.business_city?.Province?.province === "British Columbia"
            ? "BC"
            : dealerData?.business_city?.Province?.province}
          {", "}
          {dealerData?.business_postal}
        </span>
      </p>
      <p className="p-0 m-0">
        <FaPhone className="mt-1 mx-2" />
        <a
          href={phonenumberConvertor(dealerData?.business_phone)}
          className="p-0 m-0 text-decoration-none"
          rel="noopener noreferrer"
          style={{ color: "inherit" }}
        >
          {dealerData?.business_phone}
        </a>
      </p>
      <p className="p-0 m-0">
        <FaPhone className="mt-1 mx-2" />
        <a
          href={phonenumberConvertor(dealerData?.business_phone2)}
          className="p-0 m-0 text-decoration-none"
          rel="noopener noreferrer"
          style={{ color: "inherit" }}
        >
          {dealerData?.business_phone2}
        </a>
      </p>
      <p className="pb-4 p-0 m-0">
        <FaFax className="mt-1 mx-2" />
        <a
          // href={phonenumberConvertor(dealerData?.business_phone)}
          className="p-0 m-0 text-decoration-none"
          rel="noopener noreferrer"
          style={{ color: "inherit" }}
        >
          {dealerData?.business_fax}
        </a>
      </p>

      <div className="w-100 p-0 m-0" style={{ borderTop: "1px solid #dddddd" }}>
        <EformsTimeWork timework={dealerData?.timeWork} />
      </div>
      {/* <div className="w-100 p-0 m-0">
        <Link href="/direction">
          <a className="btn eform_button__submit w-100">Direction</a>
        </Link>
      </div> */}
    </div>
  );
};

export default EformsConatctInfo;
