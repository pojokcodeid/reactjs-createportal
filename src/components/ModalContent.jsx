const ModalContent = ({ onClose }) => {
  return (
    <div className="modal">
      <div>ia a modal dialog</div>
      <button onClick={onClose}>Colse</button>
    </div>
  );
};

ModalContent.propTypes = {
  onClose: () => null,
};

export default ModalContent;
