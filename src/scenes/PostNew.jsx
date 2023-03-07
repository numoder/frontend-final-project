import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Hamburger } from "../components/Hamburger";
import './PostNew.css'


export default function PostNew({ setBlogs }) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState()
  const [review, setReview] = useState("")

  function convertFile(files) {
    if (files) {
      // picks the first file from all the files selected
      const fileRef = files[0] || ""
      // picks the type so that it can send the right one to the database
      const fileType = fileRef.type || ""
      // sets reader as a new FileReader instance 
      const reader = new FileReader()
      // converts fileref (the rile) to a binary string
      reader.readAsBinaryString(fileRef)
      reader.onload = (ev) => {
        // convert it to base64
        setImage(`data:${fileType};base64,${window.btoa(ev.target.result)}`)
      }
    }
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("https://final-project-backend-am.web.app/blog", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, description, image, review })
    })
      .then(res => res.json())
      .then(setBlogs)
      .catch(console.error)

    setTitle("")
    setDescription("")
    setImage("")
    setReview("")
  }



  return (
    <>
      <Hamburger/>
      <h1 className="">Submit your blog here!</h1>
      <Form className="form-container">
        <Form.Group>
          <Form.Label className="blog-title">Title</Form.Label>
          <Form.Control
            name="title"
            type="text"
            required={true}
            placeholder="Name of your blog"
            value={title}
            className="p-2"
            onChange={e => setTitle(e.target.value)}/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Description</Form.Label> 
          <Form.Control
            name="Description"
            type="text"
            required={true}
            placeholder="Your brief thoughts here"
            value={description}
            className="p-2 description"
            onChange={e => setDescription(e.target.value)}
          />
          </Form.Group>

        <Form.Group>
          <Form.Label>Image</Form.Label>
          <Form.Control
            name="Image"
            type="file"
            required={true}
            placeholder="Image that relates most to your discussion"
            className="p-2 blog-image"
            onChange={e => convertFile(e.target.files)}/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Review</Form.Label> 
          <Form.Control
            name="review"
            type="text"
            required={true}
            placeholder="What are your full thoughts on this?"
            value={review}
            className="p-2 review"
            onChange={e => setReview(e.target.value)}/>
        </Form.Group>

        <Button className="p-2 m-auto mt-2"
          onClick={handleSubmit}>
          Submit</Button>
      </Form>
    </>
  )
}
