import NumberFormat from "react-number-format";

const FinancialPreviousEmployment = ({ formik }) => {
  return (
    <div className="p-0 m-0 row w-100">
      <div className="form-group col-12 col-md-6 d-flex justify-content-center col-md-4 p-0 m-0 mt-2 p-1">
        <div className="w-100 col-12 pr-md-2 pr-0 p-0">
          <div className=" w-100  p-0 m-0">
            <label className="eforms_label">Previous Employer</label>
            <input
              name="user_prev_employer"
              className="form-control  eforms_input_container"
              // placeholder="Previous Employer"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.user_prev_employer}
            />
          </div>
        </div>
      </div>
      <div className="form-group col-12 col-md-6 d-flex justify-content-center col-md-4 p-0 m-0 mt-2 p-1">
        <div className="w-100 col-12 pl-md-2 pl-0 p-0">
          <div className=" w-100  p-0 m-0">
            {/* <NumberFormat
              prefix="+"
              format="+# (###) ###-####"
              mask="_"
              allowEmptyFormatting={false}
              onValueChange={(e) => {
                formik.setFieldValue("user_prev_emp_phone", e.value);
              }}
              placeholder="Phone"
              onBlur={formik.handleBlur}
              name="user_prev_emp_phone"
              id="user_prev_emp_phone"
              className="form-control  eforms_input_container"
              value={formik.values.user_prev_emp_phone}
            /> */}
            <label className="eforms_label">Phone</label>
            <input
              name="user_prev_emp_phone"
              className="form-control  eforms_input_container"
              // placeholder="Phone"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.user_prev_emp_phone}
            />
          </div>
        </div>
        {formik.errors.user_prev_emp_phone &&
          formik.touched.user_prev_emp_phone && (
            <small className="text-danger">
              {formik.errors.user_prev_emp_phone}
            </small>
          )}
      </div>
      <div className="form-group col-12 col-md-6 d-flex justify-content-center col-md-4 p-0 m-0 mt-2 p-1">
        <div className="w-100 col-12 pr-md-2 pr-0-3 p-0">
          <div className=" w-100  p-0 m-0">
            <label className="eforms_label">Duration Year</label>
            <input
              name="user_prev_emp_Duration_year"
              className="form-control  eforms_input_container"
              // placeholder="Duration Year"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.user_prev_emp_Duration_year}
            />
          </div>
        </div>
        {formik.errors.user_prev_emp_Duration_year &&
          formik.touched.user_prev_emp_Duration_year && (
            <small className="text-danger">
              {formik.errors.user_prev_emp_Duration_year}
            </small>
          )}
      </div>
      <div className="form-group col-12 col-md-6 d-flex justify-content-center col-md-4 p-0 m-0 mt-2 p-1">
        <div className="w-100 col-12 pl-md-2 pl-0 p-0">
          <div className=" w-100  p-0 m-0">
            <label className="eforms_label">Duration Month</label>
            <input
              name="user_prev_emp_Duration_month"
              className="form-control  eforms_input_container"
              // placeholder="Duration Month"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.user_prev_emp_Duration_month}
            />
          </div>
        </div>
        {formik.errors.user_prev_emp_Duration_month &&
          formik.touched.user_prev_emp_Duration_month && (
            <small className="text-danger">
              {formik.errors.user_prev_emp_Duration_month}
            </small>
          )}
      </div>
    </div>
  );
};

export default FinancialPreviousEmployment;
