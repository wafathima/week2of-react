import React, {createContext,useState,useEffect} from "react";
import axios from "axios";

export const BlogContext = createContext();

export function BlogProvider({children}){
    const [blogs,setBlogs] = useState([]);

    useEffect(()=>{
      axios.get("http://localhost:3030/blogs") 
      .then(res =>setBlogs(res.data))
      .catch(err => console.error(err)) 
    },[])

   const addBlog=async(blog)=>{
    try{
        const res = await axios.post("http://localhost:3030/blogs",blog)
        setBlogs(prev=> [...prev,res.data]);
    }catch(err){
        console.log("error adding blog",err)
    }
   };
      const deleteBlog =async (id)=>{
        try{
            await axios.delete(`http://localhost:3030/blogs/${id}`);
            setBlogs(prev=> prev.filter(b=> b.id !==id));
        }catch (err){
            console.log("error deleting blog",err);
        }
      };
    
        const updateBlog= async (id, updatedBlog)=>{
            try{
                const res= await axios.put(`http://localhost:3030/blogs/${id}`,updatedBlog);
                setBlogs(prev=> prev.map(b=>b.id===id? res.data:b));
            }catch(err){
                console.error("Error updating blog",err)
            }
        };
    
    return (
        <BlogContext.Provider value={{ blogs, addBlog, deleteBlog, updateBlog}}>
         {children}
        </BlogContext.Provider>
    );
}
