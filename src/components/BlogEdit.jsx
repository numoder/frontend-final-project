import { Button, Modal, Form, Image } from "react-bootstrap"
import { PencilSquare } from "react-bootstrap-icons"
import { useState, useEffect } from "react"

export default function BlogEdit({ blogId, setBlogs, currentTitle, currentRating, currentGenre, currentReview, currentImage }) {

  const [title, setTitle] = useState("")
  const [rating, setRating] = useState("")
  const [genre, setGenre] = useState("")
  const [image, setImage] = useState()
  const [review, setReview] = useState("")
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTitle(currentTitle)
    setRating(currentRating)
    setGenre(currentGenre)
    setImage(currentImage)
    setReview(currentReview)
  }, [])

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
      body: JSON.stringify({ title, rating, genre, image, review })
    })
      .then(res => res.json())
      .then(setBlogs)
      .catch(console.error)
  }
  return (
    <>
      <Button onClick={handleShow} variant="text">
      <PencilSquare color="#000000" size={44}/>
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
              placeholder={currentTitle}
              value={title}
              className="p-2"
              onChange={e => setTitle(e.target.value)} />
          </Form.Group>

          <Form>
              <Form.Group>
                <Form.Label>Rating</Form.Label>
                <Form.Range 
                min="0"
                max="5"
                onChange={e => setRating(e.target.value)}/>
                <Form.Control
                name="rating"
                type="number"
                required={true}
                value={rating}
                className="m-auto"/>
              </Form.Group>
            </Form>

          <Form.Group>
            <Form.Label>Image</Form.Label> 
            <Form.Control
              name="Image"
              type="file"
              required={true}
              placeholder={currentImage}
              className="p-2"
              onChange={e => convertFile(e.target.files)}
            />
          </Form.Group>

          <Form.Group>
          <Form.Label>Genre</Form.Label> 
          <Form.Control
            name="Genre"
            type="text"
            required={true}
            placeholder="Your brief thoughts here"
            value={genre}
            className="p-2"
            onChange={e => setGenre(e.target.value)}
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

          </Form>
        <Modal.Footer>
          <button className="p-1 m-auto mt-2"
            onClick={handleEdit}>
              <Image
            src="https://imgur.com/nW4YxId.png"
            width="23px"
            />
          </button>
          
          <button className="mt-2 m-auto"
          onClick={handleClose} >
          </button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
