export const INITIAL_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  user_salutation: "",
  method_of_contact: "",
  requested_date: "",
  comment: "",
  status: "",
  frk_vehicle_id: "",
};
export const USER_SALUTATION = [
  { value: 1, label: "Dr" },
  { value: 2, label: "Miss" },
  { value: 3, label: "Fair" },
  { value: 4, label: "Poor" },
];
export const METHOD_OF_CONTACT = [
  { label: "Cell Phone", value: "1", type: "number" },
  { label: "Work Phone", value: "2", type: "number" },
  { label: "Home Phone", value: "3", type: "number" },
  { label: "Email", value: "4", type: "email" },
];
