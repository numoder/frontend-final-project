import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import BlogDelete from "./BlogDelete.jsx";
import BlogEdit from "./BlogEdit.jsx";
import "./bloglist.css";

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
        <h1>Loading...</h1>
        :
        <Container fluid>
          <Row>
            {blogs.map((element) => (
              <Col sm={6} md={4} lg={3} key={element._id}>
                <Card className="individual-card">
                  <Image 
                  onClick={() => { setSelectedBlog(element); handleShow() }} src={element.image} className="blog-image" 
                  />
                  <h2>{element.title}</h2>
                  <BlogDelete
                    setBlogs={setBlogs}
                    blogId={element._id}/>
                  <BlogEdit
                    setBlogs={setBlogs}
                    blogId={element._id}/>
                </Card>

              </Col>
            ))}
          </Row>
        </Container>
      }

      {selectedBlog && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedBlog.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{selectedBlog.info}</p>-----<p>{selectedBlog.review}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}