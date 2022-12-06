const ComponentHeader = ({
  title = "",
  direction = "justify-content-center",
}) => {
  return (
    <div className={`p-0 m-0 row d-flex align-items-center ${direction} w-100`}>
      <div className="header_component_div__left_side mx-3"></div>
      <h4 className="p-0 m-0 header_component_h4__title text-center">
        {title}
      </h4>
      <div className="header_component_div__right_side mx-3"></div>
    </div>
  );
};
export default ComponentHeader;
