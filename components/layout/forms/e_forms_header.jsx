const EFormsHeaderComponent = ({ children }) => {
  return (
    <div className="p-0 m-0 mx-1 mx-md-5 w-100">
      <h4 className="eform_h4__form_header my-2 d-flex align-items-center eform_main_header-style">
        {children}
      </h4>
    </div>
  );
};

export default EFormsHeaderComponent;
