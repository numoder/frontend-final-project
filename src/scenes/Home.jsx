import BlogList from "../components/BlogList.jsx";
import SideMenu from "../components/SideMenu.jsx";
import { useState } from "react";


export default function Home() {
  const [blogs, setBlogs] = useState()
  return (
    <>
      <SideMenu />
      <BlogList 
        blogs={blogs}
        setBlogs={setBlogs}/>
    </>
  )
}