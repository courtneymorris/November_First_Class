import React, {Component} from "react"
import {NavLink} from "react-router-dom"

export default class Marley extends Component{
    constructor(props){
    super(props)
    this.state = {value: ' '};
    this.state = {toDolist:' '}
    this.state = {completedList:' '}

    this.handleInput = this.handleInput(this)
    this.handleSubmit = this.handleSubmit(this)
    this.handleTodoClick = this.handleTodoClick(this)
    }
    

    handleInput(event) {
        this.state({value: event.target.value})
    }

    handleSubmit (event) {
        alert("Task added to Todo list")
        value.toDoList.map((input.value))

    }
    handleTodoClick (event){
        aler("Task completed")
        toDolist.value.map((completedList.value))
    }


    render(){
        return (
            <div>
            <h1>ToDo list</h1>

            <input type="text" value={this.state.value} onClick={this.handleInput} placeholder="Type task here..." />
            
            <button onClick={value.handleSubmit}>Submit</button>

            </div>
        
        )
    }
}


