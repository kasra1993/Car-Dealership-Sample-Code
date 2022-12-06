import Select from "react-select";
import {
  USER_OTHER_BANKRUPTCY_OPTIONS,
  USER_OTHER_IS_CONSIGER_AVAILABLE_OPTIONS,
  USER_OTHER_REPOSSISSION_OPTIONS,
  USER_PLEASE_RATE_YOUR_CREDIT_OPTIONS,
} from "../../../../constant/fainancial/fainancial";
import { reactSelectInputStyle } from "../../../../utils/common/react_select_styles";
const FinancialOtherInformation = ({ formik }) => {
  return (
    <div className="p-0 m-0 row w-100">
      <div className="form-group col-12 col-md-6 d-flex justify-content-center p-0 m-0 mt-2 p-1">
        <div className="w-100 col-12 pr-md-2 pr-0 p-0">
          <div className=" w-100  p-0 m-0">
            <label className="eforms_label">Rate Your Credit</label>
            <Select
              className="form-select w-100  eforms_input_select_container"
              styles={reactSelectInputStyle}
              name="user_please_rate_your_credit"
              // placeholder="Rate Your Credit"
              onChange={(option) =>
                formik.setFieldValue(
                  "user_please_rate_your_credit",
                  option.value
                )
              }
              onBlur={formik.handleBlur}
              options={USER_PLEASE_RATE_YOUR_CREDIT_OPTIONS}
            />
          </div>
        </div>
      </div>
      <div className="form-group col-12 col-md-6 d-flex justify-content-center p-0 m-0 mt-2 p-1">
        <div className="w-100 col-12 pl-md-2 pl-0 p-0">
          <div className=" w-100  p-0 m-0">
            <label className="eforms_label">Repossession</label>
            <Select
              className="form-select w-100  eforms_input_select_container"
              styles={reactSelectInputStyle}
              name="user_other_repossission"
              // placeholder="Repossession"
              onChange={(option) =>
                formik.setFieldValue("user_other_repossission", option.value)
              }
              onBlur={formik.handleBlur}
              options={USER_OTHER_REPOSSISSION_OPTIONS}
            />
          </div>
        </div>
      </div>
      <div className="form-group col-12 col-md-6 d-flex justify-content-center p-0 m-0 mt-2 p-1">
        <div className="w-100 col-12 pr-md-2 pr-0 p-0">
          <div className=" w-100  p-0 m-0">
            <label className="eforms_label">Bankruptcy</label>
            <Select
              className="form-select w-100  eforms_input_select_container"
              styles={reactSelectInputStyle}
              name="user_other_bankruptcy"
              // placeholder="Bankruptcy"
              onChange={(option) =>
                formik.setFieldValue("user_other_bankruptcy", option.value)
              }
              onBlur={formik.handleBlur}
              options={USER_OTHER_BANKRUPTCY_OPTIONS}
            />
          </div>
        </div>
      </div>

      <div className="form-group col-12 col-md-6 d-flex justify-content-center p-0 m-0 mt-2 p-1">
        <div className="w-100 col-12 pl-md-2 pl-0 p-0">
          <div className=" w-100  p-0 m-0">
            <label className="eforms_label">Is Co-signer Available?</label>
            <Select
              className="form-select w-100  eforms_input_select_container"
              styles={reactSelectInputStyle}
              name="user_other_is_consiger_available"
              // placeholder="Is Co-signer Available?"
              onChange={(option) =>
                formik.setFieldValue(
                  "user_other_is_consiger_available",
                  option.value
                )
              }
              onBlur={formik.handleBlur}
              options={USER_OTHER_IS_CONSIGER_AVAILABLE_OPTIONS}
            />
          </div>
        </div>
      </div>
      <div className="form-group col-12 d-flex justify-content-center p-0 m-0 mt-2 p-1">
        <div className="w-100 col-12 pr-md-2 pr-0 p-0">
          <div className=" w-100  p-0 m-0">
            <label className="eforms_label">Comment</label>
            <textarea
              rows={4}
              name="comment"
              className="form-control  eforms_textarea_container"
              // placeholder="Comment"
              onChange={formik.handleChange}
              value={formik.values.comment}
              onBlur={formik.handleBlur}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialOtherInformation;
