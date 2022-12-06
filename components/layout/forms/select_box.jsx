import Select from "react-select";
const SelectBox = (props) => {
  const {
    placeholder,
    name,
    formik,
    options,
    className,
    style,
    onChange = undefined,
  } = props;
  return (
    <div
      style={{
        position: "relative",
      }}
      className={`p-0 m-0 ${className}`}
    >
      <Select
        styles={style}
        options={options}
        name={name}
        placeholder={placeholder}
        value={options?.filter((item) => item.value === formik.values[name])}
        onChange={(e) => {
          if (!onChange) {
            formik.setFieldValue(name, e?.value);
          } else {
            onChange(e);
          }
        }}
        className="form-select w-100 eforms_advancesearch_input_select_container"
      />
    </div>
  );
};
export default SelectBox;
