import { FaPlusCircle } from "react-icons/fa";
import NumberFormat from "react-number-format";
// import HeadingSecondary from "../layout/header/HeadingSecondary";

const PersonalScetion = (props) => {
  const { formik, complete = false } = props;
  return (
    <div className="p-0 m-0 row w-100">
      <div className="d-flex row justify-content-start align-items-start text-start col-12">
        {/* <HeadingSecondary secondaryColor>PERSONAL INFORMATION</HeadingSecondary> */}
      </div>
      {/* <h5 className=" col-12 p-0 m-0">
        <i className="service_plus-icon">
          <FaPlusCircle />
        </i>{" "}
        PERSONAL INFORMATION
      </h5> */}
      <div className="form-group col-sm-6 col-md-4 p-0 m-0 mt-2 mb-2 p-1">
        <input
          name="firstName"
          className="vehicle-form-service-appointment-input"
          placeholder="First Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.errors.firstName && formik.touched.firstName && (
          <p className="text-danger">{formik.errors.firstName}</p>
        )}
      </div>
      <div className="form-group col-sm-6 col-md-4 p-0 m-0 mt-2 mb-2 p-1">
        <input
          name="lastName"
          className="vehicle-form-service-appointment-input"
          placeholder="Last Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.errors.lastName && formik.touched.lastName && (
          <p className="text-danger">{formik.errors.lastName}</p>
        )}
      </div>
      <div className="form-group col-sm-6 col-md-4 p-0 m-0 mt-2 mb-2 p-1">
        <input
          name="email"
          className="vehicle-form-service-appointment-input"
          placeholder="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.errors.email && formik.touched.email && (
          <p className="text-danger">{formik.errors.email}</p>
        )}
      </div>
      <div className="form-group col-sm-6 col-md-4 p-0 m-0 mt-2 mb-2 p-1">
        {/* <NumberFormat
          prefix="+"
          format="+# (###) ###-####"
          mask="_"
          allowEmptyFormatting={false}
          onValueChange={(e) => {
            formik.setFieldValue("phone", e.value);
          }}
          placeholder="Phone"
          onBlur={formik.handleBlur}
          name="phone"
          id="phone"
          className="vehicle-form-service-appointment-input"
          value={formik.values.phone}
        /> */}
        <input
          name="phone"
          className="vehicle-form-service-appointment-input"
          placeholder="phone"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
        />
        {formik.errors.phone && formik.touched.phone && (
          <p className="text-danger">{formik.errors.phone}</p>
        )}
      </div>
      {complete && (
        <>
          <div className="form-group col-sm-6 col-md-4 p-0 m-0 mt-2 mb-2 p-1">
            <select
              name="user_salutation"
              className="form-select rounded rounded-pill  p-2 border-0 service_input-color w-100"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="1">Dr</option>
              <option value="2">Miss</option>
              <option value="3">Fair</option>
              <option value="4">Poor</option>
            </select>
          </div>
          <div className="form-group col-sm-6 col-md-4 p-0 m-0 mt-2 mb-2 p-1">
            <select
              name="user_marital_status"
              className="form-select rounded rounded-pill  p-2 border-0 service_input-color w-100"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="1">Dr</option>
              <option value="2">Miss</option>
              <option value="3">Fair</option>
              <option value="4">Poor</option>
            </select>
          </div>
        </>
      )}
    </div>
  );
};

export default PersonalScetion;
