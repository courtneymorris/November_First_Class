import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import moment from 'moment'


export default class Nathan extends Component {
    render() {
        return(
            <div className="nathan-wrapper" >

                <h1>Nathan's JS Page</h1>

                <div className="myDate"><h2>{moment().format('llll')}</h2></div>
            </div>
        )
    }
}