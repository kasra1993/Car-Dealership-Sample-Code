import { httpRequest } from "../../apis";
import { getToken } from "../common/get_token";

export const onSubmit = async (
  values,
  // frk_dealership_id,
  domain,
  // frk_dealership_id,
  frk_vehicle_id
) => {
  const body = {
    frk_vehicle_id: values.frk_vehicle_id,
    user_salutation: Number(values.user_salutation),
    method_of_contact: Number(values.method_of_contact),
    f_name: values.firstName,
    l_name: values.lastName,
    mobile: String(values.phone),
    email: values.email,
    requested_date: values.requested_date,
    comment: values.comment,
    status: Number(1),
    // dealershId: String(frk_dealership_id),
  };
  const _res = await httpRequest(
    "POST",
    `/api/dealerweb/testdrive/add/${domain}`,
    body,
    getToken() ? { authorization: getToken() } : {},
    false
  );
  return _res;
};
