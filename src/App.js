import './App.css';
import Post from './Posts/Posts';
import Gallery from './Gallery';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/blog">blog</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
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
