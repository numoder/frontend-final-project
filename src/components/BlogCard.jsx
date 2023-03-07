import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";


export default function BlogCard() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  return (
    <>
      {!blog
        ? <h1>Loading...</h1>
        : blog.map(element => (          
          <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{element.title}</Modal.Title>
          </Modal.Header>
            <Modal.Body key={element._id}> {element.description} {element.review}</Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
        ))
      }
    </>
  )
}
