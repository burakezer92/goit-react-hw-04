import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function ImageModal(props) {

  return (
    <div>
      <Modal
        isOpen={props.m}
        onRequestClose={props.c}
        ariaHideApp={false}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={props.c}>X</button>
        <br />
        <img className="modalPhoto" src={props.img} />
      </Modal>
    </div>
  );
}

export default ImageModal;
