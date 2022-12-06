import { useFormik } from "formik";
import { useState } from "react";
import { toast } from "react-toastify";
import { GET_MORE_INFORMATION_VALIDATION_SCHEMA } from "../../../constant/formik/validation";
import { GET_MORE_INFORMATION } from "../../../constant/get-more-information/get_more_information";
import { onSubmit } from "../../../utils/get-more-information/get_more_information";
import EformsHeader from "../../common/layout/header/eform_header";
import Loading from "../../common/web/loading/loading";
import PersonalInfo from "../forms/personalinfo";
import Select from "react-select";
import NumberFormat from "react-number-format";

const GetMoreInformation = (props) => {
  const { domain, vehicleId } = props;
  const [isLoading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: GET_MORE_INFORMATION,
    validationSchema: GET_MORE_INFORMATION_VALIDATION_SCHEMA,
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      const { status, message, data } = await onSubmit(
        values,
        domain,
        vehicleId
      );
      setLoading(false);
      if (status === 201) {
        toast.success("Successful");
        resetForm();
      } else {
        toast.error(message);
      }
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="p-4 m-0 my-md-0 row w-100 align-items-start justify-content-start"
    >
      <div className="p-0 m-0 col-12 pl-4">
        {/* <EformsHeader title="Get More Information" /> */}
        <h4>
          <b>Get More Information</b>{" "}
          
        </h4>
      </div>
      <div className="p-0 m-0 col-12 ">
        <div className="form-group col-sm-12 col-md-12 p-0 m-0 mt-2 mb-2 p-1">
          {/* <PersonalInfo formik={formik} withoutHeader /> */}
          <div className="p-0 m-0 row w-100">
            <div className={`form-group col-9 p-0 m-0 mt-2 mb-2 p-1`}>
              <input
                name="firstName"
                className="form-control  eforms_input_container px-4"
                placeholder="First Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
              />

              {formik.errors.firstName && formik.touched.firstName && (
                <small className="text-danger">{formik.errors.firstName}</small>
              )}
            </div>
            <div className={`form-group col-9  p-0 m-0 mt-2 mb-2 p-1`}>
              {" "}
              <input
                name="lastName"
                className="form-control eforms_input_container px-4"
                placeholder="Last Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
              />
              {formik.errors.lastName && formik.touched.lastName && (
                <small className="text-danger">{formik.errors.lastName}</small>
              )}
            </div>
            <div className={`form-group col-9  p-0 m-0 mt-2 mb-2 p-1`}>
              {" "}
              <input
                name="email"
                className="form-control eforms_input_container px-4"
                placeholder="Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.errors.email && formik.touched.email && (
                <small className="text-danger">{formik.errors.email}</small>
              )}
            </div>
            <div className={`form-group col-9  p-0 m-0 mt-2 mb-2 p-1`}>
              {" "}
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
                className="form-control eforms_input_container px-4"
                value={formik.values.phone}
              /> */}
              <input
                name="phone"
                className="form-control eforms_input_container px-4"
                placeholder="Phone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
              />
              {formik.errors.phone && formik.touched.phone && (
                <small className="text-danger">{formik.errors.phone}</small>
              )}
            </div>
          </div>

          <textarea
            rows="3"
            name="message"
            className="form-control col-9 eforms_textarea_container px-4"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Message"
            value={formik.values.message}
          />

          {formik.errors.message && formik.touched.message && (
            <small className="text-danger">{formik.errors.message}</small>
          )}
        </div>
        <div className="p-1 m-0 col-9 ">
          <div className="p-0 m-0">
            {isLoading ? (
              <Loading />
            ) : (
              <button
                style={{ borderRadius: "3px" }}
                type="submit"
                className="btn my-3 col-3  p-0 m-0 gold_button_2 btn"
              >
                <p className="m-sm-0  m-0 py-2">Submit</p>
              </button>
            )}
          </div>
        </div>
      </div>
    </form>
  );
};

export default GetMoreInformation;
