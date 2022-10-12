import "./index.css";
import { Modal } from "react-bootstrap";

function index(props) {
  return (
    <Modal show={props.showModal} size="s" centered className="modal">
      <Modal.Title className="modal-title">{props.title}</Modal.Title>
      <Modal.Body className="modal-body">
        <p>{props.successMessage}</p>
      </Modal.Body>
      <div className="modal-footer modal__footer">
        <button
          className="modal__button-active"
          onClick={() => {
            props.navigateHandler(props.bluePath);
          }}
        >
          {props.blueButton}
        </button>
        <button
          className="modal__button-pasive"
          onClick={() => {
            props.navigateHandler(props.whitePath);
          }}
        >
          {props.whiteButton}
        </button>
      </div>
    </Modal>
  );
}

export default index;
