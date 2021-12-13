import Post from "./Post.js";
import {useState, useEffect} from 'react';
import axios from 'axios';
import './Posts.sass';
import {Outlet} from "react-router-dom";

function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(()=> {
    const getData = async () => {
    const req = await axios({
      method: "GET",
      url: 'http://localhost:5000/posts'
      })
    setPosts(req.data)
  }
  getData();
}, []);

    const post_list = posts.map(post=>{
      return <Post key={post.id}
        id={post.id}
        title={post.title} 
        description={post.description}
        likes={post.likes}
        author={post.author}/>
    })
    return (
      <div className="min-h-screen w-1/2 py-20 container mx-auto">
        {post_list}
        <Outlet/>
      </div>
    );
  }

  export default Posts;