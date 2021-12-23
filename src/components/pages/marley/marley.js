import React, {Component} from "react"
import {NavLink} from "react-router-dom"

export default class Marley extends Component{
    constructor(props){
    super(props)
    this.state = {
        value: ' ',
        toDolist:' ',
        completedList:' '
};
    

    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleTodoClick = this.handleTodoClick.bind(this)
    }
    

    handleInput(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit (event) {
        event.preventDefault(event);
        alert("Task added to Todo list")
        value.toDoList.map((input.value))
    
    }
    handleTodoClick (event){
        alert("Task completed")

        value.map((completedList.value))
    }


    render(){
        return (
            <div>
            
            <form onSubmit={this.handleSubmit}>
            <h1>ToDo list</h1>
                <input type="text" value={this.state.value} onChange={this.handleInput} placeholder="Type task here..." />
            
                <button type="submit"  >Submit</button>
            </form>

            </div>
        
        )
    }
}


