import React, { Component } from "react"
import { NavLink } from "react-router-dom"
 
export default class NavigationContainer extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <NavLink to="/arnell/arnell-about" activeClassName='nav-link-active'>
                    About Arnell James
                </NavLink>

                <NavLink to="/arnell/arnell-projects" activeClassName='nav-link-active'>
                    Project's Arnell James
                </NavLink>

                <NavLink to="/arnell/arnell-contact" activeClassName='nav-link-active'>
                    Contact Arnell James
                </NavLink>
            </div>
        );
    }
}