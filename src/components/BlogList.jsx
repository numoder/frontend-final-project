import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";
import BlogDelete from "./BlogDelete.jsx";
import BlogEdit from "./BlogEdit.jsx";
import './modalStyles.css';

export default function BlogList({ blogs, setBlogs }) {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    fetch("https://final-project-backend-am.web.app/blog")
      .then((res) => res.json())
      .then(setBlogs)
      .catch(console.error);
  }, [setBlogs]);

  return (
    <>
      {!blogs ?
        <progress class="progress-bar" max="100" value="50"></progress>
        :
        <Container fluid>
          <Row>
            {blogs.map((element) => (
              <Col sm={6} md={4} lg={3} key={element._id}>
                <Card className="individual-card">
                  <Image 
                  onClick={() => {setSelectedBlog(element); handleShow()}}
                    src={element.image}
                    className="clickable-image"
                  />
                  <h2 class="modal-title">{element.title}</h2>
                  <div className="editandelete">
                  <BlogDelete
                        className="modal-buttons"
                        setBlogs={setBlogs}
                        blogId={element._id}
                      />
                  <BlogEdit
                    className="modal-buttons"
                    setBlogs={setBlogs}
                    selectedBlog={selectedBlog}
                    blogId={element._id}/>
                    </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      }

      {selectedBlog && (
      <div className="modal-dialog modal-fullscreen">
        <Modal show={show} onHide={handleClose}>
          <Modal.Body key={selectedBlog._id} > 
            <img class="img-responsive modal-img" className="modal-img" src={selectedBlog.image}/>
            <h1 class='card-album-title'>{selectedBlog.title}</h1>
            <p class='author-text'>Made by: {selectedBlog.author}</p>
            <p class='rating'>⭐️{selectedBlog.rating}⭐️</p> 
            <h3 class='genre'>Genre: {selectedBlog.genre}</h3>
            <p>{selectedBlog.review}</p>
            <button onClick={handleClose}>Close</button>
          </Modal.Body>
        </Modal>
      </div>
      )}
    </>
  );
}