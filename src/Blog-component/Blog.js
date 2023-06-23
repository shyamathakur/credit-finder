import React from 'react';
import BlogNav from "./BlogNav/BlogNav";
import Footer from './../component/Footer/Footer';
import Benefits from "./Benefits/Benefits";
import Understand from './understand/Understand';
import LeaveComment from "./LeaveComment/LeaveComment";
import Finding from "./Finding/Finding";

function Blog() {
  return (
    <div>
        <BlogNav/>
        <Benefits/>
        <Understand/>
        <Finding/>
        <LeaveComment/>        
        <Footer/>
    </div> 
  )
}

export default Blog;