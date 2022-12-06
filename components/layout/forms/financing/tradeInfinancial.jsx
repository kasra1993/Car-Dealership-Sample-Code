import React from "react";
import { Modal } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import { useGetColor } from "../../../../hooks/common/useGetColor";
import { useGetFooterData } from "../../../../hooks/common/useGetFooterData";
import ValueYourDate from "../../../../pages/forms/value-your-trade";
import { getToken } from "../../../../utils/common/get_token";
import FooterTitle from "../../../common/layout/footer/footer_title";
import EformsHeader from "../../../common/layout/header/eform_header";
import Loading from "../../../common/web/loading/loading";

const TradeInFinansial = (props) => {
  const { onClose, show, formik, domain, vehicleDataForSearch } = props;
  const { data: colorData } = useGetColor();
  return (
    <Modal
      show={show}
      size="xl"
      onHide={onClose}
      centered
      contentClassName="p-2 m-0 eform_finance_modal_div__container"
    >
      <Modal.Header className="p-0 m-0 border-0">
        <Modal.Title className="p-0 m-0 w-100">
          <div className="p-1 m-0 mb-3 d-flex row align-items-center justify-content-between">
            {/* <EformsHeader title="Appraise My Trade" className="p-3" /> */}
            <button
              className="p-0 m-0 modal_close_button__style d-flex align-items-center justify-content-center"
              onClick={onClose}
            >
              <FaTimes size={18} />
            </button>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          backgroundColor: "fff",
          color: "#000",
        }}
      >
        <ValueYourDate
          vehicleDataForSearch={vehicleDataForSearch}
          onClose={onClose}
          otherFormik={formik}
          domain={domain}
          colors={colorData}
        />
      </Modal.Body>
    </Modal>
  );
};

export default React.memo(TradeInFinansial);
