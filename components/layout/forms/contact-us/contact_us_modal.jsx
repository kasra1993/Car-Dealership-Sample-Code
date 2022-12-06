import { Modal } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import EformsHeader from "../../../common/layout/header/eform_header";
const ContactModal = ({
  children,
  title,
  textBtn,
  onClick,
  onSubmit,
  open = false,
  onClose,
}) => {
  const clickHandler = (e) => {
    onClick && onClick(e);
  };

  const closeHandler = (e) => {
    onClose && onClose(e);
  };

  const submitHandler = (e) => {
    onSubmit && onSubmit(e);
  };

  return (
    <Modal
      size="xl"
      centered
      show={open}
      onHide={closeHandler}
      contentClassName="p-2 m-0 eform_finance_modal_div__container"
    >
      <Modal.Header className="p-0 m-0 border-0">
        <Modal.Title className="p-0 m-0 w-100">
          <div className="p-1 m-0 mb-3 d-flex row align-items-center justify-content-between">
            <EformsHeader title={title} />
            <button
              className="p-0 m-0 modal_close_button__style d-flex align-items-center justify-content-center"
              onClick={closeHandler}
            >
              <FaTimes size={18} />
            </button>
          </div>
        </Modal.Title>
      </Modal.Header>
      <form className="p-0 m-0 row" onSubmit={submitHandler}>
        <div className="p-0 m-0 w-100">{children}</div>
        <button
          type="submit"
          className="p-2 m-1 mt-3 eform_button__submit"
          onClick={clickHandler}
        >
          {textBtn}
        </button>
      </form>
    </Modal>
  );
};

export default ContactModal;
