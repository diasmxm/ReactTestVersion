import './Navigation.sass';
import Posts from '../Posts/Posts';
import Home from '../Home';
import Gallery from '../Gallery';
import Article from '../Article';
import Editor from '../Editor/Editor';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function Navigation() {
  return (
    <Router>
      <header>
        <nav>
          <Link to="/home">Домой</Link>
          <Link to="/blog">Блог</Link>
          <Link to="/gallery">Галлерея</Link>
          <Link to="/editor">Редактор</Link>
        </nav>
      </header>    

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/blog" element={<Posts />}></Route>
          <Route path="/blog/:id" element={<Article />} />
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/editor" element={<Editor />}></Route>
        </Routes>
    </Router>
  );
}
          
export default Navigation;