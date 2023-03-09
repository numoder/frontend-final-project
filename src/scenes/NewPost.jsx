import { useState } from "react";
import Form from "react-bootstrap/Form";
import SideMenu from "../components/SideMenu.jsx";


export default function NewPost({ setBlogs }) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState()
  const [review, setReview] = useState("")
  const [author, setAuthor] = useState("")

  function convertFile(files) {
    if (files) {
      // chooses the first file submitted
      const fileRef = files[0] || ""
      // declares 'FileType' as the type of file (.png, .jpg, .webp)
      const fileType = fileRef.type || ""
      // pulls in the class (fileReader) and sets 'reader' as a new variation of 'reader'
      const reader = new FileReader()
      // reads file[0] as binary to reader
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
      body: JSON.stringify({ title, description, image, review, author })
    })
      .then(res => res.json())
      .then(setBlogs, setTitle(""), setDescription(""), setImage(""), setReview(""), setAuthor(""))
      .catch(console.error)

    // setTitle("")
    // setDescription("")
    // setImage("")
    // setReview("")
    // setAuthor("")
  }

  return (
    <>
      <SideMenu/>
      <h2>Submit your blog here!</h2>
      <Form className="form-container">
        <Form.Group>
          <Form.Label>Title</Form.Label>
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
            className="p-2 "
            onChange={e => setDescription(e.target.value)}/>
          </Form.Group>

        <Form.Group>
          <Form.Label>Image</Form.Label>
          <Form.Control
            name="Image"
            type="file"
            required={true}
            placeholder="Image that relates most to your discussion"
            className="p-2"
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
            className="p-2"
            onChange={e => setReview(e.target.value)}/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Author</Form.Label>
          <Form.Control
            name="author"
            type="text"
            required={true}
            placeholder="Credit yourself!"
            value={author}
            className="p-2"
            onChange={e => setAuthor(e.target.value)}/>
        </Form.Group>


        <button className="p-2 m-auto mt-2"
          onClick={handleSubmit}>
          Submit</button>
      </Form>
    </>
  )
}
