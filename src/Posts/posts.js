import Post from "./post.js";
import posts from '../posts.json';
function Posts() {
    const post_list = posts.map(post=>{
      return <Post key={post.id} title={post.title} body={post.body}/>
    })
    return (
      <div className="App">
        {post_list}
      </div>
    );
  }

  export default Posts;