const colorBoxForReactSelect = (color = "#cccccc") => ({
  alignItems: "center",
  display: "flex",
  backgroundColor: "",
  ":before": {
    backgroundColor: `#${color}`,
    content: '" "',
    display: "block",
    marginRight: 8,
    height: 20,
    width: 20,
    border: "1px dashed #29292999",
  },
});
export const reactSelectColorStyle = {
  control: (base, state) => ({
    ...base,
    backgroundColor: "transparent",
    border: "1px solid #fff",
    color: "#fff",
    minHeight: "38px",
    borderRadius: "0",
  }),
  option: (style, { data, isSelected }) => {
    return {
      ...style,
      ...colorBoxForReactSelect(data?.colorObject?.code),
      backgroundColor: "trasparent",
      color: "#fff",
      cursor: "pointer",
    };
  },
  input: (styles) => {
    return {
      ...styles,
      ...colorBoxForReactSelect(),
      color: "#fff",
    };
  },
  placeholder: (styles) => ({
    ...styles,
    ...colorBoxForReactSelect(),
    color: "#fff",
    fontSize: "14px",
  }),
  singleValue: (styles, { data }) => ({
    ...styles,
    ...colorBoxForReactSelect(data?.colorObject?.code),
    color: "#fff",
  }),
  container: (provided) => ({ ...provided, borderRadius: 5 }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#000",
  }),
  menu: (provided) => ({
    ...provided,
    zIndex: "10000000000000000000",
    position: "absolute",
    backgroundColor: "#000",
    color: "#fff",
  }),
};
