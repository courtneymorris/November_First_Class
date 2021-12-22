import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
    Nav, 
    NavLink, 
    Bars,
    NavMenu, 
} from './navbar-container';

const Navbar = () => {
    return (
        <Nav>
            <Bars />

            <NavMenu> 
                <NavLink to='/about' activeStyle>About</NavLink>

                <NavLink to='/blog' activeStyle>Blog</NavLink>


            </NavMenu>
        </Nav>
    )
}

export default Navbar;

export default class Quinn extends Component {
    render() {
        return <div className="quinn-wrapper">
            <h1>Quinn Kimball</h1>
            <h2></h2>
        </div>
    }
}