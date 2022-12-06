import { httpRequest } from "../../apis";

export const onSubmit =async (domain,values) => {
  const { status, data, message } = await httpRequest(
    "POST",
    `/api/dealerweb/bookapointment/add/${domain}`,
    {
      f_name: values.firstName,
      l_name: values.lastName,
      email: values.email,
      mobile: values.phone,
      method_of_contact: values.method_of_contact,
      requested_date: values.requested_date,
      comment: values.comment,
    }
  );
  return { status, data, message };
};
