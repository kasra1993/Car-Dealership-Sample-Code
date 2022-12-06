import { httpRequest } from "../../apis";
import { getToken } from "../common/get_token";

export const onSubmit = async (values, domain) => {
  const vehicle_info = {
    make: values.make,
    model: values.model,
    model_year: +values.year,
    trim: values.trim,
    frk_bodyStyle: values.bodyStyle === "" ? null : +values.bodyStyle,
    frk_transmission: values.transmission === "" ? null : +values.transmission,
    drive_type: values.driveLine,
    // vehicle_condition: values.condition,
    frk_exterior_color:
      values.frk_exterior_color === "" ? null : +values.frk_exterior_color,
    frk_interior_color:
      values.frk_interior_color === "" ? null : +values.frk_interior_color,
    financial: {
      kind: "",
      type: null,
      order: 0,
    },
  };
  const body = {
    vehicle_info,
    f_name: values.firstName,
    l_name: values.lastName,
    email: values.email,
    mobile: values.phone,
    vehicle_kilometers:
      values.temp_odometer_type === 1 ? +values.temp_odometer : null,
    vehicle_miles:
      values.temp_odometer_type === 2 ? +values.temp_odometer : null,
    additional_info: values.additional_info,
    vin_number: values.vin_number,
  };

  const _res = await httpRequest(
    "POST",
    // `/api/dealerweb/valueyourtrade/add/${domain}`,
    `/api/dealerweb/valueyourtrade/add/${domain}${
      values?.financial?.type !== null ? "?" + "financial=0" : ""
    }`,
    body,
    getToken() ? { authorization: getToken() } : {},
    false
  );
  return _res;
};
export const handleFinancialValueyourtrade = async (
  formik,
  kind = "",
  number
) => {
  await new Promise((res, rej) => {
    if ("/forms/value-your-trade" === kind) {
      formik.setFieldValue("financial", {
        kind: kind,
        type:
          formik.values.financial?.order === 0
            ? `${number}`
            : formik.values.financial?.order === 1
            ? `${number}`
            : null,
        order:
          formik.values.financial?.order === 2
            ? 0
            : Number(formik.values.financial?.order) + 1,
      });
      res();
    } else {
      formik.setFieldValue("financial", {
        kind: kind,
        type: null,
        order: "",
      });
      res();
    }
  })
    .then(() => formik.handleSubmit())
    .catch((err) => console.log(err));
};
export const colorOption = (colorData) => {
  return colorData?.map((extriorColor) => ({
    value: extriorColor?.name,
    label: extriorColor?.name,
    colorObject: extriorColor,
  }));
};
