import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";
import BlogDelete from "./BlogDelete.jsx";
import BlogEdit from "./BlogEdit.jsx";
import logo from '../logo.png';
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
      {!blogs
      ? <img src={logo} className="App-logo" alt="spinning disc" />

      : <Container fluid>
          <Row>
            {blogs.map((element) => (
              <Col sm={6} md={4} lg={3} key={element._id}>
                <Card className="individual-card">
                  <Image 
                  onClick={() => {setSelectedBlog(element); handleShow()}}
                    src={element.image}
                    className="clickable-image"/>
                  <h2 class="card-title">{element.title}</h2>
                  <h3 class="card-artist">{element.artist}</h3>
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
            <img class="img-responsive modal-img" src={selectedBlog.image}/>
            <h2 class='modal-album-title'>{selectedBlog.title}</h2>
            <h3 class='author-text'>Made by: {selectedBlog.author}</h3>
            <p class='rating'>{selectedBlog.rating}/5</p> 
            <h4 class='genre'>Genre: {selectedBlog.genre}</h4>
            <p>{selectedBlog.review}</p>
            <button onClick={handleClose}>Close</button>
          </Modal.Body>
        </Modal>
      </div>
      )}
    </>
  );
}