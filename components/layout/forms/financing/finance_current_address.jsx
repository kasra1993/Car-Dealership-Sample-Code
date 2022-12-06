import Select from "react-select";
import { useGetAllCitiesWithDetail } from "../../../../hooks/city/useGetAllCitiesWithDetail";
import { reactSelectInputStyle } from "../../../../utils/common/react_select_styles";
const FinancialCurrntAddress = ({ formik }) => {
  const { options: cityOptions } = useGetAllCitiesWithDetail();
  return (
    <div className="p-0 m-0 row w-100">
      <div className="form-group col-12 d-flex justify-content-center p-0 m-0 mt-2 p-1">
        <div className="w-100 col-12  p-0">
          <div className=" w-100  p-0 m-0">
            <lable className="eforms_label">Street Address</lable>
            <textarea
              rows={4}
              name="user_currAddr"
              className="form-control  eforms_textarea_container"
              // placeholder="Address"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.user_currAddr}
            />
          </div>
        </div>
      </div>
      <div className="form-group col-12 col-md-6  d-flex justify-content-center col-md-4 p-0 m-0 mt-2 p-1">
        <div className="w-100 col-12 pr-md-2 pr-0 p-0">
          <div className=" w-100  p-0 m-0">
            <label className="eforms_label">Postal code</label>
            <input
              name="user_currAddr_postalcode"
              className="form-control  eforms_input_container"
              // placeholder="Postal code"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.user_currAddr_postalcode}
            />
          </div>
        </div>
      </div>
      <div className="form-group col-12 col-md-6  d-flex justify-content-center col-md-4 p-0 m-0 mt-2 p-1">
        <div className="w-100 col-12 pl-md-2 pl-0 p-0">
          <div className=" w-100  p-0 m-0">
            <label className="eforms_label">City</label>
            <Select
              className="form-select w-100  eforms_input_select_container"
              styles={reactSelectInputStyle}
              options={cityOptions}
              onChange={(option) => {
                formik.setFieldValue(
                  "frk_user_currAddr_city_id",
                  option?.value
                );
                formik.setFieldValue("province", option?.province);
                formik.setFieldValue("country", option?.country);
              }}
              // placeholder="City"
              name="city"
              onBlur={formik.handleBlur}
            />
          </div>
        </div>
      </div>
      <div className="form-group col-12 col-md-6  d-flex justify-content-center col-md-4 p-0 m-0 mt-2 p-1">
        <div className="w-100 col-12 pr-md-2 pr-0 p-0">
          <div className=" w-100  p-0 m-0">
            <label className="eforms_label">Province</label>
            <input
              className="form-control eforms_input_container"
              name="province"
              // placeholder="Province"
              value={formik.values.province}
              disabled
            />
          </div>
        </div>
      </div>

      <div className="form-group col-12 col-md-6  d-flex justify-content-center col-md-4 p-0 m-0 mt-2 p-1">
        <div className="w-100 col-12 pl-md-2 pl-0 p-0">
          <div className=" w-100  p-0 m-0">
            <label className="eforms_label">Years at Residence</label>
            <input
              name="user_currAddr_Duration_year"
              className="form-control eforms_input_container"
              // placeholder="Duration year"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.user_currAddr_Duration_year}
            />
          </div>
        </div>
        {formik.errors.user_currAddr_Duration_year &&
          formik.touched.user_currAddr_Duration_year && (
            <small className="text-danger">
              {formik.errors.user_currAddr_Duration_year}
            </small>
          )}
      </div>

      <div className="form-group col-12 col-md-6  d-flex justify-content-center col-md-4 p-0 m-0 mt-2 p-1">
        <div className="w-100 col-12 pr-md-2 pr-0 p-0">
          <div className=" w-100  p-0 m-0">
            <label className="eforms_label">Home Status</label>
            <Select
              name="user_currAddr_home_status"
              className="form-select w-100 eforms_input_select_container"
              // placeholder="Home Status"
              options={[
                { value: 1, label: "Rent" },
                { value: 2, label: "Own with mortage" },
                { value: 3, label: "With parent" },
                { value: 4, label: "Other" },
              ]}
              styles={reactSelectInputStyle}
              onChange={(e) => {
                formik.setFieldValue("user_currAddr_home_status", e?.value);
              }}
            />
          </div>
        </div>
      </div>
      <div className="form-group col-12 col-md-6  d-flex justify-content-center col-md-4 p-0 m-0 mt-2 p-1">
        <div className="w-100 col-12 pl-md-2 pl-0 p-0">
          <div className=" w-100  p-0 m-0">
            <label className="eforms_label">Monthly payment</label>
            <input
              name="user_currAddr_monthly_payment"
              className="form-control eforms_input_container"
              // placeholder="Monthly payment"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.user_currAddr_monthly_payment}
            />
          </div>
        </div>
        {formik.errors.user_currAddr_monthly_payment &&
          formik.touched.user_currAddr_monthly_payment && (
            <small className="text-danger">
              {formik.errors.user_currAddr_monthly_payment}
            </small>
          )}
      </div>
    </div>
  );
};

export default FinancialCurrntAddress;
