import React from "react";

const Todo = props => {
    return (
        <div className={`item${props.item.completed ? " completed" : ""}`}
         onClick={() => props.toggleTodo(props.item.id)}>
         
            <p>{props.item.task}</p>

        </div>
    )
}

export default Todo;