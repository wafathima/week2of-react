import React,{useContext,useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BlogContext } from "../context/BlogContext";

function EditBlog(){
    const {id} = useParams();
    const {blogs,updateBlog}= useContext(BlogContext);
    const blog = blogs.find(b=> b.id===Number(id));
    const navigate = useNavigate();

    const [title,setTitle]= useState(blog?.title || "");
    const [body,setBody]=useState(blog?.body || "")

    const handleSubmit =async(e)=>{
        e.preventDefault();
        await updateBlog(blog.id, {title,body});
        navigate(`/blog/${blog.id}`);
    };

    if (!blog) return <p>Blog not found</p>

    return (
        <form onSubmit={handleSubmit}>
         <h2>Edit Blog</h2>
         <input value={title} onChange={e=>setTitle(e.target.value)}/>
         <textarea value={body} onChange={e=> setBody(e.target.value)}/>
        <button type="submit">save</button>
        </form>
    )
}
export default EditBlog;