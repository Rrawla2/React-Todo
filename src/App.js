import React, { Component } from 'react';// Can put import React, { Component } from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
import "./styles.css";

const todo = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoList: todo //This will eventually be [] coming from an API
    }
    console.log("todo", todo)
  }

  toggleTodo = (id) => {
    console.log("ID", id)
    // find todo clicked and toggle the completed to true
    // update state with the new values
    const newTodoList = this.state.todoList.map(item => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed
        } 
            
        }else
        return item;
      }
    )
    // update the state with the new values for todoList
    this.setState({
      todoList: newTodoList});
  }
// add a new task to the todo list
  addNewTodo = newTodoTask => {
    const newTodo = {
      ...this.state,
      todoList: [
        ...this.state.todoList,
        { task: newTodoTask, completed: false, id: Date.now() }
      ]
    }
    this.setState(newTodo)
  }
// clear completed items from the list
  clearCompleted = () => {
    const clearTask = {
      ...this.state,
      todoList: this.state.todoList.filter(item => {
        return !item.completed
      })
    }
    this.setState(clearTask)
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
    // this component is going to take care of state, and any change handlers you need to work with your state
  
    
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Todo List</h1>
          <TodoForm addNewTodo={this.addNewTodo}/>
        </div>
        <div>
        {/* this.toggleTodo is a class method so it's listed here with this. */}
          <TodoList todo={this.state.todoList} toggleTodo={this.toggleTodo} clearCompleted={this.clearCompleted}/>
        </div>
      </div>
    );
  }
}

export default App;
