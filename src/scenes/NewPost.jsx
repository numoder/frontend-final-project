import SideMenu from "../components/SideMenu.jsx"
import Form from "react-bootstrap/Form"
import { useState } from "react"

export default function NewPost({ setBlogs }) {
  const [title, setTitle] = useState("")
  const [artist, setArtist] = useState("")
  const [genre, setGenre] = useState("")
  const [image, setImage] = useState()
  const [review, setReview] = useState("")
  const [author, setAuthor] = useState("")
  const [rating, setRating] = useState("")

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
      body: JSON.stringify({ title, rating, genre, image, review, author })
    })
      .then(res => res.json())
      .then(setBlogs, setRating(""), setTitle(""), setArtist(""), setGenre(""), setImage(""), setReview(""), setAuthor(""))
      .catch(console.error)
      
    // setTitle("")
    // setArtist("")
    // setGenre("")
    // setRating("")
    // setImage("")
    // setReview("")
    // setAuthor("")
  }

  return (
    <>
      <SideMenu/>
      <h2 className="create-title">Submit your review here!</h2>
          <Form className="form-container">
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
                name="title"
                type="text"
                required={true}
                placeholder="Name of the album"
                value={title}
                className="p-2"
                onChange={e => setTitle(e.target.value)}/>
            </Form.Group>

            <Form.Group>
              <Form.Label>Artist</Form.Label>
              <Form.Control
                name="artist"
                type="text"
                required={true}
                placeholder="Artist name"
                value={artist}
                className="p-2"
                onChange={e => setArtist(e.target.value)}/>
            </Form.Group>

            <Form>
              <Form.Group>
                <Form.Label>Rating</Form.Label>
                <Form.Range 
                min="0"
                step="0.5"
                max="5"
                onChange={e => setRating(e.target.value)}/>
              </Form.Group>
            </Form>
              {!rating
                ? <bistar></bistar>
                : <text>{rating} Stars</text>}
                
            <Form.Group>
              <Form.Label className="mt-3">Genre</Form.Label> 
              <Form.Control
                name="genre"
                type="text"
                required={true}
                placeholder="What category does the album fit in most?"
                value={genre}
                className="p-2"
                onChange={e => setGenre(e.target.value)}/>
              </Form.Group>

            <Form.Group>
              <Form.Label>Image</Form.Label>
              <Form.Control
                name="Image"
                type="file"
                required={true}
                placeholder="Cover"
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
