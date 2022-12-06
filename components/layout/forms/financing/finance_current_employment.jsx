import NumberFormat from "react-number-format";
import Select from "react-select";
import { USER_EMPLOYMENT_OPTIONS } from "../../../../constant/fainancial/fainancial";
import { useGetAllCitiesWithDetail } from "../../../../hooks/city/useGetAllCitiesWithDetail";
import { reactSelectInputStyle } from "../../../../utils/common/react_select_styles";
import FinancialPreviousEmployment from "./finance_previous_employment";

const FinancialCurrentEmployment = ({ formik }) => {
  const { options: cityOptions } = useGetAllCitiesWithDetail();
  return (
    <div className="p-0 m-0 row w-100">
      <div className="form-group col-12 col-md-6 d-flex justify-content-center col-md-4 p-0 m-0 mt-2 p-1">
        <div className="w-100 col-12 pr-md-2 pr-0 p-0">
          <div className=" w-100  p-0 m-0">
            <label className="eforms_label">Company Name</label>
            <input
              name="user_curr_employer"
              className="form-control  eforms_input_container"
              // placeholder="Employer"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.user_curr_employer}
            />
          </div>
        </div>
      </div>

      <div className="form-group col-12 col-md-6 d-flex justify-content-center col-md-4 p-0 m-0 mt-2 p-1">
        <div className="w-100 col-12 pl-md-2 pl-0 p-0">
          <div className=" w-100  p-0 m-0">
            <label className="eforms_label">Occupation Or Title</label>
            <input
              name="user_curr_emp_occupation"
              className="form-control  eforms_input_container"
              // placeholder="Occupation"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.user_curr_emp_occupation}
            />
          </div>
        </div>
      </div>

      <div className="form-group col-12 col-md-6 d-flex justify-content-center col-md-4 p-0 m-0 mt-2 p-1">
        <div className="w-100 col-12 pr-md-2 pr-0 p-0">
          <div className=" w-100  p-0 m-0">
            <label className="eforms_label">Years With Employer</label>
            <input
              name="user_curr_emp_Duration_year"
              className="form-control  eforms_input_container"
              // placeholder="Duration Year"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.user_curr_emp_Duration_year}
            />
          </div>
        </div>
        {formik.errors.user_curr_emp_Duration_year &&
          formik.touched.user_curr_emp_Duration_year && (
            <small className="text-danger">
              {formik.errors.user_curr_emp_Duration_year}
            </small>
          )}
      </div>

      <div className="form-group col-12 col-md-6 d-flex justify-content-center col-md-4 p-0 m-0 mt-2 p-1">
        <div className="w-100 col-12 pl-md-2 pl-0 p-0">
          <div className=" w-100  p-0 m-0">
            <label className="eforms_label">Monthly Income</label>
            <input
              name="user_curr_emp_income"
              className="form-control  eforms_input_container"
              // placeholder="Gross Income"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.user_curr_emp_income}
            />
          </div>
        </div>
        {formik.errors.user_curr_emp_income &&
          formik.touched.user_curr_emp_income && (
            <small className="text-danger">
              {formik.errors.user_curr_emp_income}
            </small>
          )}
      </div>
    </div>
  );
};

export default FinancialCurrentEmployment;
