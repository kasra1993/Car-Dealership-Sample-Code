import Link from "next/link";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
const ConnectionBox = (props) => {
  const { icon: Icon, href, title, type, sellPrice, Component } = props;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);
  if (type === "Link") {
    return (
      <Link href={href}>
        <a className="p-2 m-0 col-6 col-lg-4 connection_box_div__container text-decoration-none">
          <div className="p-0 m-0 d-flex flex-column justify-content-center align-items-center">
            <i className="p-3 m-0 connection_box_i__icon_container">{Icon}</i>
            <span className="text-center">{title}</span>
          </div>
        </a>
      </Link>
    );
  } else {
    return (
      <>
        <Modal
          size="xl"
          centered
          show={show}
          onHide={handleClose}
          centered
          contentClassName="p-2 m-0 rounded eforms_div__container"
        >
          <Modal.Header className="p-0 m-0 border-0">
            <Modal.Title className="p-0 m-0 w-100">
              <div className="p-1 m-0 mb-3 d-flex row align-items-center justify-content-between">
                <h4 className="p-0  m-0 footer_h4__category_title">{title}</h4>
                <button
                  className="p-0 m-0 modal_close_button__style"
                  onClick={handleClose}
                >
                  <FaTimes size={28} />
                </button>
              </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* {React.cloneElement(<></>, { sellPrice: "iujbvdsi" }, Component)} */}
            <Component sellPrice={sellPrice} modalMode />
          </Modal.Body>
        </Modal>
        <div
          className="p-2 m-0 col-6 col-lg-4 connection_box_div__container"
          onClick={() => handleOpen()}
        >
          <div className="p-0 m-0 d-flex flex-column justify-content-center align-items-center">
            <i className="p-3 m-0 connection_box_i__icon_container">{Icon}</i>
            <span className="text-center">{title}</span>
          </div>
        </div>
      </>
    );
  }
};
export default ConnectionBox;
