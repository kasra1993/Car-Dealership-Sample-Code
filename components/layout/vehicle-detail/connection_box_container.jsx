import ConnectionBox from "./connection_box";
import { FaCalculator, FaDollarSign, FaInfo } from "react-icons/fa";
import CalculatoreCustomerWeb from "../../common/web/calculator/calculator";
const ConectionBoxContainer = (props) => {
  const { sellPrice } = props;
  return (
    <div className="p-0 m-0 row w-100 d-flex justify-content-center mt-5">
      {/* <div className="p-0 m-0 col-12 col-md-8 col-xl-6"> */}
      <div className="p-0 m-0 row d-flex justify-content-center">
        {connection?.map((item, index) => (
          <ConnectionBox
            {...item}
            key={`CONNECTION_BOX_${index}`}
            sellPrice={sellPrice}
          />
        ))}
      </div>
      {/* </div> */}
    </div>
  );
};

export default ConectionBoxContainer;
const connection = [
  {
    title: "Get More Information",
    href: "/forms/contact-us",
    icon: <FaInfo size={50} />,
    type: "Link",
    component: "",
  },
  {
    title: "Text Us Now",
    href: "/forms/text-us-now",
    icon: <FaInfo size={50} />,
    type: "Link",
    component: "",
  },
  {
    title: "Financing Calculator",
    href: "",
    icon: <FaCalculator size={50} />,
    type: "Button",
    Component: (props) => <CalculatoreCustomerWeb {...props} />,
  },
  {
    title: "Appraise My Trade",
    href: "/forms/value-your-trade",
    icon: <FaDollarSign size={50} />,
    type: "Link",
    component: "",
  },
  {
    title: "Apply For Financing",
    href: "/forms/finance",
    icon: <FaDollarSign size={50} />,
    type: "Link",
    component: "",
  },
  {
    title: "Get Directions",
    href: "/direction",
    icon: <FaInfo size={50} />,
    type: "Link",
    component: "",
  },
];
