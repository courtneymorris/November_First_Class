import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import TestChild from "./test-child";

export default class TaraComponent extends Component {
    render() {
        return (
            <div className="tara-wrapper">
                <h1>Some stuff</h1>
                <TestChild backgroundColor="pink" />
            </div>
        );
    }
}
