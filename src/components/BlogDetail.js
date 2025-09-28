import React, {useContext} from "react";
import { useParams, useNavigate,Link } from "react-router-dom";
import { BlogContext } from "../context/BlogContext";


function BlogDetail(){
    const {id} = useParams();
    const {blogs,deleteBlog}=useContext(BlogContext)
    const blog = blogs.find(b=> b.id === Number(id))
    const navigate = useNavigate();

    if (!blog) return <p>Blog not found</p>

    return (
        <div>
            <h2>{blog.title}</h2>
            <p>{blog.body}</p>
            <button onClick={()=>{deleteBlog(blog.id); navigate("/");}}>Delete</button>
            <Link to={`/editblog/${blog.id}`}>Edit</Link>
        </div>
    )
}
export default BlogDetail;