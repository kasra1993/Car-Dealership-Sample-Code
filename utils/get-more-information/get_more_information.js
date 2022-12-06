import { httpRequest } from "../../apis";

export const onSubmit = async (values, domain, id) => {
  const { status, message, data } = await httpRequest(
    "POST",
    `/api/dealerweb/moreInfo/${id}/${domain}`,
    JSON.stringify(values),
    {},
    false
  );
  return { status, message, data };
};
