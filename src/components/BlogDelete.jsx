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
          src="https://www.iconpacks.net/icons/1/free-trash-icon-347-thumb.png"
          width="30px"
        />
      </Button>
     
    </>
  )
}