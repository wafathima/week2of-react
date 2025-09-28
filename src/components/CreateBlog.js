import React,{useState,useContext} from "react";
import { useNavigate } from "react-router-dom";
import { BlogContext } from "../context/BlogContext";

function CreateBlog(){
    const [title,setTitle]=useState("")
    const [body,setBody]=useState("")
    const {addBlog} =useContext(BlogContext)
    const navigate = useNavigate();

    const handleSubmit =(e)=>{
        e.preventDefault();
        addBlog({title,body});
        navigate("/")
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create Blog</h2>
            <input value={title} onChange={e=> setTitle(e.target.value)} placeholder="Title"/>
             <textarea value={body} onChange={e=> setBody(e.target.value)} placeholder="Body"></textarea>
             <button type="submit">Add Blog</button>
        </form>
    )
}
export default CreateBlog;