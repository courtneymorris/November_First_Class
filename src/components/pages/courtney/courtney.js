import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Courtney extends Component {
  render() {
    return (
      <div className="courtney-wrapper">
        <h1 className="courtney-header">Courtney Morris-Shull</h1>
        <div className="about-me-wrapper">
          <h3>About Me</h3>
          <p>
            Hello! Welcome to my page. I am an instructor at Bottega University,
            and I teach people how to code!
          </p>
          <p>
            My Full-Stack Development class is learning React! Navigate this
            site to see all the cool features my students are implementing into
            this React application.
          </p>
        </div>
        <div className="meet-the-students-wrapper">
          <h3>Click the links below to see what the students are learning!</h3>
          <div className="student-links">
            <NavLink to="/arnell" className="courtney-nav-link">
              Arnell
            </NavLink>
            <NavLink to="/charlie" className="courtney-nav-link">
              Charlie
            </NavLink>
            <NavLink to="/marley" className="courtney-nav-link">
              Marley
            </NavLink>
            <NavLink to="/nathan" className="courtney-nav-link">
              Nathan
            </NavLink>
            <NavLink to="/quinn" className="courtney-nav-link">
              Quinn
            </NavLink>
            <NavLink to="/tara" className="courtney-nav-link">
              Tara
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}
