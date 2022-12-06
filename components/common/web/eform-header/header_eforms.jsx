const HeaderEforms = ({
  title = "",
  direction = "justify-content-center",
  type = "",
  color = "#fff",
}) => {
  return (
    <div className={`p-0 m-0 row d-flex align-items-center ${direction} w-100`}>
      <h2
        className={`w-100 p-0 m-0 text-center ${
          color === "#fff"
            ? "header_component_h2__title"
            : "header_component_h2__title_color"
        }`}
      >
        {title}
      </h2>
    </div>
  );
};
export default HeaderEforms;
