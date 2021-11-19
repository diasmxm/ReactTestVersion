import './App.css';
import HelloWorld from './HelloWorld';
import Post from './post';
import posts from './posts.json';

function App() {
  const post_list = posts.map(post=>{
    return <Post key={post.id} title={post.title} body={post.body}/>
  })
  return (
    <div className="App">
      {post_list}
      <HelloWorld text='Привет' color='red'/>
    </div>
  );
}

export default App;
