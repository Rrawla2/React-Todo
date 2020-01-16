import React, { Component } from "react";

class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            newTodo: ""
        }
    }
    
    handleChange = event => {
        this.setState({ ...this.state, newTodo: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.addNewTodo(this.state.newTodo)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} type="text" name="item" value={this.state.newTodo} />
            
                <button className="clr-btn">Add Task</button>

            </form>
        )
    }
}

export default TodoForm;