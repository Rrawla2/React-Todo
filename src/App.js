import React from 'react';// Can put import React, { component } from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
import "./components/data";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: "todo" //This will eventually be [] coming from an API
    }
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Todo List</h2>
        <TodoForm />
        <div>
        <TodoList todo={this.state.todoList}/>
        </div>
      </div>
    );
  }
}

export default App;
