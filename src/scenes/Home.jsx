import BlogList from "../components/BlogList.jsx";
import { useState } from "react";
import { Hamburger } from "../components/Hamburger.jsx";


export default function Home() {
  const [blogs, setBlogs] = useState()
  return (
    <>
      <Hamburger/>
      <BlogList blogs={blogs}
        setBlogs={setBlogs}/>
    </>
  )
}