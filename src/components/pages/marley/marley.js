import React, {Component} from "react"
import {NavLink} from "react-router-dom"

export default class Marley extends Component{
    constructor(props){
    super(props)
    this.state = {value: ' '};
    this.state = {toDolist:' '}
    }
    

    handleInput(event) {
        this.state({value: event.target.value})
    }

    handleSubmit (event) {
        alert("Task added to Todo list")
        value.toDoList.map((input.value))

    }


    render(){
        return (
            <><><h1>ToDo list</h1>
                <input type="text" value={this.state.value} onSubmit={this.handleInput} placeholder="Type task here..." /></>
                <button onClick={value.handleSubmit}>Submit</button></>
        )
       
    }
}


