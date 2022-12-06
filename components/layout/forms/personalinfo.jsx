import { reactSelectInputStyle } from "./../../../utils/common/react_select_styles";
import Select from "react-select";
import EformsHeader from "../../common/layout/header/eform_header";
import NumberFormat from "react-number-format";

const PersonalInfo = (props) => {
  const {
    formik,
    complete = false,
    type = 1,
    otherFormik = undefined,
    withoutHeader = false,
    textus = false,
  } = props;
  return (
    <div className="p-0 m-0 row w-100">
      {typeof otherFormik === "undefined" ||
        (withoutHeader && (
          <div className="d-flex row justify-content-start align-items-start text-start col-12 flex">
            <EformsHeader title="Personal Information" />
          </div>
        ))}
      <div
        className={`form-group col-12 col-md-6 d-flex justify-content-center p-0 m-0 mt-2 p-1 `}
      >
        <div className="w-100 col-12 p-0  pr-md-2 pr-0">
          <div className=" w-100  p-0 m-0">
            <label className="eforms_label">First Name</label>
            <input
              name="firstName"
              className="form-control  eforms_input_container"
              // placeholder="First Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
          </div>
          {formik.errors.firstName && formik.touched.firstName && (
            <small className="text-danger">{formik.errors.firstName}</small>
          )}
        </div>
      </div>
      <div
        className={`form-group col-12 col-md-6 d-flex justify-content-center ${
          otherFormik && "col-md-6"
        }  p-0 m-0 mt-2 p-1`}
      >
        <div className="w-100 col-12 p-0 m-0 pl-md-2 pl-0">
          <div className=" w-100  p-0 m-0">
            <label className="eforms_label">Last Name</label>
            <input
              name="lastName"
              className="form-control eforms_input_container"
              // placeholder="Last Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
            />
          </div>
          {formik.errors.lastName && formik.touched.lastName && (
            <small className="text-danger">{formik.errors.lastName}</small>
          )}
        </div>
      </div>
      <div
        className={`form-group col-12 col-md-6 d-flex justify-content-center ${
          otherFormik && "col-md-6"
        } p-0 m-0 mt-2 p-1`}
      >
        <div className="w-100 col-12 p-0 m-0 pr-md-2 pr-0">
          <div className=" w-100  p-0 m-0">
            <label className="eforms_label">Email</label>
            <input
              name="email"
              className="form-control eforms_input_container"
              // placeholder="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
          </div>
          {formik.errors.email && formik.touched.email && (
            <small className="text-danger">{formik.errors.email}</small>
          )}
        </div>
      </div>
      {textus ? (
        <div
          className={`form-group col-12 col-md-6 d-flex justify-content-center ${
            otherFormik && "col-md-6"
          }p-0 m-0 mt-2 p-1`}
        >
          <div className="w-100 col-12 p-0   pl-md-2 pl-0">
            <div className=" w-100  p-0 m-0">
              <label className="eforms_label">Phone</label>
              {/* <NumberFormat
                prefix="+"
                format="+# (###) ###-####"
                mask="_"
                allowEmptyFormatting={false}
                onValueChange={(e) => {
                  formik.setFieldValue("phone", e.value);
                }}
                placeholder="Cell Phone Number"
                onBlur={formik.handleBlur}
                name="phone"
                id="phone"
                className="form-control eforms_input_container"
                value={formik.values.phone}
              /> */}
              <input
                name="phone"
                className="form-control eforms_input_container"
                // placeholder="Phone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
              />
            </div>
            {formik.errors.phone && formik.touched.phone && (
              <small className="text-danger">{formik.errors.phone}</small>
            )}
          </div>
        </div>
      ) : (
        <div
          className={`form-group col-12 col-md-6 d-flex justify-content-center ${
            otherFormik && "col-md-6 "
          } ${complete ? "" : "col-md-6"} p-0 m-0 mt-2 p-1`}
        >
          <div className="w-100 col-12 p-0 pl-md-2 pl-0  mx-3">
            <div className=" w-100  p-0 m-0">
              <label className="eforms_label">Phone</label>
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
                className="form-control eforms_input_container"
                value={formik.values.phone}
              /> */}
              <input
                name="phone"
                className="form-control eforms_input_container"
                // placeholder="Phone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
              />
            </div>
            {formik.errors.phone && formik.touched.phone && (
              <small className="text-danger">{formik.errors.phone}</small>
            )}
          </div>
        </div>
      )}
      {complete && (
        <>
          <div
            className={`form-group col-12 col-md-6 d-flex justify-content-center ${
              otherFormik && "col-md-6"
            } ${complete ? "" : "col-md-6"} p-0 m-0 mt-2 p-1`}
          >
            <div className="w-100 col-12 p-0 p pr-md-2 pr-0">
              <div className=" w-100  p-0 m-0">
                <label className="eforms_label">Salutation</label>
                <Select
                  name="user_salutation"
                  className="form-select w-100 eforms_input_select_container"
                  // placeholder="Salutation"
                  options={[
                    { value: 1, label: "Dr" },
                    { value: 2, label: "Miss" },
                    { value: 3, label: "Mr." },
                    { value: 4, label: "Ms." },
                    { value: 5, label: "Mrs." },
                  ]}
                  styles={reactSelectInputStyle}
                  onChange={(e) => {
                    formik.setFieldValue("user_salutation", e?.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div
            className={`form-group col-12 col-md-6 d-flex justify-content-center ${
              otherFormik && "col-md-6"
            } ${complete ? "" : "col-md-6"} p-0 m-0 mt-2 p-1`}
          >
            <div className="w-100 col-12 p-0  mx-3">
              <div className=" w-100  p-0 m-0 pl-md-2 pl-0">
                <label className="eforms_label">Marital Status</label>
                <Select
                  name="user_marital_status"
                  className="form-select w-100 eforms_input_select_container"
                  // placeholder="Marital Status"
                  options={[
                    { value: 1, label: "Single" },
                    { value: 2, label: "Married" },
                    { value: 3, label: "Divorce" },
                    { value: 4, label: "Other" },
                  ]}
                  styles={reactSelectInputStyle}
                  onChange={(e) => {
                    formik.setFieldValue("user_marital_status", e?.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div
            className={`form-group col-12 col-md-6 d-flex justify-content-center ${
              otherFormik && "col-12 col-md-6 "
            } p-0 m-0 mt-2 p-1`}
          >
            <div className="w-100 col-12 p-0 mx-3">
              <div className=" w-100  p-0 m-0 pr-md-2 pr-0">
                <label className="eforms_label">SIN</label>
                <input
                  name="user_sin_number"
                  className="form-control eforms_input_container"
                  // placeholder="SIN"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.user_sin_number}
                />
              </div>
            </div>
          </div>
          <div
            className={`form-group pl-md-2 pl-0 ${
              type === 2 ? "col-12" : "col-12 col-md-6"
            } ${otherFormik && ""} p-0 m-0 mt-2 mb-2 p-1 `}
          >
            <label className="eforms_label">Driver License Number</label>
            <input
              name="driver_license_NO"
              className="form-control eforms_input_container"
              // placeholder="Driver License Number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.driver_license_NO}
            />
          </div>
          <div
            className={`form-group col-12 col-md-6 d-flex justify-content-center ${
              otherFormik && "col-12 col-md-6 "
            } p-0 m-0 mt-2 p-1`}
          >
            <div className="w-100 col-12 p-0 mx-3">
              <div className=" w-100  p-0 m-0 pr-md-2 pr-0">
                <lable className="eforms_label">Birth Date</lable>
                <input
                  type="text"
                  name="user_birthday"
                  className="form-control eforms_input_container"
                  onFocus={(e) => (e.target.type = "date")}
                  // placeholder="Birth Date"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.user_birthday}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PersonalInfo;
