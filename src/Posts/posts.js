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
        body={post.content}
        likes={post.likes}
        author={post.author}/>
    })
    return (
      <div className="posts_wrapper">
        {post_list}
        <Outlet/>
      </div>
    );
  }

  export default Posts;