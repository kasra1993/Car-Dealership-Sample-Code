import * as Yup from "yup";
export const VALUE_YOURTRADE_VALIDATION = () => {
  return Yup.object({
    year: Yup.string().required("Required").matches(/^\d+$/, {
      message: "year is a number",
    }),
    temp_odometer: Yup.string().matches(/^\d+$/, {
      message: "Odometer must be a number",
    }),
    transmission: Yup.string().matches(/^\d+$/, {
      message: "transmission is a number",
    }),
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().required("Required").email("invalid email format"),
    phone: Yup.string()
      .required("Required")
      .matches(/^\d+$/, "check your phone number")
      .length(10, "mobile has 10 digits"),
    // recaptcha: Yup.string().required(),
  });
};

export const CAR_FINDER_VALIDATION = () => {
  return Yup.object({
    year: Yup.string().required("Required").matches(/^\d+$/, {
      message: "year is a number",
    }),
    temp_odometer: Yup.string().matches(/^\d+$/, {
      message: "Odometer must be a number",
    }),
    transmission: Yup.string().matches(/^\d+$/, {
      message: "transmission is a number",
    }),
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().required("Required").email("invalid email format"),
    phone: Yup.string()
      .required("Required")
      .matches(/^\d+$/, "check your phone number")
      .length(10, "mobile has 10 digits"),
  });
};

export const SERVICE_APPOINTMENT_VALIDATION = () => {
  return Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().required("Required").email("invalid email format"),
    phone: Yup.string()
      .required("Required")
      .matches(/^\d+$/, "invalid phone number")
      .length(10, "Number has 10 digits"),
    year: Yup.string().required("Required").matches(/^\d+$/, "invalid year"),
    requested_date: Yup.string().required("Required"),
  });
};

export const ORDER_SERVICE_VALIDATION = () => {
  return Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().required("Required").email("invalid email format"),
    phone: Yup.string()
      .required("Required")
      .matches(/^\d+$/, "invalid phone number")
      .length(10, "Number has 10 digits"),
    year: Yup.string().required("Required").matches(/^\d+$/, "invalid year"),
    requested_date: Yup.string().required("Required"),
  });
};

//not used
export const PERSONAL_VALIDATION = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().required("Required").email("invalid email format"),
  phone: Yup.string()
    .required("Required")
    .matches(/^\d+$/, "check your phone number")
    .length(10, "mobile has 10 digits"),
});

export const TEST_DRIVE_VALIDATION = () => {
  return Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().required("Required").email("Check your email"),
    phone: Yup.string()
      .required("Required")
      .matches(/^\d+$/, "check your phone number")
      .length(10, "mobile has 10 digits"),
    user_salutation: Yup.string().required("Required"),
    method_of_contact: Yup.string().required("Required"),
    requested_date: Yup.string().required("Required"),
  });
};

export const FINANCIAL_VALIDATION_SCHEMA = () => {
  return Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    // driver_license_NO: Yup.string().required("Required"),
    email: Yup.string().required("Required").email("Check your email"),
    phone: Yup.string()
      .required("Required")
      .matches(/^\d+$/, "check your phone number")
      .length(10, "mobile has 10 digits"),
    user_currAddr_monthly_payment: Yup.string().matches(
      /^\d+$/,
      "monthly payment is a number"
    ),
    user_currAddr_Duration_year: Yup.string().matches(
      /^\d+$/,
      "Duration year is a number"
    ),
    user_currAddr_Duration_month: Yup.string().matches(
      /^\d+$/,
      "Duration month is a number"
    ),
    user_curr_emp_Duration_year: Yup.string().matches(
      /^\d+$/,
      "Duration year is a number"
    ),
    user_curr_emp_Duration_month: Yup.string().matches(
      /^\d+$/,
      "Duration month is a number"
    ),
    user_curr_emp_phone: Yup.string()
      .matches(/^\d+$/, "check your phone number")
      .length(10, "mobile has 10 digits"),
    user_curr_emp_income: Yup.string().matches(
      /^\d+$/,
      "Duration income is a number"
    ),
    // frk_user_curr_emp_city_id: Yup.string().required("Required"),
    // frk_user_curr_emp_country_id: Yup.string().required("Required"),
    // frk_user_curr_emp_province_id: Yup.string().required("Required"),

    user_curr_emp_income: Yup.string().matches(/^\d+$/, "income is a number"),
    user_prev_emp_phone: Yup.string()
      .matches(/^\d+$/, "check your phone number")
      .length(10, "mobile has 10 digits"),
    user_prev_emp_Duration_year: Yup.string().matches(
      /^\d+$/,
      "Duration year is a number"
    ),
    user_prev_emp_Duration_month: Yup.string().matches(
      /^\d+$/,
      "Duration month is a number"
    ),
  });
};
export const TEXT_US_NOW_VALIDATION = () => {
  return Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .email()
      .required("Email is required")
      .email("Check email format"),
    phone: Yup.string()
      .required("phone is required")
      .matches(/^\d+$/, "invalid phone number")
      .length(10, "Number has 10 digits"),
    message: Yup.string().required("Message is required"),
  });
};

export const CONTACT_US_VALIDATION_SCHEMA = Yup.object({
  f_name: Yup.string().required("First Name is required"),
  l_name: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .email()
    .required("Email is required")
    .email("Check email format"),
  mobile: Yup.string()
    .required("Required")
    .matches(/^\d+$/, "invalid phone number")
    .length(10, "Number has 10 digits"),
  message: Yup.string().required("Message is required"),
});
export const BOOK_APPOINTMENT_VALIDATION_SCHEMA = Yup.object({
  email: Yup.string().email().required("email is required"),
  phone: Yup.string()
    .required("Required")
    .matches(/^\d+$/, "invalid phone number")
    .length(10, "Number has 10 digits"),

  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  method_of_contact: Yup.string().required("method of contact is required!"),
  requested_date: Yup.string().required("date is required"),
  comment: Yup.string().required("comment is required!"),
});

export const GET_MORE_INFORMATION_VALIDATION_SCHEMA = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .email()
    .required("Email is required")
    .email("Check email format"),
  phone: Yup.string()
    .required("Required")
    .matches(/^\d+$/, "invalid phone number")
    .length(10, "Number has 10 digits"),
  message: Yup.string().required("Message is required"),
});
