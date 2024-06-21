import { useState } from "react";
import ModalContent from "./ModalContent";

const NoPortalExample = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)}>
        Show Modal tanpa Portal
      </button>
      {showModal && <ModalContent onClose={() => setShowModal(false)} />}
    </>
  );
};

export default NoPortalExample;
