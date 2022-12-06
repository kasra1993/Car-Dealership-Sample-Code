export const reactSelectStyle = {
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#ce1431",
  }),
  control: (provided) => ({
    ...provided,
    border: "none",
  }),
  container: (provided) => ({ ...provided, borderRadius: 0 }),
  placeholder: (provided) => ({ ...provided, color: "#ce1431" }),
};
const colorBoxForReactSelect = (color = "#000") => ({
  alignItems: "center",
  display: "flex",
  ":before": {
    backgroundColor: `#${color}`,
    content: '" "',
    display: "block",
    marginRight: 8,
    height: 20,
    width: 20,
    border: "1px dashed #8d99ae99",
  },
});
export const reactSelectColorStyle = {
  control: (base, state) => ({
    ...base,
    // boxShadow: state.isFocused ? "0px 0px 0px 4px rgba(28, 191, 128, 0.3)" : "",
    border: "none",
  }),
  option: (style, { data, isSelected }) => {
    return {
      ...style,
      ...colorBoxForReactSelect(data?.colorObject?.code),
      backgroundColor: "trasparent",
      color: "#000",
      cursor: "pointer",
    };
  },
  input: (styles) => {
    return {
      ...styles,
      ...colorBoxForReactSelect(),
    };
  },
  placeholder: (styles) => ({
    ...styles,
    ...colorBoxForReactSelect(),
    color: "#ce1431",
  }),
  singleValue: (styles, { data }) => ({
    ...styles,
    ...colorBoxForReactSelect(data?.colorObject?.code),
  }),
  container: (provided) => ({ ...provided, borderRadius: 5 }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#ce1431",
  }),
};

export const reactSelectAdvanceSearchColorStyle = {
  control: (base, state) => ({
    ...base,
    backgroundColor: "#fff",
    border: "1px solid #999",
    borderRadius: "0px",
    color: "#000",
    height: "30px",
    // WebkitBoxShadow: "1px 1px 5px 1px #222222",
    // boxShadow: "1px 1px 5px 1px #222222",
  }),
  option: (style, { data, isSelected }) => {
    return {
      ...style,
      ...colorBoxForReactSelect(data?.colorObject?.code),
      backgroundColor: "trasparent",
      color: "#000",
      cursor: "pointer",
    };
  },
  input: (styles) => {
    return {
      ...styles,
      color: "#000",
      ...colorBoxForReactSelect(),
    };
  },
  placeholder: (styles) => ({
    ...styles,
    ...colorBoxForReactSelect(),
    color: "#000",
    fontSize: "14px",
  }),
  singleValue: (styles, { data }) => ({
    ...styles,
    color: "#000",
    ...colorBoxForReactSelect(data?.colorObject?.code),
  }),
  container: (provided) => ({
    ...provided,
    backgroundColor: "#fff",
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    // display: "none",
    border: "1px solid #999",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#000",
    // borderLeft: "1px solid #fff",
  }),
  menu: (provided) => ({
    ...provided,
    zIndex: "10000000000000000000",
    position: "absolute",
  }),
};
export const reactSelectStyleAdvanceSearch = {
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#f4f4f4",
  }),
  control: (base, state) => ({
    ...base,
    backgroundColor: "trasparent",
    border: "2px solid #f4f4f4",
  }),
  input: (styles) => {
    return {
      ...styles,
      color: "#f4f4f4",
    };
  },
  container: (provided) => ({ ...provided, borderRadius: 0 }),
  placeholder: (provided) => ({ ...provided, color: "#f4f4f4" }),
  singleValue: (styles, { data }) => ({
    ...styles,
    color: "#f4f4f4",
  }),
};
