import Button from "react-bootstrap/Button"
import Image from "react-bootstrap/Image"


export default function BlogDelete({ setBlogs, blogId }) {

  const handleDelete = () => {
    fetch(`https://final-project-backend-am.web.app/blog/${blogId}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(setBlogs)
      .catch(console.error)
  }

  return (
    <>
      <Button onClick={handleDelete} variant="text">
        <Image
          src="https://64.media.tumblr.com/110f4e7453629571d4f6d9825031c1fc/6a99beecff145415-42/s540x810/16816e871b527ac2b0c49165dd8661f552b903b3.png"
          width="50px"
        />
      </Button>
     
    </>
  )
}