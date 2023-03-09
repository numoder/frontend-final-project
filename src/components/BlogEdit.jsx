import { useState } from "react"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import Image from "react-bootstrap/Image"
import Form from "react-bootstrap/Form"


export default function BlogEdit({ blogId, setBlogs }) {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState()
  const [review, setReview] = useState("")
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  function convertFile(files) {
    if (files) {
      const fileRef = files[0] || ""
      const fileType = fileRef.type || ""
      const reader = new FileReader()
      reader.readAsBinaryString(fileRef)
      reader.onload = (ev) => {
        // to base64
        setImage(`data:${fileType};base64,${window.btoa(ev.target.result)}`)
      }
    }
  }
  
  const handleEdit = () => {
    fetch(`https://final-project-backend-am.web.app/blog/${blogId}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, description, image, review })
    })
      .then(res => res.json())
      .then(setBlogs)
      .catch(console.error)
  }
  return (
    <>
      <Button onClick={handleShow} variant="text">
        <Image
          src="https://imgur.com/VIF8I44.png"
          width="30px"
        />
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Form>
          <Form.Group>
            <Form.Label>Title</Form.Label> 
            <Form.Control
              name="title"
              type="text"
              required={true}
              placeholder="Name of your blog"
              value={title}
              className="p-2"
              onChange={e => setTitle(e.target.value)} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Image</Form.Label> 
            <Form.Control
              name="Image"
              type="file"
              required={true}
              placeholder="Cover of the Anime"
              className="p-2"
              onChange={e => convertFile(e.target.files)}
            />
          </Form.Group>

          <Form.Group>
          <Form.Label>Description</Form.Label> 
          <Form.Control
            name="Description"
            type="text"
            required={true}
            placeholder="Your brief thoughts here"
            value={description}
            className="p-2"
            onChange={e => setDescription(e.target.value)}
          />
          </Form.Group>

          <Form.Group>
          <Form.Label>Review</Form.Label>
          <Form.Control
            name="review"
            type="text"
            required={true}
            placeholder="What are your full thoughts on this?"
            value={review}
            className="p-2"
            onChange={e => setReview(e.target.value)}/>
        </Form.Group>

          <button className="p-1 m-auto mt-2"
            onClick={handleEdit}>
            Save
          </button>
        </Form>
        <Modal.Footer>
          <button onClick={handleClose} className="p-2 mt-2">
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
