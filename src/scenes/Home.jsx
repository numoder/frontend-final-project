import BlogModal from "../components/BlogModal.jsx";
import SideMenu from "../components/SideMenu.jsx";
import { useState } from "react";


export default function Home() {
  const [blogs, setBlogs] = useState()
  return (
    <>
      <SideMenu />
      <BlogModal 
        blogs={blogs}
        setBlogs={setBlogs}/>
    </>
  )
}