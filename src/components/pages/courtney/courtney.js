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
          <h3>Meet the Students!</h3>
          <div className="student-links">Links go here</div>
        </div>
      </div>
    );
  }
}
