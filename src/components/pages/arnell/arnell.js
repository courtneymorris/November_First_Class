import React, {Component} from 'react'

import NavigationContainer from './navigation/navigation-container.js';

export default class Arnell extends Component {
    render() {
        return (
        <div className='arnell-wrapper' >
            <NavigationContainer />
            <h1>Arnell C. James</h1>
        </div>
        );    
    }
}