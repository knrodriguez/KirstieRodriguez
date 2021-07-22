import React, { useState } from "react";
import { Modal, AboutMeGrid } from "../components";

export default (props) => {
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState([]);

  function closeModal(e) {
    if (e.target.id === "modal-container") {
      setOpenModal(false);
    }
  }

  return (
    <section>
      {openModal && <Modal {...modalData} closeModal={closeModal} />}
      <AboutMeGrid setOpenModal={setOpenModal} setModalData={setModalData} {...props}/>
    </section>
  );
};
