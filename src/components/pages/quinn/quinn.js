import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Nav, NavLink as Link, Bars, NavMenu } from "./navbar-container";


const Navbar = () => {
  return (
    <Nav>
      <Bars />

      <NavMenu>
        <NavLink to="/about" activeStyle>
          About
        </NavLink>

        <NavLink to="/blog" activeStyle>
          Blog
        </NavLink>
      </NavMenu>
    </Nav>
  );
};

export default class Quinn extends Component {
  render() {
    return (
      <div className="quinn-wrapper">
        <div className="quinn-nav">
          <button>About</button>
          <h1>Quinn Kimball</h1>
          <h2>This is my blog page, I don't know what I'll blog about though :)</h2>
          <button>Contact</button>
        </div>
        
        
        <div className="quinn-blog-wrapper">
          <h3>Blog Posts</h3>
          <p>Here's where you'll find the most recent blog posts!</p>
          <button>Add Post</button>
        </div>
      </div>
    );
  }
}
