import React from "react";

const Todo = props => {
  return (
    <div 
      className="todo-card" 
      onClick={() => props.toggleTodo(props.todo.id)} 
    >
        {/* <img src={props.todo.img} alt="" /> */}
        <h3>{props.todo.task}</h3>
    </div>
  );
};

export default Todo;