import React from 'react';
import Home from ".././component/Home";
import About from ".././component2-about/About";
import Blog from ".././Blog-component/Blog";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Index() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/"  exact  element={<Home />} />
          <Route path="/home"  element={<Home />} />
          <Route path="/about"  element={<About />} />
          <Route path="/blog"  element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Index