import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";
import BlogDelete from "./BlogDelete.jsx";
import BlogEdit from "./BlogEdit.jsx";

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
        <progress max="1000" value="500"></progress>
        :
        <Container fluid>
          <Row>
            {blogs.map((element) => (
              <Col sm={6} md={4} lg={3} key={element._id}>
                <Card className="individual-card">
                  <Image 
                  onClick={() => {setSelectedBlog(element); handleShow() }}
                    src={element.image}
                  />
                  <h2>{element.title}</h2>
                  <div className="editandelete">
                  <BlogDelete
                        setAnimes={setBlogs}
                        blogId={element._id}
                      />
                  <BlogEdit
                      setBlogs={setBlogs}
                      selectedBlog={selectedBlog}
                      blogId={element._id}
                    />
                    </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      }

      {selectedBlog && (

          <Modal show={show} onHide={handleClose} class="modal-dialog modal-fullscreen">
            <Modal.Header closeButton>
              <Modal.Title class="modal-title">{selectedBlog.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>{selectedBlog.info}{selectedBlog.review}</p>
            </Modal.Body>
            <Modal.Footer>
            <div class="row">
              <div class="col-3">
                <p>made by</p>
                <p>{selectedBlog.author}</p>
                </div> 
                <div class="col-8">
              <button onClick={handleClose}>Close</button>
                </div>
              </div>

            </Modal.Footer>
          </Modal>
      )}
    </>
  );
}