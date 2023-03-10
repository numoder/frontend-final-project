import { Button } from "react-bootstrap"
import Image from "react-bootstrap/Image"

export default function BlogDelete({ setBlogs, blogId }) {

  const handleDelete = () => {
    fetch(`https://final-project-backend-am.web.app/blog/${blogId}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => {
        if (!res.ok) {
          console.error("Fetch request failed");
        }
        // If the status is in the 200-299 range, parse the res as JSON
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        console.log("Post was deleted.");
      })
      .catch((error) => {
        console.error(error);
        console.log("Failed to delete blog.");
      });
  };

  return (
    <>
      <Button onClick={handleDelete} variant="text">
        <Image
          src="https://i.imgur.com/Tm4iOLD.png"
          width="50px"
        />
      </Button>
     
    </>
  )
}
