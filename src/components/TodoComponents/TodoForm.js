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

    onSubmit = event => {
        event.preventDefault();
        this.props.addNewTodo(this.state.newTodo)
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input onChange={this.handleChange} type="text" name="item" value={this.state.newTodo} />
            
                <button>Add New Item</button>

            </form>
        )
    }
}

export default TodoForm;