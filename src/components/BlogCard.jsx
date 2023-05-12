import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import "./modalStyles.css";

export default function BlogCard() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  return (
    <>
      {!blog ? (
        <progress max="100" value={countTo100()} />
      ) : (
        blog.map((element) => (
          <Modal
            show={show}
            onHide={handleClose}
            class="modal-dialog modal-fullscreen">
            <Modal.Header closeButton>
              <Modal.Title class="album-artist">
                <h2>{element.title}</h2>
                <h3>{element.artist}</h3>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body key={element._id}>
              <img src={element.image} />
              {element.genre} {element.review}
            </Modal.Body>
            <Modal.Footer>
              <div class="row">
                <div class="col-8">
                  <button onClick={handleClose}>Close</button>
                </div>
              </div>
            </Modal.Footer>
          </Modal>
        ))
      )}
    </>
  );
}
