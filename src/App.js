import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import PostDetail from "./pages/Post/PostDetail";

function App() {
  return (
    <div className="App">
      <nav className="nav-bar">
        <Link to="/" className="home-link">
          My Forum
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="/post-details/:postId" element={<PostDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
