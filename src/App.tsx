import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Post from "./Pages/Post";

function App(){
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<Post />} />
        </Routes>
      </Router>
  )
}

export default App;