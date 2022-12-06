export const colorBoxForReactSelect = (color = "#cccccc") => ({
  alignItems: "center",
  display: "flex",
});

export const reactVehicleEformsSelectInputStyle = {
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
    border: "none",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#cccccc",
    border: "none",
    right: "100px",
  }),
  control: (base, state) => ({
    ...base,
    backgroundColor: "#cccccc",
    border: "none",
    color: "#cccccc",
    height: "45px",
    borderRadius: "5px",
  }),
  option: (style, { data, isSelected }) => {
    return {
      ...style,
      // ...colorBoxForReactSelect(data?.colorObject?.code),
      backgroundColor: "trasparent",
      color: "#000",
      cursor: "pointer",
    };
  },
  input: (styles) => {
    return {
      ...styles,
      color: "#cccccc",
      border: "none",
    };
  },
  placeholder: (styles) => ({
    ...styles,
    ...colorBoxForReactSelect(),
    color: "#6d6d6d",
    border: "none",
    fontSize: "13px",
  }),
  singleValue: (styles, { data }) => ({
    ...styles,
    ...colorBoxForReactSelect(data?.colorObject?.code),
    color: "#cccccc",
    paddingTop: "1rem",
    paddingBottom: "1rem",
  }),
  container: (provided) => ({ ...provided, border: "none" }),
  indicatorSeparator: (provided) => ({
    ...provided,
    borderRadius: 5,
    border: "none",
    outLine: "0",
    boxShadow: "0",
  }),
};
export const reactFilterSelectInputStyle = {
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
    // border: "1px solid #999",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#333",
    border: "none",
    right: "100px",
  }),
  control: (base, state) => ({
    ...base,
    backgroundColor: "#fff",
    border: "1px solid #707070",
    color: "#fff",
    minHeight: "35px",
    borderRadius: "4px",
  }),
  option: (style, { data, isSelected }) => {
    return {
      ...style,
      // ...colorBoxForReactSelect(data?.colorObject?.code),
      backgroundColor: "trasparent",
      color: "#000",
      cursor: "pointer",
    };
  },
  input: (styles) => {
    return {
      ...styles,
      color: "#fff",
      border: "none",
    };
  },
  placeholder: (styles) => ({
    ...styles,
    ...colorBoxForReactSelect(),
    color: "#333",
    border: "none",
    fontSize: "12px",
  }),
  singleValue: (styles, { data }) => ({
    ...styles,
    ...colorBoxForReactSelect(data?.colorObject?.code),
    color: "#333",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    fontSize: "13px",
  }),
  container: (provided) => ({ ...provided, border: "none" }),
  // indicatorSeparator: (provided) => ({
  //   ...provided,
  //   display: "none",
  //   border: "1px solid #999",
  // }),
  menu: (provided) => ({
    ...provided,
    zIndex: "10000000000000000000",
    position: "absolute",
    backgroundColor: "#fff",
  }),
};
export const reactSortSelectInputStyle = {
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
    // border: "1px solid #999",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#000",
    borderRadius: "4px",
    backgroundColor: "#fff",
    border: "none",
    right: "100px",
  }),
  control: (base, state) => ({
    ...base,
    backgroundColor: "#111",
    border: "none",
    color: "#fff",
    minHeight: "35px",
    borderRadius: "0px",
  }),
  option: (style, { data, isSelected }) => {
    return {
      ...style,
      // ...colorBoxForReactSelect(data?.colorObject?.code),
      backgroundColor: "trasparent",
      color: "#000",
      cursor: "pointer",
    };
  },
  input: (styles) => {
    return {
      ...styles,
      color: "#000",
      border: "none",
    };
  },
  placeholder: (styles) => ({
    ...styles,
    ...colorBoxForReactSelect(),
    color: "#fff",
    border: "none",
    fontSize: "1rem",
  }),
  singleValue: (styles, { data }) => ({
    ...styles,
    ...colorBoxForReactSelect(data?.colorObject?.code),
    color: "#fff",
    paddingTop: "1rem",
    paddingBottom: "1rem",
  }),
  container: (provided) => ({ ...provided, border: "none" }),
  // indicatorSeparator: (provided) => ({
  //   ...provided,
  //   display: "none",
  //   border: "1px solid #999",
  // }),
  menu: (provided) => ({
    ...provided,
    zIndex: "10000000000000000000",
    position: "absolute",
    backgroundColor: "#fff",
  }),
};
export const reactSelectInputStyle = {
  indicatorSeparator: (provided) => ({
    ...provided,
    // display: "none",
    border: "1px solid #ccc",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#000",
    border: "none",
    right: "100px",
  }),
  control: (base, state) => ({
    ...base,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    // border: "none",
    color: "#000",
    height: "38px",
    borderRadius: "0px",
  }),
  option: (style, { data, isSelected }) => {
    return {
      ...style,
      // ...colorBoxForReactSelect(data?.colorObject?.code),
      backgroundColor: "#fff",
      color: "#000",
      cursor: "pointer",
    };
  },
  input: (styles) => {
    return {
      ...styles,
      color: "#000",
      border: "none",
    };
  },
  placeholder: (styles) => ({
    ...styles,
    ...colorBoxForReactSelect(),
    color: "#000",
    border: "none",
    fontSize: "14px",
  }),
  singleValue: (styles, { data }) => ({
    ...styles,
    ...colorBoxForReactSelect(data?.colorObject?.code),
    color: "#000",
    paddingTop: "1rem",
    paddingBottom: "1rem",
  }),
  container: (provided) => ({ ...provided, border: "none" }),
  // indicatorSeparator: (provided) => ({
  //   ...provided,
  //   display: "none",
  //   border: "1px solid #999",
  // }),
  menu: (provided) => ({
    ...provided,
    zIndex: "10000000000000000000",
    position: "absolute",
    backgroundColor: "#fff",
    color: "#000",
  }),
};
export const reactSelectInputStyleHome = {
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
    // border: "none",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#292929",
    border: "none",
    right: "100px",
  }),
  control: (base, state) => ({
    ...base,
    backgroundColor: "#fff",
    border: "1px solid #fff",
    // border: "none",
    color: "#fff",
    minHeight: "40px",
    borderRadius: "5px",
    // borderRight: "1px dash #fff",
  }),
  option: (style, { data, isSelected }) => {
    return {
      ...style,
      // ...colorBoxForReactSelect(data?.colorObject?.code),
      backgroundColor: "trasparent",
      color: "#000",
      cursor: "pointer",
      borderBottom: "1px solid #f8f8f8",
      fontSize: "14px",
    };
  },
  input: (styles) => {
    return {
      ...styles,
      color: "#fff",
      border: "none",
    };
  },
  placeholder: (styles) => ({
    ...styles,
    ...colorBoxForReactSelect(),
    color: "#292929",
    border: "none",
    fontSize: "0.875rem",
  }),
  singleValue: (styles, { data }) => ({
    ...styles,
    ...colorBoxForReactSelect(data?.colorObject?.code),
    color: "#000",
    paddingTop: "1rem",
    paddingBottom: "1rem",
  }),
  container: (provided) => ({
    ...provided,
    border: "none",
    fontSize: "14px",
  }),
  // indicatorSeparator: (provided) => ({
  //   ...provided,
  //   display: "none",
  //   border: "1px solid #999",
  // }),
  menu: (provided) => ({
    ...provided,
    zIndex: "10000000000000000000",
    position: "absolute",
    fontSize: "14px",
  }),
};
export const reactSelectAdvanceSearchInputStyle = {
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
    border: "none",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#999",
    right: "100px",
    outLine: "none",
  }),
  menu: (provided) => ({
    position: "relative",
    zIndex: "655",
  }),
  // menuList: (provided) => ({
  //   position: "relative",
  //   zIndex: "655",
  // }),
  control: (base, state) => ({
    ...base,
    backgroundColor: "#fff",
    border: "1px solid red",
    color: "#de1a1a",
    height: "40px",
    borderRadius: "0px",
    top: "50%",
    // transform: "translateY(-50%)",
    // WebkitBoxShadow: "1px 1px 5px 1px #222222",
    // boxShadow: "1px 1px 5px 1px #222222",
  }),
  option: (style, { data, isSelected }) => {
    return {
      ...style,
      // ...colorBoxForReactSelect(data?.colorObject?.code),
      backgroundColor: "trasparent",
      color: "#000",
      cursor: "pointer",
      border: "none",
    };
  },
  input: (styles) => {
    return {
      ...styles,
      color: "#999",
      border: "none",
      innerWidth: "80%",
    };
  },
  placeholder: (styles) => ({
    ...styles,
    ...colorBoxForReactSelect(),
    color: "#999",
    border: "none",
  }),
  singleValue: (styles, { data }) => ({
    ...styles,
    ...colorBoxForReactSelect(data?.colorObject?.code),
    color: "#de1a1a",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    border: "none",
  }),
  menu: (provided) => ({
    ...provided,
    zIndex: "10000000000000000000",
    position: "relative",
  }),
  container: (provided) => ({
    ...provided,
    border: "none",
  }),
};
