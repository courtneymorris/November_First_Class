import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Home extends Component {
  constructor(props) {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="home-wrapper">
        <h1>November First</h1>
        <NavLink to="/arnell" className="home-nav-link">
          Arnell
        </NavLink>
        <NavLink to="/charlie" className="home-nav-link">
          Charlie
        </NavLink>
        <NavLink to="/marley" className="home-nav-link">
          Marley
        </NavLink>
        <NavLink to="/nathan" className="home-nav-link">
          Nathan
        </NavLink>
        <NavLink to="/quinn" className="home-nav-link">
          Quinn
        </NavLink>
        <NavLink to="/tara" className="home-nav-link">
          Tara
        </NavLink>
        <NavLink to="/courtney" className="home-nav-link">
          Courtney
        </NavLink>
      </div>
    );
  }
}
