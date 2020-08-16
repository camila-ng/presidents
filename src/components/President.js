import React, { useState } from "react";
import Modal from "./Modal";

const President = ({ name, description, image }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const changeModal = () => setModalOpen(!modalOpen);

  return (
    <div className="presidents-container">
      <img className="image" src={image} alt={name} onClick={changeModal} />
      <div className="name">{name}</div>
      {modalOpen && <Modal description={description} />}
    </div>
  );
};

export default President;

