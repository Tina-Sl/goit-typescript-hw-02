import Modal from "react-modal";
import s from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onClose, image }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className={s.modal}
      overlayClassName={s.overlay}
    >
      <div className={s.imageBox}>
        <img
          src={image.urls.regular}
          alt={image.alt_description}
          className={s.image}
        />
        <h3 className={s.modaltitle}>
          {image.description || "No Description"}
        </h3>
      </div>
    </Modal>
  );
};

export default ImageModal;
