import { useState } from "react";
import { createPortal } from "react-dom";
import ModalContent from "./ModalContent";

const PortalExample = () => {
  const [sehowModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)}>
        Show modal usiang portal
      </button>
      {sehowModal &&
        createPortal(
          <ModalContent onClose={() => setShowModal(false)} />,
          document.body,
        )}
    </>
  );
};

export default PortalExample;
