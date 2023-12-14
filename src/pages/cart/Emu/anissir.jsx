import React from 'react'

function 



() {
  return (
    <div>

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import NoPage from "./pages/nopage/NoPage";
import MyState from "./context/data/myState";

function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
      </Router>
    </MyState>

  )
}

export default App


    </div>
  )
}

export default 



