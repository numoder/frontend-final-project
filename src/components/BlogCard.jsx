import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import './blog.css';

export default function BlogCard() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  return (
    <>
      {!blog
        ? <progress max="100" value ={countTo100()} />
        : blog.map(element => (   
              <Modal show={show} onHide={handleClose} class="modal-dialog modal-fullscreen">
              <Modal.Header closeButton>
                <Modal.Title>{element.title}11111111</Modal.Title>
              </Modal.Header>
                <Modal.Body key={element._id}> 
                <img src="{element.image}" />
                  {element.description} {element.review}2222222
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
      }
    </>
  )
}
