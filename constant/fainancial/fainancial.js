export const INITIAL_VALUES = (query) => ({
  additionalInfo: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  user_salutation: "",
  user_sin_number: "",
  driver_license_NO: "",
  user_currAddr: "",
  frk_user_currAddr_city_id: "",
  province: "",
  confirm: false,
  user_marital_status: "",
  user_salutation: "",
  user_currAddr_postalcode: "",
  user_currAddr_Duration_year: "",
  user_currAddr_Duration_month: "",
  user_currAddr_home_status: "",
  // requestedService: "",
  user_birthday: "",
  user_currAddr_monthly_payment: "",
  user_curr_employment: "",
  user_curr_employer: "",
  user_curr_emp_occupation: "",
  frk_user_curr_emp_country_id: "",
  frk_user_curr_emp_province_id: "",
  // frk_user_curr_emp_city_id: "",
  user_curr_emp_addr: "",
  user_curr_emp_postalcode: "",
  user_curr_emp_phone: "",
  user_curr_emp_income: "",
  user_curr_emp_Duration_year: "",
  user_curr_emp_Duration_month: "",
  user_prev_employer: "",
  user_prev_emp_phone: "",
  user_prev_emp_Duration_year: "",
  user_prev_emp_Duration_month: "",
  user_other_bankruptcy: "",
  user_other_repossission: "",
  user_other_is_consiger_available: "",
  user_please_rate_your_credit: "",
  frk_desire_MidVclDS_id:
    // query?.selected_vehicle &&
    // query?.selected_vehicle !== null &&
    // query?.selected_vehicle !== ""
    //   ? query?.selected_vehicle
    //   : null,
    query?.selected_vehicle &&
    query?.selected_vehicle !== null &&
    query?.selected_vehicle !== ""
      ? query?.selected_vehicle
      : null,
  frk_valueYourTrade_id: null,
  frk_carFinder_id: null,
  employerCity: "",
  employerAddress: "",
  employerPostalCode: "",
  employerPhone: "",
  employerIncome: "",
  employerDurayionYear: "",
  employerDurayionMonth: "",
  employerPhone: "",
  employerDurayionYear: "",
  employerDurayionMonth: "",
  isConsigerAvailable: "",
  rateYourCredit: "",
  vehicleVin: "",
  vehicleMake: "",
  vehicleModel: "",
  vehicleYear: "",
  country: "",
  comment: "",
});
export const HOME_STATUS_OPTIONS = [
  { value: 1, label: "Rent" },
  { value: 2, label: "Own with mortage" },
  { value: 3, label: "With parent" },
  { value: 4, label: "Other" },
];

export const USER_EMPLOYMENT_OPTIONS = [
  { value: 1, label: "Full time" },
  { value: 2, label: "Part time" },
  { value: 3, label: "Contract" },
];
export const USER_OTHER_BANKRUPTCY_OPTIONS = [
  { value: 1, label: "Yes" },
  { value: 2, label: "No" },
];

export const USER_OTHER_REPOSSISSION_OPTIONS = [
  { value: 1, label: "Yes" },
  { value: 2, label: "No" },
];

export const USER_OTHER_IS_CONSIGER_AVAILABLE_OPTIONS = [
  { value: 1, label: "Yes" },
  { value: 2, label: "No" },
];

export const USER_PLEASE_RATE_YOUR_CREDIT_OPTIONS = [
  { value: 1, label: "Excellent" },
  { value: 2, label: "Good" },
  { value: 3, label: "Average" },
  { value: 4, label: "Bad" },
];