import { useFormik } from "formik";
import { useState } from "react";
import NumberFormat from "react-number-format";
import { toast } from "react-toastify";
import { CONTACT_US_INITIAL_VALUE } from "../../../../constant/contact-us/contact_us";
import { CONTACT_US_VALIDATION_SCHEMA } from "../../../../constant/formik/validation";
import { onSubmit } from "../../../../utils/contact-us/contact_us";
import HomeTitle from "../../home/home_header_title";
import ContactModal from "./contact_us_modal";
const ContactUsModalContainer = ({
  domain,
  iconPath,
  firstParagraph = "",
  secondParagraph = "",
  className = "",
  hasButton,
  disbleButton,
}) => {
  const [show, setShow] = useState(false);
  const handleModalOpen = () => {
    setShow(true);
  };
  const handleModalClose = () => {
    setShow(false);
  };
  const formik = useFormik({
    initialValues: CONTACT_US_INITIAL_VALUE,
    validationSchema: CONTACT_US_VALIDATION_SCHEMA,
    onSubmit: async (values, { resetForm }) => {
      const { data, message, status } = await onSubmit(values, domain);
      if (status === 201) {
        toast.success("Successful");
        resetForm();
      } else {
        toast.error(message);
      }
    },
  });
  return (
    <>
      {!disbleButton && (
        <ContactModal
          title="Send A Text Message"
          textBtn="Save Changes"
          open={show}
          onClose={handleModalClose}
          onSubmit={formik.handleSubmit}
          onClick={formik.handleSubmit}
        >
          <div className="p-0 m-0 d-flex row">
            <div className="p-1 m-0 form-group col-12 col-md-6">
              <input
                id="f_name"
                name="f_name"
                type="text"
                className="form-control eforms_input_container py-4"
                placeholder="Your First Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.f_name}
              />
              {formik.errors.f_name && formik.touched.f_name && (
                <div className="text-danger">{formik.errors.f_name}</div>
              )}
            </div>

            <div className="p-1 m-0 form-group col-12 col-md-6">
              <input
                id="l_name"
                name="l_name"
                type="text"
                className="form-control eforms_input_container py-4"
                placeholder="Your Last Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.l_name}
              />
              {formik.errors.l_name && formik.touched.l_name && (
                <div className="text-danger">{formik.errors.l_name}</div>
              )}
            </div>

            <div className="p-1 m-0 form-group col-12 col-md-6">
              <input
                id="email"
                name="email"
                type="text"
                className="form-control eforms_input_container py-4"
                placeholder="Your Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.errors.email && formik.touched.email && (
                <div className="text-danger">{formik.errors.email}</div>
              )}
            </div>

            <div className="p-1 m-0 form-group col-12 col-md-6">
              {/* <NumberFormat
                prefix="+"
                format="+# (###) ###-####"
                mask="_"
                allowEmptyFormatting={false}
                onValueChange={(e) => {
                  formik.setFieldValue("mobile", e.value);
                }}
                placeholder="Phone"
                onBlur={formik.handleBlur}
                name="mobile"
                id="mobile"
                className="form-control eforms_input_container py-4"
                value={formik.values.mobile}
              /> */}
              <input
                id="mobile"
                name="mobile"
                type="text"
                className="form-control eforms_input_container py-4"
                placeholder="Your mobile"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.mobile}
              />
              {formik.errors.mobile && formik.touched.mobile && (
                <div className="text-danger">{formik.errors.mobile}</div>
              )}
            </div>
            <div className="p-1 m-0 form-group col-12">
              <textarea
                id="message"
                name="message"
                rows={6}
                className="form-control eforms_textarea_container"
                placeholder="Message"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
              />
              {formik.errors.message && formik.touched.message && (
                <div className="text-danger">{formik.errors.message}</div>
              )}
            </div>
          </div>
        </ContactModal>
      )}

      <div className={`p-0 px-1 m-0 mb-2 mb-md-0 col-12  ${className}`}>
        <div className="p-2 px-4 m-0 d-flex flex-column align-items-center justify-content-center contact_us_box_container">
          <div className="p-0 m-0 w-100 d-flex  justify-content-center align-items-center">
            <img
              src={`/images/contact-us/contact-us-${iconPath}`}
              alt="contact-us-icon"
              className="contact_us_img__icon"
            />
          </div>{" "}
          <div className="p-0 m-0 d-flex flex-column align-items-center justify-content-center ">
            <h2 className=" d-flex  align-items-center justify-content-center ">
              {firstParagraph}
            </h2>
            <div className="home_patern w-50 p-0 m-0">
              <img src="/images/about-us/Rect.png" className="w-75 pl-5" />
            </div>
          </div>
          <p className="p-0 m-0 my-3 contact_us_box_text__content text-center">
            {secondParagraph}
          </p>
          {hasButton && (
            <button
              disabled={disbleButton}
              className="p-2 eform_button__submit col-6"
              onClick={(e) => {
                e.preventDefault();
                handleModalOpen();
              }}
            >
              START CHAT
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default ContactUsModalContainer;
